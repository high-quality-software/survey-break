using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.DataContract.Trial
{
    public class TrialContract : TrialItem
    {
        public Int32 CropID { get; set; }
        public String FarmName { get; set; }

        public Int32? IRPUserID { get; set; }
        public Int32 LeadSRRUserID { get; set; }
        public Int32? PrimarySRRUserID { get; set; }
        

        public Int32? TraitID { get; set; }
        public Int32? SiteID { get; set; }
        public Int32? TrialYear { get; set; }

        public String Addess { get; set; }
        public String City { get; set; }
        public String Country { get; set; }
        public String State { get; set; }
        public String Zip { get; set; }

        public Decimal? GPSLat1 { get; set; }
        public Decimal? GPSLong1 { get; set; }
        public Decimal? GPSLat2 { get; set; }
        public Decimal? GPSLong2 { get; set; }
        public Decimal? GPSLat3 { get; set; }
        public Decimal? GPSLong3 { get; set; }
        public Decimal? GPSLat4 { get; set; }
        public Decimal? GPSLong4 { get; set; }

        public Decimal? ApprovedArea { get; set; }
        //public ? ApprovedAreaUOM { get; set; }

        public Boolean? Internal { get; set; }
        public String ComplianceStatus { get; set; }
        
    }
}