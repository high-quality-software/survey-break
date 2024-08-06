using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FIDOVictory.Common.Compression;
using FIDOVictory.Common.Data.Specialized;

namespace FIDOVictory.Common.Repository
{
    public class AttachmentRepository
    {
        public bool Exists(Int32 trail_ID, Int32 workflow_ID, String name)
        {
            using (var ec = new Data.EntityContainer())
            {
                var attachments = from twa in ec.TrialWorkflowAttachments
                                  where twa.IsDeleted.Equals(false) &&
                                        twa.Trial_ID.Equals(trail_ID) &&
                                        twa.Workflow_ID.Equals(workflow_ID) &&
                                        twa.AttachmentName.Equals(name)
                                  select twa;

                if (attachments.Count() > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }

            }

        }

        public bool Delete(Int32 trail_ID, Int32 workflow_ID, String name, string currentUserAlias)
        {
            using (var ec = new Data.EntityContainer())
            {
                var attachment = (from twa in ec.TrialWorkflowAttachments
                                  where twa.IsDeleted.Equals(false) &&
                                        twa.Trial_ID.Equals(trail_ID) &&
                                        twa.Workflow_ID.Equals(workflow_ID) &&
                                        twa.AttachmentName.Equals(name)
                                  select twa).FirstOrDefault();

                if (attachment != null)
                {
                    attachment.IsDeleted = true;
                    attachment.UpdateUserID = currentUserAlias;
                    attachment.UpdateDateTime = DateTime.Now;

                    ec.SaveChanges();

                    return true;
                }
                else
                {
                    return false;
                }
            }

        }

        public Guid Insert(Int32 trail_ID, Int32 workflow_ID, String name, Int32 attachmentTypeId, String comment, String contentAsBase64, string currentUserAlias)
        {
            using (var ec = new Data.EntityContainer())
            {
                var newAttachmentID = Guid.NewGuid();
                ec.TrialWorkflowAttachments.Add(new Data.TrialWorkflowAttachment()
                {
                    Attachment_ID = newAttachmentID,
                    Attachment = InMemoryCompressor.Compress(contentAsBase64),
                    AttachmentName = name,
                    AttachmentType_ID = attachmentTypeId,
                    Comment = comment,
                    Trial_ID = trail_ID,
                    Workflow_ID = workflow_ID,
                    UpdateUserID = currentUserAlias,
                    UpdateDateTime = DateTime.Now,
                });

                ec.SaveChanges();

                return newAttachmentID;
            }
        }

        public bool Update(Int32 trail_ID, Int32 workflow_ID, String name, Int32 attachmentTypeId, String comment, String contentAsBase64, string currentUserAlias)
        {
            using (var ec = new Data.EntityContainer())
            {
                var attachment = (from twa in ec.TrialWorkflowAttachments
                                  where twa.IsDeleted.Equals(false) &&
                                        twa.Trial_ID.Equals(trail_ID) &&
                                        twa.Workflow_ID.Equals(workflow_ID) &&
                                        twa.AttachmentName.Equals(name)
                                  select twa).FirstOrDefault();

                if (attachment != null)
                {
                    attachment.Attachment = InMemoryCompressor.Compress(contentAsBase64);
                    attachment.AttachmentType_ID = attachmentTypeId;
                    attachment.Comment = comment;
                    attachment.UpdateUserID = currentUserAlias;
                    attachment.UpdateDateTime = DateTime.Now;

                    ec.SaveChanges();

                    return true;
                }
                else
                {
                    return false;
                }
            }

        }

        public List<LightweightAttachment> GetList(Int32 trail_ID, Int32 workflow_ID)
        {
            using (var ec = new Data.EntityContainer())
            {
                var attachments = from twa in ec.TrialWorkflowAttachments
                                  where twa.IsDeleted.Equals(false) &&
                                        twa.Trial_ID.Equals(trail_ID) &&
                                        twa.Workflow_ID.Equals(workflow_ID)
                                  select new LightweightAttachment()
                                  {
                                      Attachment_ID = twa.Attachment_ID,
                                      AttachmentName = twa.AttachmentName
                                  };

                return attachments.ToList<LightweightAttachment>();
            }
        }

        public Data.TrialWorkflowAttachment GetAttachment(Int32 trail_ID, Int32 workflow_ID, String name)
        {
            using (var ec = new Data.EntityContainer())
            {
                var attachments = from twa in ec.TrialWorkflowAttachments
                                  where twa.IsDeleted.Equals(false) &&
                                        twa.Trial_ID.Equals(trail_ID) &&
                                        twa.Workflow_ID.Equals(workflow_ID) &&
                                        twa.AttachmentName.Equals(name)
                                  select twa;

                return attachments.FirstOrDefault();
            }
        }


        public Data.TrialWorkflowAttachment GetAttachment(Guid attachment_ID)
        {
            using (var ec = new Data.EntityContainer())
            {
                var attachments = from twa in ec.TrialWorkflowAttachments
                                  where twa.IsDeleted.Equals(false) &&
                                        twa.Attachment_ID.Equals(attachment_ID)
                                  select twa;

                return attachments.FirstOrDefault();
            }
        }

    }
}
