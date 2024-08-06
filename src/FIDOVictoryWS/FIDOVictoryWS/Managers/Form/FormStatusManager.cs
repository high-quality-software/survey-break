using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.Common.Data;
using FIDOVictory.DataContract.Form.UploadFormStatus;

namespace FIDOVictoryWS.Managers.Form
{
    public class FormStatusManager
    {
        public FIDOVictory.DataContract.Form.Status.FormStatusResponseContract GetFormStatusForAdminRole(User userContract, DateTime lastSync)
        {
            var formStatus = new FIDOVictory.DataContract.Form.Status.FormStatusResponseContract();

            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var result = ec.usp_GetFormStatusForAdminRoleSince(userContract.UserAlias, lastSync);
                foreach (var r in result)
                {
                    formStatus.Data.Add(new FIDOVictory.DataContract.Form.Status.FormStatusContract()
                    {
                        TrialID = r.Trial_ID,
                        WorkflowID = r.Workflow_ID.Value,
                        Locked = r.WorkflowComplete.HasValue ? r.WorkflowComplete.Value : false,
                        UserID = r.SRRUser_ID,
                    });
                }
            }

            return formStatus;

        }

        public bool UpdateFormStatus(UploadFormStatusRequestContract req)
        {
            int affectedRecords = 0;

            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var qry = from tp in ec.TrialProgresses
                          where tp.Trial_ID == req.TrialID
                                   && tp.Workflow_ID == req.WorkflowID
                                   && tp.IsDeleted == false
                          select tp;

                if (qry.Count() == 0)
                {
                    throw new ApplicationException("No trialprogress record found");
                }
                else if (qry.Count() > 1)
                {
                    throw new ApplicationException("Only one trialprogress record expected");
                }

                var form = qry.First();
                form.WorkflowComplete = req.Locked;
                form.WorkflowCompleteDate = null;

                form.UpdateUserID = req.CurrentUserAlias;
                form.UpdateDateTime = DateTime.Now;

                affectedRecords = ec.SaveChanges();

            }

            return affectedRecords > 0;
        }
    }
}