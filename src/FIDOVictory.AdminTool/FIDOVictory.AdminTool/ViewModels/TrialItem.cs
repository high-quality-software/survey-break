using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.ViewModels
{
    public class TrialItem
    {
        public Int32 TrialID { get; set; }

        [Required(ErrorMessage = "Trial name is required")]
        [StringLength(50, ErrorMessage = "Name can be no larger than 50 characters")]
        public String Name { get; set; }

        public String Farm { get; set; }
        public String Crop { get; set; }
        public String Site { get; set; }
        public String Trait { get; set; }

        [Required(ErrorMessage = "Trial year is required")]
        [Range(2014, 3014, ErrorMessage = "Trial year should be 2014 or later")]
        public Int32 Year { get; set; }

        public String PrimarySRR { get; set; }
    }
}