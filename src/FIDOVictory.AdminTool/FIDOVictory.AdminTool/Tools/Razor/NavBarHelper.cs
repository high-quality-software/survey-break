using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace FIDOVictory.AdminTool.Tools.Razor
{
    public static class NavBarHelper
    {
        public static string IsActive(this HtmlHelper htmlHelper, string actions, string controllers)
        {
            //var routeData = htmlHelper.ViewContext.RouteData;

            //var routeAction = routeData.Values["action"].ToString();
            //var routeController = routeData.Values["controller"].ToString();

            //var returnActive = (controller == routeController && action == routeAction);

            ViewContext viewContext = htmlHelper.ViewContext;
            bool isChildAction = viewContext.Controller.ControllerContext.IsChildAction;

            if (isChildAction)
                viewContext = htmlHelper.ViewContext.ParentActionViewContext;

            RouteValueDictionary routeValues = viewContext.RouteData.Values;
            string currentAction = routeValues["action"].ToString();
            string currentController = routeValues["controller"].ToString();

            if (String.IsNullOrEmpty(actions))
                actions = currentAction;

            if (String.IsNullOrEmpty(controllers))
                controllers = currentController;

            string[] acceptedActions = actions.Trim().Split(',').Distinct().ToArray();
            string[] acceptedControllers = controllers.Trim().Split(',').Distinct().ToArray();

            var returnActive = acceptedActions.Contains(currentAction) && acceptedControllers.Contains(currentController);

            return returnActive ? "active" : "";
        }
    }
}