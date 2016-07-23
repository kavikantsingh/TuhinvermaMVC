using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CAMTC.Models.Application;
using System.ComponentModel.DataAnnotations;

namespace CAMTC.Areas.Individual.Models
{
    public class ApplicantNames
    {
        [Required]
        public FullName Name { get; set; }

        public List<FullName> OtherNames { get; set; }
    }
}