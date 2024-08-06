using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.Trial
{
    public class TrialModel : ViewModels.TrialItem
    {
        public TrialModel()
        {
            this.Year = DateTime.Now.Year;
            this.ComplianceStatus = "Stewarded";
        }

        public Int32 CropID { get; set; }
        public Int32 TraitID { get; set; }

        [Required(ErrorMessage = "Site is required")]
        [Range(0, Int32.MaxValue)]
        public Int32? SiteID { get; set; }

        [Required(ErrorMessage = "IRP User is required")]
        [Range(0, Int32.MaxValue)]
        public Int32 IRPUserID { get; set; }

        [Required(ErrorMessage = "SRR Lead User is required")]
        [Range(0, Int32.MaxValue)]
        public Int32 SRRLeadUserID { get; set; }

        public Int32 InternalOption { get; set; }

        public String City { get; set; }
        public String State { get; set; }
        public String Zip { get; set; }
        public String County { get; set; }
        public String ComplianceStatus { get; set; }

        public Boolean IsInternal
        {
            get
            {
                return this.InternalOption == (Int32)LookupEnum.Yes;
            }
        }

    }
}