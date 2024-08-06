using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FIDOVictoryWS.Tests.TestData;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;

namespace FIDOVictoryWS.Tests.Integration.API
{
    [TestClass]
    public class APITrialTest : APITestBase
    {
        private Uri GetTrialUri()
        {
            var url = this.GetAPIUrl() + "api/trial/";
            var uri = new Uri(url);
            return uri;
        }

        [TestMethod]
        public void APIGetTrialsForSRR()
        {
            int itemsCountExpected = 1;
            int itemsCount = 0;
            int days = 0;

            var repo = new UserTestRepository();
            var srr = repo.GetAnySRRUser();

            while (itemsCount < itemsCountExpected)
            {
                days++;
                var ts = new TimeSpan(days, 0, 0, 0);
                var uri = this.AddLastSyncParam(this.GetTrialUri(), ts);
                uri = this.AddUserAliasParam(uri, srr.UserAlias);

                var responseText = this.HttpGet(uri);

                var trials = JsonConvert.DeserializeObject<dynamic>(responseText);
                itemsCount = 0;
                foreach (var t in trials)
                {
                    Assert.IsNotNull(t.TrialID);
                    Assert.IsNotNull(t.Name);
                    itemsCount++;
                }
            }

        }
    }
}
