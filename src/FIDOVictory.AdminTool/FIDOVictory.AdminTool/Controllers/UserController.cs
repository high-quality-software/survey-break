using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FIDOVictory.AdminTool.Tools;
using FIDOVictory.AdminTool.Tools.Session;
using PagedList;
using MvcFlashMessages;
using FIDOVictory.AdminTool.Models.User;
using FIDOVictory.AdminTool.Managers;

namespace FIDOVictory.AdminTool.Controllers
{
    [RoutePrefix("User")]
    public class UserController : Controller
    {
        readonly log4net.ILog logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        private const string kMonsantoUserIDExists = "Monsanto User ID entered currently exists.";
        private const string kNoRowUpdated = "No row updated because non deleted user doesn't exist with indicated user_id.";
        private const string kCannotDeleteUserAssignedAsLeadSRR = "Cannot delete user because is assigned as Lead SRR to at least one trial";

        [Route("", Name = "ListUsers")]
        public ActionResult Index(string searchFilter, int? page)
        {
            var session = UserSessionHelper.GetCurrent();
            session.CurrentUserSearchFilter.Update(page, searchFilter);

            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var userlist = new UserManager().List(
                session.CurrentUserSearchFilter.Page,
                session.PageSize,
                null,
                session.CurrentUserSearchFilter.Filter);


            var pagedList =
                new VictoryPagedList<UserItem>(
                    userlist.List,
                    session.CurrentUserSearchFilter.Page,
                    session.PageSize,
                    userlist.RowCount);

            ViewBag.Session = session;
            return View(pagedList);

        }

