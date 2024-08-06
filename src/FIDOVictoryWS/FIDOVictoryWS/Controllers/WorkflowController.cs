using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FIDOVictory.DataContract.Question;
using FIDOVictory.DataContract.Workflow;
using FIDOVictoryWS.Models;

namespace FIDOVictoryWS.Controllers
{
    [RoutePrefix("api/workflow")]
    public class WorkflowController : ApiController
    {

        // GET api/workflow
        [Route("")]
        public List<WorkflowItem> GetWorkflowsToSync(DateTime lastSync)
        {
            var list = new List<WorkflowItem>();
            var repo = new FIDOVictory.Common.Repository.WorkflowRepository();
            var workflows = repo.GetWorkflows(lastSync);

            foreach (var w in workflows)
            {
                list.Add(new WorkflowItem()
                {
                    WorkflowID = w.Workflow_ID,
                    Name = w.WorkflowName,
                    Order = w.WorkflowOrder,
                });
            }

            return list;
        }



        // GET api/workflow/5
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        /// <remarks>
        /// Still needs workflowquestion n to n relationship.
        /// See wiki use case 1
        /// http://stlwslimssqua01:120/mediawiki/index.php/VICTORY_Project:Regulatory_Field_Trials#Important_SQL
        /// </remarks>
        public WorkflowContract GetWorkflow(int id)
        {
            var wc = new WorkflowContract();

            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var workflow = from w in ec.Workflows
                               where w.Workflow_ID == id &&
                                    w.IsDeleted == false
                               select w;

                var questions = from q in ec.Questions
                                join wq in ec.WorkflowQuestions on q.Question_ID equals wq.Question_ID
                                where wq.Workflow_ID == id &&
                                    q.IsDeleted == false &&
                                    wq.IsDeleted == false
                                select q;

                wc.WorkflowID = workflow.First().Workflow_ID;
                wc.Name = workflow.First().WorkflowName;
                wc.Order = workflow.First().WorkflowOrder;

                foreach (var q in questions)
                {
                    wc.Questions.Add(new QuestionItem()
                    {
                        QuestionID = q.Question_ID,
                        Name = q.QuestionName,
                        IsLookup = q.IsLookup,
                    });
                }
            }

            return wc;

        }

    }
}
