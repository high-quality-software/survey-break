using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Filters;
using FIDOVictory.AdminTool.Models.User;

namespace FIDOVictory.AdminTool.Filters
{
    public class CustomAuthenticationAttribute : ActionFilterAttribute, IAuthenticationFilter
    {
        readonly log4net.ILog logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public void OnAuthentication(AuthenticationContext filterContext)
        {

        }

        public void OnAuthenticationChallenge(AuthenticationChallengeContext filterContext)
        {
            var user = filterContext.HttpContext.User;
            if (user == null || !user.Identity.IsAuthenticated || !this.CurrentUserAliasHasAdminRole(UserModel.GetCurrentUserName())) 
            {
                logger.WarnFormat("Unauthorized access to {0}", user.Identity.Name);
                filterContext.Result = new HttpUnauthorizedResult();
            }
        }

        protected bool CurrentUserAliasHasAdminRole(string userAlias)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {

                logger.InfoFormat("Looking for {0} into user table", userAlias);

                var user = ec.Users
                    .Where(u => u.UserType_ID == 4 
                        && u.UserAlias.ToUpper() == userAlias.ToUpper() 
                        && u.IsDeleted == false)
                    .FirstOrDefault();

                if (user != null)
                {
                    return true;
                }
            }

            logger.WarnFormat("{0} not found in user table", userAlias);

            return false;
        }
    }
}