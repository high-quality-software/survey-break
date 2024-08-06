using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Data.Repository
{
    public class ImageRepository
    {
        public List<Guid> GetImageID(Int32 trialID, Int32 workflowID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                return ec.TrialWorkflowAttachments.Where(a => a.Trial_ID == trialID && a.Workflow_ID == workflowID).Select(a => a.Attachment_ID).ToList();
            }
        }
    }
}