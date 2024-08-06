using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.DataContract.User
{
    public class UserContract : UserItem
    {
        public String Email { get; set; }
        public String OfficeNumber { get; set; }
        public String SiteLocation { get; set; }

    }
}