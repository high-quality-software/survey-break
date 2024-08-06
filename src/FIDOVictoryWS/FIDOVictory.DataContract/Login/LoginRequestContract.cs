using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.DataContract.Login
{
    public class LoginRequestContract
    {
        public String UserAlias { get; set; }
        public String Password { get; set; }
    }
}