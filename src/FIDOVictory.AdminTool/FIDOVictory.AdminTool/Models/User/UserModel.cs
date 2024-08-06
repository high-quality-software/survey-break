using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.User
{
    public class UserModel : UserItem
    {
        [Required(ErrorMessage = "User type is required")]
        public Int32 UserTypeID { get; set; }

        public String CellNumber { get; set; }
        public String OfficeNumber { get; set; }
        public String SiteLocation { get; set; }
        public Int32 InternalOption { get; set; }

        public Int32? ManagerID { get; set; }

        public Boolean IsInternal
        {
            get
            {
                return this.InternalOption == (Int32)LookupEnum.Yes;
            }
        }

        public static string GetCurrentUserName()
        {
            var currentUserName = HttpContext.Current.User.Identity.Name;
            if (currentUserName.Contains("\\"))
            {
                string[] s = currentUserName.Split('\\');

                currentUserName = s[1];
            }

            return currentUserName;
        }

    }
}