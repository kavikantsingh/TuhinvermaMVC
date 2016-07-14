using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CAMTC.Areas.BackOffice.Models.Administration.Configuration
{
    public class DocumentMasterSearchViewModel
    {
        public string MasterTransactionId { get; set; }
        public string PageModuleId { get; set; }
        public string PageModuleTabSubModuleId { get; set; }
        public string PageTabSectionId { get; set; }
        public string DocumentId { get; set; }

    }
    public class DocumentMaster
    {
        public int DocumentMasterId { get; set; }
        public int DocumentId { get; set; }
        public string DocumentCd { get; set; }
        public string DocumentName { get; set; }
        public int DocumentTypeId { get; set; }
        public string DocumentTypeIdName { get; set; }
        public string DocumentTypeDesc { get; set; }
        public int Max_size { get; set; }
        public int MasterTransactionId { get; set; }
        public int PageModuleId { get; set; }
        public int PageModuleTabSubModuleId { get; set; }
        public int PageTabSectionId { get; set; }
        public DateTime EffectiveDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsEnabled { get; set; }
        public bool IsEditable { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
    public class DocumentViewModel
    {
        public int DocumentMasterId { get; set; }
        public string MasterTransactionName { get; set; }
        public string PageModuleName { get; set; }
        public string PageModuleTabSubModuleName { get; set; }
        public string PageTabSectionName { get; set; }
        public string DocumentName { get; set; }
        public string DocumentTypeIdName { get; set; }
        public string MaxSize { get; set; }

        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime EndDate { get; set; }

        public int IsEditable { get; set; }
    }
    public class DocumentResultSetResponse : BaseEntityServiceResponse
    {
        public List<DocumentViewModel> DocumentViewModel { get; set; }
    }

}