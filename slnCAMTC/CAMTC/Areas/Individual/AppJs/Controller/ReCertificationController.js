var reCertificationApp = angular.module("reCertificationApp", [])
var BaseURL = 'http://localhost:1530/';

reCertificationApp.controller("reCertificationController", ['$scope', 'CertificationFactory', function ($scope, CertificationFactory) {

    $scope.LicenseExpirationDate = '';
    $scope.ConfigValueMax = 0;
    $scope.ConfigValueMin = 0;
    $scope.LoadCount = 0;
    $scope.ValidateRecertification = function () {
        ShowLoader();
        //CertificationFactory.Get_LicenseExpirationDate(sessionStorage.Key, sessionStorage.IndividualId, sessionStorage.ReferenceNumber, sessionStorage.UserId)
        CertificationFactory.Get_LicenseExpirationDate(sessionStorage.Key, 271, "", 243)

                      .success(function (response) {
                          if (response.Status) {
                              $scope.LicenseExpirationDate = response.LicenseExpirationDate;
                              $scope.LoadCount++;
                              $scope.InitializeUI();
                          }
                          else {
                              alert(response.Message);
                          }

                      })
                      .error(function (data) {
                          alert('Oops! Some Error Occurred.');
                          HideLoader();
                      });
        CertificationFactory.Get_ConfigurationSettingValue(sessionStorage.Key, "Noofdaysallowedforrenewalfromlicenseexpdate")
                      .success(function (response) {
                          if (response.IsValid) {
                              $scope.ConfigValueMax = response.Configurationvalue;
                              $scope.LoadCount++;
                              $scope.InitializeUI();
                              //alert($scope.ConfigValueMax);
                          }
                          else {
                              alert(response.Message);
                          }

                      })
                      .error(function (data) {
                          alert('Oops! Some Error Occurred.');
                          HideLoader();
                      });
        CertificationFactory.Get_ConfigurationSettingValue(sessionStorage.Key, "Noofdaysallowedforrenewalbeforelicenseexp")
                      .success(function (response) {
                          if (response.IsValid) {

                              $scope.ConfigValueMin = response.Configurationvalue;
                              $scope.LoadCount++;
                              $scope.InitializeUI();
                              //alert($scope.ConfigValueMin);
                          }
                          else {
                              alert(response.Message);
                          }

                      })
                      .error(function (data) {
                          alert('Oops! Some Error Occurred.');
                          HideLoader();
                      });
    }
    $scope.InitializeUI = function () {
        if ($scope.LoadCount != 3) return;
        HideLoader();
        $scope.InitRecertification();
        $scope.NotValidLicenseRequestMax = false;
        $scope.NotValidLicenseRequestMin = false;

        var message = "";
        var today = new Date();
        $scope.LicenseExpirationDate = new Date($scope.LicenseExpirationDate);

        var maxExpiryDate = new Date($scope.LicenseExpirationDate.setDate($scope.LicenseExpirationDate.getDate() + $scope.ConfigValueMax));
        var minExpiryDate = new Date($scope.LicenseExpirationDate.setDate($scope.LicenseExpirationDate.getDate() + $scope.ConfigValueMin));


        if (maxExpiryDate <= today)
            message = "License can only be renewed within " + $scope.ConfigValueMax + " days of the license expiration date. Please contact office.";

        if (minExpiryDate >= today)
            message = "License renewal is not open yet. License can only be renewed starting  " + $scope.ConfigValueMin + " days before the expiration date. ";

        if (message = "") { $scope.InitRecertification(); }
        else {
            HideLoader();
            //alert(message);
        }
    }
    $scope.InitRecertification = function () {
        $scope.tab = 1;
        $scope.isClicked = 0;
        $scope.isMailingClicked = 0;
        $scope.isAddWork = 0;
        $scope.isPrevWorkAdd = 0;
        $scope.showHideHist1 = false;
        $scope.showHideHist2 = false;
        $scope.showHideHist3 = false;

        CertificationFactory.Get_CertificateHolderDetail(sessionStorage.Key, 271, 938)
                      .success(function (response) {
                          $scope.IndividualId = 271;
                          $scope.ApplicationId = 938;
                          $scope.IndividualLicenseId = response.IndividualLicenseId;
                          $scope.idnumber = response.CAMTCIdNumber;
                          $scope.licensenumber = response.CAMTCCertificateNumber;
                          $scope.fname = response.FirstName;
                          $scope.lname = response.LastName;
                          $scope.mname = response.MiddleName;
                          $scope.homeaddressid = response.HomeAddressId;
                          $scope.homestreet1 = response.HomeStreetLine1;
                          $scope.homestreet2 = response.HomeStreetLine2;
                          $scope.homecity = response.HomeCity;
                          $scope.homestatecode = response.HomeStateCode;
                          $scope.homeUseUserAddress = response.HomeUseUserAddress;
                          $scope.homeUseVerifiedAddress = response.HomeUseVerifiedAddress;
                          $scope.homezip = response.HomeZip;
                          $scope.mailingaddressid = response.MailingAddressId;
                          $scope.ismailingaddresssame = response.IsMailingSameAsPhysical;
                          $scope.mailingstreet1 = response.MailingStreetLine1;
                          $scope.mailingstreet2 = response.MailingStreetLine2;
                          $scope.mailingcity = response.MailingCity;
                          $scope.mailingstatecode = response.MailingStateCode;
                          $scope.mailingUseUserAddress = response.MailingUseUserAddress;
                          $scope.mailingUseVerifiedAddress = response.MailingUseVerifiedAddress;
                          $scope.mailingzip = response.MailingZip;
                          $scope.primaryphonecontactid = response.PrimaryPhoneContactId;
                          $scope.primaryphonecontacttypeid = response.PrimaryPhoneContactTypeId;
                          $scope.primaryphone = response.PrimaryPhone;
                          $scope.primaryphoneismobile = response.PrimaryPhoneIsMobile;
                          $scope.secondaryphonecontactid = response.SecondaryPhoneContactId;
                          $scope.secondaryphonecontacttypeid = response.SecondaryPhoneContactTypeId;
                          $scope.secondaryphone = response.SecondaryPhone;
                          $scope.secondaryphoneismobile = response.SecondaryPhoneIsMobile;
                          $scope.websitecontactid = response.WebsiteContactId;
                          $scope.websitecontacttypeid = response.WebsiteContactTypeId;
                          $scope.website = response.Website;
                          $scope.primaryemailcontactid = response.PrimaryEmailContactId;
                          $scope.primaryemailcontacttypeid = response.PrimaryEmailContactTypeId;
                          $scope.primaryemail = response.PrimaryEmail;
                          $scope.secondaryemailcontactid = response.SecondaryEmailContactId;
                          $scope.secondaryemailcontacttypeid = response.SecondaryEmailContactTypeId;
                          $scope.secondaryemail = response.SecondaryEmail;

                      })
                      .error(function (data) {
                          alert('Oops! Some Error Occurred.');
                          HideLoader();
                      });

        $scope.LeftMenuClick = function (selectedTab) {
            $scope.tab = selectedTab;
        }

        $scope.CopyHomeAddress = function (isSame) {
            if (isSame == 1) {
                $scope.mailingstreet1 = $scope.homestreet1;
                $scope.mailingstreet2 = $scope.homestreet2;
                $scope.mailingcity = $scope.homecity;
                $scope.mailingstatecode = $scope.homestatecode;
                $scope.mailingzip = $scope.homezip;
            }
            else {
                $scope.mailingstreet1 = '';
                $scope.mailingstreet2 = '';
                $scope.mailingcity = '';
                $scope.mailingstatecode = '';
                $scope.mailingzip = '';
            }

        }
        $scope.VerifyAddress = function (addressType) {
            alert(addressType);
            var address = {};
            if (addressType == "H") {
                address.StreetLine1 = $scope.homestreet1;
                address.StreetLine2 = $scope.homestreet2;
                address.City = $scope.homecity;
                address.StateCode = $scope.homestatecode;
                address.Zip = $scope.homezip;
                address.Country = "US";
            }

            if (addressType == "M") {
                address.StreetLine1 = $scope.mailingstreet1;
                address.StreetLine2 = $scope.mailingstreet2;
                address.City = $scope.mailingcity;
                address.StateCode = $scope.mailingstatecode;
                address.Zip = $scope.mailingzip;
                address.Country = "US";
            }

            CertificationFactory.Get_VerifiedAddress(sessionStorage.Key, address)
                      .success(function (response) {
                          if (response.Status) {
                              $scope.verifiedStreet1 = response.StreetLine1;
                              $scope.verifiedStreet2 = response.StreetLine2;
                              $scope.verifiedCity = response.City;
                              $scope.verifiedState = response.StateCode;
                              $scope.verifiedZip = response.Zip;
                          }
                          else {
                              if (addressType == "M") {
                                  $('#divNotVerifiedMailingAdd').html('<p style="color: Red; text-align: center;">' +
                                              '<label class="input-label">This is not a verified email Address</label></p>');
                              }
                              else {
                                  $('#divNotVerifiedHomeAdd').html('<p style="color: Red; text-align: center;">' +
                                              '<label class="input-label">This is not a verified home Address</label></p>');
                              }
                          }
                          if (addressType == "H")
                              $scope.isClicked = 1;
                          else
                              $scope.isMailingClicked = 1;

                      })
                      .error(function (data) {
                          alert('Oops! Some Error Occurred.');
                          HideLoader();
                      });
        }

        $scope.SavePersonalInfo = function () {

            $('#DRerror_validation').text('');
            var error = '';
            error += ValidateTextbox('<span class="notok"></span> Please enter CAMTC ID Number<br/>', '#txtCamctIDNo', $('#txtCamctIDNo').val());
            error += ValidateTextbox('<span class="notok"></span> Please enter CAMTC Certiﬁcate Number<br/>', '#txtCAMCTCertificateNo', $('#txtCAMCTCertificateNo').val());
            error += ValidateTextbox('<span class="notok"></span> Please enter first name<br/>', '#txtFirstNameEdit', $('#txtFirstNameEdit').val());
            error += ValidateTextbox('<span class="notok"></span> Please enter last  name<br/>', '#txtLastNameEdit', $('#txtLastNameEdit').val());
            error += ValidateTextbox('<span class="notok"></span> Please enter City<br/>', '#txtCityResEdit', $('#txtCityResEdit').val());
            error += ValidateDropdown('-1', '<span class=notok></span> Select Deficiency Template to Use<br/>', '#ddlStateResEdit', $('#ddlStateResEdit').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter Street in Home Address<br/>', '#txtStreetResEdit', $('#txtStreetResEdit').val());
            error += ValidateTextbox('<span class="notok"></span> Please enter City  in Home Address<br/>', '#txtCityResEdit', $('#txtCityResEdit').val());
            error += ValidateDropdown('-1', '<span class=notok></span> Please enter State  in Home Address<br/>', '#ddlStateResEdit', $('#ddlStateResEdit').val());

            error += ValidateZipCode('<span class="notok"></span> Please Enter valid Zip in Home Address<br/>', '#txtZipResEdit', $('#txtZipResEdit').val());

            error += ValidatePhone('<span class="notok"></span> Please Enter Primary Phone<br/>', '#txtPrimaryPhone', $('#txtPrimaryPhone').val());

            error += ValidateEmail('<span class="notok"></span> Please Enter Proper Primary Email<br/>', '<span class="notok"></span> Please Enter Primary Email<br/>', '#txtPrimaryEmail', $('#txtPrimaryEmail').val());


            if (error != '') {
                $('#DRerror_validation').show();
                $(document).scrollTop(0);
                $('#DRerror_validation').html(error);
                return false;
            }
            else {
                $('#DRerror_validation').hide();
                ShowLoader();
                var individual = {};
                individual.IndividualId = $scope.IndividualId;
                individual.ApplicationId = $scope.ApplicationId;
                individual.IndividualLicenseId = 1104;//$scope.IndividualLicenseId;
                individual.FirstName = $scope.fname;
                individual.LastName = $scope.lname;
                individual.MiddleName = $scope.mname;
                individual.CAMTCIdNumber = $scope.idnumber;
                individual.CAMTCCertificateNumber = $scope.licensenumber;

                var individualAddress = [];
                var address = {};

                address.AddressId = $scope.homeaddressid;
                address.AddressTypeId = 2;
                address.StreetLine1 = $scope.homestreet1;
                address.StreetLine2 = $scope.homestreet2;
                address.City = $scope.homecity;
                address.StateCode = $scope.homestatecode;
                address.Zip = $scope.homezip;
                address.UseUserAddress = $scope.homeUseUserAddress;
                address.UseVerifiedAddress = $scope.homeUseVerifiedAddress;
                address.IsMailingSameAsPhysical = $scope.ismailingaddresssame;
                individualAddress.push(address);

                address = {};
                address.AddressId = $scope.mailingaddressid;
                address.AddressTypeId = 1;
                address.StreetLine1 = $scope.mailingstreet1;
                address.StreetLine2 = $scope.mailingstreet2;
                address.City = $scope.mailingcity;
                address.StateCode = $scope.mailingstatecode;
                address.Zip = $scope.mailingzip;
                address.UseUserAddress = $scope.mailingUseUserAddress;
                address.UseVerifiedAddress = $scope.mailingUseVerifiedAddress;
                address.IsMailingSameAsPhysical = $scope.ismailingaddresssame;
                individualAddress.push(address);

                var individualContacts = [];
                var contact = {};

                contact.ContactId = $scope.primaryphonecontactid;
                contact.ContactTypeId = $scope.primaryphonecontacttypeid;
                contact.IsMobile = $scope.primaryphoneismobile;
                contact.ContactInfo = $scope.primaryphone;
                individualContacts.push(contact);

                contact = {};

                contact.ContactId = $scope.secondaryphonecontactid;
                contact.ContactTypeId = $scope.secondaryphonecontacttypeid
                contact.IsMobile = $scope.secondaryphoneismobile;
                contact.ContactInfo = $scope.secondaryphone;
                individualContacts.push(contact);

                contact = {};

                contact.ContactId = $scope.primaryemailcontactid;
                contact.ContactTypeId = $scope.primaryemailcontacttypeid;
                contact.ContactInfo = $scope.primaryemail;
                individualContacts.push(contact);

                contact = {};

                contact.ContactId = $scope.secondaryemailcontactid;
                contact.ContactTypeId = $scope.secondaryemailcontacttypeid;
                contact.ContactInfo = $scope.secondaryemail;
                individualContacts.push(contact);

                contact = {};

                contact.ContactId = $scope.websitecontactid;
                contact.ContactTypeId = $scope.websitecontacttypeid;
                contact.ContactInfo = $scope.website
                individualContacts.push(contact);

                individual.IndividualAddress = individualAddress;
                individual.individualContacts = individualContacts;

                var data = JSON.stringify(individual)
                CertificationFactory.Save_CertificateHolderInfo(sessionStorage.Key, data)
                      .success(function (response) {
                          alert("save loaded");
                          HideLoader();
                      })
                      .error(function (data) {
                          alert('Oops! Some Error Occurred.');
                          HideLoader();
                      });
                return true;
            }
        };

        $scope.SaveWorkInfo1 = function () {
            $('#WorkInformationValidation').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter Street <br/>', '#txtWorkInfoQ1Street1', $('#txtWorkInfoQ1Street1').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter City  <br/>', '#txtWorkInfoQ1City', $('#txtWorkInfoQ1City').val());

            error += ValidateDropdown('-1', '<span class=notok></span> Please enter State <br/>', '#ddlWorkInfoQ1State', $('#ddlWorkInfoQ1State').val());

            error += ValidateZipCode('<span class="notok"></span> Please Enter valid Zip <br/>', '#txtWorkInfoQ1Zip', $('#txtWorkInfoQ1Zip').val());

            error += ValidateEmail('<span class="notok"></span> Please Enter Proper Business Email<br/>', '<span class="notok"></span> Please Enter Primary Email<br/>', '#txtWorkInfoQ1BusinessEmail', $('#txtWorkInfoQ1BusinessEmail').val());

            if (error != '') {
                $('#WorkInformationValidation').show();

                $(document).scrollTop(0);

                $('#WorkInformationValidation').html(error);
                return false;
            }
            else {
                $('#WorkInformationValidation').hide();
                return true;
            }
        };

        $scope.SaveWorkInfo2 = function () {
            $('#WorkInformationValidation').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter Street <br/>', '#txtWorkInfoQ1Street2', $('#txtWorkInfoQ1Street2').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter City  <br/>', '#txtWorkInfoQ1City2', $('#txtWorkInfoQ1City2').val());

            error += ValidateDropdown('-1', '<span class=notok></span> Please enter State <br/>', '#ddlWorkInfoQ1State2', $('#ddlWorkInfoQ1State2').val());

            error += ValidateZipCode('<span class="notok"></span> Please Enter valid Zip <br/>', '#txtWorkInfoQ1Zip2', $('#txtWorkInfoQ1Zip2').val());

            error += ValidateEmail('<span class="notok"></span> Please Enter Proper Business Email<br/>', '<span class="notok"></span> Please Enter Primary Email<br/>', '#txtWorkInfoQ1BusinessEmail2', $('#txtWorkInfoQ1BusinessEmail2').val());


            if (error != '') {
                $('#WorkInformationValidation').show();

                $(document).scrollTop(0);

                $('#WorkInformationValidation').html(error);
                return false;
            }
            else {
                $('#WorkInformationValidation').hide();
                return true;
            }
        };

        $scope.HistoryPanel1 = function () {
            $('#showHideHist1').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter from date <br/>', '#divhist1 #txtFromDate', $('#divhist1').find('#txtFromDate').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter location/name of business  <br/>', '#divhist1 #txtLocationName', $('#divhist1').find('#txtLocationName').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter address   <br/>', '#divhist1 #txtAddress', $('#divhist1').find('#txtAddress').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter city name<br/>', '#divhist1 #txtCity', $('#divhist1').find('#txtCity').val());

            error += ValidateDropdown('-1', '<span class=notok></span> Please enter state <br/>', '#divhist1 #ddlState', $('#divhist1').find('#ddlState').val());

            error += ValidateZipCode('<span class="notok"></span>Please Enter valid zip code <br/>', '#divhist1 #txtZipCode', $('#divhist1').find('#txtZipCode').val());

            error += ValidateTextbox('<span class="notok"></span>Describe in your own words what happened  <br/>', '#divhist1 #txtDescribewhathappened', $('#divhist1').find('#txtDescribewhathappened').val());

            error += ValidateTextbox('<span class="notok"></span>Describe what was acted against (a permit, license, certificate, business license, operator’s permit, etc.) <br/>', '#divhist1 #txtActedAgainst', $('#divhist1').find('#txtActedAgainst').val());

            error += ValidateTextbox('<span class="notok"></span>Describe the specific action(s) taken against you <br/>', '#divhist1 #txtAddActionTaken', $('#divhist1').find('#txtAddActionTaken').val());

            error += ValidateTextbox('<span class="notok"></span>Please enter date of the citation or the date the action against you occurred <br/>', '#divhist1 #txtActionAgainstFromDate', $('#divhist1').find('#txtActionAgainstFromDate').val());

            error += ValidateTextbox('<span class="notok"></span>Identify the agency that took the action against you <br/>', '#divhist1 #txtAddAgency', $('#divhist1').find('#txtAddAgency').val());

            error += ValidateTextbox('<span class="notok"></span>Add stated reason for the action being taken against you <br/>', '#divhist1 #txtAddReason', $('#divhist1').find('#txtAddReason').val());

            error += ValidateTextbox('<span class="notok"></span>Any other information that you would like to share with us.<br/>', '#divhist1 #txtAddOtherInformation', $('#divhist1').find('#txtAddOtherInformation').val());

            error += ValidateRadio('<span class="notok"></span>Select massage provided at that location .<br/>', '#divhist1 input[type="radio"][name="rblAddLocation"]', $('#divhist1 input[type="radio"][name="rblAddLocation"]').is(':checked'));

            error += ValidateRadio('<span class="notok"></span>Select the incident related to massage services? .<br/>', '#divhist1 input[type="radio"][name="rblAddIncident"]', $('#divhist1 input[type="radio"][name="rblAddIncident"]').is(':checked'));

            if (error != '') {
                $('#showHideHist1').show();

                $(document).scrollTop(0);

                $('#showHideHist1').html(error);
                return false;
            }
            else {
                $('#showHideHist1').hide();
                return true;
            }
        };

        $scope.HistoryPanel2 = function () {
            $('#showHideHist2').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter from date <br/>', '#divhist2 #txtFromDate', $('#divhist2').find('#txtFromDate').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter location/name of business  <br/>', '#divhist2 #txtLocationName', $('#divhist2').find('#txtLocationName').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter address   <br/>', '#divhist2 #txtAddress', $('#divhist2').find('#txtAddress').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter city name<br/>', '#divhist2 #txtCity', $('#divhist2').find('#txtCity').val());

            error += ValidateDropdown('-1', '<span class=notok></span> Please enter state <br/>', '#divhist2 #ddlState', $('#divhist2').find('#ddlState').val());

            error += ValidateZipCode('<span class="notok"></span>Please Enter valid zip code <br/>', '#divhist2 #txtZipCode', $('#divhist2').find('#txtZipCode').val());

            error += ValidateTextbox('<span class="notok"></span>Describe in your own words what happened  <br/>', '#divhist2 #txtDescribewhathappened', $('#divhist2').find('#txtDescribewhathappened').val());

            error += ValidateTextbox('<span class="notok"></span>Describe what was acted against (a permit, license, certificate, business license, operator’s permit, etc.) <br/>', '#divhist2 #txtActedAgainst', $('#divhist2').find('#txtActedAgainst').val());

            error += ValidateTextbox('<span class="notok"></span>Describe the specific action(s) taken against you <br/>', '#divhist2 #txtAddActionTaken', $('#divhist2').find('#txtAddActionTaken').val());

            error += ValidateTextbox('<span class="notok"></span>Please enter date of the citation or the date the action against you occurred <br/>', '#divhist2 #txtActionAgainstFromDate', $('#divhist2').find('#txtActionAgainstFromDate').val());

            error += ValidateTextbox('<span class="notok"></span>Identify the agency that took the action against you <br/>', '#divhist2 #txtAddAgency', $('#divhist2').find('#txtAddAgency').val());

            error += ValidateTextbox('<span class="notok"></span>Add stated reason for the action being taken against you <br/>', '#divhist2 #txtAddReason', $('#divhist2').find('#txtAddReason').val());

            error += ValidateTextbox('<span class="notok"></span>Any other information that you would like to share with us.<br/>', '#divhist2 #txtAddOtherInformation', $('#divhist2').find('#txtAddOtherInformation').val());

            error += ValidateRadio('<span class="notok"></span>Select massage provided at that location .<br/>', '#divhist2 input[type="radio"][name="rblAddLocation"]', $('#divhist2 input[type="radio"][name="rblAddLocation"]').is(':checked'));

            error += ValidateRadio('<span class="notok"></span>Select the incident related to massage services? .<br/>', '#divhist2 input[type="radio"][name="rblAddIncident"]', $('#divhist2 input[type="radio"][name="rblAddIncident"]').is(':checked'));

            if (error != '') {
                $('#showHideHist2').show();

                $(document).scrollTop(0);

                $('#showHideHist2').html(error);
                return false;
            }
            else {
                $('#showHideHist2').hide();
                return true;
            }
        };

        $scope.HistoryPanel3 = function () {
            $('#showHideHist3').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter from date <br/>', '#divhist3 #txtFromDate', $('#divhist3').find('#txtFromDate').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter location/name of business  <br/>', '#divhist3 #txtLocationName', $('#divhist3').find('#txtLocationName').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter address   <br/>', '#divhist3 #txtAddress', $('#divhist3').find('#txtAddress').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter city name<br/>', '#divhist3 #txtCity', $('#divhist3').find('#txtCity').val());

            error += ValidateDropdown('-1', '<span class=notok></span> Please enter state <br/>', '#divhist3 #ddlState', $('#divhist3').find('#ddlState').val());

            error += ValidateZipCode('<span class="notok"></span>Please Enter valid zip code <br/>', '#divhist3 #txtZipCode', $('#divhist3').find('#txtZipCode').val());

            error += ValidateTextbox('<span class="notok"></span>Describe in your own words what happened  <br/>', '#divhist3 #txtDescribewhathappened', $('#divhist3').find('#txtDescribewhathappened').val());
            error += ValidateTextbox('<span class="notok"></span>Any other information that you would like to share with us.<br/>', '#divhist3 #txtAddOtherInformation', $('#divhist3').find('#txtAddOtherInformation').val());
            error += ValidateTextbox('<span class="notok"></span>Identify the place where the formal complaint is pending <br/>', '#divhist3 #txtIdentifyplace', $('#divhist3').find('#txtIdentifyplace').val());
            error += ValidateTextbox('<span class="notok"></span>Please enter nature of complaint  <br/>', '#divhist3 #txtNatureofcomplaint', $('#divhist3').find('#txtNatureofcomplaint').val());
            error += ValidateTextbox('<span class="notok"></span>Please enter with whom was the complaint filed <br/>', '#divhist3 #txtcomplaintfiled', $('#divhist3').find('#txtcomplaintfiled').val());
            error += ValidateTextbox('<span class="notok"></span>Provide any identifying information you have in relation to the complaint.<br/>', '#divhist3 #txtidentifyinginformation', $('#divhist3').find('#txtidentifyinginformation').val());
            error += ValidateTextbox('<span class="notok"></span>What is the current status of the complaint?<br/>', '#divhist3 #txtstatusofcomplaint', $('#divhist3').find('#txtstatusofcomplaint').val());

            error += ValidateRadio('<span class="notok"></span>Select massage provided at that location .<br/>', '#divhist3 input[type="radio"][name="rblAddLocation"]', $('#divhist3 input[type="radio"][name="rblAddLocation"]').is(':checked'));

            error += ValidateRadio('<span class="notok"></span>Select the incident related to massage services? .<br/>', '#divhist3 input[type="radio"][name="rblAddIncident"]', $('#divhist3 input[type="radio"][name="rblAddIncident"]').is(':checked'));

            if (error != '') {
                $('#showHideHist3').show();

                $(document).scrollTop(0);

                $('#showHideHist3').html(error);
                return false;
            }
            else {
                $('#showHideHist3').hide();
                return true;
            }
        };

        $scope.HistoryPanel4 = function () {
            $('#showHideHist4').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter from date <br/>', '#divhist4 #txtFromDate', $('#divhist4').find('#txtFromDate').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter location/name of business  <br/>', '#divhist4 #txtLocationName', $('#divhist4').find('#txtLocationName').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter address   <br/>', '#divhist4 #txtAddress', $('#divhist4').find('#txtAddress').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter city name<br/>', '#divhist4 #txtCity', $('#divhist4').find('#txtCity').val());

            error += ValidateDropdown('-1', '<span class=notok></span> Please enter state <br/>', '#divhist4 #ddlState', $('#divhist4').find('#ddlState').val());

            error += ValidateZipCode('<span class="notok"></span>Please Enter valid zip code <br/>', '#divhist4 #txtZipCode', $('#divhist4').find('#txtZipCode').val());

            error += ValidateTextbox('<span class="notok"></span>Describe in your own words what happened  <br/>', '#divhist4 #txtDescribewhathappened', $('#divhist4').find('#txtDescribewhathappened').val());
            error += ValidateTextbox('<span class="notok"></span>Any other information that you would like to share with us.<br/>', '#divhist4 #txtAddOtherInformation', $('#divhist4').find('#txtAddOtherInformation').val());

            error += ValidateTextbox('<span class="notok"></span>Identify who made the complaint <br/>', '#divhist4 #txtIdentifycomplaint', $('#divhist4').find('#txtIdentifycomplaint').val());

            error += ValidateTextbox('<span class="notok"></span>Identify who the complaint was made against <br/>', '#divhist4 #txtIdentifycomplaintagainst', $('#divhist4').find('#txtIdentifycomplaintagainst').val());

            error += ValidateTextbox('<span class="notok"></span>Please enter nature of complaint  <br/>', '#divhist4 #txtNatureofcomplaint', $('#divhist4').find('#txtNatureofcomplaint').val());

            error += ValidateTextbox('<span class="notok"></span>What is the current status of the complaint including whether it has been resolved, and if so, how it was resolved <br/>', '#divhist4 #txtcurrentstatusincluding', $('#divhist4').find('#txtcurrentstatusincluding').val());

            error += ValidateRadio('<span class="notok"></span>Select massage provided at that location .<br/>', '#divhist4 input[type="radio"][name="rblAddLocation"]', $('#divhist4 input[type="radio"][name="rblAddLocation"]').is(':checked'));

            error += ValidateRadio('<span class="notok"></span>Select the incident related to massage services? .<br/>', '#divhist4 input[type="radio"][name="rblAddIncident"]', $('#divhist4 input[type="radio"][name="rblAddIncident"]').is(':checked'));

            error += ValidateRadio('<span class="notok"></span>Select massage provided at that location .<br/>', '#divhist4 input[type="radio"][name="rblAddLocation"]', $('#divhist4 input[type="radio"][name="rblAddLocation"]').is(':checked'));

            error += ValidateRadio('<span class="notok"></span>Select the incident related to massage services? .<br/>', '#divhist4 input[type="radio"][name="rblAddIncident"]', $('#divhist4 input[type="radio"][name="rblAddIncident"]').is(':checked'));

            if (error != '') {
                $('#showHideHist4').show();

                $(document).scrollTop(0);

                $('#showHideHist4').html(error);
                return false;
            }
            else {
                $('#showHideHist4').hide();
                return true;
            }
        };

        $scope.HistoryPanel5 = function () {
            $('#showHideHist5').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter from date <br/>', '#divhist5 #txtFromDate', $('#divhist5').find('#txtFromDate').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter location/name of business  <br/>', '#divhist5 #txtLocationName', $('#divhist5').find('#txtLocationName').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter address   <br/>', '#divhist5 #txtAddress', $('#divhist5').find('#txtAddress').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter city name<br/>', '#divhist5 #txtCity', $('#divhist5').find('#txtCity').val());

            error += ValidateDropdown('-1', '<span class=notok></span> Please enter state <br/>', '#divhist5 #ddlState', $('#divhist5').find('#ddlState').val());

            error += ValidateZipCode('<span class="notok"></span>Please Enter valid zip code <br/>', '#divhist5 #txtZipCode', $('#divhist5').find('#txtZipCode').val());

            error += ValidateTextbox('<span class="notok"></span>Identify the agency that took the action against you <br/>', '#divhist5 #txtAddAgency', $('#divhist5').find('#txtAddAgency').val());

            error += ValidateTextbox('<span class="notok"></span>Enter date of conviction  <br/>', '#divhist5 #txtconvictionFromDate', $('#divhist5').find('#txtconvictionFromDate').val());

            error += ValidateTextbox('<span class="notok"></span>List the specific charge(s) convicted of <br/>', '#divhist5 #txtspecificcharge', $('#divhist5').find('#txtspecificcharge').val());

            error += ValidateTextbox('<span class="notok"></span>Where is the court located or jurisdiction?<br/>', '#divhist5 #txtJurisdiction', $('#divhist5').find('#txtJurisdiction').val());

            error += ValidateTextbox('<span class="notok"></span>Please enter Terms imposed <br/>', '#divhist5 #txtTermsimposed', $('#divhist5').find('#txtTermsimposed').val());

            error += ValidateTextbox('<span class="notok"></span>Please enter completion date<br/>', '#divhist5 #dtCompletiondate', $('#divhist5').find('#dtCompletiondate').val());

            error += ValidateTextbox('<span class="notok"></span>Any other relevant information in your possession.<br/>', '#divhist5 #txtotherrelevantinformation', $('#divhist5').find('#txtotherrelevantinformation').val());

            error += ValidateRadio('<span class="notok"></span>Select massage provided at that location .<br/>', '#divhist5 input[type="radio"][name="rbbusinessprovides"]', $('#divhist5 input[type="radio"][name="rbbusinessprovides"]').is(':checked'));

            error += ValidateRadio('<span class="notok"></span>Select the incident related to massage services? .<br/>', '#divhist5 input[type="radio"][name="rblAddIncident"]', $('#divhist5 input[type="radio"][name="rblAddIncident"]').is(':checked'));

            if (error != '') {
                $('#showHideHist5').show();

                $(document).scrollTop(0);

                $('#showHideHist5').html(error);
                return false;
            }
            else {
                $('#showHideHist5').hide();
                return true;
            }
        };

        $scope.HistoryPanel6 = function () {
            $('#showHideHist6').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter from date <br/>', '#divhist6 #txtFromDate', $('#divhist6').find('#txtFromDate').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter location/name of business  <br/>', '#divhist6 #txtLocationName', $('#divhist6').find('#txtLocationName').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter address   <br/>', '#divhist6 #txtAddress', $('#divhist6').find('#txtAddress').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter city name<br/>', '#divhist6 #txtCity', $('#divhist6').find('#txtCity').val());

            error += ValidateDropdown('-1', '<span class=notok></span> Please enter state <br/>', '#divhist6 #ddlState', $('#divhist6').find('#ddlState').val());

            error += ValidateZipCode('<span class="notok"></span>Please Enter valid zip code <br/>', '#divhist6 #txtZipCode', $('#divhist6').find('#txtZipCode').val());

            error += ValidateTextbox('<span class="notok"></span>Identify the agency that took the action against you <br/>', '#divhist6 #txtAddAgency', $('#divhist6').find('#txtAddAgency').val());

            error += ValidateTextbox('<span class="notok"></span>Enter date of conviction  <br/>', '#divhist6 #txtconvictionFromDate', $('#divhist6').find('#txtconvictionFromDate').val());

            error += ValidateTextbox('<span class="notok"></span>List the specific charge(s) convicted of <br/>', '#divhist6 #txtspecificcharge', $('#divhist6').find('#txtspecificcharge').val());

            error += ValidateTextbox('<span class="notok"></span>Where is the court located or jurisdiction?<br/>', '#divhist6 #txtJurisdiction', $('#divhist6').find('#txtJurisdiction').val());

            error += ValidateTextbox('<span class="notok"></span>Please enter Terms imposed <br/>', '#divhist6 #txtTermsimposed', $('#divhist6').find('#txtTermsimposed').val());

            error += ValidateTextbox('<span class="notok"></span>Please enter completion date<br/>', '#divhist6 #dtCompletiondate', $('#divhist6').find('#dtCompletiondate').val());

            error += ValidateTextbox('<span class="notok"></span>Any other relevant information in your possession.<br/>', '#divhist6 #txtotherrelevantinformation', $('#divhist6').find('#txtotherrelevantinformation').val());

            error += ValidateRadio('<span class="notok"></span>Select massage provided at that location .<br/>', '#divhist6 input[type="radio"][name="rbbusinessprovides"]', $('#divhist6 input[type="radio"][name="rbbusinessprovides"]').is(':checked'));

            error += ValidateRadio('<span class="notok"></span>Select the incident related to massage services? .<br/>', '#divhist6 input[type="radio"][name="rblAddIncident"]', $('#divhist6 input[type="radio"][name="rblAddIncident"]').is(':checked'));

            if (error != '') {
                $('#showHideHist6').show();

                $(document).scrollTop(0);

                $('#showHideHist6').html(error);
                return false;
            }
            else {
                $('#showHideHist6').hide();
                return true;
            }
        };

        $scope.HistoryPanel7 = function () {
            $('#showHideHist7').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter from date <br/>', '#divhist7 #txtFromDate', $('#divhist7').find('#txtFromDate').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter location/name of business  <br/>', '#divhist7 #txtLocationName', $('#divhist7').find('#txtLocationName').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter address   <br/>', '#divhist7 #txtAddress', $('#divhist7').find('#txtAddress').val());

            error += ValidateTextbox('<span class="notok"></span> Please enter city name<br/>', '#divhist7 #txtCity', $('#divhist7').find('#txtCity').val());

            error += ValidateDropdown('-1', '<span class=notok></span> Please enter state <br/>', '#divhist7 #ddlState', $('#divhist7').find('#ddlState').val());

            error += ValidateZipCode('<span class="notok"></span>Please Enter valid zip code <br/>', '#divhist7 #txtZipCode', $('#divhist7').find('#txtZipCode').val());

            error += ValidateTextbox('<span class="notok"></span>Identify the agency that took the action against you <br/>', '#divhist7 #txtAddAgency', $('#divhist7').find('#txtAddAgency').val());

            error += ValidateTextbox('<span class="notok"></span>Enter date of conviction  <br/>', '#divhist7 #txtconvictionFromDate', $('#divhist7').find('#txtconvictionFromDate').val());

            error += ValidateTextbox('<span class="notok"></span>List the specific charge(s) convicted of <br/>', '#divhist7 #txtspecificcharge', $('#divhist7').find('#txtspecificcharge').val());

            error += ValidateTextbox('<span class="notok"></span>Where is the court located or jurisdiction?<br/>', '#divhist7 #txtJurisdiction', $('#divhist7').find('#txtJurisdiction').val());

            error += ValidateTextbox('<span class="notok"></span>Please enter Terms imposed <br/>', '#divhist7 #txtTermsimposed', $('#divhist7').find('#txtTermsimposed').val());

            error += ValidateTextbox('<span class="notok"></span>Please enter completion date<br/>', '#divhist7 #dtCompletiondate', $('#divhist7').find('#dtCompletiondate').val());

            error += ValidateTextbox('<span class="notok"></span>Any other relevant information in your possession.<br/>', '#divhist7 #txtotherrelevantinformation', $('#divhist7').find('#txtotherrelevantinformation').val());

            error += ValidateRadio('<span class="notok"></span>Select massage provided at that location .<br/>', '#divhist7 input[type="radio"][name="rbbusinessprovides"]', $('#divhist7 input[type="radio"][name="rbbusinessprovides"]').is(':checked'));

            error += ValidateRadio('<span class="notok"></span>Select the incident related to massage services? .<br/>', '#divhist7 input[type="radio"][name="rblAddIncident"]', $('#divhist7 input[type="radio"][name="rblAddIncident"]').is(':checked'));

            if (error != '') {
                $('#showHideHist7').show();

                $(document).scrollTop(0);

                $('#showHideHist7').html(error);
                return false;
            }
            else {
                $('#showHideHist7').hide();
                return true;
            }
        };

        $scope.UploadDocument1 = function () {
            $('#document1').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter Document Name <br/>', '#divhist1 #txtDocumentName', $('#divhist1').find('#txtDocumentName').val());
            if (error != '') {
                $('#document1').show();

                $(document).scrollTop(0);

                $('#document1').html(error);
                return false;
            }
            else {
                $('#document1').hide();
                return true;
            }
        };

        $scope.UploadDocument2 = function () {
            $('#document2').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter Document Name <br/>', '#divhist2 #txtDocumentName', $('#divhist2').find('#txtDocumentName').val());
            if (error != '') {
                $('#document2').show();

                $(document).scrollTop(0);

                $('#document2').html(error);
                return false;
            }
            else {
                $('#document2').hide();
                return true;
            }
        };

        $scope.UploadDocument3 = function () {
            $('#document3').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter Document Name <br/>', '#divhist3 #txtDocumentName', $('#divhist3').find('#txtDocumentName').val());
            if (error != '') {
                $('#document3').show();

                $(document).scrollTop(0);

                $('#document3').html(error);
                return false;
            }
            else {
                $('#document3').hide();
                return true;
            }
        };

        $scope.UploadDocument4 = function () {
            $('#document4').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter Document Name <br/>', '#divhist4 #txtDocumentName', $('#divhist4').find('#txtDocumentName').val());
            if (error != '') {
                $('#document4').show();

                $(document).scrollTop(0);

                $('#document4').html(error);
                return false;
            }
            else {
                $('#document4').hide();
                return true;
            }
        };

        $scope.UploadDocument5 = function () {
            $('#document5').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter Document Name <br/>', '#divhist5 #txtDocumentName', $('#divhist5').find('#txtDocumentName').val());
            if (error != '') {
                $('#document5').show();

                $(document).scrollTop(0);

                $('#document5').html(error);
                return false;
            }
            else {
                $('#document5').hide();
                return true;
            }
        };

        $scope.UploadDocument6 = function () {
            $('#document6').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter Document Name <br/>', '#divhist6 #txtDocumentName', $('#divhist6').find('#txtDocumentName').val());
            if (error != '') {
                $('#document6').show();

                $(document).scrollTop(0);

                $('#document6').html(error);
                return false;
            }
            else {
                $('#document6').hide();
                return true;
            }
        };

        $scope.UploadDocument7 = function () {
            $('#document7').text('');
            var error = '';

            error += ValidateTextbox('<span class="notok"></span> Please enter Document Name <br/>', '#divhist7 #txtDocumentName', $('#divhist7').find('#txtDocumentName').val());
            if (error != '') {
                $('#document7').show();

                $(document).scrollTop(0);

                $('#document7').html(error);
                return false;
            }
            else {
                $('#document7').hide();
                return true;
            }
        };

        $scope.PaymentVarification = function () {
            $('#approvedCivilApp').text('');
            var error = '';
            error += ValidateDropdown('-1', '<span class=notok></span> Select Payment method <br/>', '#ddlPaymentMethod', $('#ddlPaymentMethod').val());

            error += ValidateNumber('<span class="notok"></span> Please enter Application Fees <br/>', '#txtApplicationFees', $('#txtApplicationFees').val());

            error += ValidateDropdown('Select', '<span class=notok></span> Please select the number of additional certiﬁcates <br/>', '#txtNumberOfAdditinolCerti', $('#txtNumberOfAdditinolCerti').val());

            error += ValidateNumber('<span class="notok"></span> Please enter Additional Certificate Amount  <br/>', '#txtAdditionalCertificateAmt', $('#txtAdditionalCertificateAmt').val());

            error += ValidateNumber('<span class="notok"></span> Please enter Total Fees   <br/>', '#txtTotalFees', $('#txtTotalFees').val());

            if (error != '') {
                $('#approvedCivilApp').show();

                $(document).scrollTop(0);

                $('#approvedCivilApp').html(error);
                return false;
            }
            else {
                $('#approvedCivilApp').hide();
                return true;
            }
        }

        $scope.ApplicationAffidavit = function () {
            $('#applicationAffidavit').text('');
            var error = '';
            error += ValidateTextbox('<span class="notok"></span> Please enter Affidavit Applicant Name   <br/>', '#txtAffidavitApplicantName', $('#txtAffidavitApplicantName').val());
            error += ValidateTextbox('<span class="notok"></span>Please enter your Signature <br/>', '#AffSign', $('#AffSign').val());
            error += ValidateTextbox('<span class="notok"></span>Please Date <br/>', '#AffDate', $('#AffDate').val());

            if (error != '') {
                $('#applicationAffidavit').show();
                $(document).scrollTop(0);
                $('#applicationAffidavit').html(error);
                return false;
            }
            else {
                $('#applicationAffidavit').hide();
                var obj = {};
                obj.IndividualAffidavitResponseList = $scope.ContentItems
                obj.Individualaffidavitsignature = { SignatureName: $scope.signaturename, Name: $scope.name };

                CertificationFactory.Save_AffidavitInfo(sessionStorage.Key, JSON.stringify(obj)).success(function (response) {
                    if (response.IsValid) {

                    }
                }).
                error(function (response) {
                    alert(response);
                });
                //angular.forEach($scope.ContentItems, function (value,key) {
                //    alert(value.ContentItemResponse);
                //})


                return true;
            }
        }
        $scope.InitializeAffidavitView = function () {

            CertificationFactory.Get_ContentGetAffidavitContent(sessionStorage.Key).success(function (response) {
                if (response.Status) {
                    $scope.ContentItems = response.ContentItems;
                }
                else {
                    $scope.ContentItems = [];
                }
            }).error(function (data) {
                //alert('error');
            });
            //CertificationFactory.Get_ContentItem_By_ContentItemLkId_AND_Code(sessionStorage.Key, 21, 'SchoolEligibility').success(function (response) {
            //    if (response.Status) {
            //        $scope.AffidavitContent1 = response.ContentItemLk[0];
            //    }
            //}).error(function (data) {
            //    //alert('error');
            //});
        };

        $scope.InitializeAffidavitView();
    }
    $scope.ValidateRecertification();
}]);
