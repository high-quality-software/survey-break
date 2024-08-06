using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Web;
using FIDOVictory.Common.Data;
using FIDOVictory.Common.Repository;
using FIDOVictory.DataContract.Form.SRREvaluation;
using FIDOVictoryWS.Models.Security;

namespace FIDOVictoryWS.Managers.Form
{
    public class FormManager
    {
        public void Save(String currentUserAlias, SRREvaluationContract eval)
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                ec.SRR_EvalResponse.Add(new FIDOVictory.Common.Data.SRR_EvalResponse()
                {
                    BackupSRR_ID = eval.BackupSRRUserID,
                    BackupSRRIdentified = eval.BackupSRRIdentified,
                    BackupSRRInformed = eval.BackupSRRInformed,
                    ComplianceQuestion1 = eval.ComplianceQuestion1,
                    ComplianceQuestion2 = eval.ComplianceQuestion2,
                    ComplianceQuestion3 = eval.ComplianceQuestion3,
                    ComplianceQuestion4 = eval.ComplianceQuestion4,
                    ComplianceQuestion5 = eval.ComplianceQuestion5,
                    ComplianceQuestion6 = eval.ComplianceQuestion6,
                    Flagged = eval.Flagged,
                    LastTrainingYear = eval.LastTrainingYear,
                    NumAcresSRRManages = eval.NumAcresSRRManages,
                    NumFieldsReponsibleFor = eval.NumFieldsReponsibleFor,
                    SRR_ID = eval.SRRUserID,
                    UpdateDateTime = DateTime.Now,
                    UpdateUserID = currentUserAlias,
                    YearsExperience_SiteLeadSRR = eval.SiteLeadSRRYearsOfExperience, 
                    YearsExperience_SRR = eval.SRRYearsExperience,
                    CompletedYear = DateTime.Now.Year,
                    ComplianceResponse1 = eval.ComplianceResponse1,
                    ComplianceResponse2 = eval.ComplianceResponse2,
                    ComplianceResponse3 = eval.ComplianceResponse3,
                    ComplianceResponse4 = eval.ComplianceResponse4,
                    ComplianceResponse5 = eval.ComplianceResponse5,
                    ComplianceResponse6 = eval.ComplianceResponse6,
                });

                ec.SaveChanges();

            }
        }

        public List<FIDOVictory.Common.Data.SRR_EvalResponse> GetSRREvaluations(string userAlias, int completedYear, DateTime lastSync)
        {
            var userRepository = new UserRepository();
            var userContract = userRepository.GetUserByAlias(userAlias);

            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var srrEval = from e in ec.SRR_EvalResponse
                              where e.IsDeleted == false
                                    && e.SRR_ID == userContract.User_ID
                                    && e.CompletedYear == completedYear
                                    && e.UpdateDateTime >= lastSync
                              select e;

                return srrEval.ToList();
            }
        }

        /// <summary>
        /// Get form data accesible to a particular user and created or modified since last sync datetime.
        /// </summary>
        /// <param name="userAlias"></param>
        /// <param name="lastSync"></param>
        /// <returns></returns>
        /// <remarks>
        /// CHANGES:
        /// - http://jira.monsanto.com/browse/VICTORY-23
        /// 
        /// TODO: 
        /// - could be refactored using one SP using v_TrialUsers view ability to expose trial-user assignment.
        /// </remarks>
        public List<FIDOVictory.Common.Data.RawFormData> GetFormData(string userAlias, DateTime lastSync)
        {
            var userRepository = new UserRepository();
            var userContract = userRepository.GetUserByAlias(userAlias);

            List<FIDOVictory.Common.Data.RawFormData> list = new List<FIDOVictory.Common.Data.RawFormData>();

            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {

                var result = ec.usp_GetFormData(userContract.UserAlias, lastSync);
                foreach (var r in result)
                {
                    list.Add(new FIDOVictory.Common.Data.RawFormData()
                    {
                        Trial_ID = r.Trial_ID,
                        Workflow_ID = r.Workflow_ID.Value,
                        WorkflowComplete = r.WorkflowComplete.HasValue ? r.WorkflowComplete.Value : false,
                        SRRUser_ID = r.SRRUser_ID,
                        DueDate = r.DueDate,
                        Question_ID = r.Question_ID,
                        ResponseValue = r.ResponseValue, 
                        HasAttachments = r.HasAttachments,
                    });
                }
            }

            return list;

        }

        public List<FIDOVictory.Common.Data.RawFormData> GetFormDataByTrialID(Int32 trialId, string userAlias)
        {
            var userRepository = new UserRepository();
            var userContract = userRepository.GetUserByAlias(userAlias);

            List<FIDOVictory.Common.Data.RawFormData> list = new List<FIDOVictory.Common.Data.RawFormData>();

            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {

                var result = ec.usp_GetFormData_ByTrialID(trialId, userAlias);
                foreach (var r in result)
                {
                    list.Add(new FIDOVictory.Common.Data.RawFormData()
                    {
                        Trial_ID = r.Trial_ID,
                        Workflow_ID = r.Workflow_ID.Value,
                        WorkflowComplete = r.WorkflowComplete.HasValue ? r.WorkflowComplete.Value : false,
                        SRRUser_ID = r.SRRUser_ID,
                        DueDate = r.DueDate,
                        Question_ID = r.Question_ID,
                        ResponseValue = r.ResponseValue,
                        HasAttachments = r.HasAttachments,
                    });
                }
            }

            return list;

        }

        public List<FIDOVictory.Common.Data.usp_Get_Compliance_Status_Result> GetComplianceStatusByTrialID(Int32 trialId, string userAlias)
        {
            var userRepository = new UserRepository();
            var userContract = userRepository.GetUserByAlias(userAlias);

            List<FIDOVictory.Common.Data.usp_Get_Compliance_Status_Result> list = new List<FIDOVictory.Common.Data.usp_Get_Compliance_Status_Result>();

            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {

                var result = ec.usp_Get_Compliance_Status_ByTrial_ID(trialId, userContract.UserAlias);
                foreach (var r in result)
                {
                    list.Add(new FIDOVictory.Common.Data.usp_Get_Compliance_Status_Result()
                    {
                        WorkflowId = r.WorkflowId,
                        WorkflowName = r.WorkflowName,
                        WorkflowOrder = r.WorkflowOrder,
                        InBlank = r.InBlank,
                        InProgress = r.InProgress,
                        PendingForApproval = r.PendingForApproval,
                        PendingForLock = r.PendingForLock,
                        Completed = r.Completed,
                        Total = r.Total,
                    });
                }
            }

            return list;

        }

    }
}