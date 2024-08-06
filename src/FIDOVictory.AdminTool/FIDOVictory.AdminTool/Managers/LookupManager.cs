using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FIDOVictory.AdminTool.Managers
{
    public class LookupManager
    {
        public List<SelectListItem> GetBooleanSelectList()
        {
            var list = new List<SelectListItem>();

            list.Add(new SelectListItem() { Value = ((Int32)Models.LookupEnum.Yes).ToString(), Text = "Yes" });
            list.Add(new SelectListItem() { Value = ((Int32)Models.LookupEnum.No).ToString(), Text = "No" });

            return list;
        }
    }
}