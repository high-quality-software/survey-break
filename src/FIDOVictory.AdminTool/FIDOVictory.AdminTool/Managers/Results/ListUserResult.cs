using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Models.User;

namespace FIDOVictory.AdminTool.Managers.Results
{
    public class ListUserResult : AbstractListResult<UserItem>
    {
        public ListUserResult()
        {
            this.List = new List<UserItem>();
        }
    }
}