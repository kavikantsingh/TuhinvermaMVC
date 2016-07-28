using CAMTC.Areas.BackOffice.Models.Administration.Configuration;
using CAMTC.Utility;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;
using System.Net.Http.Formatting;


namespace CAMTC.Areas.BackOffice.Controllers
{
    public class AdministrationController : Controller
    {
        //
        // GET: /BackOffice/Administration/
        string baseUri;
        public AdministrationController()
        {
            baseUri = WebConfigurationManager.AppSettings["webApiAddress"];
        }


        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ContentManagement()
        {
            return View();
        }

        [HttpGet]
        public ActionResult DcoumentType()
        {
            ViewBag.Key = Convert.ToString(ConfigurationManager.AppSettings["Key"]);
            return View();
        }

        public ApplicationTypeGetResponse GetApplicationTypes()
        {
            string WebAPIUrl = "http://ws.camtc.inlumon.com/Api/TypeValues/ApplicationTypeGetAll/" + Convert.ToString(ConfigurationManager.AppSettings["Key"]);
            return WebApiUtility.Get<ApplicationTypeGetResponse>(WebAPIUrl);
        }

        public ActionResult GetDocumentResultSet()
        {
            string WebAPIUrl = "http://ws.camtc.inlumon.com/Api/Document/GetDocumentResultSet/" + Convert.ToString(ConfigurationManager.AppSettings["Key"]);
            var aa = WebApiUtility.Get<DocumentResultSetResponse>(WebAPIUrl);

            return PartialView("_DocumentView", aa.DocumentViewModel);
        }

        [HttpPost]
        public ActionResult SearchGetDocumentResultSet(DocumentMaster objDocumentMaster)
        {
            string WebAPIUrl = "http://ws.camtc.inlumon.com/Api/Document/Search_GetDocumentResultSet/" + Convert.ToString(ConfigurationManager.AppSettings["Key"]);
            var aa = WebApiUtility.Post<DocumentResultSetResponse>(WebAPIUrl, objDocumentMaster);

            return PartialView("_DocumentView", aa.DocumentViewModel);
        }

        public ActionResult TemplateMessage()
        {
            return View();
        }


        public ActionResult PasswordManagement()
        {
            return View();
        }


        [HttpPost]
        public async Task<ActionResult> PasswordReset(int[] searchIDs)
        {
            ForgetPasswordResponse _response = new ForgetPasswordResponse();

            try
            {
                // New code:
                HttpResponseMessage response = await GetApiResults(string.Concat(baseUri, "/Users/UsersSearchAdmin/" + Convert.ToString(ConfigurationManager.AppSettings["name"]) + "/"), data);

                if (response.IsSuccessStatusCode)
                {
                    _response = await response.Content.ReadAsAsync<ForgetPasswordResponse>();
                    if (_response.Status)
                    {
                        ViewBag.message = _response.Message;

                    }

                }
                ViewBag.message = _response.Message;
            }
            catch (Exception ex)
            {

            }

            return View();
        }



        public async Task<PartialViewResult> UserSearchResult(UsersSearch data, bool isPasswordMgmt = false)
        {
            UsersSearchResponse searchResults = new UsersSearchResponse();
            List<Users> userList = new List<Users>();
            try
            {
                // New code:
                HttpResponseMessage response = await GetApiResults(string.Concat(baseUri, "/Users/UsersSearchAdmin/" + Convert.ToString(ConfigurationManager.AppSettings["name"]) + "/"), data);

                if (response.IsSuccessStatusCode)
                {
                    searchResults = await response.Content.ReadAsAsync<UsersSearchResponse>();
                    if (searchResults.Total_Recard > 0)
                    {
                        userList = (List<Users>)searchResults.Users;
                    }

                }
            }
            catch (Exception ex)
            {

            }
            ViewBag.isPasswordMgmt = isPasswordMgmt;
            return PartialView("_UserSearchResult", userList);
        }



        public async Task<ActionResult> AddUser(int? UserId = null)
        {
            UsersRequest _request = new UsersRequest();
            UsersResponse _response = new UsersResponse();
            if (UserId != null)
            {
                HttpResponseMessage response = await GetApiResults(string.Concat(baseUri, "/Users/UsersGetBYID/" + Convert.ToString(ConfigurationManager.AppSettings["name"]) + "?ID=" + UserId), null);

                if (response.IsSuccessStatusCode)
                {
                    _response = await response.Content.ReadAsAsync<UsersResponse>();
                    if (_response.Status)
                    {
                        Users _user = _response.Users;
                        _request.UserStatusId = _user.UserStatusId;
                        _request.IsPending = (bool)_user.IsPending;
                        _request.UserName = _user.UserName;
                        _request.FirstName = _user.FirstName;
                        _request.LastName = _user.LastName;
                        _request.Email = _user.Email;
                        _request.Phone = _user.Phone;
                        _request.UserTypeId = _user.UserTypeId;
                        _request.UserId = _user.UserId;

                    }



                }


            }
            return View(_request);
        }


