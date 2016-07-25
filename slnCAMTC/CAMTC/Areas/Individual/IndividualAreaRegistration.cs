using System;
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
                name: "IndividualApplication",
                url: "Individual/{controller}/{action}/{id}-{ind_id}/{key}",
                defaults: new { controller = "Certification", action = "Application", int_id = String.Empty, key = String.Empty, id = UrlParameter.Optional }
                //namespaces: new string[] { "CAMTC.Controllers" }
            );
            context.MapRoute(
                "Individual_default",
                "Individual/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}