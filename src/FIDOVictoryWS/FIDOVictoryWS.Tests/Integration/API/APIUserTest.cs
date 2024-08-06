using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;

namespace FIDOVictoryWS.Tests.Integration.API
{
    [TestClass]
    public class APIUserTest : APITestBase
    {
        private Uri GetUsersUri()
        {
            var url = this.GetAPIUrl() + "api/user/";
            var uri = new Uri(url);
            return uri;
        }

        private Uri GetLoginUri()
        {
            var url = this.GetAPIUrl() + "api/login/";
            var uri = new Uri(url);
            return uri;
        }

        [TestMethod]
        public void APIReturnsUsers()
        {
            int itemsCountExpected = 1;
            int itemsCount = 0;
            int days = 0;

            while (itemsCount < itemsCountExpected)
            {
                days++;
                var ts = new TimeSpan(days, 0, 0, 0);
                var uri = this.AddLastSyncParam(this.GetUsersUri(), ts);
                var responseText = this.HttpGet(uri);

                var users = JsonConvert.DeserializeObject<dynamic>(responseText);
                itemsCount = 0;
                foreach (var u in users)
                {
                    Assert.IsNotNull(u.UserID);
                    Assert.IsNotNull(u.FirstName);
                    Assert.IsNotNull(u.LastName);
                    Assert.IsNotNull(u.UserAlias, "userAlias");
                    itemsCount++;
                }
            }

        }
    }
}
