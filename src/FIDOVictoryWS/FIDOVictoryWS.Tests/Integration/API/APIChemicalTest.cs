using System;
using System.Net;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;

namespace FIDOVictoryWS.Tests.Integration.API
{
    [TestClass]
    public class APIChemicalTest : APITestBase
    {
        private Uri GetChemicalsUri()
        {
            var url = this.GetAPIUrl() + "api/chemical/";
            var uri = new Uri(url);
            return uri;
        }

        private Uri GetChemicalTypesUri()
        {
            var uri = new Uri(this.GetAPIUrl() + "api/chemical/type/");
            return uri;
        }

        [TestMethod]
        public void APIReturnsChemicals()
        {
            int itemsCountExpected = 1;
            int itemsCount = 0;
            int days = 0;

            while (itemsCount < itemsCountExpected)
            {
                days++;
                var ts = new TimeSpan(days, 0, 0, 0);
                var uri = this.AddLastSyncParam(this.GetChemicalsUri(), ts);
                var responseText = this.HttpGet(uri);

                var chemicals = JsonConvert.DeserializeObject<dynamic>(responseText);
                itemsCount = 0;
                foreach (var c in chemicals)
                {
                    Assert.IsNotNull(c.ChemicalID);
                    Assert.IsNotNull(c.Name);
                    Assert.IsNotNull(c.ChemicalTypeID);
                    itemsCount++;
                }
            }

        }

        [TestMethod]
        public void APIReturnsChemicalTypes()
        {
            int itemsCountExpected = 1;
            int itemsCount = 0;
            int days = 0;

            while (itemsCount < itemsCountExpected)
            {
                days++;
                var ts = new TimeSpan(days, 0, 0, 0);
                var uri = this.AddLastSyncParam(this.GetChemicalTypesUri(), ts);
                var responseText = this.HttpGet(uri);

                var chemicals = JsonConvert.DeserializeObject<dynamic>(responseText);
                itemsCount = 0;
                foreach (var c in chemicals)
                {
                    Assert.IsNotNull(c.ChemicalTypeID); 
                    Assert.IsNotNull(c.Name);
                    itemsCount++;
                }
            }
        }
    }
}
