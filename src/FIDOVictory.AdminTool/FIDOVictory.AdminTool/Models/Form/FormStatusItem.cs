using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.Form
{
    public class FormStatusItem
    {
        public int WorkflowID { get; set; }
        public string WorkflowName {get;set;}
        public bool WorkflowComplete { get; set; }
    }
}