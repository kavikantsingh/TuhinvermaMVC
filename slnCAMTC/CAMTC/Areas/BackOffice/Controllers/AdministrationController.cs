using CAMTC.Areas.BackOffice.Models.Administration.Configuration;
using CAMTC.Utility;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CAMTC.Areas.BackOffice.Controllers
{
    public class AdministrationController : Controller
    {
        //
        // GET: /BackOffice/Administration/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ContentManagement()
        {
            return View();
        }

        [HttpGet]
        public ActionResult DcoumentType()
        {
            ViewBag.Key = Convert.ToString(ConfigurationManager.AppSettings["Key"]);
            return View();
        }

        public ApplicationTypeGetResponse GetApplicationTypes()
        {
            string WebAPIUrl = "http://ws.camtc.inlumon.com/Api/TypeValues/ApplicationTypeGetAll/" + Convert.ToString(ConfigurationManager.AppSettings["Key"]);
            return WebApiUtility.Get<ApplicationTypeGetResponse>(WebAPIUrl);
        }

        public ActionResult GetDocumentResultSet()
        {
            string WebAPIUrl = "http://ws.camtc.inlumon.com/Api/Document/GetDocumentResultSet/" + Convert.ToString(ConfigurationManager.AppSettings["Key"]);
            var aa = WebApiUtility.Get<DocumentResultSetResponse>(WebAPIUrl);

            return PartialView("_DocumentView", aa.DocumentViewModel);
        }

        [HttpPost]
        public ActionResult SearchGetDocumentResultSet(DocumentMaster objDocumentMaster)
        {
            string WebAPIUrl = "http://ws.camtc.inlumon.com/Api/Document/Search_GetDocumentResultSet/" + Convert.ToString(ConfigurationManager.AppSettings["Key"]);
            var aa = WebApiUtility.Post<DocumentResultSetResponse>(WebAPIUrl, objDocumentMaster);

            return PartialView("_DocumentView", aa.DocumentViewModel);
        }

        public ActionResult TemplateMessage()
        {
            return View();
        }
    }
}