using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Models.Session;
using FIDOVictory.AdminTool.Models.User;

namespace FIDOVictory.AdminTool.Tools.Session
{
    public class UserSessionHelper
    {
        private static string UserSessionKey = "UserSessionKey";

        public static UserSession GetCurrent()
        {
            var userSession = (UserSession)HttpContext.Current.Session[UserSessionKey];
            if (userSession == null)
            {
                userSession = new UserSession();
                userSession.PageSize = Int32.Parse(System.Configuration.ConfigurationManager.AppSettings["FIDO.Victory.AdminTool.PaginatedLists.PageSize"]);
                userSession.CurrentUserName = UserModel.GetCurrentUserName();

                var userManager = new Managers.UserManager();
                var user = userManager.GetUserByAlias(userSession.CurrentUserName);
                if (user != null)
                {
                    userSession.CurrentUserID = user.UserID;
                }
                

                HttpContext.Current.Session[UserSessionKey] = userSession;
            }

            return userSession;
        }
    }
}