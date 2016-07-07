using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CAMTC.Areas.Individual.Controllers
{
    public class HomeController : Controller
    {
        // GET: Individual/Home
        public ActionResult Index()
        {
            return View();
        }
    }
}