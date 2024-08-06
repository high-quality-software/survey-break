using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.Chemical
{
    public class ChemicalModel : ChemicalItem
    {
        [Required(ErrorMessage = "Chemical type is required")]
        [Range(0, Int32.MaxValue)]
        public Int32 ChemicalTypeID { get; set; }
    }
}