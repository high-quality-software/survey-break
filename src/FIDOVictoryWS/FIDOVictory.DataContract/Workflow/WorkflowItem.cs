using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.DataContract.Workflow
{
    public class WorkflowItem
    {
        public Int32 WorkflowID { get; set; }
        public String Name { get; set; }
        public Int32 Order { get; set; }
    }
}