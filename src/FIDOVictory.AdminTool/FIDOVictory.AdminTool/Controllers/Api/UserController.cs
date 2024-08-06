using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using FIDOVictory.AdminTool.Managers;
using FIDOVictory.AdminTool.Models.User;
using FIDOVictory.AdminTool.Models.UserType;

namespace FIDOVictory.AdminTool.Controllers.Api
{
     
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        private const int FullListingFirstPage = 1;
        private const int FullListingPageSize = 1000;

        [Route("")]
        public List<UserItem> GetUsers(string filter)
        {
            var userManager = new UserManager();
            
            var userList = userManager.List(FullListingFirstPage, FullListingPageSize, null, filter);
            return userList.List;
        }

        [Route("srr")]
        public List<UserItem> GetSRRs(string filter)
        {
            var userManager = new UserManager();

            //Dropdown for SRR – this should include all users with usertype = 1 and 3
            var srrs = userManager.List(FullListingFirstPage, FullListingPageSize, UserType.SRR.UserTypeID, filter);
            var leadsrrs = userManager.List(FullListingFirstPage, FullListingPageSize, UserType.LeadSRR.UserTypeID, filter);

            var list = srrs.List.Union(leadsrrs.List);

            //Sort this dropdown by Last Name Asc 
            return list.OrderBy(u => u.LName).ThenBy(u => u.FName).ToList();
        }

        [Route("leadsrr")]
        public List<UserItem> GetLeadSRRs(string filter)
        {
            var userManager = new UserManager();

            var userList = userManager.List(FullListingFirstPage, FullListingPageSize, UserType.LeadSRR.UserTypeID, filter);
            return userList.List;
        }

        [Route("irp")]
        public List<UserItem> GetIRPs(string filter)
        {
            var userManager = new UserManager();

            //DropDown for IRP should include: all usertype = 2 and 4 (in most cases we want the IRP to have admin authority. In production we do not use the IRP usertype = 2 right now. 

            var irps = userManager.List(FullListingFirstPage, FullListingPageSize, UserType.IRP.UserTypeID, filter);
            var admins = userManager.List(FullListingFirstPage, FullListingPageSize, UserType.Admin.UserTypeID, filter);

            var list = irps.List.Union(admins.List);

            //Sort this dropdown by Last Name Asc 
            return list.OrderBy(u => u.LName).ThenBy(u => u.FName).ToList();
        }

        [Route("admin")]
        public List<UserItem> GetAdmins(string filter)
        {
            var userManager = new UserManager();

            var userList = userManager.List(FullListingFirstPage, FullListingPageSize, UserType.Admin.UserTypeID, filter);
            return userList.List;
        }

    }
}