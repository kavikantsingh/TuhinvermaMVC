using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CAMTC.Constants
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    /// <summary>
    /// Summary description for ErrorMessage
    /// </summary>
    public class ErrorMessage
    {
        public ErrorMessage()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public string ErrorOccured = "An error has occurred. Please try after sometime or contact Nevada State Board of Massage Therapists.";
        
        //Format Validation
        public string EmailFormat = "Please enter email in correct format (joe@email.com)";
        public string WebsiteFormat = "Please enter website in correct format (www.websitename.com)";
        public string DateFormat = "Please enter date in correct format (mm/dd/yyyy)";
        public string FutureDate = "Future dates are not accepted.";
        public string PhoneFormat = "Please enter phone in correct format. ((xxx) xxx-xxxx)";
        public string ZipCodeFormat = "Please enter zip code in correct format. (xxxxx-xxxx or xxxxx)";

        public string SchoolName = "Please enter the school name.";
        public string SchoolTelephone = "Please enter school telephone";
        public string SchoolWebsite = "Please enter school website";
        public string SchoolAddress = "Please enter school address";
        public string SchoolCity = "Please enter school city";
        public string SchoolState = "Please enter school state";
        public string SchoolZip = "Please enter school zip";
        public string DirectorFirstName = "Please enter director first name";
        public string DirectorLastName = "Please enter director last name";
        public string AdministratorEmail = "Please enter administrator email";
        public string JobTitle = "Please enter administrator job title";
        public string PrimaryNumber = "Please enter administrator primary number";

        public string ddlAddApprovalAgency = "Please select approval/accrediting agency";
        public string txtappagenDocNAme = "Please enter document name";
        public string ddlAppAgencSup = "Please select document type";

        public string txtAddmessageProgName = "Please enter message program name.";
        public string txtAddProgrameHours = "Please enter total number of program hours.";

        public string FirstName = "Please enter first name.";
        public string LastName = "Please enter last name.";
        public string Title = "Please enter title.";

        public string txtGradYear = "Please enter estimated graduates for 2016 calendar year";
        public string txtGradYear_1 = "Please enter graduates for 2015 calendar year";
        public string txtGradYear_2 = "Please enter graduates for 2014 calendar year";
        public string txtGradYear_3 = "Please enter graduates for 2013 calendar year";
        public string txtGradYear_4 = "Please enter graduates for 2012 calendar year";
        public string txtGradYear_5 = "Please enter graduates for 2011 calendar year";
        public string txtGradYear_6 = "Please enter graduates for 2010 calendar year";
        public string txtGradYear_7 = "Please enter graduates for 2009 calendar year";
        public string txtDocNameAboutOwnership = "Please enter proof of ownership document name";
        public string TextBox141 = "Please enter proof of business operations document name";
        public string txtDocNameClin = "Please enter facility document name";
        public string txtDocNameAboutAdvertising = "Please enter advertising document name";

        public string ddlOwnAboutAdvertising = "Please select advertising document type";
        public string ddlOtherClin = "Please select facility document type";
        public string ddlOwnAboutBusinessDoc = "Please select proof of business operations document type";
        public string DropDownList6 = "Please select proof of business operations document type";
        public string ddlOwnAboutOwnership = "Please select proof of ownership document type";

        public string TextBox2 = "Please enter related school name ";
        public string TextBox65 = "Please enter related school primary contact first name";
        public string TextBox66 = "Please enter related school primary contact last name ";
        public string TextBox6 = "Please enter related school address";
        public string txtSchoolCity = "Please enter related school city";
        public string DropDownList1 = "Please select related school state ";
        public string TextBox9 = "Please enter related school zip";
        public string TextBox10 = "Please enter related school phone ";
        public string TextBox12 = "Please enter related school email";
        public string txtApproxDateAssociate = "Please enter related school approximate date associated";

        public string txtcarculam = "Please enter maximum number of clinic hours performed.";
        public string CurriSupDocName = "Please enter curriculum supporting document name.";
        public string CurriSupDocType = "Please select curriculum supporting document type.";
        public string Email = "Please enter email.";
        public string CheckBoxList3 = "Please check any one from title/ position.";
        public string rblBackgroundChekReq = "Please check yes or no of background check.";
        public string NoRegion = "Please enter reason (camtc#).";
        public string Signature = "Please enter signature.";
        public string Date = "Please enter date.";
        public string PayMethod = "Please select payment method.";
        public string DocumentName = "Please enter document name.";
        public string TextBox71 = "Please enter addressed corrective action.";
        public string HomeAddress = "Please enter the address of the home .";
        public string NameofCity = "Please enter the city name.";
        public string State = "Please enter the name of the state.";
        public string ZipCode = "Please enter zip code.";
        public string DateofBirth = "Please enter date of birth.";
        public string DateofGraduation = "Please enter date of graduation.";
        public string ddlOwnStaffType = "Please select document type.";
        public string DateofEmployment = "Please enter date of employment.";
        public string SubjectTaught = "Please enter subject taught.";
        public string TextBox394 = "Please enter education/qualification to teach this subject.";
        public string SubmitinFormSchoolName = "Please enter name of school for which you are submitting this form.";
        public string SSN = "Please enter social security number. ";
        public string CAMTCID = "Please enter CAMTC ID. ";

        public string Password = "Please enter password.";
        public string CurrentPassword = "Please enter temporary/current password.";
        public string NewPassword = "Please enter new password.";
        public string ConfirmPassword = "Please enter confirm password.";

        public string SiteVisitDate = "Please enter site visit date.";
        public string TypeofSiteVisit = "Please select type of site visit.";
        public string SiteInspector = "Please select site inspector.";
        public string Comment = "Please enter comment.";

        public string DocumentUpload = "Please upload document for ";
        public string DocumentUploadName = "Please enter document name.";
        public string DocumentUploadType = "Please select document type. ";
        public string DocumentUploadFile = "Please select file. ";

        public string fluLocalBusiness = "Please upload document for Local Business License.";
        public string fluOrgChart = "Please upload document for Organizational Chart.";
        public string fluFloorPlan = "Please upload document for Floor Plan (including approximate square footage).";
        public string fluExteriorSign = "Please upload document for Photograph(s) of Exterior Signage.";
        public string fluBuildExterior = "Please upload document for Photograph(s) of Buiding exterior.";
        public string fluMassageClassroom = "Please upload document for Photograph(s) of Massage Classroom(s).";
        public string fluMassageClinic = "Please upload document for Photograph(s) of Massage Clinic(s).";

        public string fluStaffHiring = "Please upload document for Hiring, Training, Evaluating and Discipling Policies.";
        public string fluStaffFacility = "Please upload document for Facility Meeting Minutes/Agenda/Memos.";
        public string fluStaffStTeRatio = "Please upload document for Student-Teacher Ratio.";

        public string fluTrans1 = "Please upload document for Sample Transcripts.";
        public string fluTrans2 = "Please upload document for Sample transcript of unique security measures.";
        public string fluTrans3 = "Please upload document for Sample diploma.";
        public string fluTrans4 = "Please upload document for Sample envelope (Front) from the school.";
        public string fluTrans5 = "Please upload document for Sample envelope (Back) from the school.";

        //----curriculum error messages----//basu
        public string fuCurriculum1 = "Please upload document for Massage Program Calendar.";

        public string fuCurriculum2 = "Please upload document for Syllabi for Massage Course.";
        public string fuCurriculum3 = "Please upload document for List of Textbooks.";

        public string fuCurriculum4 = "Please upload document for List of Educational Materials.";
        public string fuCurriculum5 = "Please upload document for List of Classroom Equipment.";
        public string fuCurriculum6 = "Please upload document for Curriculum Review Policy.";
        public string fuCurriculum7 = "Please upload document for Hygiene & Dress Code Policies .";
        public string fuCurriculum8 = "Please upload document for Document Name.";

        //----course catlog messages----//basu
        public string fuCourseCatalog1 = "Please upload document for Current Course Catalog.";

        public string fuCourseCatalog2 = "Please upload document for Massage Program Addendum.";


        //----enroll agreement messages----//basu
        public string fuEnrollAgree1 = "Please upload document for Bank Enrollment Agreement.";

        public string fuEnrollAgree2 = "Please upload document for Massage Program Addendum.";

    }
}