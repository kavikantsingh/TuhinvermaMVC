using System.Web;

namespace CAMTC.Utility
{
    public static class UserSession
    {

        public static int AgentId
        {
            get { return (HttpContext.Current != null && HttpContext.Current.Session["AgentId"] != null) ? (int)HttpContext.Current.Session["AgentId"] : 0; }
            set { HttpContext.Current.Session["AgentId"] = value; }
        }

        public static int AdminId
        {
            get { return (HttpContext.Current != null && HttpContext.Current.Session["AdminId"] != null) ? (int)HttpContext.Current.Session["AdminId"] : 0; }
            set { HttpContext.Current.Session["AdminId"] = value; }
        }

    }
}