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
    
    public partial class SRRUser_Trial_Xref
    {
        public int SRRUser_Trial_Xref1 { get; set; }
        public int SRRUser_ID { get; set; }
        public int Trial_ID { get; set; }
        public System.DateTime UpdateDateTime { get; set; }
        public string UpdateUserID { get; set; }
        public bool IsDeleted { get; set; }
        public bool PrimarySRR { get; set; }
    
        public virtual TrialCatalog TrialCatalog { get; set; }
        public virtual User User { get; set; }
    }
}
