using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CAMTC.Areas.Individual.Controllers
{
    public class ReCertificationController : Controller
    {
        // GET: Individual/Certification
        public ActionResult Index()
        {
            return View();
        }


        public PartialViewResult LoadSection(string id)
        {
            return PartialView(id);
        }
    }
}