LAPP.controller('StaffController', function ($scope, $rootScope, mySharedService, StaffFactory, $window, $timeout) {
    $scope.hasShow = 'false';
    $scope.idlist = [];
    $scope.roles = [{ Id: '1', Name: 'Owner', 'posid': 0 }, { Id: '2', Name: 'Administrator', 'posid': 0 }, { Id: '3', Name: 'Instructor', 'posid': 0 }];

    $scope.$on('handleBroadcastForTab', function () {
        $scope.ProviderId = mySharedService.message;
        $scope.applicationid = mySharedService.Applicationid;

        if (mySharedService.CurrentPage == 'Staff') {
            $scope.hasShow = 'true';
            $scope.dotheappicall();
        }
        else
            $scope.hasShow = 'false';
    });

    $scope.dotheappicall = function () {
        $scope.getallthestaffinfo();
    }

    $scope.staff = {};

    $scope.getallthestaffinfo = function () {
        ShowLoader();
        StaffFactory.GetAllProviderStaffDetails(key, $scope.applicationid, $scope.ProviderId).success(function (data) {
            HideLoader();
            $scope.StaffGrid.api.setRowData(data.ListOfProviderStaffDetails);

        }).error(function (error) {
            $scope.Error = error;
        });
    }


    $('#divAddRelatedschool1').hide();

    $scope.ShowPopup = function (id) {
        if (id == 1) {
            $scope.clearRelatedAddress();
            $('#divAddRelatedschool1').show();
        }

    }


    $scope.showUpdateRelatedProgram = function (ProviderIndvNameInfoId, ProviderStaffId, contactid, InduvidualNameId, posids, ids, titles, ProviderStaffFirstName, ProviderStaffLastName, ProviderStaffEmail, IsBackgroundCheckReq, CAMTCNumber, ActionList) {
        $scope.clearRelatedAddress();
        $('#divAddRelatedschool1').show();
        $scope.idlist = [];
        $scope.staff.IsUpdate = true;
        $scope.staff.ProviderStaffFirstName = ProviderStaffFirstName;
        $scope.staff.ProviderStaffEmail = ProviderStaffEmail;
        $scope.staff.ProviderStaffLastName = ProviderStaffLastName;

        $scope.staff.CAMTCNumber = CAMTCNumber;
        $scope.ids = ids;
        $scope.titles = titles;
        $scope.ProviderStaffId = ProviderStaffId;
        $scope.InduvidualNameId = InduvidualNameId;
        $scope.ContactId = contactid;
        $scope.ProviderIndvNameInfoId = ProviderIndvNameInfoId;

        $scope.posids = posids;
        if (IsBackgroundCheckReq == 'true')
            $scope.Chk = 'Yes';
        else
            $scope.Chk = 'No';

        var datas = $scope.posids.split(',');
        var datasid = $scope.ids.split(',');
        var count = 0;
        var yn = ActionList.split(',');
        for (var i = 0; i < datasid.length; i++) {
            {
                if (datasid[i].trim() == '1') {
                    if (yn[count].trim() == 'Y')
                        $scope.idlist.push('1')
                    $scope.roles[0].posid = datas[count].trim();
                    count++;
                }
                else if (datasid[i].trim() == '2') {
                    if (yn[count].trim() == 'Y')
                        $scope.idlist.push('2')
                    $scope.roles[1].posid = datas[count].trim();
                    count++;
                }
                else if (datasid[i].trim() == '3') {
                    if (yn[count].trim() == 'Y')
                        $scope.idlist.push('3')
                    $scope.roles[1].posid = datas[count].trim();
                    count++;
                }
            }

        }

    }

    $scope.DeleteRelatedProgram = function (ProviderIndvNameInfoId, ProviderStaffId, contactid, InduvidualNameId, posids, ids, titles, ProviderStaffFirstName, ProviderStaffLastName, ProviderStaffEmail, IsBackgroundCheckReq, CAMTCNumber, ActionList) {

        $scope.staff.IsActive = 0;
        $scope.staff.IsDeleted = 0;
        $scope.staff.ProviderId = $scope.ProviderId;
        $scope.staff.ApplicationId = $scope.applicationid;

        $scope.staff.ProviderIndvNameInfoId = ProviderIndvNameInfoId;
        $scope.staff.ProviderStaffId = ProviderStaffId;
        $scope.staff.InduvidualNameId = InduvidualNameId,
        $scope.staff.ContactId = contactid;
        $scope.staff.ProvIndvNameTitlePositionId = '';
        $scope.staff.ProvIndvNameTitlePosition = '';
        $scope.staff.posids = '';
        $scope.staff.trueset = '';

        $scope.staff.IsBackgroundCheckReq = IsBackgroundCheckReq;

        $scope.staff.CAMTCNumber = CAMTCNumber;
        //$scope.staff.WebsiteId = $scope.WebsiteId;
        //$scope.staff.PhoneId = $scope.PhoneId;
        //$scope.staff.AddressId = $scope.AddressId;
        //$scope.staff.ProviderNameId = $scope.ProviderNameId;
        //$scope.staff.AddressId = $scope.AddressId;

        StaffFactory.DeleteProviderStaff(key, $scope.staff).success(function (data) {
            //$scope.StaffGrid.api.setRowData(data.ProviderRelatedSchoolsList);
            $scope.clearRelatedAddress();
            $scope.getallthestaffinfo();
        }).error(function (error) {
            $scope.Error = error;
        });

        $scope.staff.ProviderId = $scope.ProviderId;
        $scope.staff.ApplicationId = $scope.applicationid;
        $scope.staff.ProviderRelatedSchoolId = ProviderRelatedSchoolId;
        $scope.staff.ProviderNameId = ProviderNameId;
        ///$scope.staff.DateAssociated = DateAssociated;
        $scope.staff.IsActive = 0;
        $scope.staff.IsDeleted = 0;

        AboutFactory.DeleteProviderRelatedSchools(key, $scope.staff).success(function (data) {
            $scope.ProviderRelatedProgramGrid.api.setRowData(data.ProviderRelatedSchoolsList);

        }).error(function (error) {
            $scope.Error = error;
        });

    }


    $scope.clearRelatedAddress = function () {
        $scope.staff = {};
        $scope.roles = [];
        $scope.roles = [{ Id: '1', Name: 'Owner', 'posid': 0 }, { Id: '2', Name: 'Administrator', 'posid': 0 }, { Id: '3', Name: 'Instructor', 'posid': 0 }];
        $scope.idlist = [];
        $scope.ids = '';
        $scope.titles = '';
        $scope.ProviderStaffId = 0;
        $scope.InduvidualNameId = 0;
        $scope.ContactId = 0;
        $scope.ProviderIndvNameInfoId = 0;

        $scope.Chk = 'No';
        $scope.posids = '';
        $('#divAddRelatedschool1').hide();
    }

    $scope.ProviderStaffId = 0;
    $scope.InduvidualNameId = 0;
    $scope.ContactId = 0;
    $scope.Chk = 'No';
    //Adding staffinfo
    $scope.SaveStaffInfo = function () {
        ShowLoader();
        if (BackgroundCheckAddNewSave()) {
            $scope.staff.IsActive = 1;

            $scope.staff.IsDeleted = 0;
            $scope.staff.ProviderId = $scope.ProviderId;
            $scope.staff.ApplicationId = $scope.applicationid;

            $scope.staff.ProviderIndvNameInfoId = $scope.ProviderIndvNameInfoId;
            $scope.staff.ProviderStaffId = $scope.ProviderStaffId;
            $scope.staff.InduvidualNameId = $scope.InduvidualNameId,
            $scope.staff.ContactId = $scope.ContactId;
            $scope.staff.ProvIndvNameTitlePositionId = '';
            $scope.staff.ProvIndvNameTitlePosition = '';
            $scope.staff.posids = '';
            $scope.staff.trueset = '';

            var len = $scope.roles.length;

            if (len > 0) {
                debugger;
                for (var i = 0; i < len; i++) {
                    $scope.staff.posids += $scope.roles[i].posid;
                    $scope.staff.ProvIndvNameTitlePositionId += $scope.idlist[i];
                    $scope.staff.ProvIndvNameTitlePosition += $scope.roles[i].Name;
                    var test = angular.copy($scope.idlist);
                    var result = _.contains(test, $scope.roles[i].Id);
                    if (result) {
                        $scope.staff.trueset += 'Y';
                    }
                    else {
                        $scope.staff.trueset += 'N';
                    }
                    if ((len - 1) != i) {
                        $scope.staff.posids += ',';
                        $scope.staff.ProvIndvNameTitlePositionId += ',';
                        $scope.staff.ProvIndvNameTitlePosition += ',';
                        $scope.staff.trueset += ',';
                    }
                }
            }


            if ($scope.Chk == 'Yes')
                $scope.staff.IsBackgroundCheckReq = true;
            else
                $scope.staff.IsBackgroundCheckReq = false;
            //$scope.staff.WebsiteId = $scope.WebsiteId;
            //$scope.staff.PhoneId = $scope.PhoneId;
            //$scope.staff.AddressId = $scope.AddressId;
            //$scope.staff.ProviderNameId = $scope.ProviderNameId;
            //$scope.staff.AddressId = $scope.AddressId;

            StaffFactory.SaveProviderStaff(key, $scope.staff).success(function (data) {
                //$scope.StaffGrid.api.setRowData(data.ProviderRelatedSchoolsList);

                $scope.clearRelatedAddress();
                $scope.getallthestaffinfo();

            }).error(function (error) {
                $scope.Error = error;
            });
        }
        else
            HideLoader();
    }

    $scope.StaffGrid = {
        columnDefs: [
            //{ headerName: "", hide: true, width: 250, field: "AddressId", },
            { headerName: "", hide: true, width: 250, field: "ids", },
            { headerName: "", hide: true, width: 250, field: "ProviderStaffId", },
            { headerName: "", hide: true, width: 250, field: "InduvidualNameId", },
            { headerName: "", hide: true, width: 250, field: "ProviderIndvNameInfoId", },
            { headerName: "", hide: true, width: 250, field: "ContactId", },
            { headerName: "", hide: true, width: 250, field: "posids", },
            { headerName: "Last Name", width: 110, field: "ProviderStaffLastName", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "First Name", width: 110, field: "ProviderStaffFirstName", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Title/ Position", width: 125, field: "titles", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            {
                headerName: "Background Check <br /> Required", width: 125, field: "IsBackgroundCheckReq", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, cellRenderer: function (params) {
                    if (params.data.IsBackgroundCheckReq)
                        return "Yes";
                    else
                        return "No";

                }
            },
            { headerName: "If No, Reason Why?", width: 125, field: "CAMTCNumber", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            {

                headerName: "Status", width: 70, field: "IsActive", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, cellRenderer: function (params) {
                    if (params.data.IsActive)
                        return "<img src='\\Content/Theme1/images/StatusYes.png' />";
                    else
                        return "<img src='\\Content/Theme1/images/StatusNo.png' />";

                }
            },
              {
                  headerName: "Action", width: 80, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
                      return "<a data-ng-click=\"showUpdateRelatedProgram('" + params.data.ProviderIndvNameInfoId + "','" + params.data.ProviderStaffId + "','" + params.data.ContactId + "','" + params.data.InduvidualNameId + "','" + params.data.posids + "','" + params.data.ids + "','" + params.data.titles + "','" + params.data.ProviderStaffFirstName + "','" + params.data.ProviderStaffLastName + "','" + params.data.ProviderStaffEmail + "','" + params.data.IsBackgroundCheckReq + "','" + params.data.CAMTCNumber + "','" + params.data.ActionList + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a> | </span><a data-ng-click=\"DeleteRelatedProgram('" + params.data.ProviderIndvNameInfoId + "','" + params.data.ProviderStaffId + "','" + params.data.ContactId + "','" + params.data.InduvidualNameId + "','" + params.data.posids + "','" + params.data.ids + "','" + params.data.titles + "','" + params.data.ProviderStaffFirstName + "','" + params.data.ProviderStaffLastName + "','" + params.data.ProviderStaffEmail + "','" + params.data.IsBackgroundCheckReq + "','" + params.data.CAMTCNumber + "','" + params.data.ActionList + "')\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
                      //('" + params.data.ProviderStaffId + "','" + params.data.ContactId + "','" + params.data.InduvidualNameId + "','" + params.data.posids + "','" + params.data.ids + "','" + params.data.titles + "','" + params.data.ProviderStaffFirstName + "','" + params.data.ProviderStaffLastName + "','" + params.data.ProviderStaffEmail + "','" + params.data.IsBackgroundCheckReq + "','" + params.data.CAMTCNumber + "')
                  }
              },
        ],
        angularCompileRows: true,
        rowData: [],
        rowHeight: 25,
        headerHeight: 50,
        //enableColResize: true,
        suppressRowClickSelection: true,
        suppressHorizontalScroll: true,
        suppressCellSelection: true,
        onGridReady: function (event) {
            //$scope.idlistGrid.api.sizeColumnsToFit();
        }
    };


    function BackgroundCheckAddNewSave() {
        $('.errorinfo').text('');
        var error = '';
        var txtBackCheckLastName = ValidateTextbox('<span class="notok"></span> Please enter last name.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_txtBackCheckLastName', $('#ContentPlaceHolder1_ucCertificationApplication1_txtBackCheckLastName').val());
        var txtBackCheckFirstName = ValidateTextbox('<span class="notok"></span> Please enter first name.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_txtBackCheckFirstName', $('#ContentPlaceHolder1_ucCertificationApplication1_txtBackCheckFirstName').val());
        var txtaddstaffEmail = ValidateEmail('<span class="notok"></span> Please enter email in correct format (joe@email.com) <br/>', '<span class="notok"></span> Please enter email.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_txtaddstaffEmail', $('#ContentPlaceHolder1_ucCertificationApplication1_txtaddstaffEmail').val());
        var CheckBoxList3 = ValidateCheckboxList('<span class="notok"></span> Please check any one from title/ position.<br/>', 'ContentPlaceHolder1_ucCertificationApplication1_CheckBoxList3', $('#ContentPlaceHolder1_ucCertificationApplication1_CheckBoxList3').val());
        //var rblBackgroundChekReq = ValidateRadioList('<span class="notok"></span> Please check yes or no of background check.<br/>', 'ContentPlaceHolder1_ucCertificationApplication1_rblBackgroundChekReq', $('#ContentPlaceHolder1_ucCertificationApplication1_rblBackgroundChekReq').val());
        var NoRegion = '';
        //var RDO = document.getElementById('ContentPlaceHolder1_ucCertificationApplication1_rblBackgroundChekReq');
        //var radio = RDO.getElementsByTagName("input");
        //var RDO2 = document.getElementById('ContentPlaceHolder1_ucCertificationApplication1_RadioButtonList2');
        //var radio2 = RDO2.getElementsByTagName("input");
        //RadioButtonList2
        //if (radio[1].checked) {
        //    radio2[0].checked = true;
        //    if ($('#ContentPlaceHolder1_ucCertificationApplication1_txtchkCAMTC').val() == '') {
        //        NoRegion = ValidateTextbox('<span class="notok"></span> Please enter reason (camtc#).<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_txtchkCAMTC', $('#ContentPlaceHolder1_ucCertificationApplication1_txtchkCAMTC').val());
        //    }
        //}
        //else {
        //    $('#ContentPlaceHolder1_ucCertificationApplication1_txtchkCAMTC').removeClass("error");
        //    radio2[0].checked = false;
        //}

        //var fluStaffHiring = ValidateDropdown('0', '<span class="notok"></span>   Please upload document for Hiring, Training, Evaluating and Discipling Policies.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_fuStaff1_upDoc', $('#ContentPlaceHolder1_ucCertificationApplication1_fuStaff1_hfStatus').val());
        //var fluStaffFacility = ValidateDropdown('0', '<span class="notok"></span>   Please upload document for Facility Meeting Minutes/Agenda/Memos.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_fuStaff2_upDoc', $('#ContentPlaceHolder1_ucCertificationApplication1_fuStaff2_hfStatus').val());
        //var fluStaffStTeRatio = ValidateDropdown('0', '<span class="notok"></span>   Please upload document for Student-Teacher Ratio.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_fuStaff3_upDoc', $('#ContentPlaceHolder1_ucCertificationApplication1_fuStaff3_hfStatus').val());

        error = txtBackCheckLastName + txtBackCheckFirstName + txtaddstaffEmail;//+ fluStaffHiring + fluStaffFacility + fluStaffStTeRatio + CheckBoxList3 + rblBackgroundChekReq + NoRegion;
        $('.errorinfo').html(error);

        if (error != '') {
            $('.errorinfo').show();
            $(document).scrollTop(0);
            return false;
        }
        else {
            return true;
        }
    }

    function saveSclContct() {
        $('.errorinfo').text('');
        var error = '';
        var TextBox72 = ValidateTextbox('<span class="notok"></span> Please enter signature.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_TextBox72', $('#ContentPlaceHolder1_ucCertificationApplication1_TextBox72').val());
        var TextBox74 = ValidateDate('<span class="notok"></span> Future dates are not accepted. <br/>', '<span class="notok"></span> Please enter date in correct format (mm/dd/yyyy) <br/>', '<span class="notok"></span> Please enter date.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_TextBox74', $('#ContentPlaceHolder1_ucCertificationApplication1_TextBox74').val());
        var TextBox94 = ValidateTextbox('<span class="notok"></span> Please enter title.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_TextBox94', $('#ContentPlaceHolder1_ucCertificationApplication1_TextBox94').val());
        error = TextBox72 + TextBox74 + TextBox94;
        if (error != '') {
            $('.errorinfo').show();
            $('#ContentPlaceHolder1_ucCertificationApplication1_btnsaveSclContct').attr('type', 'button');
            $(document).scrollTop(0);
        }
        else {
            $('.errorinfo').hide();
            $('#ContentPlaceHolder1_ucCertificationApplication1_btnsaveSclContct').attr('type', 'submit');
        }
        $('.errorinfo').html(error);
    }
    //ContentPlaceHolder1_ucCertificationApplication1_btnNextBackList
    function btnNextBackList() {
        $('.errorinfo').text('');
        var error = '';
        var TextBox72 = ValidateTextbox('<span class="notok"></span> Please enter signature.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_TextBox72', $('#ContentPlaceHolder1_ucCertificationApplication1_TextBox72').val());
        var TextBox74 = ValidateDate('<span class="notok"></span> Future dates are not accepted. <br/>', '<span class="notok"></span> Please enter date in correct format (mm/dd/yyyy) <br/>', '<span class="notok"></span> Please enter date.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_TextBox74', $('#ContentPlaceHolder1_ucCertificationApplication1_TextBox74').val());
        var TextBox94 = ValidateTextbox('<span class="notok"></span> Please enter title.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_TextBox94', $('#ContentPlaceHolder1_ucCertificationApplication1_TextBox94').val());
        error = TextBox72 + TextBox74 + TextBox94;
        if (error != '') {
            $('.errorinfo').show();
            $('#ContentPlaceHolder1_ucCertificationApplication1_btnNextBackList').attr('type', 'button');
            $(document).scrollTop(0);
        }
        else {
            $('.errorinfo').hide();
            $('#ContentPlaceHolder1_ucCertificationApplication1_btnNextBackList').attr('type', 'submit');
        }
        $('.errorinfo').html(error);
    }

    function PaySubmit() {
        $('.errorinfo').text('');
        var error = '';
        var ddlStaffPaymentMethod = ValidateDropdown('-1', '<span class="notok"></span> Please select payment method.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_ddlStaffPaymentMethod', $('#ContentPlaceHolder1_ucCertificationApplication1_ddlStaffPaymentMethod').val());
        error = ddlStaffPaymentMethod;
        if (error != '') {
            $('.errorinfo').show();
            $('#ContentPlaceHolder1_ucCertificationApplication1_btnPaySubmit').attr('type', 'button');
            $(document).scrollTop(0);
        }
        else {
            $('.errorinfo').hide();
            $('#ContentPlaceHolder1_ucCertificationApplication1_btnPaySubmit').attr('type', 'submit');
        }
        $('.errorinfo').html(error);
    }


});