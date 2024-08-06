using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using FIDOVictory.AdminTool.Models.User;
using log4net;

//Log4Net instruction to watch config file for any hot change
[assembly: log4net.Config.XmlConfigurator(ConfigFile = "Web.config", Watch = true)]

namespace FIDOVictory.AdminTool
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            this.LogSystem_Start();

            var logger = log4net.LogManager.GetLogger(typeof(MvcApplication));
            logger.Info("Registering All Areas");
            AreaRegistration.RegisterAllAreas();

            logger.Info("Registering GlobalConfiguration.Configuration");
            WebApiConfig.Register(GlobalConfiguration.Configuration);

            logger.Info("Registering GlobalFilters.Filters");
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);

            logger.Info("Registering RouteTable.Routes");
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            logger.Info("Registering BundleTable.Bundles");
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            logger.Info("Registering Auth");
            AuthConfig.RegisterAuth();

            logger.Info("Ensure Global Configuration Initialized");
            GlobalConfiguration.Configuration.EnsureInitialized(); 

        }

        protected void Application_Error(object sender, EventArgs e)
        {
            var httpContext = ((MvcApplication)sender).Context;

            var currentRouteData = RouteTable.Routes.GetRouteData(new HttpContextWrapper(httpContext));
            var currentController = " ";
            var currentAction = " ";

            if (currentRouteData != null)
            {
                if (currentRouteData.Values["controller"] != null && !String.IsNullOrEmpty(currentRouteData.Values["controller"].ToString()))
                {
                    currentController = currentRouteData.Values["controller"].ToString();
                }

                if (currentRouteData.Values["action"] != null && !String.IsNullOrEmpty(currentRouteData.Values["action"].ToString()))
                {
                    currentAction = currentRouteData.Values["action"].ToString();
                }
            }

            var ex = Server.GetLastError();

            var logger = log4net.LogManager.GetLogger(typeof(MvcApplication));
            logger.ErrorFormat("User: {0}, Controller: {1}, Action: {2}, Exception: {3}", UserModel.GetCurrentUserName(), currentController, currentAction, ex);

        } 


        protected void LogSystem_Start()
        {
            log4net.Config.XmlConfigurator.Configure(new FileInfo(Server.MapPath("~/Web.config")));
            
            var logger = log4net.LogManager.GetLogger(typeof(MvcApplication));
            logger.Info("Starting log system - log4net");

            //try all log levels
            logger.Fatal("Starting log system - checking fatal level");
            logger.Error("Starting log system - checking error level");
            logger.Warn("Starting log system - checking warn level");
            logger.Debug("Starting log system - checking debug level");
            logger.Info("Starting log system - checking info level");

        }
    }
}