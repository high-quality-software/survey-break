using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FIDOVictory.AdminTool.Models;
using FIDOVictory.AdminTool.Tools;
using FIDOVictory.AdminTool.Tools.Session;
using PagedList;
using MvcFlashMessages;
using FIDOVictory.AdminTool.Models.User;
using FIDOVictory.AdminTool.Managers;
using FIDOVictory.AdminTool.Models.Trial;
using FIDOVictory.AdminTool.Models.Crop;
using FIDOVictory.AdminTool.Models.Trait;
using FIDOVictory.AdminTool.Models.Site;


namespace FIDOVictory.AdminTool.Controllers
{
    [RoutePrefix("Trial")]
    public class TrialController : Controller
    {
        readonly log4net.ILog logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        private readonly int kAutoGenerateTrialID = 99999999;
        private const string kNoRowUpdated = "No row updated because non deleted trial doesn't exist with indicated trial_id.";

        [Route("", Name = "ListTrials")]
        public ActionResult Index(string searchTrialID, string searchTrialName, int? page)
        {
            var session = UserSessionHelper.GetCurrent();
            session.CurrentTrialSearchFilter.Update(page, searchTrialID, searchTrialName);

            logger.DebugFormat("User: {0}", session.CurrentUserID);


            var trialList = new List<ViewModels.TrialItem>();
            int? rowCount = 0;
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var currentUserAlias = UserModel.GetCurrentUserName();
                var result = ec.usp_PaginatedList_Trials(
                        session.CurrentTrialSearchFilter.Page,
                        session.PageSize,
                        session.CurrentTrialSearchFilter.TrialID,
                        session.CurrentTrialSearchFilter.TrialName,
                        session.CurrentUserName);

                foreach (var r in result)
                {
                    rowCount = r.RowCount;
                    trialList.Add(new ViewModels.TrialItem()
                    {
                        TrialID = r.Trial_ID,
                        Year = r.Trial_Year.HasValue ? r.Trial_Year.Value : 0,
                        Farm = r.Farm_Name,
                        Name = r.Trial_Name,
                        Crop = r.Crop_Name,
                        Trait = r.Trait_Name,
                        PrimarySRR = r.PrimarySRR,
                        Site = r.Site_Name
                    });
                }
            }

            var pagedList = new VictoryPagedList<ViewModels.TrialItem>(trialList,
                session.CurrentTrialSearchFilter.Page,
                session.PageSize,
                rowCount.Value);

            ViewBag.Session = session;
            return View(pagedList);
        }

        [Route("Maps")]
        public ActionResult Maps(string searchTrialID, string searchTrialName, int? page)
        {

            var session = UserSessionHelper.GetCurrent();
            session.CurrentTrialSearchFilter.Update(page, searchTrialID, searchTrialName);

            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var trialMapReportList = new List<ViewModels.TrialMapReport>();
            var imageRepository = new Data.Repository.ImageRepository();

            int? rowCount = 0;
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var currentUserAlias = UserModel.GetCurrentUserName();
                var result = ec.usp_PaginatedList_TrialMaps(
                    session.CurrentTrialSearchFilter.Page,
                    session.PageSize,
                    session.CurrentTrialSearchFilter.TrialID,
                    session.CurrentTrialSearchFilter.TrialName,
                    session.CurrentUserName);

                foreach (var r in result)
                {
                    rowCount = r.RowCount;
                    trialMapReportList.Add(new ViewModels.TrialMapReport()
                    {
                        TrialID = r.Trial_ID,
                        Year = r.Trial_Year.HasValue ? r.Trial_Year.Value : 0,
                        Farm = r.Farm_Name,
                        Name = r.Trial_Name,
                        ImageID = r.Image_ID,
                    });
                }
            }

            var pagedList =
                new VictoryPagedList<ViewModels.TrialMapReport>(
                    trialMapReportList,
                    session.CurrentTrialSearchFilter.Page,
                    session.PageSize,
                    rowCount.Value);

