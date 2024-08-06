using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Models.Form;
using FIDOVictory.AdminTool.Models.Trial;

namespace FIDOVictory.AdminTool.Models
{
    public class TrialFormStatus
    {
        public TrialFormStatus()
        {
            this.Trial = new TrialModel();
            this.FormsStatuses = new List<FormStatusItem>();
        }

        public TrialModel Trial { get; set; }
        public List<FormStatusItem> FormsStatuses { get; set; }
    }
}