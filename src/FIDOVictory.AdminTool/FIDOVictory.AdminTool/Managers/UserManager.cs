using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FIDOVictory.AdminTool.Managers.Results;
using FIDOVictory.AdminTool.Models.User;

namespace FIDOVictory.AdminTool.Managers
{
    public class UserManager
    {
        public List<UserTypeItem> GetAllUserTypes()
        {
            List<UserTypeItem> list = new List<UserTypeItem>();

            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = from ut in ec.UserTypes
                             where ut.IsDeleted == false
                             select ut;

                foreach (var r in result)
                {
                    list.Add(new UserTypeItem()
                    {
                        UserTypeID = r.UserType_ID,
                        Name = r.UserTypeName,
                    });
                }
            }

            return list;
        }

        public UserTypeItem GetUserType(int userTypeID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = from ut in ec.UserTypes
                             where ut.IsDeleted == false
                                && ut.UserType_ID == userTypeID
                             select ut;

                foreach (var r in result)
                {
                    return new UserTypeItem()
                    {
                        UserTypeID = r.UserType_ID,
                        Name = r.UserTypeName,
                    };
                }
            }

            return null;
        }

        public UserModel GetUserByID(int userID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var userRow = ec.usp_Get_User_ByUserID(userID).SingleOrDefault();
                if (userRow != null)
                {
                    var userModel = new UserModel();

                    userModel.UserID = userRow.User_ID;
                    userModel.UserTypeID = userRow.UserType_ID;
                    userModel.Alias = userRow.UserAlias;
                    userModel.Email = userRow.Email;
                    userModel.FName = userRow.FName;
                    userModel.LName = userRow.LName;
                    userModel.CellNumber = userRow.CellNumber;
                    userModel.ManagerID = userRow.Manager_ID;
                    userModel.OfficeNumber = userRow.OfficeNumber;
                    userModel.SiteLocation = userRow.SiteLocation;

                    userModel.InternalOption = (Int32)Models.LookupEnum.No;
                    if (userRow.Internal.HasValue && userRow.Internal.Value == true)
                    {
                        userModel.InternalOption = (Int32)Models.LookupEnum.Yes;
                    }

                    return userModel;
                }
            }

            return null;
        }

        public UserModel GetUserByAlias(string alias)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var userRow = ec.usp_Get_User_ByUserAlias(alias).SingleOrDefault();
                if (userRow != null)
                {
                    var userModel = new UserModel();

                    userModel.UserID = userRow.User_ID;
                    userModel.UserTypeID = userRow.UserType_ID;
                    userModel.Alias = userRow.UserAlias;
                    userModel.Email = userRow.Email;
                    userModel.FName = userRow.FName;
                    userModel.LName = userRow.LName;
                    userModel.CellNumber = userRow.CellNumber;
                    userModel.ManagerID = userRow.Manager_ID;
                    userModel.OfficeNumber = userRow.OfficeNumber;
                    userModel.SiteLocation = userRow.SiteLocation;

                    userModel.InternalOption = (Int32)Models.LookupEnum.No;
                    if (userRow.Internal.HasValue && userRow.Internal.Value == true)
                    {
                        userModel.InternalOption = (Int32)Models.LookupEnum.Yes;
                    }

                    return userModel;
                }
            }

            return null;
        }

        public ManagerItem GetManager(int userID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var userRow = ec.usp_Get_User_ByUserID(userID).SingleOrDefault();
                if (userRow != null)
                {
                    var managerItem = new ManagerItem();

                    managerItem.ManagerID = userRow.User_ID;
                    managerItem.FName = userRow.FName;
                    managerItem.LName = userRow.LName;

                    return managerItem;
                }
            }

            return null;
        }

        public SRRUserItem GetSRRUser(int SRRUserID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var userRow = ec.usp_Get_User_ByUserID(SRRUserID).SingleOrDefault();
                if (userRow != null)
                {
                    var item = new SRRUserItem();

                    item.SRRUserID = userRow.User_ID;
                    item.FName = userRow.FName;
                    item.LName = userRow.LName;

                    return item;
                }
            }

            return null;
        }

        public SRRUserItem GetPrimarySRRUserByTrialID(int trialID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var primarySRRUserID = (from x in ec.SRRUser_Trial_Xref
                                        where x.IsDeleted == false
                                              && x.PrimarySRR == true
                                              && x.Trial_ID == trialID
                                        select x.SRRUser_ID).FirstOrDefault();

                if (primarySRRUserID != null)
                {
                    return this.GetSRRUser(primarySRRUserID);
                }
            }

            return null;
        }

        public SRRLeadUserItem GetSRRLeadUser(int SRRLeadUserID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var userRow = ec.usp_Get_User_ByUserID(SRRLeadUserID).SingleOrDefault();
                if (userRow != null)
                {
                    var item = new SRRLeadUserItem();

                    item.SRRLeadUserID = userRow.User_ID;
                    item.FName = userRow.FName;
                    item.LName = userRow.LName;

                    return item;
                }
            }

            return null;
        }

        public IRPUserItem GetIRPUser(int IRPUserID)
        {
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var userRow = ec.usp_Get_User_ByUserID(IRPUserID).SingleOrDefault();
                if (userRow != null)
                {
                    var item = new IRPUserItem();

                    item.IRPUserID = userRow.User_ID;
                    item.FName = userRow.FName;
                    item.LName = userRow.LName;

                    return item;
                }
            }

            return null;
        }

        /// <summary>
        /// List users order by last name and then by first name
        /// </summary>
        /// <param name="page"></param>
        /// <param name="pageSize"></param>
        /// <param name="userTypeID"></param>
        /// <param name="filter"></param>
        /// <returns></returns>
        public ListUserResult List(int page, int pageSize, int? userTypeID = null, string filter = null)
        {

            var userList = new ListUserResult();

            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var result = ec.usp_PaginatedList_Users(
                    page,
                    pageSize,
                    userTypeID,
                    filter).OrderBy(u => u.LName).ThenBy(u => u.FName);

                foreach (var r in result)
                {
                    if (userList.RowCount == 0) userList.RowCount = r.RowCount.Value;

                    userList.List.Add(new UserItem()
                    {
                        UserID = r.User_ID,
                        FName = r.FName,
                        LName = r.LName,
                        Alias = r.UserAlias,
                        Email = r.Email,
                    });
                }
            }

            return userList;
        }


    }
}