using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FIDOVictory.AdminTool.Models;
using FIDOVictory.AdminTool.Tools;
using FIDOVictory.AdminTool.Tools.Session;

namespace FIDOVictory.AdminTool.Controllers
{
    [RoutePrefix("Form")]
    public class FormController : Controller
    {
        readonly log4net.ILog logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        [Route("")]
        public ActionResult Index()
        {
            return View();
        }

    }
}
