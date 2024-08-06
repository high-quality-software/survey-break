using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FIDOVictory.AdminTool.Models.User
{
    public class UserItem
    {
        public Int32 UserID { get; set; }

        [Required(ErrorMessage = "First name is required")]
        [StringLength(50, ErrorMessage = "Name can be no larger than 50 characters")]
        public String FName { get; set; }

        [Required(ErrorMessage = "Last name is required")]
        [StringLength(50, ErrorMessage = "Name can be no larger than 50 characters")]
        public String LName { get; set; }

        [Required(ErrorMessage = "Monsanto User ID is required")]
        [StringLength(50, ErrorMessage = "Monsanto User ID can be no larger than 50 characters")]
        public String Alias { get; set; }

        public String Email { get; set; }

    }
}