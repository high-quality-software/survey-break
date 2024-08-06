using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Health
{
    public class StatusContract
    {
        public Boolean Running { get; set; }
        public String Environment { get; set; }

        public String APIVersion { get; set; }
        public String APIReleaseName { get; set; }

        public String AppMinVersion { get; set; }
        public String AppMaxVersion { get; set; }

        public Boolean IsDatabaseOnline { get; set; }
        public String DBReleaseName { get; set; }
        public String DBReleaseComment { get; set; }

    }
}
