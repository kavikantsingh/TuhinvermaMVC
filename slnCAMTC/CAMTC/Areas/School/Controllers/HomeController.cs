using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CAMTC.Areas.School.Controllers
{
    public class HomeController : Controller
    {
        //Dashboard
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SchoolApplication()
        {
            return View();
        }

    }
}