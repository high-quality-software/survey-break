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
    
    public partial class ChemicalMaster
    {
        public int Chemical_ID { get; set; }
        public string ChemicalName { get; set; }
        public int ChemicalType_ID { get; set; }
        public System.DateTime UpdateDateTime { get; set; }
        public string UpdateUserID { get; set; }
        public bool IsDeleted { get; set; }
    
        public virtual ChemicalType ChemicalType { get; set; }
    }
}
