using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.UserType
{
    public class UserType
    {
        public static UserType SRR = new UserType() { UserTypeID = 1, Name = "SRR" };
        public static UserType IRP = new UserType() { UserTypeID = 2, Name = "IRP" };
        public static UserType LeadSRR = new UserType() { UserTypeID = 3, Name = "LeadSRR" };
        public static UserType Admin = new UserType() { UserTypeID = 4, Name = "Admin" };

        public Int32 UserTypeID { get; set; }
        public String Name { get; set; }
    }
}