using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using FIDOVictory.Common.Compression;
using FIDOVictory.Common.Repository;
using FIDOVictory.Common.Tools;
using FIDOVictory.DataContract.Attachment;
using FIDOVictory.DataContract.Attachment.DeleteAttachment;
using FIDOVictory.DataContract.Attachment.UploadAttachment;

namespace FIDOVictoryWS.Controllers
{
    [RoutePrefix("api/attachment")]
    public class AttachmentController : ApiController
    {

        [Route("type")]
        public List<AttachmentTypeItem> GetAttachmentTypeList(DateTime lastSync)
        {
            var list = new List<AttachmentTypeItem>();

            var attachmentTypeRepo = new AttachmentTypeRepository();

            var attachmentTypes = attachmentTypeRepo.GetList(lastSync);
            foreach (var at in attachmentTypes)
            {
                list.Add(new AttachmentTypeItem()
                {
                    AttachmentTypeID = at.AttachmentType_ID,
                    Name = at.AttachmentTypeName,
                });
            }

            return list;

        }

        [Route("")]
        [HttpGet]
        public List<AttachmentItemWithID> GetList(Int32 trialID, Int32 workflowID)
        {
            var list = new List<AttachmentItemWithID>();
            var attachmentRepository = new AttachmentRepository();
            var attachments = attachmentRepository.GetList(trialID, workflowID);

            foreach (var a in attachments)
            {
                list.Add(new AttachmentItemWithID()
                {
                    AttachmentID = a.Attachment_ID,
                    TrialID = trialID,
                    WorkflowID = workflowID,
                    Name = a.AttachmentName,
                });
            }

            return list;
        }

        /// <summary>
        /// Deprecated, use "api/attachment/{id}". It wont exists in Phase 4.
        /// </summary>
        /// <param name="name"></param>
        /// <param name="trialID"></param>
        /// <param name="workflowID"></param>
        /// <returns></returns>
        [Route("{name}")]
        [HttpGet]
        public AttachmentContract GetAttachment(String name, Int32 trialID, Int32 workflowID)
        {
            var attachmentRepository = new AttachmentRepository();
            var attachment = attachmentRepository.GetAttachment(trialID, workflowID, name);
            if (attachment == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            return new AttachmentContract()
            {
                TrialID = attachment.Trial_ID,
                WorkflowID = attachment.Workflow_ID,
                Name = attachment.AttachmentName,
                AttachmentTypeID = attachment.AttachmentType_ID,
                Comment = attachment.Comment,
                ContentAsBase64 = InMemoryCompressor.Decompress(attachment.Attachment),
            };

        }

        [HttpGet]
        [Route("{id}")]
        public AttachmentContract GetAttachment(Guid id)
        {
            var attachmentRepository = new AttachmentRepository();
            var attachment = attachmentRepository.GetAttachment(id);
            if (attachment == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            return new AttachmentContract()
            {
                TrialID = attachment.Trial_ID,
                WorkflowID = attachment.Workflow_ID,
                Name = attachment.AttachmentName,
                AttachmentTypeID = attachment.AttachmentType_ID,
                Comment = attachment.Comment,
                ContentAsBase64 = InMemoryCompressor.Decompress(attachment.Attachment),
            };

        }

        [Route("")]
        [HttpPost]
        public UploadAttachmentResponse PostAttachment(UploadAttachmentRequest req)
        {
            //validate

            //beautify
            req.CurrentUserAlias = UserAliasBeautifier.Apply(req.CurrentUserAlias);


            var response = new UploadAttachmentResponse();
            try
            {
                var attachmentRepository = new AttachmentRepository();
                if (attachmentRepository.Exists(req.Data.TrialID, req.Data.WorkflowID, req.Data.Name))
                {
                    response.Success = false;
                    response.ErrorCode = "1";
                    response.ErrorDescription = "An attachment with the same name exists in this trial + workflow combiantion";
                    return response;
                }

                var attachmentTypeRepository = new AttachmentTypeRepository();
                if (!attachmentTypeRepository.Exists(req.Data.AttachmentTypeID))
                {
                    response.Success = false;
                    response.ErrorCode = "2";
                    response.ErrorDescription = string.Format("Nonexistent attachment type id {0}", req.Data.AttachmentTypeID);
                    return response;
                }

                response.AttachmentID = attachmentRepository.Insert(req.Data.TrialID, req.Data.WorkflowID, req.Data.Name, req.Data.AttachmentTypeID, req.Data.Comment, req.Data.ContentAsBase64, req.CurrentUserAlias);
                response.Success = true;

            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                response.Success = false;
                response.ErrorCode = "KNOWN";
                response.ErrorDescription = "Known error in exception handled by FormController";
                response.ExceptionMessage = ex.Message.ToString();
            }

            return response;

        }


        [Route("")]
        [HttpPut]
        public UploadAttachmentResponse PutAttachment(UploadAttachmentRequest req)
        {

            //validate

            //beautify
            req.CurrentUserAlias = UserAliasBeautifier.Apply(req.CurrentUserAlias);

            var response = new UploadAttachmentResponse();
            try
            {
                var attachmentRepository = new AttachmentRepository();
                if (!attachmentRepository.Exists(req.Data.TrialID, req.Data.WorkflowID, req.Data.Name))
                {
                    response.Success = false;
                    response.ErrorCode = "1";
                    response.ErrorDescription = "The attachment doesn't exists. You cannot update it.";
                    return response;
                }

                var attachmentTypeRepository = new AttachmentTypeRepository();
                if (!attachmentTypeRepository.Exists(req.Data.AttachmentTypeID))
                {
                    response.Success = false;
                    response.ErrorCode = "2";
                    response.ErrorDescription = string.Format("Nonexistent attachment type id {0}", req.Data.AttachmentTypeID);
                    return response;
                }

                attachmentRepository.Update(req.Data.TrialID, req.Data.WorkflowID, req.Data.Name, req.Data.AttachmentTypeID, req.Data.Comment, req.Data.ContentAsBase64, req.CurrentUserAlias);
                response.Success = true;

            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                response.Success = false;
                response.ErrorCode = "KNOWN";
                response.ErrorDescription = "Known error in exception handled by FormController";
                response.ExceptionMessage = ex.Message.ToString();
            }

            return response;

        }


        [Route("")]
        [HttpDelete]
        public DeleteAttachmentResponse DeleteAttachment(DeleteAttachmentRequest req)
        {
            //validate

            //beautify
            req.CurrentUserAlias = UserAliasBeautifier.Apply(req.CurrentUserAlias);

            var response = new DeleteAttachmentResponse();

            try
            {
                var attachmentRepository = new AttachmentRepository();
                if (!attachmentRepository.Exists(req.Data.TrialID, req.Data.WorkflowID, req.Data.Name))
                {
                    response.Success = false;
                    response.ErrorCode = "1";
                    response.ErrorDescription = "Attachment doen't exists";
                    return response;
                }

                var success = attachmentRepository.Delete(req.Data.TrialID, req.Data.WorkflowID, req.Data.Name, req.CurrentUserAlias);
                response.Success = success;

            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                response.Success = false;
                response.ErrorCode = "KNOWN";
                response.ErrorDescription = "Known error in exception handled by FormController";
                response.ExceptionMessage = ex.Message.ToString();
            }

            return response;

        }


    }
}
