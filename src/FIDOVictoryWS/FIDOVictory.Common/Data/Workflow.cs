//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FIDOVictory.Common.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Workflow
    {
        public Workflow()
        {
            this.TrialProgresses = new HashSet<TrialProgress>();
            this.TrialWorkflowAttachments = new HashSet<TrialWorkflowAttachment>();
            this.WorkflowQuestions = new HashSet<WorkflowQuestion>();
        }
    
        public int Workflow_ID { get; set; }
        public string WorkflowName { get; set; }
        public int WorkflowOrder { get; set; }
        public System.DateTime UpdateDateTime { get; set; }
        public string UpdateUserID { get; set; }
        public bool IsDeleted { get; set; }
    
        public virtual ICollection<TrialProgress> TrialProgresses { get; set; }
        public virtual ICollection<TrialWorkflowAttachment> TrialWorkflowAttachments { get; set; }
        public virtual ICollection<WorkflowQuestion> WorkflowQuestions { get; set; }
    }
}
