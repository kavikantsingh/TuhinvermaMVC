﻿LAPP.controller('EligiblityController', ['$scope', '$rootScope', 'mySharedService', 'EligiblitiyFactory', function ($scope, $rootScope, mySharedService, EligiblitiyFactory) {
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

            $scope.ApprovalGrid.api.setRowData(data.ProviderApprovalAgencyResponseList);

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
        $scope.Massage.IsActive = 1;
        $scope.Massage.IsDeleted = 0;
        $scope.Massage.ProviderProgramId = $scope.ProviderProgramId;
        $scope.Massage.ProviderId = $scope.ProviderId;
        EligiblitiyFactory.Save_MassgeProgram(key, $scope.Massage).success(function (data) {
            $scope.clearMassageProgram();
            $scope.MassageProgramGrid.api.setRowData(data.ProviderProgramResponseList);
        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //Adding Mblex

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
        { headerName: "Massage Program Name", width: 180, field: "ProgramName", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Total Number of Program Hours", width: 125, field: "TotalNoofPgmHours", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "CAMTC Approved", width: 125, field: "IsProgramApproved", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Approved	Program Approved Start", width: 125, field: "ProgramApprovalStartDate", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Program Approved End", width: 125, field: "ProgramApprovalEndDate", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            {
                headerName: "Action", width: 80, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
                    return "<a data-ng-click=\"showUpdatevalueMassgeProgram('" + params.data.ProviderProgramId + "','" + params.data.ProgramName + "','" + params.data.TotalNoofPgmHours + "')\" href=\"javascript:;\"><img src='../../Content/Public/images/edit.png' /></a><span ng-show=\"!IsReadOnly\"> |</span><a data-ng-click=\"DeleteProviderProgram('" + params.data.ProviderProgramId + "')\" href=\"javascript:;\"> <img src='../../Content/Public/images/delete.png' /></a>";
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


    //Adding ApprovalAgency 
    $scope.Save_ApprovalAgency = function () {
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
    //Adding Mblex

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
    $scope.showUpdatevalueSave_ApprovalAgency = function (ProviderApprovalAgencyId, ApprovalAccreditingAgencyName, AgencySchoolCode, ExpirationDate) {
        $('#dvagency').show();
        $scope.ProviderApprovalAgencyId = ProviderApprovalAgencyId;
        $scope.ApprovalAgency.ApprovalAccreditingAgencyName = ApprovalAccreditingAgencyName;
        $scope.ApprovalAgency.AgencySchoolCode = AgencySchoolCode;
        $scope.ApprovalAgency.ExpirationDate = ExpirationDate;
    }
    //Populate Edit ApprovalAgency 

    $scope.ApprovalGrid = {
        columnDefs: [
        { headerName: "", hide: true, width: 250, field: "ProviderApprovalAgencyId", },
        { headerName: "", hide: true, width: 250, field: "ProviderApprovalAgencyGuid", },
        { headerName: "Approval/Accrediting Agency", width: 250, field: "ApprovalAccreditingAgencyName", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "School Code #", width: 200, field: "AgencySchoolCode", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Expiration Date", width: 125, field: "ExpirationDate", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            {
                headerName: "Action", width: 120, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {

                    return "<a data-ng-click=\"showUpdatevalueSave_ApprovalAgency('" + params.data.ProviderApprovalAgencyId + "','" + params.data.ApprovalAccreditingAgencyName + "','" + params.data.AgencySchoolCode + "','" + params.data.ExpirationDate + "')\" href=\"javascript:;\"><img src='../../Content/Public/images/edit.png' /></a><span ng-show=\"!IsReadOnly\"> |</span><a data-ng-click=\"DeleteApprovalAgency('" + params.data.ProviderApprovalAgencyId + "')\" href=\"javascript:;\"> <img src='../../Content/Public/images/delete.png' /></a>";
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
        }).error(function (error) {
            $scope.Error = error;
        });
    };


    $scope.$on('handleBroadcast', function () {
        alert('in elgiblitu lis')
        if (mySharedService.CurrentPage == 'Eligibility') {
            $scope.ProviderId = mySharedService.message;
            $scope.ProviderName = mySharedService.message1;
            docommoncall();
        }

    });

    function docommoncall() {
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
        alert('in elgiblitu lis1')
        if (mySharedService.CurrentPage == 'Eligibility') {
            if ($scope.ProviderId != '-1')
                docommoncall();
        }
        else {
            $scope.hasShow = 'false';
        }
        //$scope.GetProviderdataonchange();
    });

}]);