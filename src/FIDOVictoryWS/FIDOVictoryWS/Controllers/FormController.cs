using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using FIDOVictory.Common.Repository;
using FIDOVictory.DataContract.Form;
using FIDOVictory.DataContract.Form.SRREvaluation;
using FIDOVictory.Tools;
using FIDOVictoryWS.Managers;
using FIDOVictoryWS.Models;
using FIDOVictoryWS.Models.Security;
using FIDOVictory.DataContract.Form.UploadForm;
using FIDOVictory.DataContract.Form.DownloadForm;
using FIDOVictoryWS.Managers.Form;
using FIDOVictory.Common.Data;
using FIDOVictory.DataContract.Form.UploadFormStatus;
using FIDOVictory.Common.Tools;
using FIDOVictory.DataContract.Trial;

namespace FIDOVictoryWS.Controllers
{

    [RoutePrefix("api/form")]
    public class FormController : ApiController
    {
        private void Validate(UploadFormRequestContract form)
        {
            if (string.IsNullOrEmpty(form.CurrentUserAlias))
            {
                throw new ApplicationException("CurrentUserAlias is empty, value is needed.");

            }
        }

        [Route("with-attachments")]
        public List<DownloadFormResponseContract> GetFormsWithAttachments(String userAlias, DateTime lastSync)
        {
            //parameters validation
            if (string.IsNullOrEmpty(userAlias))
            {
                throw new ApplicationException("userAlias must have a value");
            }

            //beautify
            userAlias = UserAliasBeautifier.Apply(userAlias);

            var formManager = new FormManager();
            var formData = formManager.GetFormData(userAlias, lastSync);

            var response = this.ConvertToDownloadFormResponseContractList(formData, true);

            return response;


        }

        /// <summary>
        /// Convert from raw form data list to expected json response
        /// </summary>
        /// <param name="rawFormData"></param>
        /// <returns></returns>
        private List<DownloadFormResponseContract> ConvertToDownloadFormResponseContractList(List<FIDOVictory.Common.Data.RawFormData> formData, Boolean includeAttachments = false)
        {

            List<DownloadFormResponseContract> responseList = new List<DownloadFormResponseContract>();

            //create forms into response
            var forms = (from f in formData select new { f.Trial_ID, f.Workflow_ID, f.WorkflowComplete, f.DueDate, f.SRRUser_ID }).Distinct();
            foreach (var f in forms)
            {
                responseList.Add(new DownloadFormResponseContract()
                {
                    TrialID = f.Trial_ID,
                    WorkflowID = f.Workflow_ID,
                    Locked = f.WorkflowComplete,
                    DueDate = f.DueDate,
                    UserID = f.SRRUser_ID,
                });
            }

            //create responses into each form
            foreach (var item in responseList)
            {
                var responses = from f in formData
                                where f.Trial_ID == item.TrialID && f.Workflow_ID == item.WorkflowID
                                select new { f.Question_ID, f.ResponseValue };
                foreach (var r in responses)
                {
                    if (r.Question_ID.HasValue)
                    {
                        item.Responses.Add(new FormResponseContract() { QuestionID = r.Question_ID.Value, ResponseValue = r.ResponseValue });
                    }
                }
            }

            if (includeAttachments)
            {
                //create attachments into each form which have attachments (of course)
                foreach (var item in responseList)
                {
                    var hasAttachments = (from f in formData
                                          where f.Trial_ID == item.TrialID && f.Workflow_ID == item.WorkflowID
                                          select new { f.HasAttachments }).FirstOrDefault();

                    if (hasAttachments == null) continue;

                    if (hasAttachments.HasAttachments > 0)
                    {
                        var repo = new AttachmentRepository();
                        var attachments = repo.GetList(item.TrialID, item.WorkflowID.Value);
                        foreach (var a in attachments)
                        {
                            item.Attachments.Add(new FIDOVictory.DataContract.Attachment.AttachmentItemWithID()
                            {
                                AttachmentID = a.Attachment_ID,
                                Name = a.AttachmentName,
                                TrialID = item.TrialID,
                                WorkflowID = item.WorkflowID.Value,
                            });

                        }
                    }
                }
            }

            return responseList;


        }


