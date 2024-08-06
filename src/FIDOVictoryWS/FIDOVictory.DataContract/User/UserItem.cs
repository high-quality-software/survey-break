using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.DataContract.User
{
    public class UserItem
    {
        public Int32 UserID { get; set; }
        public String UserAlias { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }

        public Int32 UserTypeID { get; set; }
        public Boolean SRRMustFillEvaluation { get; set; }
    }
}