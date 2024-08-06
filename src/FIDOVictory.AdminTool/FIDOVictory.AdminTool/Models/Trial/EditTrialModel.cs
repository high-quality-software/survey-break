using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Tools.Reflection;

namespace FIDOVictory.AdminTool.Models.Trial
{
    public class EditTrialModel : TrialModel
    {
        public EditTrialModel()
        { 

        }

        public EditTrialModel(TrialModel trial)
        {
            this.CopyFrom(trial);
        }

        [Required(ErrorMessage = "SRR User is required")]
        [Range(0, Int32.MaxValue)]
        public Int32 PrimarySRRUserID { get; set; }

    }
}