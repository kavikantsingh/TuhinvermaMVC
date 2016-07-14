using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CAMTC.Areas.BackOffice.Models.Administration.Configuration
{
    public class ApplicationTypeGet
    {
        public int ApplicationTypeId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
    }
    public class ApplicationTypeGetResponse
    {
        public List<ApplicationTypeGet> ApplicationTypeGetList { get; set; }
    }
}