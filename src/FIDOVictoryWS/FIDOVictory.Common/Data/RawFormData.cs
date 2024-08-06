using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.Common.Data
{
    public class RawFormData
    {
        public int Trial_ID { get; set; }
        public int Workflow_ID { get; set; }
        public bool WorkflowComplete { get; set; }
        public Nullable<System.DateTime> DueDate { get; set; }
        public int SRRUser_ID { get; set; }
        public int? Question_ID { get; set; }
        public string ResponseValue { get; set; }
        public int HasAttachments { get; set; }
    }
}