        [Route("")]
        public List<DownloadFormResponseContract> GetForms(String userAlias, DateTime lastSync)
        {
            //parameters validation
            if (string.IsNullOrEmpty(userAlias))
            {
                throw new ApplicationException("userAlias must have a value");
            }

            //beautify
            userAlias = UserAliasBeautifier.Apply(userAlias);

            var formManager = new FormManager();
            var formData = formManager.GetFormData(userAlias, lastSync);

            var response = this.ConvertToDownloadFormResponseContractList(formData);

            return response;

        }


        // GET api/form/trial/get/{id}
        [Route("trial/get/{id}")]
        public List<DownloadFormResponseContract> GetTrial(Int32 id, String userAlias)
        {

            var formRepository = new FormManager();
            var formData = formRepository.GetFormDataByTrialID(id, userAlias);
            var response = this.ConvertToDownloadFormResponseContractList(formData, true);
            return response;

        }

        // GET api/form/trial/compliance/status
        [Route("trial/compliance/status/{id}")]
        public List<ComplianceStatusItem> GetComplianceStatus(Int32 id, String userAlias)
        {

            var list = new List<ComplianceStatusItem>();

            var formRepository = new FormManager();
            var status = formRepository.GetComplianceStatusByTrialID(id, userAlias);

            foreach (var s in status)
            {
                list.Add(new ComplianceStatusItem()
                {
                    WorkflowID = s.WorkflowId,
                    WorkflowName = s.WorkflowName,
                    WorkflowOrder = s.WorkflowOrder,
                    InBlank = s.InBlank.Value,
                    InProgress = s.InProgress.Value,
                    PendingForApproval = s.PendingForApproval.Value,
                    PendingForLock = s.PendingForLock.Value,
                    Completed = s.Completed.Value,
                    Total = s.Total.Value,
                });
            }

            return list;

        }

        [Route("")]
        public UploadFormResponseContract PostForm(UploadFormRequestContract form)
        {
            //this method is used to sync data from ipad to database.
            //when a workflow is synconized to database, ever must be an insert into TrailProgress
            //when user locks the form, insert into TrailProgress put WorkCompleted on true.

            //see use case2
            //http://stlwslimssqua01:120/mediawiki/index.php/VICTORY_Project:Regulatory_Field_Trials#Important_SQL

            UploadFormResponseContract response = null;
            var logger = log4net.LogManager.GetLogger(typeof(FormController));

            try
            {
                logger.DebugFormat("Action started: {0}, UserID: {1}, UserAlias: {2}, TrialID: {3}, WorkflowID: {4}", "PostForm", form.UserID, form.CurrentUserAlias, form.TrialID, form.WorkflowID);

                //validate

                //beautify
                form.CurrentUserAlias = UserAliasBeautifier.Apply(form.CurrentUserAlias);

                this.Validate(form);

                var processor = new Managers.Form.UploadFormProcessor();
                response = processor.Execute(form);
            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                response = new UploadFormResponseContract();
                response.Success = false;
                response.ErrorCode = "KNOWN";
                response.ErrorDescription = "Known error in exception handled by FormController";
                response.ExceptionMessage = ex.Message.ToString();
            }

            return response;

        }

        [Route("status")]
        public FIDOVictory.DataContract.Form.Status.FormStatusResponseContract GetFormStatus(String userAlias, DateTime lastSync)
        {
            //parameters validation
            if (string.IsNullOrEmpty(userAlias))
            {
                throw new ApplicationException("userAlias must have a value");
            }

            //beautify
            userAlias = UserAliasBeautifier.Apply(userAlias);

            var manager = new FormStatusManager();
            var userRepository = new UserRepository();
            var userContract = userRepository.GetUserByAlias(userAlias);
            if (userContract.UserType_ID == (int)UserTypeEnum.ADMIN)
            {
                return manager.GetFormStatusForAdminRole(userContract, lastSync);
            }
            else
            {
                throw new ApplicationException(string.Format("useralias {0} have an unexpected user type", userContract.UserAlias));
            }

        }

        [Route("status")]
        public UploadFormStatusResponseContract PostFormStatus(UploadFormStatusRequestContract req)
        {
            var manager = new FormStatusManager();
            var response = new UploadFormStatusResponseContract();

            try
            {
                //beautify
                req.CurrentUserAlias = UserAliasBeautifier.Apply(req.CurrentUserAlias);

                response.Success = manager.UpdateFormStatus(req);
            }
            catch (Exception ex)
            {
                response.ErrorCode = "NA";
                response.ErrorDescription = "KNOWN";
                response.ExceptionMessage = ex.Message;
            }

            return response;

        }

