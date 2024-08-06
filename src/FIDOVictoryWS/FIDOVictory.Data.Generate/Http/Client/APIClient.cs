using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using FIDOVictory.DataContract.Form;
using FIDOVictory.DataContract.Form.UploadForm;
using FIDOVictory.DataContract.Trial;
using FIDOVictory.DataContract.Trial.DeleteTrialNote;
using FIDOVictory.DataContract.Trial.UploadTrialNote;
using FIDOVictory.DataContract.User;
using FIDOVictory.DataContract.Workflow;
using FIDOVictory.Tools;
using FIDOVictory.Tools.Web;
using Newtonsoft.Json;

namespace FIDOVictory.Data.Generate.Http.Client
{
    public class APIClient : IDisposable
    {
        private HttpClient client = new HttpClient();

        public APIClient()
        {
            var uriString = ConfigurationManager.AppSettings["FIDO.Victory.API.Url"];

            client.BaseAddress = new Uri(uriString);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));


        }

        protected Uri AddLastSyncParam(Uri uri, DateTime datetime)
        {
            //subtract ts days
            var lastSync = datetime.ToUniversalTime().ToString("o");
            return uri.AddParameter("lastSync", lastSync);

        }

        protected String GetLastSyncParam(DateTime datetime)
        {
            return string.Format("lastSync={0}", datetime.ToUniversalTime().ToString("o"));
        }

        protected String GetUserParam(UserContract user)
        {
            return string.Format("userAlias={0}", user.UserAlias);
        }

        public List<SiteItem> GetSites()
        {
            var getAllSitesPathString = string.Format("api/trial/site/?{0}", this.GetLastSyncParam(LastSync.Never));
            var response = client.GetAsync(getAllSitesPathString).Result;
            var list = new List<SiteItem>();
            if (response.IsSuccessStatusCode)
            {
                var json = response.Content.ReadAsStringAsync().Result;

                list = JsonConvert.DeserializeObject<List<SiteItem>>(json);
            }

            return list;
        }

        public List<UserContract> GetUsers()
        {
            var getAllUsersPathString = string.Format("api/user/?{0}", this.GetLastSyncParam(LastSync.Never));
            var response = client.GetAsync(getAllUsersPathString).Result;
            var list = new List<UserContract>();
            if (response.IsSuccessStatusCode)
            {
                var json = response.Content.ReadAsStringAsync().Result;

                list = JsonConvert.DeserializeObject<List<UserContract>>(json);
            }

            return list;
        }

        private List<WorkflowItem> GetWorkflows()
        {
            var getWorkflowsPathString = string.Format("api/workflow/?{0}", this.GetLastSyncParam(LastSync.Never));
            var response = client.GetAsync(getWorkflowsPathString).Result;
            var list = new List<WorkflowItem>();
            if (response.IsSuccessStatusCode)
            {
                var json = response.Content.ReadAsStringAsync().Result;

                list = JsonConvert.DeserializeObject<List<WorkflowItem>>(json);
            }

            return list;
        }

        private WorkflowContract GetFullWorkflow(WorkflowItem item)
        {
            var fullWorkflow = new WorkflowContract();

            var getFullWorkflowPathString = string.Format("api/workflow/{0}/", item.WorkflowID);
            var response = client.GetAsync(getFullWorkflowPathString).Result;
            if (response.IsSuccessStatusCode)
            {
                var json = response.Content.ReadAsStringAsync().Result;
                fullWorkflow = JsonConvert.DeserializeObject<WorkflowContract>(json);
            }

            return fullWorkflow;
        }

        public List<WorkflowContract> GetFullWorkflowsList()
        {
            var list = new List<WorkflowContract>();

            var items = this.GetWorkflows();
            foreach (var i in items)
            {
                var w = this.GetFullWorkflow(i);
                list.Add(w);
            }

            return list;

        }

        public List<TrialContract> GetTrials(UserContract user)
        {
            var getTrialsPathString = string.Format("api/trial/?{0}&{1}",
                this.GetLastSyncParam(LastSync.Never), this.GetUserParam(user));

            var response = client.GetAsync(getTrialsPathString).Result;
            var list = new List<TrialContract>();
            if (response.IsSuccessStatusCode)
            {
                var json = response.Content.ReadAsStringAsync().Result;

                list = JsonConvert.DeserializeObject<List<TrialContract>>(json);
            }

            return list;
        }

        public UploadFormResponseContract SaveForm(UploadFormRequestContract req)
        {
            var response = new UploadFormResponseContract();

            var postFormPathString = string.Format("api/form/");
            var postResponse = client.PostAsJsonAsync(postFormPathString, req).Result;
            if (postResponse.IsSuccessStatusCode)
            {
                var json = postResponse.Content.ReadAsStringAsync().Result;

                response = JsonConvert.DeserializeObject<UploadFormResponseContract>(json);
            }

            return response;

        }

        public UploadTrialNoteResponseContract PostTrialNote(UploadTrialNoteRequestContract req)
        {
            var response = new UploadTrialNoteResponseContract();

            var pathString = string.Format("api/trial/note");
            var postResponse = client.PostAsJsonAsync(pathString, req).Result;
            if (postResponse.IsSuccessStatusCode)
            {
                var json = postResponse.Content.ReadAsStringAsync().Result;

                response = JsonConvert.DeserializeObject<UploadTrialNoteResponseContract>(json);
            }

            return response;
        }

        public UploadTrialNoteResponseContract PutTrialNote(UploadTrialNoteRequestContract req)
        {
            var response = new UploadTrialNoteResponseContract();

            var pathString = string.Format("api/trial/note");
            var postResponse = client.PutAsJsonAsync(pathString, req).Result;

            if (postResponse.IsSuccessStatusCode)
            {
                var json = postResponse.Content.ReadAsStringAsync().Result;

                response = JsonConvert.DeserializeObject<UploadTrialNoteResponseContract>(json);
            }

            return response;
        }



        public void Dispose()
        {
            client.Dispose();
        }
    }
}
