using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.Site
{
    public class SiteItem
    {
        public Int32 SiteID { get; set; }

        [Required(ErrorMessage = "Name is required")]
        [StringLength(50, ErrorMessage = "Name can be no larger than 50 characters")]
        public String Name { get; set; }
    }
}