        [HttpPost]
        public async Task<ActionResult> AddEditUser(UsersRequest _userRequest, int[] RoleId, int[] Grantable)
        {
            UsersPostResponse _response = new UsersPostResponse();
            UsersRequest _request = new UsersRequest();
            bool grant = false;
            List<UserRolesRequest> lstUserRoleRequest = new List<UserRolesRequest>();
            foreach (var id in RoleId)
            {
                if (Grantable.Contains(id))
                {
                    grant = true;
                }

                lstUserRoleRequest.Add(new UserRolesRequest { RoleId = id, Selected = true, Grantable = grant });
            }
            _userRequest.UserRoles = lstUserRoleRequest;

            HttpResponseMessage response = await GetApiResults(string.Concat(baseUri, "/Users/UsersSaveAdmin/" + Convert.ToString(ConfigurationManager.AppSettings["name"])), _userRequest);
            if (response.IsSuccessStatusCode)
            {
                _response = await response.Content.ReadAsAsync<UsersPostResponse>();
                if (_response.Status)
                {
                    ViewBag.result = _response.Status;

                }
            }
            return View("AddUser", _request);
        }

        public async Task<ActionResult> DeleteUser(int userId)
        {
            try
            {
                UsersResponse _response = new UsersResponse();

                HttpResponseMessage response = await GetApiResults(string.Concat(baseUri, "/Users/UsersDeletebyID/" + Convert.ToString(ConfigurationManager.AppSettings["name"]) + "?ID=" + userId), null);

                if (response.IsSuccessStatusCode)
                {
                    _response = await response.Content.ReadAsAsync<UsersResponse>();
                    if (_response.Status)
                    {
                        ViewBag.status = true;
                    }
                }

            }
            catch
            {

            }
            return View();
        }


        public async Task<ActionResult> EnableUser(int userId)
        {
            try
            {
                UsersResponse _response = new UsersResponse();

                HttpResponseMessage response = await GetApiResults(string.Concat(baseUri, "/Users/UserStatusSave/" + Convert.ToString(ConfigurationManager.AppSettings["name"]) + "?ID=" + userId), null);

                if (response.IsSuccessStatusCode)
                {
                    _response = await response.Content.ReadAsAsync<UsersResponse>();
                    if (_response.Status)
                    {
                        ViewBag.status = true;
                    }
                }

            }
            catch
            {

            }
            return View();
        }

        public async Task<bool> GetUserStatus(int userId)
        {
            bool userStatus = true;
            try
            {
                UserStatusResponse _response = new UserStatusResponse();
                List<UserStatus> _status = new List<UserStatus>();

                HttpResponseMessage response = await GetApiResults(string.Concat(baseUri, "/Users/UserStatusGetBYID/" + Convert.ToString(ConfigurationManager.AppSettings["name"])), userId);

                if (response.IsSuccessStatusCode)
                {
                    _response = await response.Content.ReadAsAsync<UserStatusResponse>();
                    if (_response.Status)
                    {
                        _status = (List<UserStatus>)_response.UserStatus;
                        userStatus = _status.Select(x => x.IsActive).FirstOrDefault();
                    }
                }

            }
            catch
            {

            }
            return userStatus;
        }


        public async Task<bool> ChangeUserStatus(int userId)
        {
            bool userStatus = true;
            try
            {
                UserStatusResponse _response = new UserStatusResponse();
                List<UserStatus> _status = new List<UserStatus>();

                HttpResponseMessage response = await GetApiResults(string.Concat(baseUri, "/Users/UserStatusGetBYID/" + Convert.ToString(ConfigurationManager.AppSettings["name"])), userId);

                if (response.IsSuccessStatusCode)
                {
                    _response = await response.Content.ReadAsAsync<UserStatusResponse>();
                    if (_response.Status)
                    {
                        _status = (List<UserStatus>)_response.UserStatus;
                        userStatus = _status.Select(x => x.IsActive).FirstOrDefault();
                    }
                }

            }
            catch
            {

            }
            return userStatus;
        }



        public async Task<HttpResponseMessage> GetApiResults(string url, object data)
        {
            HttpResponseMessage response = new HttpResponseMessage();
            try
            {
                using (var client = new HttpClient())
                {

                    client.BaseAddress = new Uri(baseUri);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                    // New code:
                    if (data == null)
                    {
                        response = await client.GetAsync(url);

                    }
                    else
                    {
                        response = await client.PostAsJsonAsync(url, data);
                    }

                }
            }
            catch (Exception ex)
            {

            }
            return response;

        }
 


    }
}