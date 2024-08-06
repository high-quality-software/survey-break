using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using FIDOVictory.Tools.Web;

namespace FIDOVictoryWS.Tests.Integration.API
{
    public class APITestBase
    {
        private string _apiUrl = null;

        public APITestBase()
        {
            _apiUrl = ConfigurationManager.AppSettings["FIDO.Victory.API.Url"];
        }

        protected string GetAPIUrl()
        {
            return _apiUrl;
        }

        protected Uri AddLastSyncParam(Uri uri, TimeSpan ts)
        {
            //subtract ts days
            var lastSync = System.DateTime.Now
                            .ToUniversalTime()
                            .AddDays(ts.TotalDays * -1)
                            .ToString("o");

            return uri.AddParameter("lastSync", lastSync);
        }

        protected Uri AddUserAliasParam(Uri uri, String userAlias)
        {
            return uri.AddParameter("userAlias", userAlias);
        }

        protected Uri AddTrialIDParam(Uri uri, Int32 trialID)
        {
            return uri.AddParameter("trialID", trialID.ToString());
        }

        protected Uri AddWorkflowIDParam(Uri uri, Int32 workflowID)
        {
            return uri.AddParameter("workflowID", workflowID.ToString());
        }

        protected string HttpGet(Uri uri)
        {
            var request = WebRequest.Create(uri);
            request.Method = "GET";
            request.ContentType = "application/json";
            using (var response = request.GetResponse())
            {
                var stream = response.GetResponseStream();
                var sr = new System.IO.StreamReader(stream);
                var text = sr.ReadToEnd();
                return text;
            }

        }

        protected string HttpPost(Uri uri, String json)
        {
            var request = WebRequest.Create(uri);
            request.Method = "POST";
            request.ContentType = "application/json";
            //TODO: add request body
            using (var response = request.GetResponse())
            {
                var stream = response.GetResponseStream();
                var sr = new System.IO.StreamReader(stream);
                var text = sr.ReadToEnd();
                return text;
            }

        }

    }
}
