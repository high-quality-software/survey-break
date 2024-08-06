using System;
using FIDOVictoryWS.Tests.TestData;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;

namespace FIDOVictoryWS.Tests.Integration.API
{
    [TestClass]
    public class APIAttachmentTest : APITestBase
    {
        private Uri GetAttachmentUri()
        {
            var url = this.GetAPIUrl() + "api/attachment/";
            var uri = new Uri(url);
            return uri;
        }

        [TestMethod]
        public void ListAttachmentTest()
        {
            int itemsCountExpected = 1;
            int itemsCount = 0;

            var trialRepo = new TrialTestRepository();
            var workflowRepo = new WorkflowTestRepository();

            while (itemsCount < itemsCountExpected)
            {
                var trial = trialRepo.GetAnyTrialWithAttachment();
                var workflow = workflowRepo.GetAnyWorkflow();

                var uri = this.AddTrialIDParam(this.GetAttachmentUri(), trial.Trial_ID);
                uri = this.AddWorkflowIDParam(uri, workflow.Workflow_ID);

                var responseText = this.HttpGet(uri);

                var attachments = JsonConvert.DeserializeObject<dynamic>(responseText);
                itemsCount = 0;
                foreach (var a in attachments)
                {
                    Assert.IsNotNull(a.TrialID);
                    Assert.IsNotNull(a.WorkflowID);
                    Assert.IsNotNull(a.Name);
                    itemsCount++;
                }
            }
        }
    }
}
