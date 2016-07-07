using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CAMTC.Areas.Agency.Controllers
{
    public class HomeController : Controller
    {
        // GET: Agency/Home
        public ActionResult Index()
        {
            return View();
        }
    }
}