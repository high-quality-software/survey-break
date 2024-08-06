using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FIDOVictory.AdminTool.Managers;
using FIDOVictory.AdminTool.Models.Chemical;
using FIDOVictory.AdminTool.Tools;
using FIDOVictory.AdminTool.Tools.Session;
using MvcFlashMessages;

namespace FIDOVictory.AdminTool.Controllers
{
    [RoutePrefix("Chemical")]
    public class ChemicalController : Controller
    {
        readonly log4net.ILog logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        [Route("", Name = "ListChemicals")]
        public ActionResult Index(string searchFilter, int? page)
        {
            var session = UserSessionHelper.GetCurrent();
            session.CurrentChemicalSearchFilter.Update(page, searchFilter);

            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var userlist = new ChemicalManager().List(
                session.CurrentChemicalSearchFilter.Page,
                session.PageSize,
                session.CurrentChemicalSearchFilter.Filter);


            var pagedList =
                new VictoryPagedList<ChemicalItem>(
                    userlist.List,
                    session.CurrentChemicalSearchFilter.Page,
                    session.PageSize,
                    userlist.RowCount);

            ViewBag.Session = session;
            return View(pagedList);

        }

        [Route("Create", Name = "GetCreateChemical")]
        [ActionName("Create"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetCreateChemical()
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var model = new ChemicalModel();
            LoadViewBag(model);

            return View(model);
        }

        private void LoadViewBag(ChemicalModel model)
        {

            var manager = new ChemicalManager();
            ViewBag.ChemicalTypeList = new SelectList(manager.GetAllChemicalTypes(), "ChemicalTypeID", "Name");

        }

        [Route("Create", Name = "PostCreateChemical")]
        [ActionName("Create"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult PostCreateChemical(ChemicalModel chemical)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            if (ModelState.IsValid)
            {

                try
                {
                    var manager = new ChemicalManager();
                    var createChemicalResult = manager.Create(chemical, session.CurrentUserName);

                    if (createChemicalResult.ReturnCode == 0)
                    {
                        this.Flash("info", "Chemical successfully saved");
                        return RedirectToAction("Index", "Chemical");
                    }
                    else
                    {
                        logger.ErrorFormat("User: {0}, Exception error creating chemical: {1}", session.CurrentUserName, createChemicalResult.ErrorMessage);

                        this.Flash("error", "An error has ocurred while creating a new chemical");

                    }

                }
                catch (Exception ex)
                {
                    logger.ErrorFormat("User: {0}, Exception error creating chemical: {1}", session.CurrentUserName, ex);

                    this.Flash("error", "An error has ocurred while creating a new chemical");

                }

            }

            LoadViewBag(chemical);
            return View(chemical);

        }


        [Route("{id:int}/Delete", Name = "GetDeleteChemicalByChemicalID")]
        [ActionName("Delete"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetDeleteChemicalByChemicalID(int id)
        {
            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var manager = new ChemicalManager();
            var model = manager.GetChemicalByID(id);

            return View(model);
        }

        [Route("{id:int}/Delete", Name = "DeleteChemicalByChemicalID")]
        [ActionName("Delete"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult DeleteChemicalByChemicalID(int id)
        {
            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var manager = new ChemicalManager();
            try
            {
                var deleteChemicalResult = manager.Delete(id, session.CurrentUserName);

                if (deleteChemicalResult.ReturnCode == 0)
                {
                    this.Flash("info", "Chemical successfully deleted");
                    return RedirectToAction("Index", "Chemical");
                }
                else
                {
                    logger.ErrorFormat("User: {0}, Exception error deleting chemical: {1}", session.CurrentUserName, deleteChemicalResult.ErrorMessage);

                    this.Flash("error", "An error has ocurred while deleting a chemical");

                }

            }
            catch (Exception ex)
            {
                logger.ErrorFormat("User: {0}, Exception error deleting chemical: {1}", session.CurrentUserName, ex);

                this.Flash("error", "An error has ocurred while deleting chemical");

            }


            var model = manager.GetChemicalByID(id);

            LoadViewBag(model);
            return View(model);

        }

        [Route("{id:int}/Edit", Name = "GetEditChemicalByChemicalID")]
        [ActionName("Edit"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetEditChemicalByChemicalID(int id)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var manager = new ChemicalManager();
            var model = manager.GetChemicalByID(id);

            LoadViewBag(model);
            return View(model);
        }

        [Route("{id:int}/Edit", Name = "PostEditChemicalByChemicalID")]
        [ActionName("Edit"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult PostEditChemicalByChemicalID(int id, ChemicalModel chemical)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            if (ModelState.IsValid)
            {
                using (var ec = new Data.REGFIELDTRIALSEntities())
                {

                    try
                    {
                        var manager = new ChemicalManager();
                        var updateChemicalResult = manager.Update(chemical, session.CurrentUserName);

                        if (updateChemicalResult.ReturnCode == 0)
                        {
                            this.Flash("info", "Chemical successfully updated");
                            return RedirectToAction("Index", "Chemical");
                        }
                        else
                        {
                            logger.ErrorFormat("User: {0}, Exception error updating chemical: {1}", session.CurrentUserName, updateChemicalResult.ErrorMessage);

                            this.Flash("error", "An error has ocurred while updating a chemical");
                        }
                    }
                    catch (Exception ex)
                    {
                        logger.ErrorFormat("User: {0}, Exception error updating chemical: {1}", session.CurrentUserName, ex);

                        this.Flash("error", "An error has ocurred while updating a chemical");

                    }
                }
            }

            LoadViewBag(chemical);
            return View(chemical);

        }
    }
}