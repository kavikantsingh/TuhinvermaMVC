LAPP.controller('AboutController', ['$scope', '$rootScope', 'mySharedService', 'SchoolInfoFactory', '$window', '$timeout', 'AboutFactory', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window, $timeout, AboutFactory) {
    $scope.ProviderOtherProgramId = 0;
    $scope.ProgramOtherName = '';
    $scope.hasShow = 'false';


    $scope.ProviderGraduatesNumberId1 = 0;
    $scope.ProviderGraduatesNumberId2 = 0;
    $scope.ProviderGraduatesNumberId3 = 0;
    $scope.ProviderGraduatesNumberId4 = 0;
    $scope.ProviderGraduatesNumberId5 = 0;
    $scope.ProviderGraduatesNumberId6 = 0;
    $scope.ProviderGraduatesNumberId7 = 0;
    $scope.ProviderGraduatesNumberId8 = 0;

    $scope.txtGradYear2016 = '';
    $scope.txtGradYear2015 = '';
    $scope.txtGradYear2014 = '';
    $scope.txtGradYear2013 = '';
    $scope.txtGradYear2012 = '';
    $scope.txtGradYear2011 = '';
    $scope.txtGradYear2010 = '';
    $scope.txtGradYear2009 = '';

    $scope.RelatedSchool = {};



    $('#divAddRelatedschool').hide();

    $scope.ShowPopup = function (id) {
        if (id == 1) {
            $('#divAddRelatedschool').show();
        }
    }

    $scope.Save_Final = function () {

        var schooldata = {};
        schooldata.ProviderId = $scope.ProviderId;
        schooldata.ApplicationId = $scope.applicationid;
        schooldata.IsActive = 1;
        schooldata.IsDeleted = 0;
        schooldata.CalendarYear = '2016';
        schooldata.ProviderGraduatesNumberId = $scope.ProviderGraduatesNumberId1;
        schooldata.CalendarYearEstGradCount = $scope.txtGradYear2016;


        AboutFactory.SaveProviderGraduatesNumber(key, schooldata).success(function (data) {

        }).error(function (error) {
            $scope.Error = error;
        });

        var schooldata1 = {};
        schooldata1.ProviderId = $scope.ProviderId;
        schooldata1.ApplicationId = $scope.applicationid;
        schooldata1.IsActive = 1;
        schooldata1.IsDeleted = 0;
        schooldata1.CalendarYear = '2015';
        schooldata1.ProviderGraduatesNumberId = $scope.ProviderGraduatesNumberId2;
        schooldata1.CalendarYearEstGradCount = $scope.txtGradYear2015;


        AboutFactory.SaveProviderGraduatesNumber(key, schooldata1).success(function (data) {

        }).error(function (error) {
            $scope.Error = error;
        });

        var schooldata2 = {};
        schooldata2.ProviderId = $scope.ProviderId;
        schooldata2.ApplicationId = $scope.applicationid;
        schooldata2.IsActive = 1;
        schooldata2.IsDeleted = 0;
        schooldata2.CalendarYear = '2015';
        schooldata2.CalendarYear = '2014';
        schooldata2.ProviderGraduatesNumberId = $scope.ProviderGraduatesNumberId3;
        schooldata2.CalendarYearEstGradCount = $scope.txtGradYear2014;


        AboutFactory.SaveProviderGraduatesNumber(key, schooldata2).success(function (data) {

        }).error(function (error) {
            $scope.Error = error;
        });

        var schooldata3 = {};
        schooldata3.ProviderId = $scope.ProviderId;
        schooldata3.ApplicationId = $scope.applicationid;
        schooldata3.IsActive = 1;
        schooldata3.IsDeleted = 0;
        schooldata3.CalendarYear = '2015';
        schooldata3.CalendarYear = '2013';
        schooldata3.ProviderGraduatesNumberId = $scope.ProviderGraduatesNumberId4;
        schooldata3.CalendarYearEstGradCount = $scope.txtGradYear2013;



        AboutFactory.SaveProviderGraduatesNumber(key, schooldata3).success(function (data) {

        }).error(function (error) {
            $scope.Error = error;
        });

        var schooldata4 = {};
        schooldata4.ProviderId = $scope.ProviderId;
        schooldata4.ApplicationId = $scope.applicationid;
        schooldata4.IsActive = 1;
        schooldata4.IsDeleted = 0;
        schooldata4.CalendarYear = '2015';
        schooldata4.CalendarYear = '2012';
        schooldata4.ProviderGraduatesNumberId = $scope.ProviderGraduatesNumberId5;
        schooldata4.CalendarYearEstGradCount = $scope.txtGradYear2012;



        AboutFactory.SaveProviderGraduatesNumber(key, schooldata4).success(function (data) {

        }).error(function (error) {
            $scope.Error = error;
        });

        var schooldata5 = {};
        schooldata5.ProviderId = $scope.ProviderId;
        schooldata5.ApplicationId = $scope.applicationid;
        schooldata5.IsActive = 1;
        schooldata5.IsDeleted = 0;
        schooldata5.CalendarYear = '2015';
        schooldata5.CalendarYear = '2011';
        schooldata5.ProviderGraduatesNumberId = $scope.ProviderGraduatesNumberId6;
        schooldata5.CalendarYearEstGradCount = $scope.txtGradYear2011;


        AboutFactory.SaveProviderGraduatesNumber(key, schooldata5).success(function (data) {

        }).error(function (error) {
            $scope.Error = error;
        });

        var schooldata6 = {};
        schooldata6.ProviderId = $scope.ProviderId;
        schooldata6.ApplicationId = $scope.applicationid;
        schooldata6.IsActive = 1;
        schooldata6.IsDeleted = 0;
        schooldata6.CalendarYear = '2015';
        schooldata6.CalendarYear = '2010';
        schooldata6.ProviderGraduatesNumberId = $scope.ProviderGraduatesNumberId7;
        schooldata6.CalendarYearEstGradCount = $scope.txtGradYear2010;


        AboutFactory.SaveProviderGraduatesNumber(key, schooldata6).success(function (data) {

        }).error(function (error) {
            $scope.Error = error;
        });

        var schooldata7 = {};
        schooldata7.ProviderId = $scope.ProviderId;
        schooldata7.ApplicationId = $scope.applicationid;
        schooldata7.IsActive = 1;
        schooldata7.IsDeleted = 0;
        schooldata7.CalendarYear = '2015';
        schooldata7.CalendarYear = '2009';
        schooldata7.ProviderGraduatesNumberId = $scope.ProviderGraduatesNumberId8;
        schooldata7.CalendarYearEstGradCount = $scope.txtGradYear2009;


        AboutFactory.SaveProviderGraduatesNumber(key, schooldata7).success(function (data) {

        }).error(function (error) {
            $scope.Error = error;
        });


        //$scope.Mblex.ProviderMBLExId = $scope.ProviderMBLExId;
        //$scope.Mblex.$scope.ProviderId = $scope.$scope.ProviderId;
        //SchoolInfoFactory.Save_providermblex(key, $scope.Mblex).success(function (data) {
        //    $scope.clearMblex();
        //    $scope.MBLExGrid.api.setRowData(data.ProvidermblexResponseList);

        //}).error(function (error) {
        //    $scope.Error = error;
        //});
    }

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
            
            $scope.GraduatesGrid.api.setRowData(data.ProviderGraduatesNumberList);

            if (data.ProviderGraduatesNumberList.length > 0) {
                for (var i = 0; i < data.ProviderGraduatesNumberList.length; i++) {
                    if (data.ProviderGraduatesNumberList[i].CalendarYear == '2009') {
                        $scope.ProviderGraduatesNumberId8 = data.ProviderGraduatesNumberList[i].ProviderGraduatesNumberId;
                        $scope.txtGradYear2016 = data.ProviderGraduatesNumberList[i].CalendarYearEstGradCount;
                    }
                    else if (data.ProviderGraduatesNumberList[i].CalendarYear == '2010') {
                        $scope.ProviderGraduatesNumberId7 = data.ProviderGraduatesNumberList[i].ProviderGraduatesNumberId;
                        $scope.txtGradYear2015 = data.ProviderGraduatesNumberList[i].CalendarYearEstGradCount;
                    }
                    else if (data.ProviderGraduatesNumberList[i].CalendarYear == '2011') {
                        $scope.ProviderGraduatesNumberId6 = data.ProviderGraduatesNumberList[i].ProviderGraduatesNumberId;
                        $scope.txtGradYear2014 = data.ProviderGraduatesNumberList[i].CalendarYearEstGradCount;
                    }
                    else if (data.ProviderGraduatesNumberList[i].CalendarYear == '2012') {
                        $scope.ProviderGraduatesNumberId5 = data.ProviderGraduatesNumberList[i].ProviderGraduatesNumberId;
                        $scope.txtGradYear2013 = data.ProviderGraduatesNumberList[i].CalendarYearEstGradCount;
                    }
                    else if (data.ProviderGraduatesNumberList[i].CalendarYear == '2013') {
                        $scope.ProviderGraduatesNumberId4 = data.ProviderGraduatesNumberList[i].ProviderGraduatesNumberId;
                        $scope.txtGradYear2012 = data.ProviderGraduatesNumberList[i].CalendarYearEstGradCount;
                    }
                    else if (data.ProviderGraduatesNumberList[i].CalendarYear == '2014') {
                        $scope.ProviderGraduatesNumberId3 = data.ProviderGraduatesNumberList[i].ProviderGraduatesNumberId;
                        $scope.txtGradYear2011 = data.ProviderGraduatesNumberList[i].CalendarYearEstGradCount;
                    }
                    else if (data.ProviderGraduatesNumberList[i].CalendarYear == '2015') {
                        $scope.ProviderGraduatesNumberId2 = data.ProviderGraduatesNumberList[i].ProviderGraduatesNumberId;
                        $scope.txtGradYear2010 = data.ProviderGraduatesNumberList[i].CalendarYearEstGradCount;
                    }
                    else if (data.ProviderGraduatesNumberList[i].CalendarYear == '2016') {
                        $scope.ProviderGraduatesNumberId1 = data.ProviderGraduatesNumberList[i].ProviderGraduatesNumberId;
                        $scope.txtGradYear2009 = data.ProviderGraduatesNumberList[i].CalendarYearEstGradCount;
                    }
                }
            }

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

    //ProviderRelatedProgram
    $scope.ProviderRelatedProgramGrid = {
        columnDefs: [
            { headerName: "", hide: true, width: 250, field: "ProviderRelatedSchoolId", },
            { headerName: "", hide: true, width: 250, field: "ProviderRelatedSchoolId", },
           { headerName: "School Name", width: 180, field: "ProviderName", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "School Phone", width: 130, field: "Phone", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "City", width: 125, field: "City", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "State", width: 125, field: "StateCode", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Zip", width: 125, field: "ZIP", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
              {
                  headerName: "Action", width: 80, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
                      return "<a data-ng-click=\"showUpdateRelatedProgram('" + params.data.AddressId + "','" + params.data.StreetLine1 + "','" + params.data.StreetLine2 + "','" + params.data.City + "','" + params.data.StateCode + "','" + params.data.Zip + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a> | </span><a data-ng-click=\"DeleteaddressRequestFromSchoolInformationTab('" + params.data.AddressId + "',7)\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
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


    $scope.clearRelatedAddress = function () {
        $scope.RelatedSchool = {};
        $scope.RelatedSchool.ProviderId = $scope.ProviderId;
        $scope.RelatedSchool.ApplicationId = $scope.applicationid;
        $scope.ProviderRelatedSchoolId = 0;

        $('#divAddRelatedschool').hide();
    }



    
    //Adding SaveProviderOtherProgram 
    $scope.SaveRelatedAddress = function () {
        //  ShowLoader();

        $scope.RelatedSchool.IsActive = 1;
        $scope.RelatedSchool.IsDeleted = 0;
        $scope.RelatedSchool.ProviderId = $scope.ProviderId;
        $scope.RelatedSchool.ApplicationId = $scope.applicationid;

        $scope.RelatedSchool.ProviderRelatedSchoolId = $scope.ProviderRelatedSchoolId;

        AboutFactory.SaveProviderRelatedSchools(key, $scope.RelatedSchool).success(function (data) {

            $scope.GetAllProviderOtherProgram();
        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //Adding SaveProviderOtherProgram 



}]);