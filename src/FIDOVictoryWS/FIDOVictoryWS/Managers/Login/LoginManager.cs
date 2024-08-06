using System;
using System.Collections.Generic;
using System.Configuration;
using System.DirectoryServices.AccountManagement;
using System.Linq;
using System.Web;

namespace FIDOVictoryWS.Managers.Login
{
    public class LoginManager
    {
        public bool Authenticate(string user, string password)
        {
            string domainName = ConfigurationManager.AppSettings["FIDO.Victory.Security.DomainName"];
            bool authenticated = false;
            using (PrincipalContext pc = new PrincipalContext(ContextType.Domain, domainName))
            {
                // validate the credentials
                authenticated = pc.ValidateCredentials(user, password, ContextOptions.Negotiate);
            }

            return authenticated;
        }

        public bool CheckUserInAD(string username)
        {
            string domainName = ConfigurationManager.AppSettings["FIDO.Victory.Security.DomainName"];

            using (var domainContext = new PrincipalContext(ContextType.Domain, domainName))
            {
                using (UserPrincipal user = UserPrincipal.FindByIdentity(domainContext, IdentityType.SamAccountName, username))
                {
                    if (user != null) return true;
                }
            }

            return false;
        }
    }
}