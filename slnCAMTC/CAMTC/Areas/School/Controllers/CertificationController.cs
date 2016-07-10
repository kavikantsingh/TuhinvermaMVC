using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CAMTC.Areas.School.Controllers
{
    public class CertificationController : Controller
    {
        // GET: School/Certification
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Application()
        {
            return View();
        }

        public PartialViewResult LoadSection(string id)
        {
            return PartialView(id);
        }

        [HttpPost]
        public JsonResult Upload(HttpPostedFileBase file, dynamic data)
        {


            return Json("");
        }
    }
}