using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.ViewModels
{
    public class TrialMapReport
    {
        public Int32 TrialID { get; set; }
        public String Name { get; set; }
        public String Farm { get; set; }
        public Int32 Year { get; set; }
        public Guid ImageID { get; set; }
    }
}