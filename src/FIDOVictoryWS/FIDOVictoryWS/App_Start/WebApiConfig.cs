using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using FIDOVictoryWS.Tools.Web.Http.Filters;

namespace FIDOVictoryWS
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API CORS
            string origins = ConfigurationManager.AppSettings["FIDO.Victory.Cors.Origins"];
            var cors = new EnableCorsAttribute(origins, "*", "*");
            config.EnableCors(cors);


            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            //log4net start up
            log4net.Config.XmlConfigurator.Configure(); 

            //trace logging
            //http://stackoverflow.com/questions/11420783/how-to-add-logging-to-mvc4-webapi
            config.Filters.Add(
                new VictoryLoggingFilter(
                    log4net.LogManager.GetLogger("FIDOVictoryWS")
                        )
                    );

            //enable elmah logging
            //http://blogs.msdn.com/b/webdev/archive/2012/11/16/capturing-unhandled-exceptions-in-asp-net-web-api-s-with-elmah.aspx
            config.Filters.Add(new UnhandledExceptionFilter());
        }
    }
}
