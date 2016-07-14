using System;
using System.IO;
using System.Net;
using Newtonsoft.Json;
using System.Web.Script.Serialization;

namespace CAMTC.Utility
{
    public class WebApiUtility
    {
        public static T Get<T>(string apiUrl, object input = null)
        {
            return ExecuteRequest<T>(apiUrl, input, "GET");
        }

        public static T Post<T>(string apiUrl, object input = null)
        {
            return ExecuteRequest<T>(apiUrl, input, "POST");
        }

        private static T ExecuteRequest<T>(string apiUrl, object input, string methodType)
        {
            try
            {
                var httpWebRequest = (HttpWebRequest) WebRequest.Create(apiUrl);
                httpWebRequest.ContentType = "application/json";
                httpWebRequest.Method = methodType.ToLower();

                HttpWebResponse httpResponse;

                if (input != null)
                {
                    using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
                    {
                        string json = new JavaScriptSerializer().Serialize(input);

                        streamWriter.Write(json);
                        streamWriter.Flush();
                        streamWriter.Close();

                        httpResponse = (HttpWebResponse) httpWebRequest.GetResponse();
                        using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                        {
                            return JsonConvert.DeserializeObject<T>(streamReader.ReadToEnd());
                        }
                    }
                }

                httpResponse = (HttpWebResponse) httpWebRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    return JsonConvert.DeserializeObject<T>(streamReader.ReadToEnd());
                }
            }
            catch (Exception ex)
            {
                return
                    JsonConvert.DeserializeObject<T>("{\"Message\":\"" + ex.Message +
                                                     "\",\"Status\":true,\"StatusCode\":\"00\",\"ResponseReason\":\"Error in Calling\"}");
            }
        }
    }
}