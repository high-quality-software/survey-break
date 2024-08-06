using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using FIDOVictory.DataContract.Health.GetStatus;
using FIDOVictoryWS.Models.Health;

namespace FIDOVictoryWS.Controllers
{
    [RoutePrefix("api/health")]
    public class HealthController : ApiController
    {

        /// <summary>
        /// Deprecated, use "api/health/status". It wont exists in Phase 4.
        /// </summary>
        /// <returns></returns>
        [Route("")]
        [HttpGet]
        public Status GetHealth()
        {
            var status = new Status();

            try
            {
                using (var ec = new FIDOVictory.Common.Data.EntityContainer())
                {
                    status.IsDatabaseOnline = ec.Database.Exists();

                    var dbVersion = (from db in ec.DB_Version
                                     where db.Active == true && db.IsDeleted == false
                                     select db).FirstOrDefault();
                    
                    if (dbVersion != null)
                    {
                        status.DBReleaseName = dbVersion.DB_Version1;
                        status.DBReleaseComment = dbVersion.Comment;
                    }
                }
            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));
                status.IsDatabaseOnline = false;
            }


            return status;
        }


        // GET api/health
        [Route("status")]
        [HttpGet]
        public GetStatusResponseContract GetHealthStatus()
        {

            var response = new GetStatusResponseContract();

            try
            {
                response.Status.APIVersion = Tools.Reflection.Assembly.GetCustomVersion();
                response.Status.APIReleaseName = "Victory 1Q";
                response.Status.Environment = ConfigurationManager.AppSettings["FIDO.Victory.Environment"];
                response.Status.Running = true;
                response.Success = true;

                using (var ec = new FIDOVictory.Common.Data.EntityContainer())
                {
                    response.Status.IsDatabaseOnline = ec.Database.Exists();

                    var dbVersion = (from db in ec.DB_Version
                                     where db.Active == true && db.IsDeleted == false
                                     select db).FirstOrDefault();

                    if (dbVersion != null)
                    {
                        response.Status.DBReleaseName = dbVersion.DB_Version1;
                        response.Status.DBReleaseComment = dbVersion.Comment;

                        response.Status.AppMinVersion = dbVersion.Min_App_Version;
                        response.Status.AppMaxVersion = dbVersion.Max_App_Version;
                    }
                }
            }
            catch (Exception ex)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(ex));

                response.Status.IsDatabaseOnline = false;
                response.Success = false;
                response.ExceptionMessage = ex.ToString();
            }


            return response;
        }

        // GET api/ping
        [Route("ping")]
        [HttpGet]
        public HttpResponseMessage GetHealthPing()
        {
            return Request.CreateResponse<String>(HttpStatusCode.OK, "pong");
        }

    }
}
