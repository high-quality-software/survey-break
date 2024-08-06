using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.Session
{
    public class UserSession
    {
        /// <summary>
        /// Monsato User ID (UserAlias field in UserMaster table)
        /// </summary>
        public string CurrentUserName { get; set; }

        /// <summary>
        /// Victory User ID (User_ID field in UserMaster table)
        /// </summary>
        public int CurrentUserID { get; set; }
        public int PageSize { get; set; }
        public TrialSearchFilter CurrentTrialSearchFilter { get; set; }
        public UserSearchFilter CurrentUserSearchFilter { get; set; }
        public ChemicalSearchFilter CurrentChemicalSearchFilter { get; set; }
        public SiteSearchFilter CurrentSiteSearchFilter { get; set; }

        //TODO: promote to a ApplicationSession instead of be part of a UserSession
        public String ApplicationBaseUrl { get; private set; }

        public UserSession()
        {
            this.ApplicationBaseUrl = this.GetApplicationBaseUrl();

            this.CurrentTrialSearchFilter = new TrialSearchFilter();
            this.CurrentUserSearchFilter = new UserSearchFilter();
            this.CurrentChemicalSearchFilter = new ChemicalSearchFilter();
            this.CurrentSiteSearchFilter = new SiteSearchFilter();
        }


        private string GetApplicationBaseUrl()
        {
            var request = HttpContext.Current.Request;
            var appUrl = HttpRuntime.AppDomainAppVirtualPath;

            if (appUrl.Length == 0) {
                appUrl = "/";
            }
            else {
                if (!appUrl.EndsWith("/")) {
                    appUrl += "/";
                }
            }

            var baseUrl = string.Format("{0}://{1}{2}", request.Url.Scheme, request.Url.Authority, appUrl);

            return baseUrl;
        }

    }
}