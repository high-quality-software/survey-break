using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;

namespace FIDOVictoryWS.Tests.Integration.API
{
    [TestClass]
    public class APICropTest : APITestBase
    {
        private Uri GetCropsUri()
        {
            var url = this.GetAPIUrl() + "api/crop/";
            var uri = new Uri(url);
            return uri;
        }

        [TestMethod]
        public void APIReturnsCrops()
        {
            int itemsCountExpected = 1;
            int itemsCount = 0;
            int days = 0;

            while (itemsCount < itemsCountExpected)
            {
                days++;
                var ts = new TimeSpan(days, 0, 0, 0);
                var uri = this.AddLastSyncParam(this.GetCropsUri(), ts);
                var responseText = this.HttpGet(uri);

                var crops = JsonConvert.DeserializeObject<dynamic>(responseText);
                itemsCount = 0;
                foreach (var c in crops)
                {
                    Assert.IsNotNull(c.CropID);
                    Assert.IsNotNull(c.Name);
                    itemsCount++;
                }
            }

        }
    }
}
