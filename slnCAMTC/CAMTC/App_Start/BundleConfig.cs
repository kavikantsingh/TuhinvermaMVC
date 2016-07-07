using System.Web;
using System.Web.Optimization;

namespace CAMTC
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            #region Login-Provider|Indiviudal|Agency|BackOffice

            bundles.Add(new ScriptBundle("~/bundles/JQLogin").Include(
                        "~/Content/Public/js/jquery.mask.min.js",
                        "~/Scripts/Validation/FormValidation.js",
                        "~/Scripts/Validation/TextboxFormating.js",
                        "~/Content/Public/js/ebsoft-loader.js",
                        "~/Content/Login/js/BeatPicker.min.js"
                        ));

            bundles.Add(new StyleBundle("~/Content/CSSLogin").Include(
                      "~/Content/Login/css/forms.css",
                      "~/Content/Login/css/style.css",
                      "~/Content/Login/css/font-awesome.css",
                      "~/Content/Login/css/font-awesome.css",
                      "~/Content/Login/css/font-awesome.min.css",
                      "~/Content/Login/css/BeatPicker.min.css"
                      ));

            #endregion

        }
    }
}
