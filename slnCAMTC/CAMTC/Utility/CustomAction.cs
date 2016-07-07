using System.Web.Mvc;

namespace CAMTC.Utility
{        

        public class AuthoriseAgent : System.Web.Mvc.Controller
        {
            protected override void OnAuthorization(AuthorizationContext filterContext)
            {
                base.OnAuthorization(filterContext);
                if (UserSession.AgentId < 1)
                {
                    var url = Url.Action("AgentLogin", "Account", null);
                    filterContext.Result = new RedirectResult(url);
                }
            }
        }
    
}