using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Managers
{
    public class FormManager
    {
        public void Unlock(int trialID, int workflowID, string currentUserAlias)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var qry = from tp in ec.TrialProgresses
                          where tp.Trial_ID == trialID
                                   && tp.Workflow_ID == workflowID
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
                form.WorkflowComplete = false;
                form.WorkflowCompleteDate = null;

                form.UpdateUserID = currentUserAlias;
                form.UpdateDateTime = DateTime.Now;

                ec.SaveChanges();

            }
        }

        public void Lock(int trialID, int workflowID, string currentUserAlias)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var qry = from tp in ec.TrialProgresses
                          where tp.Trial_ID == trialID
                                   && tp.Workflow_ID == workflowID
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
                form.WorkflowComplete = true;
                form.WorkflowCompleteDate = DateTime.Now;

                form.UpdateUserID = currentUserAlias;
                form.UpdateDateTime = DateTime.Now;

                ec.SaveChanges();

            }
        }
    }
}