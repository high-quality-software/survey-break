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
    
    public partial class AttachmentType
    {
        public AttachmentType()
        {
            this.TrialWorkflowAttachments = new HashSet<TrialWorkflowAttachment>();
        }
    
        public int AttachmentType_ID { get; set; }
        public string AttachmentTypeName { get; set; }
        public System.DateTime UpdateDateTime { get; set; }
        public string UpdateUserID { get; set; }
        public bool IsDeleted { get; set; }
    
        public virtual ICollection<TrialWorkflowAttachment> TrialWorkflowAttachments { get; set; }
    }
}
