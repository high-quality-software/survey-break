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
    public class APITrialNoteTest : APITestBase
    {
        private Uri GetTrialNoteUri()
        {
            var url = this.GetAPIUrl() + "api/trial/note";
            var uri = new Uri(url);
            return uri;
        }

        [TestMethod]
        public void APIPostTrialNote()
        {
            var trialRepo = new TrialTestRepository();
            var userRepo = new UserTestRepository();
            

            var trial = trialRepo.GetAnyTrial();
            var user = userRepo.GetAnyUser(trial);

            var uri = this.GetTrialNoteUri();

            //TODO: use a framework to access Web API (include DETELE with request body)




        }

    }
}
