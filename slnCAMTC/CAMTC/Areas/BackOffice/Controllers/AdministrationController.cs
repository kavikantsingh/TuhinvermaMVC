using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CAMTC.Areas.BackOffice.Controllers
{
    public class AdministrationController : Controller
    {
        // GET: BackOffice/Administration
        public ActionResult ContentManagement()
        {
            return View();
        }
    }
}