        [Route("srr/evaluation")]
        public DownloadSRREvaluationResponse GetSRREvaluation(String userAlias, DateTime lastSync)
        {
            var response = new DownloadSRREvaluationResponse();
            response.Success = false;

            var validator = new Validators.SRREvaluationValidator();
            var validationResult = validator.ValidateUserAlias(userAlias);

            if (!validationResult.Success)
            {
                response.ErrorCode = validationResult.ErrorCode;
                response.ErrorDescription = validationResult.ErrorDescription;
                response.ExceptionMessage = validationResult.ExceptionMessage;
                return response;
            }

            var formManager = new Managers.Form.FormManager();
            var currentYear = DateTime.Now.Year;
            //beautify
            userAlias = UserAliasBeautifier.Apply(userAlias);

            var srrEval = formManager.GetSRREvaluations(userAlias, currentYear, lastSync);

            foreach (var e in srrEval)
            {
                response.Data.Add(new SRREvaluationContract()
                {
                    SRRUserID = e.SRR_ID,
                    SRRYearsExperience = e.YearsExperience_SRR,
                    SiteLeadSRRYearsOfExperience = e.YearsExperience_SiteLeadSRR,
                    NumAcresSRRManages = e.NumAcresSRRManages,
                    NumFieldsReponsibleFor = e.NumFieldsReponsibleFor,
                    BackupSRRUserID = e.BackupSRR_ID,
                    BackupSRRIdentified = e.BackupSRRIdentified,
                    BackupSRRInformed = e.BackupSRRInformed,
                    ComplianceQuestion1 = e.ComplianceQuestion1,
                    ComplianceQuestion2 = e.ComplianceQuestion2,
                    ComplianceQuestion3 = e.ComplianceQuestion3,
                    ComplianceQuestion4 = e.ComplianceQuestion4,
                    ComplianceQuestion5 = e.ComplianceQuestion5,
                    ComplianceQuestion6 = e.ComplianceQuestion6,
                    Flagged = e.Flagged,
                    LastTrainingYear = e.LastTrainingYear,
                    CompletedYear = e.CompletedYear,
                    ComplianceResponse1 = e.ComplianceResponse1,
                    ComplianceResponse2 = e.ComplianceResponse2,
                    ComplianceResponse3 = e.ComplianceResponse3,
                    ComplianceResponse4 = e.ComplianceResponse4,
                    ComplianceResponse5 = e.ComplianceResponse5,
                    ComplianceResponse6 = e.ComplianceResponse6,
                });
            }

            response.Success = true;
            return response;


        }

        [Route("srr/evaluation")]
        public UploadSRREvaluationResponse PostSRREvaluation(UploadSRREvaluationRequest req)
        {
            var response = new UploadSRREvaluationResponse();
            response.Success = false;

            var validator = new Validators.SRREvaluationValidator();
            var validationResult = validator.ValidateUserAlias(req.CurrentUserAlias);

            if (!validationResult.Success)
            {
                response.ErrorCode = validationResult.ErrorCode;
                response.ErrorDescription = validationResult.ErrorDescription;
                response.ExceptionMessage = validationResult.ExceptionMessage;
                return response;
            }

            var userRepository = new UserRepository();

            //beautify
            req.CurrentUserAlias = UserAliasBeautifier.Apply(req.CurrentUserAlias);

            var userContract = userRepository.GetUserByAlias(req.CurrentUserAlias);

            //validate match between CurrentUserAlias and SRREvaluation SRRUserID 
            if (req.Data.SRRUserID != userContract.User_ID)
            {
                response.ErrorCode = "4";
                response.ErrorDescription = "CurrentUserAlias and SSRUserID must referente to the same user.";
                return response;
            }

            var formManager = new Managers.Form.FormManager();
            var currentYear = DateTime.Now.Year;
            var existingEvaluations = formManager.GetSRREvaluations(req.CurrentUserAlias, currentYear, LastSync.Never);
            if (existingEvaluations.Count > 0)
            {
                response.ErrorCode = "5";
                response.ErrorDescription = "SRR Evaluation exists for current year";
                return response;
            }

            try
            {
                formManager.Save(req.CurrentUserAlias, req.Data);
            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                response.ErrorCode = "KNOWN";
                response.ErrorDescription = "Known error in exception handled by FormController";
                response.ExceptionMessage = ex.Message.ToString();
                return response;
            }

            response.Success = true;
            return response;

        }

    }
}
