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
    
    public partial class usp_PaginatedList_Users_Result
    {
        public Nullable<long> RowNumber { get; set; }
        public Nullable<int> RowCount { get; set; }
        public int User_ID { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string UserAlias { get; set; }
        public string Email { get; set; }
        public Nullable<bool> Internal { get; set; }
        public string SiteLocation { get; set; }
    }
}