LAPP.controller('AboutController', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window, $timeout, AboutFactory, _) {
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

    $scope.roles = [];
    $scope.user = [];


    $('#divAddRelatedschool').hide();

    $scope.ShowPopup = function (id) {
        if (id == 1) {
            $scope.clearRelatedAddress();
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

        var selectedBusTypes = [];

        //for (var i = 0; i < data.roles.length; i++) {

        for (var j = 0; j < $scope.roles.length; j++) {
            var result = _.contains($scope.user, $scope.roles[j].LookupId);
            if (result) {
                var obj = {
                    'ProviderBusinessTypeId': $scope.roles[j].ProviderBusinessTypeId,
                    'ProviderId': $scope.ProviderId,
                    'ApplicationId': $scope.applicationid,
                    'BusinessOrgTypeId': $scope.roles[j].LookupId,
                    'IsActive': 1,
                    'IsDeleted': 0
                }
                selectedBusTypes.push(obj)
            }
            else {
                var obj = {
                    'ProviderBusinessTypeId': $scope.roles[j].ProviderBusinessTypeId,
                    'ProviderId': $scope.ProviderId,
                    'ApplicationId': $scope.applicationid,
                    'BusinessOrgTypeId': $scope.roles[j].LookupId,
                    'IsActive': 0,
                    'IsDeleted': 0
                }
                selectedBusTypes.push(obj)
            }


        }


        AboutFactory.SaveProviderBusinessType(key, selectedBusTypes).success(function (data) {
            alert(data);
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

            $scope.ProviderOtherProgramGrid.api.setRowData(data.ListOfPreviousAddress);
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //Adding SaveProviderGraduatesNumber

    $scope.onchagecheck = function (id) {
        debugger
        for (var j = 0; j < $scope.List.length; j++) {
            if ($scope.List[j].LookupId == id) {
                $scope.List[j].IsChecked = !$scope.List[j].IsChecked;
                break;
            }
        }

    }


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
            $scope.ProviderOtherProgramGrid.api.setRowData(data.ProviderOtherProgramList);
        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //Adding SaveProviderOtherProgram 

    $scope.user = [];

    $scope.GetAllProviderOtherProgram = function () {
        //  ShowLoader();
        AboutFactory.GetAllProviderOtherProgram(key, $scope.applicationid, $scope.ProviderId).success(function (data) {
            HideLoader();
            $scope.ProviderOtherProgramGrid.api.setRowData(data.ProviderOtherProgramList);

        }).error(function (error) {
            $scope.Error = error;
        });

        $scope.List = [];
        AboutFactory.LookupGetBYLookupTypeID(key).success(function (data) {
            //        $scope.List = data.Lookup;
            $scope.roles = data.Lookup;
            $scope.user = [];
            AboutFactory.GetProviderBusinessTypeByProviderId(key, $scope.applicationid, $scope.ProviderId).success(function (data) {


                //for (var j = 0; j < $scope.List.length; j++) {

                //    if (data.ProviderBusinessTypeList.length > 0) {
                //        for (var i = 0; i < data.ProviderBusinessTypeList.length; i++) {
                //            if ($scope.List[j].ProviderBusinessTypeId == data.ProviderBusinessTypeList[i].ProviderBusinessTypeId) {
                //                $scope.List[j].IsChecked = true;
                //            }
                //            else {
                //                $scope.List[j].IsChecked = false;
                //            }

                //        }
                //    }
                //    else {
                //        $scope.List[j].IsChecked = true;
                //    }

                //}
                //$scope.LookupList = $scope.List;

                for (var j = 0; j < data.ProviderBusinessTypeList.length; j++) {
                    var result = _.where($scope.roles, { 'LookupId': data.ProviderBusinessTypeList[j].BusinessOrgTypeId });
                    if (result.length > 0) {
                        if (data.ProviderBusinessTypeList[j].IsActive) {
                            $scope.user.push(result[0].LookupId)
                        }
                        for (var i = 0; i < $scope.roles.length; i++) {
                            if ($scope.roles[i].LookupId == result[0].LookupId) {
                                $scope.roles[i].ProviderBusinessTypeId = data.ProviderBusinessTypeList[j].ProviderBusinessTypeId;
                            }
                        }

                    }
                }



            }).error(function (error) {
                $scope.Error = error;
            });
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


        AboutFactory.GetAllProviderRelatedSchools(key, $scope.ProviderId, $scope.applicationid).success(function (data) {
            
            $scope.ProviderRelatedProgramGrid.api.setRowData(data.ProviderRelatedSchoolsList);
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
            { headerName: "", hide: true, width: 250, field: "EmailId", },
            { headerName: "", hide: true, width: 250, field: "WebsiteId", },
            { headerName: "", hide: true, width: 250, field: "PhoneId", },
            { headerName: "", hide: true, width: 250, field: "Email", },
            { headerName: "", hide: true, width: 250, field: "Website", },
            { headerName: "", hide: true, width: 250, field: "Phone", },
            { headerName: "", hide: true, width: 250, field: "AddressId", },
            { headerName: "", hide: true, width: 250, field: "ProviderNameId", },
            { headerName: "", hide: true, width: 250, field: "LastName", },
            { headerName: "", hide: true, width: 250, field: "FirstName", },
            { headerName: "", hide: true, width: 250, field: "StreetLine1", },
            { headerName: "", hide: true, width: 250, field: "StreetLine2", },
           { headerName: "School Name", width: 150, field: "ProviderName", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "School Phone", width: 130, field: "Phone", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "City", width: 100, field: "City", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "State", width: 100, field: "StateCode", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Zip", width: 110, field: "ZIP", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
              {
                  headerName: "Action", width: 80, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
                      return "<a data-ng-click=\"showUpdateRelatedProgram('" + params.data.ProviderRelatedSchoolId + "','" + params.data.ProviderName + "','" + params.data.FirstName + "','" + params.data.LastName + "','" + params.data.EmailId + "','" + params.data.WebsiteId + "','" + params.data.PhoneId + "','" + params.data.AddressId + "','" + params.data.ProviderNameId + "','" + params.data.AddressId + "','" + params.data.StreetLine1 + "','" + params.data.StreetLine2 + "','" + params.data.City + "','" + params.data.StateCode + "','" + params.data.ZIP + "','" + params.data.Email + "','" + params.data.Website + "','" + params.data.Phone + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a> | </span><a data-ng-click=\"DeleteRelatedProgram('" + params.data.ProviderRelatedSchoolId + "','" + params.data.ProviderName + "','" + params.data.FirstName + "','" + params.data.LastName + "','" + params.data.EmailId + "','" + params.data.WebsiteId + "','" + params.data.PhoneId + "','" + params.data.AddressId + "','" + params.data.ProviderNameId + "','" + params.data.AddressId + "','" + params.data.StreetLine1 + "','" + params.data.StreetLine2 + "','" + params.data.City + "','" + params.data.StateCode + "','" + params.data.ZIP + "','" + params.data.Email + "','" + params.data.Website + "','" + params.data.Phone + "')\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
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

    $scope.showUpdateRelatedProgram = function (ProviderRelatedSchoolId, ProviderName, FirstName, LastName, EmailId, WebsiteId, PhoneId, AddressId, ProviderNameId, AddressId, StreetLine1, StreetLine2, City, StateCode, Zip, Email, Website, Phone) {
        $('#divAddRelatedschool').show();
        debugger;
        $scope.RelatedSchool.IsUpdate = true;
        $scope.RelatedSchool.StreetLine1 = StreetLine1;
        $scope.RelatedSchool.StreetLine2 = StreetLine2;
        $scope.RelatedSchool.ProviderName = ProviderName;
        $scope.RelatedSchool.FirstName = FirstName;
        $scope.RelatedSchool.LastName = LastName;
        $scope.RelatedSchool.ProviderId = $scope.ProviderId;
        $scope.RelatedSchool.ApplicationId = $scope.applicationid;
        $scope.ProviderRelatedSchoolId = ProviderRelatedSchoolId;
        $scope.EmailId = EmailId,
        $scope.WebsiteId = WebsiteId;
        $scope.PhoneId = PhoneId;
        $scope.AddressId = AddressId;
        $scope.ProviderNameId = ProviderNameId;
        $scope.AddressId = AddressId;

        $scope.RelatedSchool.City = City;
        $scope.RelatedSchool.StateCode = StateCode;
        $scope.RelatedSchool.ZIP = Zip;
        $scope.RelatedSchool.Phone = Phone;
        $scope.RelatedSchool.Website = Website;
        $scope.RelatedSchool.Email = Email;

    }


    $scope.DeleteRelatedProgram = function (ProviderRelatedSchoolId, ProviderName, FirstName, LastName, EmailId, WebsiteId, PhoneId, AddressId, ProviderNameId, AddressId, StreetLine1, StreetLine2, City, StateCode, Zip, Email, Website, Phone) {

        $scope.RelatedSchool.ProviderId = $scope.ProviderId;
        $scope.RelatedSchool.ApplicationId = $scope.applicationid;
        $scope.RelatedSchool.ProviderRelatedSchoolId = ProviderRelatedSchoolId;
        $scope.RelatedSchool.ProviderNameId = ProviderNameId;
        ///$scope.RelatedSchool.DateAssociated = DateAssociated;
        $scope.RelatedSchool.IsActive = 0;
        $scope.RelatedSchool.IsDeleted = 0;

        AboutFactory.DeleteProviderRelatedSchools(key, $scope.RelatedSchool).success(function (data) {
            $scope.ProviderRelatedProgramGrid.api.setRowData(data.ProviderRelatedSchoolsList);

        }).error(function (error) {
            $scope.Error = error;
        });

    }

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
        $scope.ProviderRelatedSchoolId = 0;
        $scope.EmailId = 0,
        $scope.WebsiteId = 0;
        $scope.PhoneId = 0;
        $scope.AddressId = 0;
        $scope.ProviderNameId = 0;
        $scope.AddressId = 0;

        $('#divAddRelatedschool').hide();
    }



    //Adding SaveProviderOtherProgram 
    $scope.SaveRelatedAddress = function () {
        //  ShowLoader();

        $scope.RelatedSchool.IsActive = 1;
        $scope.RelatedSchool.IsDeleted = 0;
        $scope.RelatedSchool.ProviderId = $scope.ProviderId;
        $scope.RelatedSchool.ApplicationId = $scope.applicationid;
        $scope.RelatedSchool.ApplicationId = $scope.applicationid;
        $scope.RelatedSchool.CountryId = null;
        $scope.RelatedSchool.CountyId = null;

        $scope.RelatedSchool.ProviderId = $scope.ProviderId;
        $scope.RelatedSchool.ApplicationId = $scope.applicationid;
        $scope.RelatedSchool.ProviderRelatedSchoolId = $scope.ProviderRelatedSchoolId;
        $scope.RelatedSchool.EmailId = $scope.EmailId,
        $scope.RelatedSchool.WebsiteId = $scope.WebsiteId;
        $scope.RelatedSchool.PhoneId = $scope.PhoneId;
        $scope.RelatedSchool.AddressId = $scope.AddressId;
        $scope.RelatedSchool.ProviderNameId = $scope.ProviderNameId;
        $scope.RelatedSchool.AddressId = $scope.AddressId;

        AboutFactory.SaveProviderRelatedSchools(key, $scope.RelatedSchool).success(function (data) {
            $scope.ProviderRelatedProgramGrid.api.setRowData(data.ProviderRelatedSchoolsList);

        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //Adding SaveProviderOtherProgram 



});