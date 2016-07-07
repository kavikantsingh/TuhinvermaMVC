using System;
using System.IO;
using System.Web;

namespace CAMTC.Utility
{
    public class Common
    {

        public static string UploadFile(HttpPostedFileBase file, string folder)
        {
            string filePath = "~/Upload/Image/" + folder;
            if ((file != null) && (file.ContentLength > 0) && !string.IsNullOrEmpty(file.FileName))
            {
                string fileName = file.FileName;
                fileName = Convert.ToString(Guid.NewGuid()).Substring(0, 10) + Path.GetExtension(fileName);
                file.SaveAs(HttpContext.Current.Server.MapPath(filePath) + "/" + fileName);

                return fileName;
            }
            return "";
        }

    }
}