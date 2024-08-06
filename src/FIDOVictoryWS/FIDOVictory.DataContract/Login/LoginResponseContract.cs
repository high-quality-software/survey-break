using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.DataContract.User;

namespace FIDOVictory.DataContract.Login
{
    public class LoginResponseContract : BaseResponseContract
    {
        public UserItem User { get; set; }
    }
}