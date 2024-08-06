using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using FIDOVictory.AdminTool.Managers;
using FIDOVictory.AdminTool.Models.Site;
using FIDOVictory.AdminTool.Models.User;
using FIDOVictory.AdminTool.Models.UserType;

namespace FIDOVictory.AdminTool.Controllers.Api
{
     
    [RoutePrefix("api/site")]
    public class SiteController : ApiController
    {
        private const int FullListingFirstPage = 1;
        private const int FullListingPageSize = 1000;

        [Route("")]
        public List<SiteItem> GetSites(string filter)
        {
            var siteManager = new SiteManager();

            var siteList = siteManager.List(FullListingFirstPage, FullListingPageSize, filter);
            return siteList.List;
        }

    }
}