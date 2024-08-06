using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.DataContract.Trial
{
    public class ComplianceStatusItem
    {
        public Int32 WorkflowID { get; set; }
        public String WorkflowName { get; set; }
        public Int32 WorkflowOrder { get; set; }

        public Int32 InBlank { get; set; }
        public Int32 InProgress { get; set; }
        public Int32 PendingForApproval { get; set; }
        public Int32 PendingForLock { get; set; }
        public Int32 Completed { get; set; }
        public Int32 Total { get; set; }

    }
}