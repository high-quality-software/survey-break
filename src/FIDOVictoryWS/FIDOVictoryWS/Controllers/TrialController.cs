using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using FIDOVictory.Common.Repository;
using FIDOVictory.Common.Tools;
using FIDOVictory.DataContract.Form.Status;
using FIDOVictory.DataContract.Trial;
using FIDOVictoryWS.Managers.Form;

namespace FIDOVictoryWS.Controllers
{
    [RoutePrefix("api/trial")]
    public class TrialController : ApiController
    {

        // GET api/trial
        [Route("")]
        public List<TrialContract> GetTrialsToSync(String userAlias, DateTime lastSync)
        {
            return this.GetTrails(userAlias, lastSync);
        }

        /// <summary>
        /// Get Trials by parameters filter
        /// </summary>
        /// <remarks>
        /// TODO: in future versiones userAlias parameter will be mandatory
        /// </remarks>
        /// <param name="userAlias"></param>
        /// <param name="lastSync"></param>
        /// <returns></returns>
        [NonAction]
        private List<TrialContract> GetTrails(String userAlias, DateTime lastSync)
        {
            var list = new List<TrialContract>();

            var trialRepository = new TrialRepository();
            var userRepository = new UserRepository();

            //beautify
            userAlias = UserAliasBeautifier.Apply(userAlias);

            var trials = trialRepository.GetTrials(lastSync, userAlias);

            foreach (var t in trials)
            {
                var trialCatalog = new TrialContract()
                {
                    TrialID = t.Trial_ID,
                    Name = t.Name,
                    CropID = t.Crop_ID,
                    FarmName = t.FarmName,
                    City = t.City,
                    Country = t.County,
                    State = t.State,
                    Zip = t.Zip,
                    GPSLat1 = t.GPSLat1,
                    GPSLong1 = t.GPSLong1,
                    GPSLat2 = t.GPSLat2,
                    GPSLong2 = t.GPSLong2,
                    GPSLat3 = t.GPSLat3,
                    GPSLong3 = t.GPSLong3,
                    GPSLat4 = t.GPSLat4,
                    GPSLong4 = t.GPSLong4,
                    ApprovedArea = t.Approved_Area,
                    IRPUserID = t.IRPUser_ID,
                    LeadSRRUserID = t.SRRLeadUser_ID,
                    TrialYear = t.TrialYear,
                    SiteID = t.Site_ID,
                    TraitID = t.Trait_ID,
                    Internal = t.Internal,
                    ComplianceStatus = t.ComplianceStatus,

                };

                //get the current primarySRR ID
                var primarySRR = userRepository.GetPrimarySRRUser(t);
                if (primarySRR != null)
                {
                    trialCatalog.PrimarySRRUserID = primarySRR.User_ID;
                }

                list.Add(trialCatalog);
            }



            return list;

        }

        // GET api/trial/compliance/status
        [Route("compliance/status")]
        public List<ComplianceStatusItem> GetComplianceStatus(String userAlias)
        {

            var list = new List<ComplianceStatusItem>();

            var repo = new TrialRepository();
            var status = repo.GetComplianceStatus(userAlias);

            foreach (var s in status)
            {
                list.Add(new ComplianceStatusItem()
                {
                    WorkflowID = s.WorkflowId,
                    WorkflowName = s.WorkflowName,
                    WorkflowOrder = s.WorkflowOrder,
                    InBlank = s.InBlank.Value,
                    InProgress = s.InProgress.Value,
                    PendingForApproval = s.PendingForApproval.Value,
                    PendingForLock = s.PendingForLock.Value,
                    Completed = s.Completed.Value,
                    Total = s.Total.Value,
                });
            }

            return list;

        }

        // GET api/trial/get/{id}
        [Route("get/{id}")]
        public FormStatusResponseContract GetTrial(Int32 id, String userAlias)
        {
            var response = new FormStatusResponseContract();

            try
            {
                var trialRepository = new TrialRepository();
                var trial = trialRepository.GetTrialById(id);
                var formstatus = trialRepository.GetFormStatusByTrialID(id, userAlias);
                foreach (var s in formstatus)
                {
                    response.Data.Add(new FormStatusContract()
                    {
                        TrialID = trial.Trial_ID,
                        WorkflowID = s.Workflow_ID,
                        WorkflowName = s.WorkflowName,
                        WorkflowOrder = s.WorkflowOrder,
                        Answered = s.WorkflowAnswered,
                        Locked = s.WorkflowComplete,
                    });
                }

                response.Success = true;

            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                response.Success = false;
                response.ErrorCode = "KNOWN";
                response.ErrorDescription = "Known error in exception handled by TrialController";
                response.ExceptionMessage = ex.Message.ToString();
            }

            return response;
        }

        // GET api/trial/list
        [Route("list")]
        public List<TrialListItem> GetTrialList(String userAlias, Int32? workflowId = null, Int32? statusId = null)
        {

            var list = new List<TrialListItem>();

            var trialRepository = new TrialRepository();
            var userRepository = new UserRepository();

            //beautify
            userAlias = UserAliasBeautifier.Apply(userAlias);

            var trials = trialRepository.ListTrials(userAlias, workflowId, statusId);

            foreach (var t in trials)
            {
                var item = new TrialListItem()
                {
                    TrialID = t.Trial_ID,
                    Name = t.Trial_Name,
                    FarmName = t.Farm_Name,
                    CropName = t.Crop_Name,
                    TraitName = t.Trait_Name,
                    SiteName = t.Site_Name,
                    TrialYear = t.Trial_Year.Value,
                    PrimarySRR = t.PrimarySRR,
                };

                list.Add(item);
            }

            return list;

        }

        [Route("trait")]
        public List<TraitItem> GetTraits(DateTime lastSync)
        {
            var list = new List<TraitItem>();

            var trialRepository = new TrialRepository();
            var traits = trialRepository.GetTraits(lastSync);

            foreach (var t in traits)
            {
                list.Add(new TraitItem()
                {
                    TraitID = t.Trait_ID,
                    Name = t.TraitName,
                });
            }

            return list;

        }

        [Route("site")]
        public List<SiteItem> GetSites(DateTime lastSync)
        {
            var list = new List<SiteItem>();

            var trialRepository = new TrialRepository();
            var sites = trialRepository.GetSites(lastSync);

            foreach (var s in sites)
            {
                list.Add(new SiteItem()
                {
                    SiteID = s.Site_ID,
                    Name = s.SiteName,
                });
            }

            return list;

        }

    }
}
