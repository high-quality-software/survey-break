using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.Session
{
    public class TrialSearchFilter
    {
        public int Page { get; set; }

        public int? TrialID { get; set; }

        public string TrialName { get; set; }

        public void Update(int? page, string searchTrialID, string searchTrialName)
        {
            this.Page = page.HasValue ? page.Value : 1;

            int trialID;
            if (Int32.TryParse(searchTrialID, out trialID))
            {
                this.TrialID = trialID;
            }
            else
            {
                this.TrialID = null;
            }

            this.TrialName = searchTrialName;

        }

    }
}