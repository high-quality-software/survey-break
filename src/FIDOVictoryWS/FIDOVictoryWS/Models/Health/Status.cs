using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictoryWS.Models.Health
{
    public class Status
    {
        public Boolean Running = true;
        public String APIVersion = string.Empty;
        public String APIReleaseName = "Victory Phase 3";

        public Boolean IsDatabaseOnline = false;
        public String DBReleaseName = string.Empty;
        public String DBReleaseComment = string.Empty;

        public Status()
        {
            this.APIVersion = Tools.Reflection.Assembly.GetCustomVersion();
        }

    }
}