            ViewBag.Session = session;
            return View(pagedList);
        }

        [Route("Create", Name = "GetCreateTrial")]
        [ActionName("Create"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetCreateTrial()
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var model = new CreateTrialModel();
            LoadViewBag(model);

            ViewBag.Session = session;
            return View(model);
        }

        [Route("{id:int}/Edit", Name = "GetEditTrialByTrialID")]
        [ActionName("Edit"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetEditTrialByTrialID(int id)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var trialManager = new TrialManager();
            var trial = trialManager.GetTrialByID(id);
            var userManager = new UserManager();
            var primarySRRUser = userManager.GetPrimarySRRUserByTrialID(id);


            var model = new EditTrialModel(trial);
            if (primarySRRUser != null)
            {
                model.PrimarySRRUserID = primarySRRUser.SRRUserID;
            }


            LoadViewBag(model);
            ViewBag.Session = session;
            return View(model);
        }

        [Route("Create", Name = "PostCreateTrial")]
        [ActionName("Create"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult PostCreateTrial(CreateTrialModel trial)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            if (ModelState.IsValid)
            {

                using (var ec = new Data.REGFIELDTRIALSEntities())
                {
                    using (var tx = ec.Database.BeginTransaction())
                    {
                        try
                        {
                            var result = ec.usp_Create_Trial(kAutoGenerateTrialID, trial.Name, trial.SRRLeadUserID, trial.IRPUserID, trial.CropID, trial.TraitID, trial.SiteID, trial.Year, trial.IsInternal, trial.City, trial.State, trial.Zip, trial.County, trial.Farm, trial.ComplianceStatus, session.CurrentUserName);

                            var createUserResult = result.First();
                            if (createUserResult.ReturnCode == 0)
                            {
                                try
                                {
                                    var result2 = ec.usp_Assign_PrimarySRR_ToTrial(trial.PrimarySRRUserID, createUserResult.TrialID.Value, session.CurrentUserName);

                                    var assignUserToTrialResult = result2.First();
                                    if (assignUserToTrialResult.ReturnCode == 0)
                                    {
                                        tx.Commit();
                                        this.Flash("info", "Trial successfully saved");
                                        return RedirectToAction("Index", "Trial");
                                    }
                                    else
                                    {
                                        tx.Rollback();

                                        logger.ErrorFormat("User: {0}, Exception error assigning a srr to a trial: {1}", session.CurrentUserName, assignUserToTrialResult.ErrorMessage);

                                        this.Flash("error", "An error has ocurred while assigning a srr to a trial");
                                    }


                                }
                                catch (Exception ex)
                                {

                                    tx.Rollback();

                                    logger.ErrorFormat("User: {0}, Exception error creating trial: {1}", session.CurrentUserName, ex);

                                    this.Flash("error", "An error has ocurred while creating a new trial");
                                }



                            }
                            else
                            {
                                tx.Rollback();
                                logger.ErrorFormat("User: {0}, Exception error creating trial: {1}", session.CurrentUserName, createUserResult.ErrorMessage);

                                this.Flash("error", "An error has ocurred while creating a new trial");

                            }
                        }
                        catch (Exception ex)
                        {
                            tx.Rollback();

                            logger.ErrorFormat("User: {0}, Exception error creating trial: {1}", session.CurrentUserName, ex);

                            this.Flash("error", "An error has ocurred while creating a new trial");

                        }
                    }
                }
            }

            LoadViewBag(trial);
            ViewBag.Session = session;
            return View(trial);
        }

        [Route("{id:int}/Edit", Name = "PostEditTrialByTrialID")]
        [ActionName("Edit"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult PostEditTrialByTrialID(int id, EditTrialModel trial)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            if (ModelState.IsValid)
            {
                using (var ec = new Data.REGFIELDTRIALSEntities())
                {
                    using (var tx = ec.Database.BeginTransaction())
                    {
                        try
                        {
                            var result = ec.usp_Update_Trial(trial.TrialID, trial.Name, trial.SRRLeadUserID, trial.IRPUserID, trial.CropID, trial.TraitID, trial.SiteID, trial.Year, trial.IsInternal, trial.City, trial.State, trial.Zip, trial.County, trial.Farm, trial.ComplianceStatus, session.CurrentUserName);

                            var createUserResult = result.First();
                            if (createUserResult.ReturnCode == 0
                                || createUserResult.ErrorMessage.ToUpper().Contains("NO ROW UPDATED"))
                            {
                                try
                                {
                                    var result2 = ec.usp_Assign_PrimarySRR_ToTrial(trial.PrimarySRRUserID, trial.TrialID, session.CurrentUserName);

                                    var assignUserToTrialResult = result2.First();
                                    if (assignUserToTrialResult.ReturnCode == 0)
                                    {
                                        tx.Commit();
                                        this.Flash("info", "Trial successfully saved");
                                        return RedirectToAction("Index", "Trial");
                                    }
                                    else
                                    {
                                        tx.Rollback();

                                        logger.ErrorFormat("User: {0}, Exception error assigning a srr to a trial: {1}", session.CurrentUserName, assignUserToTrialResult.ErrorMessage);

                                        this.Flash("error", "An error has ocurred while assigning a srr to a trial");
                                    }


                                }
                                catch (Exception ex)
                                {

                                    tx.Rollback();

                                    logger.ErrorFormat("User: {0}, Exception error updating trial: {1}", session.CurrentUserName, ex);

                                    this.Flash("error", "An error has ocurred while updating a trial");
                                }



                            }
                            else
                            {
                                tx.Rollback();
                                logger.ErrorFormat("User: {0}, Exception error updating trial: {1}", session.CurrentUserName, createUserResult.ErrorMessage);

                                this.Flash("error", "An error has ocurred while updating a trial");

                            }
                        }
                        catch (Exception ex)
                        {
                            tx.Rollback();

                            logger.ErrorFormat("User: {0}, Exception error updating trial: {1}", session.CurrentUserName, ex);

                            this.Flash("error", "An error has ocurred while updating a trial");

                        }
                    }
                }
            }

            LoadViewBag(trial);
            ViewBag.Session = session;
            return View(trial);

        }

        [Route("{id:int}/Delete", Name = "GetDeleteTrialByTrialID")]
        [ActionName("Delete"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetDeleteTrialByTrialID(int id)
        {
            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var manager = new TrialManager();
            var model = manager.GetTrialByID(id);

            return View(model);
        }

        [Route("{id:int}/Delete", Name = "DeleteTrialByTrialID")]
        [ActionName("Delete"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult DeleteTrialByTrialID(int id)
        {
            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            using (var ec = new Data.REGFIELDTRIALSEntities())
            {

                try
                {
                    var result = ec.usp_Delete_Trial_ByTrialID(id, session.CurrentUserName);
                    var deleteTrialResult = result.First();
                    if (deleteTrialResult.ReturnCode == 0)
                    {
                        this.Flash("info", "Trial successfully deleted");
                        return RedirectToAction("Index", "Trial");
                    }
                    else
                    {
                        if (deleteTrialResult.ErrorMessage.ToUpper().Contains("NO ROW UPDATED"))
                        {
                            logger.WarnFormat("User: {0}, non deleted trial doesn't currently exists: {1}", session.CurrentUserName, deleteTrialResult.ErrorMessage);

                            this.Flash("warning", kNoRowUpdated);
                        }
                        else
                        {
                            logger.ErrorFormat("User: {0}, Exception error deleting trial: {1}", session.CurrentUserName, deleteTrialResult.ErrorMessage);

                            this.Flash("error", "An error has ocurred while deleting trial");
                        }
                    }


                }
                catch (Exception ex)
                {
                    logger.ErrorFormat("User: {0}, Exception error deleting trial: {1}", session.CurrentUserName, ex);

                    this.Flash("error", "An error has ocurred while deleting trial");

                }
            }

            var manager = new TrialManager();
            var model = manager.GetTrialByID(id);

            LoadViewBag(model);
            return View(model);

        }


        [Route("{id:int}/Unlock", Name = "GetFormStatusByTrialID")]
        [ActionName("Unlock"), AcceptVerbs(HttpVerbs.Get)]
        public ActionResult GetFormStatusByTrialID(int id)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            var model = new TrialFormStatus();
            using (var ec = new Data.REGFIELDTRIALSEntities())
            {
                var trial = ec.TrialCatalogs.Where(tc => tc.Trial_ID == id).SingleOrDefault();
                var formStatus = ec.usp_Get_FormStatus_ByTrialID(trial.Trial_ID, session.CurrentUserName);

                model.Trial.TrialID = trial.Trial_ID;
                model.Trial.Name = trial.Name;
                model.Trial.Farm = trial.FarmName;
                model.Trial.Year = trial.TrialYear.Value;

                foreach (var f in formStatus)
                {
                    model.FormsStatuses.Add(new Models.Form.FormStatusItem()
                    {
                        WorkflowID = f.Workflow_ID.Value,
                        WorkflowName = f.WorkflowName,
                        WorkflowComplete = f.WorkflowComplete.HasValue ? f.WorkflowComplete.Value : false
                    });
                }

            }

            ViewBag.Session = session;
            return View(model);
        }

        [Route("{id:int}/Unlock", Name = "SaveFormStatusByTrialID")]
        [ActionName("Unlock"), AcceptVerbs(HttpVerbs.Post)]
        public ActionResult SaveFormStatusByTrialID(int id, FormCollection data)
        {

            var session = UserSessionHelper.GetCurrent();
            logger.DebugFormat("User: {0}", session.CurrentUserID);

            using (var ec = new Data.REGFIELDTRIALSEntities())
            {

                var tx = ec.Database.BeginTransaction();

                try
                {
                    var trial = ec.TrialCatalogs.Where(tc => tc.Trial_ID == id).SingleOrDefault();
                    var formStatus = ec.usp_Get_FormStatus_ByTrialID(trial.Trial_ID, session.CurrentUserName);
                    foreach (var f in formStatus)
                    {
                        string name = f.Workflow_ID.Value.ToString();
                        string command = data[name]; //name must be string

                        bool completed = f.WorkflowComplete.HasValue ? f.WorkflowComplete.Value : false;
                        string status = completed ? "locked" : "unlocked";
                        if (command.Substring(0, 3) != status.Substring(0, 3))
                        {
                            var manager = new Managers.FormManager();

                            //todo change current state
                            if (command == "lock")
                            {
                                manager.Lock(trial.Trial_ID, f.Workflow_ID.Value, session.CurrentUserName);
                            }
                            else if (command == "unlock")
                            {
                                manager.Unlock(trial.Trial_ID, f.Workflow_ID.Value, session.CurrentUserName);
                            }
                            else
                            {
                                throw new ApplicationException();
                            }
                        }
                    }

                    ec.SaveChanges();
                    tx.Commit();
                }

                catch (Exception ex)
                {
                    tx.Rollback();

                    logger.ErrorFormat("User: {0}, Exception error saving form status: {1}", session.CurrentUserName, ex);
                    this.Flash("error", "An error has ocurred while saving form status");
                    return RedirectToAction("Index", "Trial");
                }
            }

            this.Flash("info", "Form status successfully saved");

            return RedirectToAction("Index", "Trial");

        }

        private void LoadViewBag(CreateTrialModel model)
        {
            //first load common viewbag
            this.LoadViewBag((TrialModel)model);

            var userManager = new UserManager();
            var selectedSRRUserList = new List<SRRUserItem>();
            if (model.PrimarySRRUserID.HasValue)
            {
                selectedSRRUserList.Add(userManager.GetSRRUser(model.PrimarySRRUserID.Value));
            }
            ViewBag.SelectedSRRUserList = new SelectList(selectedSRRUserList, "SRRUserID", "Name");
        }

        private void LoadViewBag(EditTrialModel model)
        {
            //first load common viewbag
            this.LoadViewBag((TrialModel)model);

            var userManager = new UserManager();
            var selectedSRRUserList = new List<SRRUserItem>();
            selectedSRRUserList.Add(userManager.GetSRRUser(model.PrimarySRRUserID));
            ViewBag.SelectedSRRUserList = new SelectList(selectedSRRUserList, "SRRUserID", "Name");
        }

        private void LoadViewBag(TrialModel model)
        {

            var userManager = new UserManager();
            var selectedSRRLeadUserList = new List<SRRLeadUserItem>();
            selectedSRRLeadUserList.Add(userManager.GetSRRLeadUser(model.SRRLeadUserID));
            ViewBag.SelectedSRRLeadUserList = new SelectList(selectedSRRLeadUserList, "SRRLeadUserID", "Name");

            var selectedIRPUserList = new List<IRPUserItem>();
            selectedIRPUserList.Add(userManager.GetIRPUser(model.IRPUserID));
            ViewBag.SelectedIRPUserList = new SelectList(selectedIRPUserList, "IRPUserID", "Name");

            var selectedSiteList = new List<SiteItem>();
            if (model.SiteID.HasValue)
            { 
                selectedSiteList.Add(new SiteManager().GetSiteByID(model.SiteID.Value));
            }
            ViewBag.SelectedSiteList = new SelectList(selectedSiteList, "SiteID", "Name");

            var cropList = new CropManager().GetAllCropItems();
            ViewBag.CropList = new SelectList(cropList, "CropID", "Name");

            var traitList = new TraitManager().GetAllTraitItems();
            ViewBag.TraitList = new SelectList(traitList, "TraitID", "Name");

            var internalOptionList = new LookupManager().GetBooleanSelectList();
            ViewBag.InternalOptionList = new SelectList(internalOptionList, "Value", "Text");





        }

    }
}