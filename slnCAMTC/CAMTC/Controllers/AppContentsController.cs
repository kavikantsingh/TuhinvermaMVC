using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using CAMTC.Constants;

namespace CAMTC.Controllers
{
    public class AppContentsController : Controller
    {
        // GET: AppContents
        public JavaScriptResult ErrorMessages()
        {

            
            return JavaScript("var systemErrorMessages = " + JsonConvert.SerializeObject(new ErrorMessage()) + ";");
        }
    }
}