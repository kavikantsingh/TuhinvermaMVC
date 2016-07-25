using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CAMTC.Models.Application
{
    public class FullName
    {
        [Required(ErrorMessage ="Please enter first name.")]
        public string Firstname { get; set; }

        public string Middlename { get; set; }

        [Required(ErrorMessage = "Please enter last name.")]
        public string Lastname { get; set; }
    }
}