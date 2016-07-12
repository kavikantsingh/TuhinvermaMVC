LAPP.controller('AboutController', ['$scope', '$rootScope', 'mySharedService', 'SchoolInfoFactory', '$window', '$timeout', 'AboutFactory', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window, $timeout, AboutFactory) {
    $scope.ProviderOtherProgramId = 0;
    $scope.ProgramOtherName = '';
    $scope.hasShow = 'false';

    $scope.$on('handleBroadcastForTab', function () {
        $scope.ProviderId = mySharedService.message;
        $scope.applicationid = mySharedService.Applicationid;
        if (mySharedService.CurrentPage == 'About') {
            $scope.hasShow = 'true';

            $scope.GetAllProviderOtherProgram();
        }
        else
            $scope.hasShow = 'false';
    });

    //get all state by country
    $scope.GetAllStatebyCountry = function () {
        SchoolInfoFactory.GetAllStatebyCountryID(key, 'US').success(function (data) {
            $scope.StateList = data.State;
        }).error(function (error) {
            $scope.Error = error;
        });
    }

    $scope.GetAllStatebyCountry();
    //get all state by country

    //Adding PRevious school Information with address 4
    $scope.DeleteaddressRequestFromSchoolInformationTab = function (AddressId, AddressTypeId) {
        //  ShowLoader();
        var addresss = { 'AddressId': AddressId, 'AddressTypeId': AddressTypeId, '$scope.ProviderId': $scope.$scope.ProviderId };

        SchoolInfoFactory.DeleteaddressRequestFromSchoolInformationTab(addresss, key).success(function (data) {
            $scope.clearPreviousAddress();
            $scope.PrevAddrIfanyGrid.api.setRowData(data.ListOfPreviousAddress);
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //Adding PRevious school Information with address 4

    //Adding SaveProviderGraduatesNumber
    $scope.SaveProviderGraduatesNumber = function () {
        //  ShowLoader();
        $scope.ProviderGraduateNumber.IsActive = 1;
        $scope.ProviderGraduateNumber.IsDeleted = 0;
        $scope.ProviderGraduateNumber.AddressId = $scope.SateliteAddressId;
        AboutFactory.SaveProviderGraduatesNumber(key, $scope.ProviderGraduateNumber).success(function (data) {

            $scope.clearsateliteAddress();
            $scope.ProviderOtherProgramGrid.api.setRowData(data.ListOfPreviousAddress);
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //Adding SaveProviderGraduatesNumber


    //Adding SaveProviderOtherProgram 
    $scope.SaveProviderOtherProgram = function () {
        //  ShowLoader();
        $scope.ProviderOtherProgramList = {};
        $scope.ProviderOtherProgramList.IsActive = 1;
        $scope.ProviderOtherProgramList.IsDeleted = 0;
        $scope.ProviderOtherProgramList.ProviderId = $scope.ProviderId;
        $scope.ProviderOtherProgramList.ApplicationId = $scope.applicationid;

        $scope.ProviderOtherProgramList.ProviderOtherProgramId = $scope.ProviderOtherProgramId;
        $scope.ProviderOtherProgramList.ProgramOtherName = $scope.ProgramOtherName;
        AboutFactory.SaveProviderOtherProgram(key, $scope.ProviderOtherProgramList).success(function (data) {
            $scope.ProgramOtherName = '';
            $scope.GetAllProviderOtherProgram();
        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //Adding SaveProviderOtherProgram 

    $scope.GetAllProviderOtherProgram = function () {
        //  ShowLoader();
        AboutFactory.GetAllProviderOtherProgram(key, $scope.applicationid, $scope.ProviderId).success(function (data) {
            HideLoader();
            $scope.ProviderOtherProgramGrid.api.setRowData(data.ProviderOtherProgramList);

        }).error(function (error) {
            $scope.Error = error;
        });

        AboutFactory.LookupGetBYLookupTypeID(key).success(function (data) {
            $scope.LookupList = data.Lookup;
        }).error(function (error) {
            $scope.Error = error;
        });

        AboutFactory.GetAllProviderGraduatesNumber(key, $scope.applicationid, $scope.ProviderId).success(function (data) {
            $scope.ProviderGraduatesNumberList = data.ProviderGraduatesNumberList;
        }).error(function (error) {
            $scope.Error = error;
        });


        AboutFactory.GetProviderBusinessTypeByProviderId(key, $scope.applicationid, $scope.ProviderId).success(function (data) {
            $scope.ProviderBusinessTypeList = data.ProviderBusinessTypeList;
        }).error(function (error) {
            $scope.Error = error;
        });

        AboutFactory.GetAllProviderRelatedSchools(key, $scope.applicationid, $scope.ProviderId).success(function (data) {
            $scope.ProviderOtherProgramList = data.ProviderOtherProgramList;
        }).error(function (error) {
            $scope.Error = error;
        });

    }

    $scope.showUpdatevalueOther = function (ProviderOtherProgramId, ProgramOtherName) {
        $scope.ProviderOtherProgramId = ProviderOtherProgramId;
        $scope.ProgramOtherName = ProgramOtherName;
    }

    $scope.DeleteotherProgram = function (ProviderOtherProgramId, ProgramOtherName) {
        $scope.ProviderOtherProgramList = {};
        $scope.ProviderOtherProgramList.IsActive = 0;
        $scope.ProviderOtherProgramList.IsDeleted = 1;
        $scope.ProviderOtherProgramList.ProviderId = $scope.ProviderId;
        $scope.ProviderOtherProgramList.ApplicationId = $scope.applicationid;

        $scope.ProviderOtherProgramList.ProviderOtherProgramId = ProviderOtherProgramId;
        $scope.ProviderOtherProgramList.ProgramOtherName = ProgramOtherName;
        AboutFactory.SaveProviderOtherProgram(key, $scope.ProviderOtherProgramList).success(function (data) {
            $scope.ProgramOtherName = '';
            $scope.GetAllProviderOtherProgram();
        }).error(function (error) {
            $scope.Error = error;
        });
    }

    // ProviderOtherProgramGrid 
    $scope.ProviderOtherProgramGrid = {
        columnDefs: [
            { headerName: "", hide: true, width: 250, field: "ProviderOtherProgramId", },
            { headerName: "", hide: true, width: 250, field: "ProviderId", },
           { headerName: "Other Program Name", width: 320, field: "ProgramOtherName", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
              {
                  headerName: "Action", width: 80, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
                      return "<a data-ng-click=\"showUpdatevalueOther('" + params.data.ProviderOtherProgramId + "','" + params.data.ProgramOtherName + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a> | </span><a data-ng-click=\"DeleteotherProgram('" + params.data.ProviderOtherProgramId + "','" + params.data.ProgramOtherName + "')\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
                  }
              },
        ],
        angularCompileRows: true,
        rowData: [],
        rowHeight: 25,
        headerHeight: 30,
        //enableColResize: true,
        suppressRowClickSelection: true,
        suppressHorizontalScroll: true,
        suppressCellSelection: true,
        onGridReady: function (event) {
            //$scope.userGrid.api.sizeColumnsToFit();
        }
    };

    //Satellite address only
    $scope.ProviderRelatedProgramGrid = {
        columnDefs: [
            { headerName: "", hide: true, width: 250, field: "AddressId", },
           { headerName: "Street", width: 180, field: "StreetLine1", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "City", width: 130, field: "City", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "State", width: 125, field: "StateCode", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Zip", width: 125, field: "Zip", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
              {
                  headerName: "Action", width: 80, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
                      return "<a data-ng-click=\"showUpdatevalueSateliteAddress('" + params.data.AddressId + "','" + params.data.StreetLine1 + "','" + params.data.StreetLine2 + "','" + params.data.City + "','" + params.data.StateCode + "','" + params.data.Zip + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a> | </span><a data-ng-click=\"DeleteaddressRequestFromSchoolInformationTab('" + params.data.AddressId + "',7)\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
                  }
              },
        ],
        angularCompileRows: true,
        rowData: [],
        rowHeight: 25,
        headerHeight: 30,
        //enableColResize: true,
        suppressRowClickSelection: true,
        suppressHorizontalScroll: true,
        suppressCellSelection: true,
        onGridReady: function (event) {
            //$scope.userGrid.api.sizeColumnsToFit();
        }
    };



    //Satellite address only
    $scope.GraduatesGrid = {
        columnDefs: [
            { headerName: "", hide: true, width: 250, field: "AddressId", },
           { headerName: "Year", width: 180, field: "CalendarYear", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Estimated", width: 130, field: "CalendarYearEstGradCount", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            //{
            //    headerName: "Year", width: 180, field: "CalendarYear", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' },
            //    cellRenderer: function (params) {
            //        return params.data.CalendarYear - 1;
            //    }
            //},
            { headerName: "Actual", width: 125, field: "CalendarYearActualGradCount", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },

              //{
              //    headerName: "Action", width: 80, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
              //        return "<a data-ng-click=\"showUpdatevalueSateliteAddress('" + params.data.AddressId + "','" + params.data.StreetLine1 + "','" + params.data.StreetLine2 + "','" + params.data.City + "','" + params.data.StateCode + "','" + params.data.Zip + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a> | </span><a data-ng-click=\"DeleteaddressRequestFromSchoolInformationTab('" + params.data.AddressId + "',7)\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
              //    }
              //},
        ],
        angularCompileRows: true,
        rowData: [],
        rowHeight: 25,
        headerHeight: 30,
        //enableColResize: true,
        suppressRowClickSelection: true,
        suppressHorizontalScroll: true,
        suppressCellSelection: true,
        onGridReady: function (event) {
            //$scope.userGrid.api.sizeColumnsToFit();
        }
    };


    //Adding Mblex
    $scope.Save_providermblex = function () {
        $scope.Mblex.IsActive = 1;
        $scope.Mblex.IsDeleted = 0;
        $scope.Mblex.ProviderMBLExId = $scope.ProviderMBLExId;
        $scope.Mblex.$scope.ProviderId = $scope.$scope.ProviderId;
        SchoolInfoFactory.Save_providermblex(key, $scope.Mblex).success(function (data) {
            $scope.clearMblex();
            $scope.MBLExGrid.api.setRowData(data.ProvidermblexResponseList);

        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //Adding Mblex


}]);