using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Models.Site;
using FIDOVictory.AdminTool.Models.User;

namespace FIDOVictory.AdminTool.Managers.Results
{
    public class ListSiteResult : AbstractListResult<SiteItem>
    {
        public ListSiteResult()
        {
            this.List = new List<SiteItem>();
        }
    }
}