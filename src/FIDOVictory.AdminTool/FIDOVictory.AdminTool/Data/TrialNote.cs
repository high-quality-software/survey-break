//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FIDOVictory.AdminTool.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class TrialNote
    {
        public System.Guid TrialNote_ID { get; set; }
        public int Trial_ID { get; set; }
        public Nullable<int> NoteCategory { get; set; }
        public string NoteContent { get; set; }
        public System.DateTime UpdateDateTime { get; set; }
        public string UpdateUserID { get; set; }
        public bool IsDeleted { get; set; }
    
        public virtual TrialCatalog TrialCatalog { get; set; }
    }
}
