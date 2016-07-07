using System.Web.Mvc;

namespace CAMTC.Areas.Individual
{
    public class IndividualAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Individual";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Individual_default",
                "Individual/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}