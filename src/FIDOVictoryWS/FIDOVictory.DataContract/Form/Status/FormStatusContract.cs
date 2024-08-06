using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FIDOVictory.DataContract.Form.Status
{
    public class FormStatusContract
    {
        public Int32 TrialID { get; set; }
        public Int32 WorkflowID { get; set; }
        public String WorkflowName { get; set; }
        public Int32 WorkflowOrder { get; set; }
        public Int32 UserID { get; set; }
        public Boolean? Answered { get; set; }
        public Boolean? Locked { get; set; }
    }
}
