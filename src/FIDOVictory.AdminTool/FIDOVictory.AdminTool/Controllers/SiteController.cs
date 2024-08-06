using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcFlashMessages;
using FIDOVictory.AdminTool.Tools.Session;
using FIDOVictory.AdminTool.Models.Site;
using FIDOVictory.AdminTool.Managers;
using FIDOVictory.AdminTool.Tools;

namespace FIDOVictory.AdminTool.Controllers
{
    [RoutePrefix("Site")]
    public class SiteController : Controller
    {
        readonly log4net.ILog logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        [Route("", Name = "ListSites")]
        public ActionResult Index(string searchFilter, int? page)
        {
            var session = UserSessionHelper.GetCurrent();
            session.CurrentSiteSearchFilter.Update(page, searchFilter);

            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var sitelist = new SiteManager().List(
                session.CurrentSiteSearchFilter.Page,
                session.PageSize,
                session.CurrentSiteSearchFilter.Filter);


            var pagedList =
                new VictoryPagedList<SiteItem>(
                    sitelist.List,
                    session.CurrentSiteSearchFilter.Page,
                    session.PageSize,
                    sitelist.RowCount);

            ViewBag.Session = session;
            return View(pagedList);

        }

        [Route("Create", Name = "GetCreateSite")]
        [ActionName("Create"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetCreateSite()
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var model = new SiteModel();
            LoadViewBag(model);

            return View(model);
        }

        private void LoadViewBag(SiteModel model)
        {
            

        }

        [Route("Create", Name = "PostCreateSite")]
        [ActionName("Create"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult PostCreateSite(SiteModel site)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            if (ModelState.IsValid)
            {
                try
                {
                    var manager = new SiteManager();
                    var createSiteResult = manager.Create(site, session.CurrentUserName);

                    if (createSiteResult.ReturnCode == 0)
                    {
                        this.Flash("info", "Site successfully saved");
                        return RedirectToAction("Index", "Site");
                    }
                    else
                    {
                        logger.ErrorFormat("User: {0}, Exception error creating site: {1}", session.CurrentUserName, createSiteResult.ErrorMessage);

                        this.Flash("error", "An error has ocurred while creating a new site");

                    }

                }
                catch (Exception ex)
                {
                    logger.ErrorFormat("User: {0}, Exception error creating site: {1}", session.CurrentUserName, ex);

                    this.Flash("error", "An error has ocurred while creating a new site");

                }
            }

            LoadViewBag(site);
            return View(site);

        }


        [Route("{id:int}/Delete", Name = "GetDeleteSiteBySiteID")]
        [ActionName("Delete"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetDeleteSiteBySiteID(int id)
        {
            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var manager = new SiteManager();
            var model = manager.GetSiteByID(id);

            return View(model);
        }

        [Route("{id:int}/Delete", Name = "DeleteSiteBySiteID")]
        [ActionName("Delete"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult DeleteSiteBySiteID(int id)
        {
            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var manager = new SiteManager();
            try
            {
                var deleteSiteResult = manager.Delete(id, session.CurrentUserName);

                if (deleteSiteResult.ReturnCode == 0)
                {
                    this.Flash("info", "Site successfully deleted");
                    return RedirectToAction("Index", "Site");
                }
                else
                {
                    logger.ErrorFormat("User: {0}, Exception error deleting site: {1}", session.CurrentUserName, deleteSiteResult.ErrorMessage);

                    this.Flash("error", "An error has ocurred while deleting a site");

                }

            }
            catch (Exception ex)
            {
                logger.ErrorFormat("User: {0}, Exception error deleting site: {1}", session.CurrentUserName, ex);

                this.Flash("error", "An error has ocurred while deleting a site");

            }


            var model = manager.GetSiteByID(id);

            LoadViewBag(model);
            return View(model);

        }

        [Route("{id:int}/Edit", Name = "GetEditSiteBySiteID")]
        [ActionName("Edit"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetEditSiteBySiteID(int id)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var manager = new SiteManager();
            var model = manager.GetSiteByID(id);

            LoadViewBag(model);
            return View(model);
        }

        [Route("{id:int}/Edit", Name = "PostEditSiteBySiteID")]
        [ActionName("Edit"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult PostEditSiteBySiteID(int id, SiteModel site)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            if (ModelState.IsValid)
            {

                using (var ec = new Data.REGFIELDTRIALSEntities())
                {

                    try
                    {
                        var manager = new SiteManager();
                        var updateSiteResult = manager.Update(site, session.CurrentUserName);

                        if (updateSiteResult.ReturnCode == 0)
                        {
                            this.Flash("info", "Site successfully updated");
                            return RedirectToAction("Index", "Site");
                        }
                        else
                        {
                            logger.ErrorFormat("User: {0}, Exception error updating site: {1}", session.CurrentUserName, updateSiteResult.ErrorMessage);

                            this.Flash("error", "An error has ocurred while updating a site");
                        }
                    }
                    catch (Exception ex)
                    {
                        logger.ErrorFormat("User: {0}, Exception error updating site: {1}", session.CurrentUserName, ex);

                        this.Flash("error", "An error has ocurred while updating a site");

                    }
                }
            }

            LoadViewBag(site);
            return View(site);

        }
    }
}