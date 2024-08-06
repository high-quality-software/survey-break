using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FIDOVictory.Common.Repository;

namespace FIDOVictoryWS.Tests.TestData
{
    public class TrialTestRepository : TrialRepository
    {
        public FIDOVictory.Common.Data.TrialCatalog GetAnyTrial()
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var count = ec.TrialCatalogs.Count(tc => tc.IsDeleted == false && tc.Archive == false);
                var r = new Random();

                var trials = ec.TrialCatalogs
                    .Where(tc => tc.IsDeleted == false && tc.Archive == false)
                    .OrderBy(tc => tc.Trial_ID)
                    .Skip(r.Next(0, count))
                    .Take(1);


                return trials.First();
            }
        }

        public FIDOVictory.Common.Data.TrialCatalog GetAnyTrialWithAttachment()
        {
            using (var ec = new FIDOVictory.Common.Data.EntityContainer())
            {
                var count = ec.TrialCatalogs
                                .Where(x => ec.TrialWorkflowAttachments.Any( twa => twa.Trial_ID == x.Trial_ID))
                                .Count(tc => tc.IsDeleted == false && tc.Archive == false);

                var r = new Random();

                var trials = ec.TrialCatalogs
                    .Where(tc => tc.IsDeleted == false && tc.Archive == false)
                    .Where( tc => ec.TrialWorkflowAttachments.Any( twa => twa.Trial_ID == tc.Trial_ID))
                    .OrderBy(tc => tc.Trial_ID)
                    .Skip(r.Next(0, count))
                    .Take(1);


                return trials.First();
            }
        }
    }
}
