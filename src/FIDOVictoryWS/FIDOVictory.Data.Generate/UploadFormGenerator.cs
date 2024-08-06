using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FIDOVictory.Data.Generate.Http.Client;
using FIDOVictory.DataContract.Form;
using FIDOVictory.DataContract.Form.UploadForm;
using FIDOVictory.DataContract.Trial;
using FIDOVictory.DataContract.User;
using FIDOVictory.DataContract.Workflow;

namespace FIDOVictory.Data.Generate
{
    public class UploadFormGenerator
    {
        private APIClient client = new APIClient();

        private List<UserContract> users;
        private List<WorkflowContract> workflows;

        private Dictionary<Int32, List<TrialContract>> trialsOfUser = new Dictionary<int, List<TrialContract>>();

        private Random random = new Random();

        public UploadFormGenerator()
        {
            users = client.GetUsers();
            workflows = client.GetFullWorkflowsList();
        }

        private UserContract GetRandomUser()
        {
            var idx = random.Next(this.users.Count);
            return users[idx];
        }

        private TrialContract GetRandomTrial(UserContract user)
        {
            if (!trialsOfUser.ContainsKey(user.UserID))
            {
                //load trials of current user
                var trials = client.GetTrials(user);
                this.trialsOfUser.Add(user.UserID, trials);
            }

            if (this.trialsOfUser[user.UserID].Count > 0)
            {
                var idx = random.Next(this.trialsOfUser[user.UserID].Count);
                return this.trialsOfUser[user.UserID][idx];
            }
            else
            {
                return null;
            }

        }

        private WorkflowContract GetRandomWorkflow()
        {
            var idx = random.Next(this.workflows.Count);
            return workflows[idx];
        }

        private bool GetRandomLocked()
        {
            var bit = random.Next(2);
            if (bit == 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        private string GetRandomResponseValue()
        {
            return random.Next(1000).ToString();
        }

        public void Run()
        {
            int counter = 1000;
            while (counter > 0)
            {
                var req = new UploadFormRequestContract();
                var user = this.GetRandomUser();

                if (string.IsNullOrEmpty(user.UserAlias))
                {
                    continue;
                }


                req.CurrentUserAlias = user.UserAlias;
                req.UserID = user.UserID;
                req.Locked = this.GetRandomLocked();

                var trial = this.GetRandomTrial(user);
                if (trial == null)
                {
                    continue;
                }

                req.TrialID = trial.TrialID;

                var w = this.GetRandomWorkflow();
                req.WorkflowID = w.WorkflowID;

                foreach (var q in w.Questions)
                {
                    req.Responses.Add(new DataContract.Form.FormResponseContract()
                    {
                        QuestionID = q.QuestionID,
                        ResponseValue = this.GetRandomResponseValue(),
                    });
                }


                var response = client.SaveForm(req);
                if (response.Success)
                {
                    Console.Write("S");
                }
                else
                {
                    Console.Write("E");
                }


                counter--;
            }

        }

    }
}
