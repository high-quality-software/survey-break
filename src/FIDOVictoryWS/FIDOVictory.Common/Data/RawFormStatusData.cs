using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Data
{
    public class RawFormStatusData
    {
        public int Trial_ID { get; set; }
        public int Workflow_ID { get; set; }
        public int SRRUser_ID { get; set; }
        public bool WorkflowComplete { get; set; }
    }
}
