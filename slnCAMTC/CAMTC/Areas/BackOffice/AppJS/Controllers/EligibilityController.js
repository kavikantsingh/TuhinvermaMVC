LAPP.controller('EligiblityController', ['$scope', '$rootScope', 'mySharedService', 'EligiblitiyFactory', function ($scope, $rootScope, mySharedService, EligiblitiyFactory) {
    $scope.hasShow = 'false';
    $scope.SchoolEligibility1 = '';
    $scope.SchoolEligibility2 = '';
    $scope.SchoolEligibility3 = '';
    $scope.SchoolEligibility4 = '';
    $scope.SchoolEligibility5 = '';

    $('#divmassageprogram').hide();
    $('#dvagency').hide();

    $scope.ShowPopup = function (id) {
        if (id == 1) {
            $('#dvagency').show();
        }
        else if (id == 2) {
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



    $scope.LookupGetBYLookupTypeID = function () {
        EligiblitiyFactory.LookupGetBYLookupTypeID(key, 78).success(function (data) {
            $scope.Lookup = data.Lookup;
        });

    }


    $scope.ApprovalGrid = {
        columnDefs: [
        { headerName: "", hide: true, width: 250, field: "ProviderMBLExId", },
        { headerName: "", hide: true, width: 250, field: "ProviderMBLExIdGuid", },
        { headerName: "Approval/Accrediting Agency", width: 180, field: "PassingRates", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "School Code #", width: 125, field: "PassingYear", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Expiration Date", width: 125, field: "PassingHalf", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            {
                headerName: "Action", width: 80, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {

                    return "<a data-ng-click=\"showUpdatevalueMblex('" + params.data.ProviderMBLExId + "','" + params.data.PassingRates + "','" + params.data.PassingYear + "','" + params.data.PassingHalf + "')\" href=\"javascript:;\"><img src='../../Content/Public/images/edit.png' /></a><span ng-show=\"!IsReadOnly\"> |</span><a data-ng-click=\"EditUser('" + params.data.userId + "')\" href=\"javascript:;\"> <img src='../../Content/Public/images/delete.png' /></a>";
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


    $scope.MassageProgramGrid = {
        columnDefs: [
        { headerName: "", hide: true, width: 250, field: "ProviderMBLExId", },
        { headerName: "", hide: true, width: 250, field: "ProviderMBLExIdGuid", },
        { headerName: "Massage Program Name", width: 180, field: "PassingRates", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Total Number of Program Hours", width: 125, field: "PassingYear", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "CAMTC Approved", width: 125, field: "PassingHalf", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Approved	Program Approved Start", width: 125, field: "PassingHalf", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Program Approved End", width: 125, field: "PassingHalf", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            {
                headerName: "Action", width: 80, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
                    return "<a data-ng-click=\"showUpdatevalueMblex('" + params.data.ProviderMBLExId + "','" + params.data.PassingRates + "','" + params.data.PassingYear + "','" + params.data.PassingHalf + "')\" href=\"javascript:;\"><img src='../../Content/Public/images/edit.png' /></a><span ng-show=\"!IsReadOnly\"> |</span><a data-ng-click=\"EditUser('" + params.data.userId + "')\" href=\"javascript:;\"> <img src='../../Content/Public/images/delete.png' /></a>";
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



    $scope.$on('handleBroadcast', function () {
        if (mySharedService.CurrentPage == 'Eligibility') {
            $scope.ProviderId = mySharedService.message;
            $scope.ProviderName = mySharedService.message1;
            docommoncall();
        }

    });

    function docommoncall() {
        $scope.LookupContentGetBYContentItemLkID(21);
        $scope.LookupContentGetBYContentItemLkID(22);
        $scope.LookupContentGetBYContentItemLkID(23);
        $scope.LookupContentGetBYContentItemLkID(24);
        $scope.LookupContentGetBYContentItemLkID(25);
        $scope.LookupGetBYLookupTypeID()

        $scope.hasShow = 'true';
    }

    $scope.$on('handleBroadcastForTab', function () {

        if (mySharedService.CurrentPage == 'Eligibility') {
            docommoncall();
        }
        else {
            $scope.hasShow = 'false';
        }
        //$scope.GetProviderdataonchange();
    });

}]);