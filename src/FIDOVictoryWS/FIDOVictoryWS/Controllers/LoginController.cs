using System;
using System.Collections.Generic;
using System.Configuration;
using System.DirectoryServices.AccountManagement;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using FIDOVictory.Common.Repository;
using FIDOVictory.Common.Tools;
using FIDOVictory.DataContract.Login;
using FIDOVictory.DataContract.User;
using FIDOVictory.Tools;
using FIDOVictoryWS.Managers;
using FIDOVictoryWS.Managers.Login;
using FIDOVictoryWS.Models;
using FIDOVictoryWS.Models.Security;

namespace FIDOVictoryWS.Controllers
{
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        [Route("")]
        [HttpPost]
        public LoginResponseContract Login(LoginRequestContract login)
        {
            var response = new LoginResponseContract() { Success = false };

            try
            {
                //beautify
                login.UserAlias = UserAliasBeautifier.Apply(login.UserAlias);

                var loginManager = new LoginManager();
                var authenticated = loginManager.Authenticate(login.UserAlias, login.Password);

                if (authenticated)
                {
                    var userRepository = new UserRepository();
                    var u = userRepository.GetUserByAlias(login.UserAlias);
                    response.User = new UserItem() { 
                        UserID = u.User_ID,
                        UserAlias = u.UserAlias,
                        FirstName = u.FName,
                        LastName = u.LName,
                        UserTypeID = u.UserType_ID,
                    };

                    if (userRepository.HasTrialAssigned(u.UserAlias))
                    {

                        //when user is SRR
                        if (response.User.UserTypeID == (int)UserTypeEnum.SRR)
                        {
                            var formManager = new Managers.Form.FormManager();
                            var currentYear = DateTime.Now.Year;

                            //and don't have evaluations
                            var evaluations = formManager.GetSRREvaluations(response.User.UserAlias, currentYear, LastSync.Never);

                            //he must fill one
                            response.User.SRRMustFillEvaluation = evaluations.Count == 0;
                        }

                        response.Success = true;
                    }
                    else
                    {
                        response.ErrorCode = "2";
                        response.ErrorDescription = "NoTrialAssigned";
                        response.ExceptionMessage = "You do not have any trials assigned to your userid, please contact the super user at your site.";
                    }
                }
                else
                {
                    //checking if useralias exists into AD
                    if (!loginManager.CheckUserInAD(login.UserAlias))
                    {
                        var log = log4net.LogManager.GetLogger(typeof(LoginController));
                        log.WarnFormat("Login attempt with nonexistent user: {0}.", login.UserAlias);
                    }

                    response.ErrorCode = "1";
                    response.ErrorDescription = "Unauthenticated";
                    response.ExceptionMessage = "Username or password is incorrect. Please try again.";
                }
            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                response.ErrorCode = "NA";
                response.ErrorDescription = "KNOWN";
                response.ExceptionMessage = ex.Message;
            }

            return response;
        }
    }
}
