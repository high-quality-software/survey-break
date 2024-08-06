using System.Configuration;
using System.Web;
using System.Web.Optimization;

namespace FIDOVictory.AdminTool
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/js/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/jqueryval").Include(
                        "~/Scripts/jquery.validate.js",
                        "~/Scripts/jquery.validate.unobtrusive.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/bootstrap").Include(
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/bootstrap-validation.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/select2").Include(
                        "~/Content/select2/js/select2.full.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/app").Include(
                        "~/Scripts/VictoryAdminTool/Common.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/js/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            //less (compiled css)
            //http://www.brendanforster.com/blog/yet-another-implement-less-in-aspnetmvc-post.html
            bundles.Add(new LessBundle("~/bundles/css/site").Include(
                        "~/Content/site/site.less"));

            bundles.Add(new StyleBundle("~/bundles/css/select2").Include(
                        "~/Content/select2/css/select2.css"/*, 
                        "~/Content/select2-bootstrap/select2-bootstrap.css" */));

            bundles.Add(new StyleBundle("~/bundles/css/jqueryui").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));


            BundleTable.EnableOptimizations = true;
            var enableOptimizationsValue = System.Configuration.ConfigurationManager.AppSettings["FIDO.Victory.AdminTool.BundleTable.EnableOptimizations"];
            if (enableOptimizationsValue != null)
            {
                BundleTable.EnableOptimizations = bool.Parse(enableOptimizationsValue);
            }
            

        }
    }
}