        [Route("Create", Name = "GetCreateUser")]
        [ActionName("Create"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetCreateUser()
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var model = new UserModel();
            LoadViewBag(model);

            ViewBag.Session = session;
            return View(model);
        }

        private void LoadViewBag(UserModel model)
        {

            var manager = new UserManager();
            ViewBag.UserTypeList = new SelectList(manager.GetAllUserTypes(), "UserTypeID", "Name");

            var internalOptionList = new LookupManager().GetBooleanSelectList();
            ViewBag.InternalOptionList = new SelectList(internalOptionList, "Value", "Text");

            var selectedManagerList = new List<ManagerItem>();
            if (model.ManagerID != null)
            {
                var selectedManager = manager.GetManager(model.ManagerID.Value);
                selectedManagerList.Add(selectedManager);
            }
            ViewBag.SelectedManagerList = new SelectList(selectedManagerList, "ManagerID", "Name");

        }

        [Route("Create", Name = "PostCreateUser")]
        [ActionName("Create"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult PostCreateUser(UserModel user)
        {
            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            if (ModelState.IsValid)
            {

                using (var ec = new Data.REGFIELDTRIALSEntities())
                {

                    try
                    {
                        var result = ec.usp_Create_User(
                            user.Alias,
                            user.UserTypeID,
                            user.FName,
                            user.LName,
                            user.Email,
                            user.OfficeNumber,
                            user.CellNumber,
                            user.SiteLocation,
                            user.ManagerID,
                            user.IsInternal,
                            session.CurrentUserName);

                        var createUserResult = result.First();
                        if (createUserResult.ReturnCode == 0)
                        {
                            this.Flash("info", "User successfully saved");
                            return RedirectToAction("Index", "User");
                        }
                        else
                        {
                            if (createUserResult.ErrorMessage.ToUpper().Contains("IDX_USER_USERALIAS"))
                            {
                                logger.WarnFormat("User: {0}, duplicated user alias: {1}", session.CurrentUserName, createUserResult.ErrorMessage);

                                this.Flash("warning", kMonsantoUserIDExists);
                            }
                            else
                            {
                                logger.ErrorFormat("User: {0}, Exception error creating user: {1}", session.CurrentUserName, createUserResult.ErrorMessage);

                                this.Flash("error", "An error has ocurred while creating a new user");
                            }

                        }


                    }
                    catch (Exception ex)
                    {
                        logger.ErrorFormat("User: {0}, Exception error creating user: {1}", session.CurrentUserName, ex);

                        this.Flash("error", "An error has ocurred while creating a new user");

                    }
                }
            }

            LoadViewBag(user);
            ViewBag.Session = session;
            return View(user);

        }


        [Route("{id:int}/Delete", Name = "GetDeleteUserByUserID")]
        [ActionName("Delete"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetDeleteUserByUserID(int id)
        {
            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var manager = new UserManager();
            var model = manager.GetUserByID(id);

            return View(model);
        }

        [Route("{id:int}/Delete", Name = "DeleteUserByUserID")]
        [ActionName("Delete"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult DeleteUserByUserID(int id)
        {
            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            using (var ec = new Data.REGFIELDTRIALSEntities())
            {

                try
                {
                    var result = ec.usp_Delete_User_ByUserID(id, session.CurrentUserName);
                    var deleteUserResult = result.First();
                    if (deleteUserResult.ReturnCode == 0)
                    {
                        this.Flash("info", "User successfully deleted");
                        return RedirectToAction("Index", "User");
                    }
                    else
                    {
                        if (deleteUserResult.ErrorMessage.ToUpper().Contains("ASSIGNED AS LEAD SRR"))
                        {
                            logger.WarnFormat("User: {0}, cannot delete user: {1}", session.CurrentUserName, deleteUserResult.ErrorMessage);

                            this.Flash("warning", kCannotDeleteUserAssignedAsLeadSRR);
                        }
                        else if (deleteUserResult.ErrorMessage.ToUpper().Contains("NO ROW UPDATED"))
                        {
                            logger.WarnFormat("User: {0}, non deleted user doesn't currently exists: {1}", session.CurrentUserName, deleteUserResult.ErrorMessage);

                            this.Flash("warning", kNoRowUpdated);
                        }
                        else
                        {
                            logger.ErrorFormat("User: {0}, Exception error deleting user: {1}", session.CurrentUserName, deleteUserResult.ErrorMessage);

                            this.Flash("error", "An error has ocurred while deleting user");
                        }
                    }

                }
                catch (Exception ex)
                {
                    logger.ErrorFormat("User: {0}, Exception error deleting user: {1}", session.CurrentUserName, ex);

                    this.Flash("error", "An error has ocurred while deleting user");

                }
            }

            var manager = new UserManager();
            var model = manager.GetUserByID(id);

            LoadViewBag(model);
            return View(model);

        }

        [Route("{id:int}/Edit", Name = "GetEditUserByUserID")]
        [ActionName("Edit"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetEditUserByUserID(int id)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var manager = new UserManager();
            var model = manager.GetUserByID(id);

            LoadViewBag(model);
            ViewBag.Session = session;
            return View(model);
        }

        [Route("{id:int}/Edit", Name = "PostEditUserByUserID")]
        [ActionName("Edit"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult PostEditUserByUserID(int id, UserModel user)
        {
            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            if (ModelState.IsValid)
            {

                using (var ec = new Data.REGFIELDTRIALSEntities())
                {

                    try
                    {
                        var result = ec.usp_Update_User(
                            user.UserID,
                            user.Alias,
                            user.UserTypeID,
                            user.FName,
                            user.LName,
                            user.Email,
                            user.OfficeNumber,
                            user.CellNumber,
                            user.SiteLocation,
                            user.ManagerID,
                            user.IsInternal,
                            session.CurrentUserName);

                        var createUserResult = result.First();
                        if (createUserResult.ReturnCode == 0)
                        {
                            this.Flash("info", "User successfully saved");
                            return RedirectToAction("Index", "User");
                        }
                        else
                        {
                            if (createUserResult.ErrorMessage.ToUpper().Contains("IDX_USER_USERALIAS"))
                            {
                                logger.WarnFormat("User: {0}, duplicated user alias: {1}", session.CurrentUserName, createUserResult.ErrorMessage);

                                this.Flash("warning", kMonsantoUserIDExists);
                            }
                            else
                            {
                                logger.ErrorFormat("User: {0}, Exception error updating user: {1}", session.CurrentUserName, createUserResult.ErrorMessage);

                                this.Flash("error", "An error has ocurred while updating a user");
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        logger.ErrorFormat("User: {0}, Exception error updating user: {1}", session.CurrentUserName, ex);

                        this.Flash("error", "An error has ocurred while updating a user");

                    }
                }
            }

            LoadViewBag(user);

            ViewBag.Session = session;
            return View(user);

        }

    }
}
