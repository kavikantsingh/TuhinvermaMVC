using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
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
        public JsonResult Upload(HttpPostedFileBase file, FormCollection data)
        {
            string OtherDocumentTypeName = data["otherDocType"] != null ? data["otherDocType"] : "" ;
            string _documentName = data["docName"] != null ?  data["docName"] : file.FileName.Split('.').FirstOrDefault();
            var responseString = "";
            if (file != null) {

                string extension = Path.GetExtension(file.FileName);
                byte[] fileData = null;
                using (var binaryReader = new BinaryReader(file.InputStream))
                {
                    fileData = binaryReader.ReadBytes(file.ContentLength);
                }
                string Base64File = Convert.ToBase64String(fileData);

                dynamic objUpload = new 
                {
                    CreatedOn = DateTime.Now,
                    DocumentLkToPageTabSectionCode = "",
                    DocumentLkToPageTabSectionId = 0,
                    DocumentPath = "",
                    EffectiveDate = "",
                    EndDate = "",
                    IsActive = true,
                    IsDeleted = false,
                    IsDocumentUploadedbyProvider = true,
                    IsDocumentUploadedbyStaff = false,
                    ModifiedBy = 0,
                    ModifiedOn = "",
                    OtherDocumentTypeName = OtherDocumentTypeName,
                    ProviderDocumentGuid = "",
                    ProviderDocumentId = 0,
                    ReferenceNumber = "",

                    ApplicationId = Convert.ToInt32(data["applicationId"]),
                    CreatedBy = Convert.ToInt32(data["userId"]),
                    ProviderId = Convert.ToInt32(data["providerId"]),

                    DocumentCd = data["docCode"],
                    DocumentId = Convert.ToInt32(data["docId"]),

                    DocumentTypeId = data["docTypeId"],
                    DocumentTypeIdName = data["docTypeName"],

                    DocumentName = _documentName,

                    Base64Str = Base64File,
                    Extension = extension
                };


                string url = "http://ws.camtc.inlumon.com/" + "api/Provider/ProviderDocumentSave/" + data["key"];
                //string url = "http://localhost:1530/" + "api/Provider/ProviderDocumentSave/" + data["key"];


                string Data = Newtonsoft.Json.JsonConvert.SerializeObject(objUpload);

                var http = (HttpWebRequest)WebRequest.Create(new Uri(url));
                http.Accept = "application/json";
                http.ContentType = "application/json";
                http.Method = "POST";

                
                UTF8Encoding encoding = new UTF8Encoding();
                Byte[] bytes = encoding.GetBytes(Data);

                Stream newStream = http.GetRequestStream();
                newStream.Write(bytes, 0, bytes.Length);
                newStream.Close();

                var response = http.GetResponse();

                var stream = response.GetResponseStream();
                var sr = new StreamReader(stream);
                var content = sr.ReadToEnd();
                responseString = content;

                //Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>(responseString);
                //if (data["isSimple"] == "false")
                //{
                    
                //    objUpload.DocumentTypeId = data["docTypeId"];
                //    objUpload.DocumentTypeIdName = data["docTypeName"];
                //}else if (data["isSimple"] == "true")
                //{
                    
                //}

            }
            return Json(responseString);
        }
    }
    public class ProviderDocumentGET 
    {
        public int ProviderId { get; set; }
        public int DocumentId { get; set; }
        public int ProviderDocumentId { get; set; }
        public string DocumentTypeIdName { get; set; }
        public string DocumentTypeDesc { get; set; }
        public string DocumentName { get; set; }
        public string OtherDocumentTypeName { get; set; }
        public int DocumentTypeId { get; set; }
        public string DocumentPath { get; set; }
    }
}