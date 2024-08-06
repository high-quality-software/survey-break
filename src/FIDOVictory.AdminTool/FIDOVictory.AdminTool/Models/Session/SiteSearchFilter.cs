using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.Session
{
    public class SiteSearchFilter
    {
        public int Page { get; set; }

        public string Filter { get; set; }

        public void Update(int? page, string searchFilter)
        {
            this.Page = page.HasValue ? page.Value : 1;
            this.Filter = searchFilter;
        }
    }
}