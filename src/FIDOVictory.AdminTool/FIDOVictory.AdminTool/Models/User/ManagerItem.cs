using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.User
{
    public class ManagerItem
    {
        public Int32 ManagerID { get; set; }
        public String FName { get; set; }
        public String LName { get; set; }
        public String Name {
            get {
                return FName + " " + LName;
            }
        }
    }
}