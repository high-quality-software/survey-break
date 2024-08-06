using System.Web;
using System.Web.Mvc;
using FIDOVictory.AdminTool.Filters;

namespace FIDOVictory.AdminTool
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());

            //Notice I'm using the word Authentication and not Authorization
            filters.Add(new CustomAuthenticationAttribute());   
            
        }
    }
}