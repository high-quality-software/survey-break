using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Repository
{
    public class WorkflowRepository
    {
        public List<FIDOVictory.Common.Data.Workflow> GetWorkflows(DateTime lastSync)
        {

            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var workflowsIDs = this.GetWorkflowsIDsThatChangedSince(ec, lastSync);

                var workflows = from w in ec.Workflows
                                where w.IsDeleted == false &&
                                    workflowsIDs.Contains(w.Workflow_ID)
                                select w;

                return workflows.ToList();
            }

        }

        /// <summary>
        /// evaluate workflows changes based on workflow table and workflowquestion table.
        /// </summary>
        /// <param name="ec"></param>
        /// <param name="lastSync"></param>
        /// <returns></returns>
        private List<Int32> GetWorkflowsIDsThatChangedSince(FIDOVictory.Common.Data.EntityContainer ec, DateTime lastSync)
        {
            //workflows IDs from workflow table that has been changed since last sync
            var workflowsIDsFromWorkflow = from w in ec.Workflows
                                           where w.IsDeleted == false &&
                                           w.UpdateDateTime >= lastSync
                                           select w.Workflow_ID;

            //workflows IDs from workflowquestion table that has been changed since last sync
            var workflowsIDsFromWorkflowQuestion = from wq in ec.WorkflowQuestions
                                                   where wq.IsDeleted == false &&
                                                   wq.UpdateDateTime >= lastSync
                                                   select wq.Workflow_ID;

            //looking for questions changes
            var questionsIDs = from q in ec.Questions
                               where q.IsDeleted == false &&
                               q.UpdateDateTime >= lastSync
                               select q.Question_ID;

            //workflows IDs from workflowquestions where questions has been changed since last sync
            var worflowsIDsFromWorkflowQuestionWhereQuestionChanged = from wq in ec.WorkflowQuestions
                                                                      where wq.IsDeleted == false &&
                                                                      questionsIDs.Contains(wq.Question_ID)
                                                                      select wq.Workflow_ID;

            var workflowsIDs = workflowsIDsFromWorkflow
                                .Union(workflowsIDsFromWorkflowQuestion)
                                .Union(worflowsIDsFromWorkflowQuestionWhereQuestionChanged)
                                .Distinct();


            return workflowsIDs.ToList();

        }
    }
}
