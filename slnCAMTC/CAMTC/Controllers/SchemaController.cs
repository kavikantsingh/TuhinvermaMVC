using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NJsonSchema;
using CAMTC.Models.Application;
using CAMTC.Areas.Individual.Models;
namespace CAMTC.Controllers
{
    public class SchemaController : Controller
    {
        // GET: Schema
        public ActionResult Index(string id)
        {
            var schema = JsonSchema4.FromType<ApplicantNames>();

            string ApplicantName = schema.ToJson();
            var nameSchema = JsonSchema4.FromType<FullName>();
            return View();
        }
    }
}