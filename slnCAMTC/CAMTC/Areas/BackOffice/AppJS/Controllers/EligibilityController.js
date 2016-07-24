LAPP.controller('EligiblityController', ['$scope', '$rootScope', 'mySharedService', 'EligiblitiyFactory', function ($scope, $rootScope, mySharedService, EligiblitiyFactory) {
    $('.errorinfo').hide();
    $scope.hasShow = 'false';
    $scope.SchoolEligibility1 = '';
    $scope.SchoolEligibility2 = '';
    $scope.SchoolEligibility3 = '';
    $scope.SchoolEligibility4 = '';
    $scope.SchoolEligibility5 = '';
    $scope.ProviderId = '-1';
    $scope.Provider = { ProviderId: '-1' };
    $scope.Provider.IsChecked1 = false;
    $scope.Provider.IsChecked2 = false;
    $scope.Provider.IsChecked3 = false;
    $scope.Provider.IsChecked4 = false;

    $scope.Provider.ProviderEligibilityId1 = 0;
    $scope.Provider.ProviderEligibilityId2 = 0;
    $scope.Provider.ProviderEligibilityId3 = 0;
    $scope.Provider.ProviderEligibilityId4 = 0;

    $scope.Provider.ContentItemLkId1 = 21;
    $scope.Provider.ContentItemLkId2 = 22;
    $scope.Provider.ContentItemLkId3 = 23;
    $scope.Provider.ContentItemLkId4 = 24;

    $('#divmassageprogram').hide();
    $('#dvagency').hide();

    $scope.ShowPopup = function (id) {
        if (id == 1) {
            $scope.clearApprovalAgency();
            $('#dvagency').show();
        }
        else if (id == 2) {
            $scope.clearMassageProgram();
            $('#divmassageprogram').show();
        }

    }

    $scope.LookupContentGetBYContentItemLkID = function (Id) {
        EligiblitiyFactory.LookupContentGetBYContentItemLkID(key, Id).success(function (data) {
            if (data.ContentItemLk.length > 0) {
                if (data.ContentItemLk[0].ContentItemLkId == 21) {
                    $scope.SchoolEligibility1 = data.ContentItemLk[0].ContentItemLkDesc;
                    $scope.SchoolEligibility1 = data.ContentItemLk[0].ContentItemLkDesc;
                }
                else if (data.ContentItemLk[0].ContentItemLkId == 22) {
                    $scope.SchoolEligibility2 = data.ContentItemLk[0].ContentItemLkDesc;
                }
                else if (data.ContentItemLk[0].ContentItemLkId == 23) {
                    $scope.SchoolEligibility3 = data.ContentItemLk[0].ContentItemLkDesc;
                }
                else if (data.ContentItemLk[0].ContentItemLkId == 24) {
                    $scope.SchoolEligibility4 = data.ContentItemLk[0].ContentItemLkDesc;
                }
                else if (data.ContentItemLk[0].ContentItemLkId == 25) {
                    $scope.SchoolEligibility5 = data.ContentItemLk[0].ContentItemLkDesc;
                }
            }


        }).error(function (error) {
            $scope.Error = error;
        });
    }


    $scope.GetAllProviderApprovalAgency = function () {
        var obj = { ProviderId: $scope.ProviderId };

        EligiblitiyFactory.GetAllProviderApprovalAgency(key, obj).success(function (data) {
            if (data.ProviderApprovalAgencyResponseList != null && data.ProviderApprovalAgencyResponseList.length > 0) {
                _.each(data.ProviderApprovalAgencyResponseList, function (value, key) {
                    value.ExpirationDate = moment(value.ExpirationDate).format("MM/DD/YYYY");
                });

                $scope.ApprovalGrid.api.setRowData(data.ProviderApprovalAgencyResponseList);
            }
        }).error(function (error) {
            $scope.Error = error;
        });
    }

    $scope.GetAllProviderProgram = function () {
        var obj = { ProviderId: $scope.ProviderId };
        EligiblitiyFactory.GetAllProviderProgram(key, obj).success(function (data) {
            $scope.MassageProgramGrid.api.setRowData(data.ProviderProgramResponseList);
        }).error(function (error) {
            $scope.Error = error;
        });
    }


    $scope.clearMassageProgram = function () {
        $scope.Massage = {};
        //$scope.Mblex.PassingYear = 'Select';
        //$scope.Mblex.PassingHalf = 'Select';
        $scope.ProviderProgramId = 0;
        $('#divmassageprogram').hide();
    }

    //Adding Mblex
    $scope.Save_MassgeProgram = function () {
        ShowLoader();
        if (MassageprogramAddNewSave()) {
            $scope.Massage.IsActive = 1;
            $scope.Massage.IsDeleted = 0;
            $scope.Massage.ProviderProgramId = $scope.ProviderProgramId;
            $scope.Massage.ProviderId = $scope.ProviderId;
            EligiblitiyFactory.Save_MassgeProgram(key, $scope.Massage).success(function (data) {

                $scope.clearMassageProgram();
                $scope.MassageProgramGrid.api.setRowData(data.ProviderProgramResponseList);
                HideLoader();
            }).error(function (error) {
                $scope.Error = error;
            });
        }
        else
            HideLoader();
    }
    //Adding Mblex



    function MassageprogramAddNewSave() {
        $('.errorinfo').text('');
        var error = '';
        var txtAddmessageProgName = ValidateTextbox('<span class="notok"></span>  Please enter message program name.<br/>', '#AddMassageProgName', $('#AddMassageProgName').val());
        var txtAddProgrameHours = ValidateTextbox('<span class="notok"></span>  Please enter total number of program hours.<br/>', '#AddProgrameHours', $('#AddProgrameHours').val());
        error = txtAddmessageProgName + txtAddProgrameHours;
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

    //Populate Edit Satelite Address
    $scope.showUpdatevalueMassgeProgram = function (ProviderProgramId, MassageProgName, ProgrameHours) {
        $('#divmassageprogram').show();
        $scope.ProviderProgramId = ProviderProgramId;
        $scope.Massage.ProgramName = MassageProgName;
        $scope.Massage.TotalNoofPgmHours = ProgrameHours
    }
    //Populate Edit Previous school name

    $scope.MassageProgramGrid = {
        columnDefs: [
        { headerName: "", hide: true, width: 250, field: "ProviderProgramId", },
        { headerName: "", hide: true, width: 250, field: "ProviderProgramGuid", },
        { headerName: "Massage Program <br /> Name", width: 120, field: "ProgramName", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Total Number <br />of Program Hours", width: 100, field: "TotalNoofPgmHours", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            {
                headerName: "CAMTC  Approved", width: 100, field: "IsProgramApproved", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, cellRenderer: function (params) {
                    if (params.data.IsProgramApproved)
                        return "<img src='\\Content/Theme1/images/StatusYes.png' />";
                    else
                        return "<img src='\\Content/Theme1/images/StatusNo.png' />";

                }
            },
            { headerName: "Approved	Program <br />  Approved Start", width: 125, field: "ProgramApprovalStartDate", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Program Approved <br />  End", width: 125, field: "ProgramApprovalEndDate", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            {
                headerName: "Action", width: 80, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
                    return "<a data-ng-click=\"showUpdatevalueMassgeProgram('" + params.data.ProviderProgramId + "','" + params.data.ProgramName + "','" + params.data.TotalNoofPgmHours + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a><span ng-show=\"!IsReadOnly\"> |</span><a data-ng-click=\"DeleteProviderProgram('" + params.data.ProviderProgramId + "')\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
                }
            },
        ],
        angularCompileRows: true,
        rowData: [],
        rowHeight: 25,
        headerHeight: 50,
        // enableColResize: true,
        suppressRowClickSelection: true,
        suppressHorizontalScroll: true,
        suppressCellSelection: true,
        onGridReady: function (event) {
            //$scope.userGrid.api.sizeColumnsToFit();
        }
    };

    $scope.LookupGetBYLookupTypeID = function () {
        EligiblitiyFactory.LookupGetBYLookupTypeID(key, 78).success(function (data) {
            $scope.Lookup = data.Lookup;
        });

    }

    $scope.clearApprovalAgency = function () {
        $scope.ApprovalAgency = {};
        $scope.ProviderApprovalAgencyId = 0;
        $('#dvagency').hide();
    }

    $scope.clearApprovalAgency1 = function () {
        $scope.ApprovalAgency1 = {};
        $scope.ProviderApprovalAgencyId1 = 0;
        $('#dvagency').hide();
    }


    //Adding ApprovalAgency 
    $scope.Save_ApprovalAgency1 = function () {
        if (ApprovalAgencyAddNewSave1()) {
            $scope.ApprovalAgency1.IsActive = 1;
            $scope.ApprovalAgency1.IsDeleted = 0;
            $scope.ApprovalAgency1.IsAdditional = true;
            $scope.ApprovalAgency1.ProviderApprovalAgencyId = $scope.ProviderApprovalAgencyId1;
            $scope.ApprovalAgency1.ProviderId = $scope.ProviderId;
            EligiblitiyFactory.Save_ApprovalAgency(key, $scope.ApprovalAgency1).success(function (data) {
                $scope.clearApprovalAgency1();
                $scope.ApprovalGrid.api.setRowData(data.ProviderApprovalAgencyResponseList);
            }).error(function (error) {
                $scope.Error = error;
            });
        }
    }
    //Adding Mblex




    //Adding ApprovalAgency 
    $scope.Save_ApprovalAgency = function () {
        if (ApprovalAgencyAddNewSave()) {
            $scope.ApprovalAgency.IsActive = 1;
            $scope.ApprovalAgency.IsDeleted = 0;
            $scope.ApprovalAgency.ProviderApprovalAgencyId = $scope.ProviderApprovalAgencyId;
            $scope.ApprovalAgency.ProviderId = $scope.ProviderId;
            EligiblitiyFactory.Save_ApprovalAgency(key, $scope.ApprovalAgency).success(function (data) {
                $scope.clearApprovalAgency();
                $scope.ApprovalGrid.api.setRowData(data.ProviderApprovalAgencyResponseList);
            }).error(function (error) {
                $scope.Error = error;
            });
        }
    }
    //Adding Mblex
    function btnChildSupp() {
        $('.errorinfo').text('');
        var error = '';
        var ddlAddApprovalAgency = ValidateDropdown('-1', '<span class="notok"></span> 	Please select approval/accrediting agency<br/>', '#ddlAddApprovalAgency', $('#ddlAddApprovalAgency').val());
        var txtappagenDocNAme = ValidateTextbox('<span class="notok"></span> 	Please enter document name<br/>', '#txtappagenDocNAme', $('#txtappagenDocNAme').val());
        var ddlAppAgencSup = ValidateDropdown('-1', '<span class="notok"></span> 	Please select document type<br/>', '#ddlAppAgencSup', $('#ddlAppAgencSup').val());

        //var txtAddmessageProgName = ValidateTextbox('<span class="notok"></span> 	Please enter message program name.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_txtAddMassageProgName', $('#ContentPlaceHolder1_ucCertificationApplication1_txtAddMassageProgName').val());
        //var txtAddProgrameHours = ValidateTextbox('<span class="notok"></span> 	Please enter total number of program hours.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_txtAddProgrameHours', $('#ContentPlaceHolder1_ucCertificationApplication1_txtAddProgrameHours').val());
        error = ddlAddApprovalAgency + txtappagenDocNAme + ddlAppAgencSup;//+ txtAddmessageProgName + txtAddProgrameHours;
        $('.errorinfo').html(error);
        if (error != '') {
            $('.errorinfo').show();
            return false;
        }
        else {
            return true;
        }

    }

    function btnChildSupp() {
        $('.errorinfo').text('');
        var error = '';
        var ddlAddApprovalAgency = ValidateDropdown('-1', '<span class="notok"></span> 	Please select approval/accrediting agency<br/>', '#ddlAddApprovalAgency', $('#ddlAddApprovalAgency').val());
        var txtappagenDocNAme = ValidateTextbox('<span class="notok"></span> 	Please enter document name<br/>', '#txtappagenDocNAme', $('#txtappagenDocNAme').val());
        var ddlAppAgencSup = ValidateDropdown('-1', '<span class="notok"></span> 	Please select document type<br/>', '#ddlAppAgencSup', $('#ddlAppAgencSup').val());

        //var txtAddmessageProgName = ValidateTextbox('<span class="notok"></span> 	Please enter message program name.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_txtAddMassageProgName', $('#ContentPlaceHolder1_ucCertificationApplication1_txtAddMassageProgName').val());
        //var txtAddProgrameHours = ValidateTextbox('<span class="notok"></span> 	Please enter total number of program hours.<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_txtAddProgrameHours', $('#ContentPlaceHolder1_ucCertificationApplication1_txtAddProgrameHours').val());
        error = ddlAddApprovalAgency + txtappagenDocNAme + ddlAppAgencSup;//+ txtAddmessageProgName + txtAddProgrameHours;
        $('.errorinfo').html(error);
        if (error != '') {
            $('.errorinfo').show();
            return false;
        }
        else {
            return true;
        }

    }


    $scope.DeleteProviderProgram = function (ProviderProgramId) {
        ShowLoader();
        var data = {};
        data.ProviderId = $scope.ProviderId;
        data.ProviderProgramId = ProviderProgramId;

        EligiblitiyFactory.DeleteProviderProgram(key, data).success(function (data) {
            $scope.clearMassageProgram();
            $scope.MassageProgramGrid.api.setRowData(data.ProviderProgramResponseList);
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
        });
    }


    // Delete previous address
    $scope.DeleteApprovalAgency = function (ApprovalAgencyId) {
        ShowLoader();
        var data = {};
        data.ProviderId = $scope.ProviderId;
        data.ProviderApprovalAgencyId = ApprovalAgencyId;

        EligiblitiyFactory.DeleteProviderApprovalAgency(key, data).success(function (data) {
            $scope.clearApprovalAgency();
            $scope.ApprovalGrid.api.setRowData(data.ProviderApprovalAgencyResponseList);
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
        });
    }
    // add/update previous address

    //Populate Edit ApprovalAgency 
    $scope.showUpdatevalueSave_ApprovalAgency = function (ProviderApprovalAgencyId, ApprovalAccreditingAgencyName, AgencySchoolCode, ExpirationDate, agentid, isadditonal) {

        $scope.clearApprovalAgency();
        $scope.clearApprovalAgency1();
        $('#dvagency').show();
        debugger
        if (isadditonal == 'true') {
            $scope.ProviderApprovalAgencyId1 = ProviderApprovalAgencyId;
            $scope.ApprovalAgency1.ApprovalAccreditingAgencyName = ApprovalAccreditingAgencyName;
            $scope.ApprovalAgency1.AgencySchoolCode = AgencySchoolCode;
            $scope.ApprovalAgency1.ExpirationDate = ExpirationDate;
        }
        else {
            $scope.ProviderApprovalAgencyId = ProviderApprovalAgencyId;
            //var selection = { 'ApprovalAccreditingAgencyId': agentid, 'ApprovalAccreditingAgencyName': ApprovalAccreditingAgencyName };
            for (var i = 0; i < $scope.Lookup.length ; i++) {
                if ($scope.Lookup[i].LookupId == agentid)
                    $scope.selectedItem = $scope.Lookup[i];
            }

            //$scope.ApprovalAgency1.ApprovalAccreditingAgencyName = ApprovalAccreditingAgencyName;
            $scope.ApprovalAgency.ApprovalAccreditingAgencyName = ApprovalAccreditingAgencyName;
            $scope.ApprovalAgency.AgencySchoolCode = AgencySchoolCode;
            $scope.ApprovalAgency.ExpirationDate = ExpirationDate;
        }
    }
    //Populate Edit ApprovalAgency 

    $scope.update = function () {
        if ($scope.selectedItem != null) {
            $scope.ApprovalAgency.ApprovalAccreditingAgencyId = $scope.selectedItem.LookupId;
            $scope.ApprovalAgency.ApprovalAccreditingAgencyName = $scope.selectedItem.LookupDesc;
        }
        else {
            $scope.ApprovalAgency.ApprovalAccreditingAgencyId = 0;
            $scope.ApprovalAgency.ApprovalAccreditingAgencyName = "";
        }
    }

    $scope.ApprovalGrid = {
        columnDefs: [
        {
            headerName: "", hide: true, width: 250, field: "ProviderApprovalAgencyId",
        },
        {
            headerName: "", hide: true, width: 250, field: "ProviderApprovalAgencyGuid",
        },
        {
            headerName: "", hide: true, width: 250, field: "ApprovalAccreditingAgencyId",
        },
        {
            headerName: "", hide: true, width: 250, field: "IsAdditional",
        },
        {
            headerName: "Approval/Accrediting Agency", width: 250, field: "ApprovalAccreditingAgencyName", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }
        },
        {
            headerName: "School Code #", width: 200, field: "AgencySchoolCode", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }
        },
        {
            headerName: "Expiration Date", width: 125, field: "ExpirationDate", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }
        },
        {
            headerName: "Action", width: 120, cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }, field: "IsActive", cellRenderer: function (params) {

                return "<a data-ng-click=\"showUpdatevalueSave_ApprovalAgency('" + params.data.ProviderApprovalAgencyId + "','" + params.data.ApprovalAccreditingAgencyName + "','" + params.data.AgencySchoolCode + "','" + params.data.ExpirationDate + "','" + params.data.ApprovalAccreditingAgencyId + "','" + params.data.IsAdditional + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a><span ng-show=\"!IsReadOnly\"> |</span><a data-ng-click=\"DeleteApprovalAgency('" + params.data.ProviderApprovalAgencyId + "')\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
            }
        },
        ],
        angularCompileRows: true,
        rowData: [],
        rowHeight: 25,
        headerHeight: 30,
        // enableColResize: true,
        suppressRowClickSelection: true,
        suppressHorizontalScroll: true,
        suppressCellSelection: true,
        onGridReady: function (event) {
            //$scope.userGrid.api.sizeColumnsToFit();
        }
    };


    $scope.GetEligibilityInfoByProviderId = function () {
        ShowLoader();

        $scope.Provider.ProviderId = $scope.ProviderId;
        EligiblitiyFactory.GetAllEligibilityDetails(key, $scope.Provider).success(function (data) {
            HideLoader();
            $scope.Provider.IsChecked1 = data.IsChecked1;
            $scope.Provider.IsChecked2 = data.IsChecked2;
            $scope.Provider.IsChecked3 = data.IsChecked3;
            $scope.Provider.IsChecked4 = data.IsChecked4;
            $scope.Provider.ProviderEligibilityId1 = data.ProviderEligibilityId1;
            $scope.Provider.ProviderEligibilityId2 = data.ProviderEligibilityId2;
            $scope.Provider.ProviderEligibilityId3 = data.ProviderEligibilityId3;
            $scope.Provider.ProviderEligibilityId4 = data.ProviderEligibilityId4;
        }).error(function (error) {
            $scope.Error = error;
        });
    };


    $scope.Save_EligibilityTabInfo = function () {
        ShowLoader();
        $scope.Provider.ProviderId = $scope.ProviderId;
        EligiblitiyFactory.SaveProviderEntityInformation(key, $scope.Provider).success(function (data) {
            HideLoader();
            $scope.GetEligibilityInfoByProviderId();
            if (mySharedService.ApplicationName == 'SchoolApp') {
                mySharedService.prepForBroadcastTabClick('About');
            }

        }).error(function (error) {
            $scope.Error = error;
        });
    };


    $scope.$on('handleBroadcast', function () {
        $scope.ProviderId = mySharedService.message;
        $scope.ProviderName = mySharedService.message1;
        if (mySharedService.CurrentPage == 'Eligibility') {
            $('.errorinfo').hide();
            $('.errorinfo').text('');
            docommoncall();
        }
    });

    function docommoncall() {
        $scope.ProviderId = mySharedService.message;
        $scope.applicationid = mySharedService.Applicationid;

        $scope.clearMassageProgram();
        $scope.clearApprovalAgency();
        $scope.LookupContentGetBYContentItemLkID(21);
        $scope.LookupContentGetBYContentItemLkID(22);
        $scope.LookupContentGetBYContentItemLkID(23);
        $scope.LookupContentGetBYContentItemLkID(24);
        $scope.LookupContentGetBYContentItemLkID(25);
        $scope.LookupGetBYLookupTypeID()

        $scope.GetAllProviderApprovalAgency();
        $scope.GetAllProviderProgram();
        $scope.hasShow = 'true';

        $scope.GetEligibilityInfoByProviderId();

    }

    $scope.$on('handleBroadcastForTab', function () {
        if (mySharedService.CurrentPage == 'Eligibility') {
            if (mySharedService.message != '-1') {
                $('.errorinfo').hide();
                $('.errorinfo').text('');
                $scope.ProviderId = mySharedService.message;
                docommoncall();

            }
        }
        else {
            $scope.hasShow = 'false';
        }
        //$scope.GetProviderdataonchange();
    });


    function ApprovalAgencyAddNewSave1() {
        $('.errorinfo').text('');
        var error = '';
        var ddlAddApprovalAgency = ValidateTextbox('-1', '<span class="notok"></span> Please select approval/accrediting agency<br/>', '#manualid', $('#manualid').val());
        var txtappagenDocNAme = ValidateTextbox('<span class="notok"></span> Please enter document name<br/>', '#fuEligibility1_upDoc_docName', $('#fuEligibility1_upDoc_docName').val());
        var txtAddExpirationDate = CheckDateFormat('<span class="notok"></span> Please enter date in correct format (mm/dd/yyyy)<br/>', '#ExpirationDate', $('#ExpirationDate').val());
        var ddlAppAgencSup = ValidateDropdown('0', '<span class="notok"></span> Please select document type<br/>', '#fuEligibility1_upDoc_docType', $('#fuEligibility1_upDoc_docType').val());
        error = ddlAddApprovalAgency + txtAddExpirationDate + txtappagenDocNAme + ddlAppAgencSup;
        $('.errorinfo').html(error);
        if (error != '') {
            $('.errorinfo').show();
            $(document).scrollTop(0);
            return false;
        }
        else {
            $('.errorinfo').hide();
            return true;
        }

    }

    function AdditionalApprovalAgency_Button85() {
        $('.errorinfo').text('');
        var error = '';
        var TextBox68 = CheckDateFormat('<span class="notok"></span> Please enter date in correct format (mm/dd/yyyy)<br/>', '#TextBox68', $('#').val());
        error = TextBox68;
        if (error != '') {
            $('.errorinfo').show();
            $('#ContentPlaceHolder1_ucCertificationApplication1_Button85').attr('type', 'button');
            $(document).scrollTop(0);
        }
        else {
            $('.errorinfo').hide();
            $('#ContentPlaceHolder1_ucCertificationApplication1_Button85').attr('type', 'submit');
        }
        $('.errorinfo').html(error);
    }


    function ApprovalAgencyAddNewSave() {
        $('.errorinfo').text('');
        var error = '';
        var ddlAddApprovalAgency = ValidateDropdown('', '<span class="notok"></span> Please select approval/accrediting agency<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_ddlAddApprovalAgency', $('#ContentPlaceHolder1_ucCertificationApplication1_ddlAddApprovalAgency').val());
        var txtappagenDocNAme = ValidateTextbox('<span class="notok"></span> Please enter document name<br/>', '#fuEligibility1_upDoc_docName', $('#fuEligibility1_upDoc_docName').val());
        var txtAddExpirationDate = CheckDate('<span class="notok"></span> Please enter date in correct format (mm/dd/yyyy)<br/>', '<span class="notok"></span> Please enter date in correct format (mm/dd/yyyy)<br/>', '#AddExpirationDate1', $('#AddExpirationDate1').val());
        var ddlAppAgencSup = ValidateDropdown('0', '<span class="notok"></span> Please select document type<br/>', '#fuEligibility1_upDoc_docType', $('#fuEligibility1_upDoc_docType').val());
        error = ddlAddApprovalAgency + txtAddExpirationDate + txtappagenDocNAme + ddlAppAgencSup;
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

    function ApprovalAgencyAddNewSave1() {
        $('.errorinfo').text('');
        var error = '';
        var txtApprovalAgency = ValidateDropdown('-1', '<span class="notok"></span> Please select approval/accrediting agency<br/>', '#txtApprovalAgency', $('#txtApprovalAgency').val());
        var txtappagenDocNAme = ValidateTextbox('<span class="notok"></span> Please enter document name<br/>', '#fuEligibility2_upDoc_docName', $('#fuEligibility2_upDoc_docName').val());
        var txtAddExpirationDate = CheckDate('<span class="notok"></span> Please enter date in correct format (mm/dd/yyyy)<br/>', '<span class="notok"></span> Please enter date in correct format (mm/dd/yyyy)<br/>', '#AddExpirationDate', $('#AddExpirationDate').val());
        var ddlAppAgencSup = ValidateDropdown('0', '<span class="notok"></span> Please select document type<br/>', '#fuEligibility2_upDoc_docType', $('#fuEligibility2_upDoc_docType').val());
        error = txtApprovalAgency + txtAddExpirationDate + txtappagenDocNAme + ddlAppAgencSup;
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

    function AdditionalApprovalAgency_Button85() {
        $('.errorinfo').text('');
        var error = '';
        var TextBox68 = CheckDateFormat('<span class="notok"></span> Please enter date in correct format (mm/dd/yyyy)<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_TextBox68', $('#ContentPlaceHolder1_ucCertificationApplication1_TextBox68').val());
        error = TextBox68;
        if (error != '') {
            $('.errorinfo').show();
            $('#ContentPlaceHolder1_ucCertificationApplication1_Button85').attr('type', 'button');
            $(document).scrollTop(0);
        }
        else {
            $('.errorinfo').hide();
            $('#ContentPlaceHolder1_ucCertificationApplication1_Button85').attr('type', 'submit');
        }
        $('.errorinfo').html(error);
    }




}]);