using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FIDOVictory.Common.Repository;

namespace FIDOVictoryWS.Tests.TestData
{
    public class WorkflowTestRepository : WorkflowRepository
    {
        public FIDOVictory.Common.Data.Workflow GetAnyWorkflow()
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var count = ec.Workflows.Count(w => w.IsDeleted == false);
                var r = new Random();

                var workflows = ec.Workflows
                    .Where(w => w.IsDeleted == false)
                    .OrderBy(tc => tc.Workflow_ID)
                    .Skip(r.Next(0, count))
                    .Take(1);


                return workflows.First();
            }
        }
    }
}
