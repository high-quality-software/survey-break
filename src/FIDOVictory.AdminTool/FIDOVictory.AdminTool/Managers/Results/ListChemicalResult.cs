using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Models.Chemical;
using FIDOVictory.AdminTool.Models.User;

namespace FIDOVictory.AdminTool.Managers.Results
{
    public class ListChemicalResult : AbstractListResult<ChemicalItem>
    {
        public ListChemicalResult()
        {
            this.List = new List<ChemicalItem>();
        }
    }
}