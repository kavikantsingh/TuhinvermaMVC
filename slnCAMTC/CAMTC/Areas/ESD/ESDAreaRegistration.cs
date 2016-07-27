using System.Web.Mvc;

namespace CAMTC.Areas.ESD
{
    public class ESDAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "ESD";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "ESD_default",
                "ESD/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}