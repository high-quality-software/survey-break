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
    
    public partial class usp_Get_Trial_ByTrialID_Result
    {
        public int Trial_ID { get; set; }
        public string Name { get; set; }
        public Nullable<int> TrialYear { get; set; }
        public string FarmName { get; set; }
        public int SRRLeadUser_ID { get; set; }
        public Nullable<int> IRPUser_ID { get; set; }
        public int Crop_ID { get; set; }
        public Nullable<int> Trait_ID { get; set; }
        public Nullable<int> Site_ID { get; set; }
        public Nullable<bool> Internal { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string County { get; set; }
        public string ComplianceStatus { get; set; }
    }
}