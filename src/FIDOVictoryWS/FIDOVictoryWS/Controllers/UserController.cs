using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FIDOVictory.Common.Repository;
using FIDOVictory.DataContract.User;

namespace FIDOVictoryWS.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {

        [Route("")]
        public List<UserContract> GetAllUsers(DateTime lastSync)
        {
            var list = new List<UserContract>();

            var userRepository = new UserRepository();
            var users = userRepository.GetUsers(lastSync);

            foreach (var u in users)
            {
                list.Add(new UserContract()
                {
                    UserID = u.User_ID,
                    UserAlias = u.UserAlias,
                    FirstName = u.FName,
                    LastName = u.LName,
                    Email = u.Email,
                    OfficeNumber = u.OfficeNumber,
                    SiteLocation = u.SiteLocation,
                    UserTypeID = u.UserType_ID,
                });
            }

            return list;
        }

    }
}
