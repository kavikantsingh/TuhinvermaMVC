using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CAMTC.Areas.BackOffice.Models.Administration.Configuration
{
    public class BaseEntityServiceResponse
    {
        public string Message { get; set; }
        public bool Status { get; set; }
        public string StatusCode { get; set; }
        public string ResponseReason { get; set; }
    }
}