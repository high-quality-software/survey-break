using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.Trial
{
    public class CreateTrialModel : TrialModel
    {
        [Required(ErrorMessage = "SRR User is required")]
        [Range(0, Int32.MaxValue)]
        public Int32? PrimarySRRUserID { get; set; }
    }
}