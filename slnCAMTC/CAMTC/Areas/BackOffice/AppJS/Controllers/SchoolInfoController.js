LAPP.controller('SchoolController', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, _, $http) {

    $('#dvPRevInfo').hide();
    $('#error_validation').hide();
    $scope.hasShow = 'false';
    var Provider = { ProviderId: '-1' };
    $('#divAddSchoolInfoPrevious').hide();
    $('#divAddSatelliteLocation').hide();
    $('#divMblex').hide();


    if (mySharedService.ApplicationName == 'BackOffice') {
        $scope.IsSchoolApplication = false;
    }
    else {
        $scope.IsSchoolApplication = true;
        $scope.hasShow = 'true';
    }

    $scope.ProviderId = '-1';
    $scope.ProviderNameId = 0;
    $scope.PreviousAddressId = 0;
    $scope.SateliteAddressId = 0;
    $scope.ProviderMBLExId = 0;

    $scope.StateList = [];
    $scope.Mblex = {};

    //schoolInfo

    $scope.ProviderInformationDetails = {};
    //$scope.Mblex.PassingYear = 'Select';
    //$scope.Mblex.PassingHalf = 'Select';
    $scope.ShowPopup = function (id) {
        if (id == 1) {
            $('#divAddSchoolInfoPrevious').show();
        }
        else if (id == 2) {
            $('#divAddSatelliteLocation').show();
        }
        else if (id == 3) {
            $('#divMblex').show();
        }
        else if (id == 4) {
            $('#dvPRevInfo').show();
        }

    }

    $scope.clearPreviousAddress = function () {
        $scope.PrevAdd = {};
        $scope.PrevAdd.UseUserAddress = '';
        $scope.PrevAdd.UseVerifiedAddress = '';
        $scope.PrevAdd.ProviderId = $scope.ProviderId;
        $scope.PrevAdd.AddressTypeId = 3;
        $scope.PreviousAddressId = 0;
        $('#divAddSchoolInfoPrevious').hide();
        $scope.PrevAdd.StateCode = 'CA';
    }

    $scope.clearsateliteAddress = function () {
        $scope.SateliteAdd = {};
        $scope.SateliteAdd.UseUserAddress = '';
        $scope.SateliteAdd.UseVerifiedAddress = '';
        $scope.SateliteAdd.ProviderId = $scope.ProviderId;
        $scope.SateliteAdd.AddressTypeId = 7;
        $scope.SateliteAddressId = 0;
        $scope.SateliteAdd.StateCode = 'CA';
        $('#divAddSatelliteLocation').hide();
    }

    $scope.clearMblex = function () {
        $scope.Mblex = {};
        //$scope.Mblex.PassingYear = 'Select';
        //$scope.Mblex.PassingHalf = 'Select';
        $scope.ProviderMBLExId = 0;
        $('#divMblex').hide();
    }

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


    $scope.verifyAddress = function (val) {
        ShowLoader();
        if (val == 1) {
            if ($scope.PrevAdd.StreetLine1 != '' && $scope.PrevAdd.City != '' && $scope.PrevAdd.StateCode != '' && $scope.PrevAdd.StateCode != '0' && $scope.PrevAdd.Zip != '' && $scope.PrevAdd.StreetLine1 != null && $scope.PrevAdd.City != null && $scope.PrevAdd.StateCode != null && $scope.PrevAdd.StateCode != null && $scope.PrevAdd.Zip != null) {
                var data = {
                    name:
                        '',
                    address_line1:
                        $scope.PrevAdd.StreetLine1,
                    address_line2:
                        $scope.PrevAdd.StreetLine2,
                    address_city:
                        $scope.PrevAdd.City,
                    address_state:
                        $scope.PrevAdd.StateCode,
                    address_zip:
                        $scope.PrevAdd.Zip,
                    address_country:
                        ''
                }

                SchoolInfoFactory.verifyaddress(data).success(function (data) {
                    console.log(data);
                    HideLoader();
                }).error(function (error) {
                    $scope.Error = error;
                });


            }
            else
                HideLoader();
        }
        else if (val == 2) {

            if ($scope.SateliteAdd.StreetLine1 != '' && $scope.SateliteAdd.City != '' && $scope.SateliteAdd.StateCode != '' && $scope.SateliteAdd.StateCode != '0' && $scope.SateliteAdd.Zip != '' && $scope.SateliteAdd.StreetLine1 != null && $scope.SateliteAdd.City != null && $scope.SateliteAdd.StateCode != null && $scope.SateliteAdd.StateCode != null && $scope.SateliteAdd.Zip != null) {
                var data = {
                    name:
                        '',
                    address_line1:
                        $scope.SateliteAdd.StreetLine1,
                    address_line2:
                        $scope.SateliteAdd.StreetLine2,
                    address_city:
                        $scope.SateliteAdd.City,
                    address_state:
                        $scope.SateliteAdd.StateCode,
                    address_zip:
                        $scope.SateliteAdd.Zip,
                    address_country:
                        ''
                }

                SchoolInfoFactory.verifyaddress(data).success(function (data) {
                    console.log(data);
                    HideLoader();
                }).error(function (error) {
                    $scope.Error = error;
                });

            }
            else {
                HideLoader();
            }
        }
        else if (val == 3) {

            if ($scope.ProviderInformationDetails.SchoolAddressStree1 != '' && $scope.ProviderInformationDetails.SchoolAddressCity != '' && $scope.ProviderInformationDetails.SchoolAddressState != '' && $scope.ProviderInformationDetails.SchoolAddressState != '0' && $scope.ProviderInformationDetails.SchoolAddressZip != '' && $scope.ProviderInformationDetails.SchoolAddressStreet1 != null && $scope.ProviderInformationDetails.SchoolAddressCity != null && $scope.ProviderInformationDetails.SchoolAddressStateCode != null && $scope.ProviderInformationDetails.SchoolAddressState != null && $scope.ProviderInformationDetails.SchoolAddressZip != null) {
                var data = {
                    name:
                        '',
                    address_line1:
                        $scope.ProviderInformationDetails.SchoolAddressStreet1,
                    address_line2:
                        $scope.ProviderInformationDetails.SchoolAddressStreet2,
                    address_city:
                        $scope.ProviderInformationDetails.SchoolAddressCity,
                    address_state:
                        $scope.ProviderInformationDetails.SchoolAddressState,
                    address_zip:
                        $scope.ProviderInformationDetails.SchoolAddressZip,
                    address_country:
                        ''
                }

                SchoolInfoFactory.verifyaddress(data).success(function (data) {
                    console.log(data);
                    HideLoader();
                }).error(function (error) {
                    $scope.Error = error;
                });
            }
        }
        else if (val == 4) {

            if ($scope.ProviderInformationDetails.MailingAddressStreet1 != '' && $scope.ProviderInformationDetails.MailingAddressCity != '' && $scope.ProviderInformationDetails.MailingAddressState != '' && $scope.ProviderInformationDetails.MailingAddressState != '0' && $scope.ProviderInformationDetails.MailingAddressZip != '' && $scope.ProviderInformationDetails.MailingAddressStreetLine1 != null && $scope.ProviderInformationDetails.MailingAddressCity != null && $scope.ProviderInformationDetails.MailingAddressState != null && $scope.ProviderInformationDetails.MailingAddressState != null && $scope.ProviderInformationDetails.MailingAddressZip != null) {
                var data = {
                    name:
                        '',
                    address_line1:
                        $scope.ProviderInformationDetails.MailingAddressStreet1,
                    address_line2:
                        $scope.ProviderInformationDetails.MailingAddressStreet2,
                    address_city:
                        $scope.ProviderInformationDetails.MailingAddressCity,
                    address_state:
                        $scope.ProviderInformationDetails.MailingAddressState,
                    address_zip:
                        $scope.ProviderInformationDetails.MailingAddressZip,
                    address_country:
                        ''
                }

                SchoolInfoFactory.verifyaddress(data).success(function (data) {
                    console.log(data);
                    HideLoader();
                }).error(function (error) {
                    $scope.Error = error;
                });
            }
        }
    }

    //Adding PRevious school Information with address 4
    $scope.AddPreviousAddress = function () {
        ShowLoader();
        $scope.PrevAdd.IsActive = 1;
        $scope.PrevAdd.IsDeleted = 0;
        $scope.PrevAdd.AddressId = $scope.PreviousAddressId;
        if ($scope.PrevAdd.StreetLine1 != '' && $scope.PrevAdd.City != '' && $scope.PrevAdd.StateCode != '' && $scope.PrevAdd.StateCode != '0' && $scope.PrevAdd.Zip != '' && $scope.PrevAdd.StreetLine1 != null && $scope.PrevAdd.City != null && $scope.PrevAdd.StateCode != null && $scope.PrevAdd.StateCode != null && $scope.PrevAdd.Zip != null) {
            SchoolInfoFactory.AddPreviousAddress($scope.PrevAdd, key).success(function (data) {
                $scope.clearPreviousAddress();
                $scope.PrevAddrIfanyGrid.api.setRowData(data.ListOfPreviousAddress);
                HideLoader();
            }).error(function (error) {
                $scope.Error = error;
            });
        }
        else
            HideLoader();
    }



    //Adding PRevious school Information with address 4

    //Adding PRevious school Information with address 4
    $scope.DeleteaddressRequestFromSchoolInformationTab = function (AddressId, AddressTypeId) {
        ShowLoader();
        var addresss = {
            'AddressId': AddressId, 'AddressTypeId': AddressTypeId, 'ProviderId': $scope.ProviderId
        };

        SchoolInfoFactory.DeleteaddressRequestFromSchoolInformationTab(addresss, key).success(function (data) {
            $scope.clearPreviousAddress();
            $scope.PrevAddrIfanyGrid.api.setRowData(data.ListOfPreviousAddress);
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //Adding PRevious school Information with address 4

    //Adding Satellite school Information with address 4
    $scope.AddSateliteAddress = function () {
        ShowLoader();
        $scope.SateliteAdd.IsActive = 1;
        $scope.SateliteAdd.IsDeleted = 0;
        $scope.SateliteAdd.AddressId = $scope.SateliteAddressId;
        if ($scope.SateliteAdd.StreetLine1 != '' && $scope.SateliteAdd.City != '' && $scope.SateliteAdd.StateCode != '' && $scope.SateliteAdd.StateCode != '0' && $scope.SateliteAdd.Zip != '' && $scope.SateliteAdd.StreetLine1 != null && $scope.SateliteAdd.City != null && $scope.SateliteAdd.StateCode != null && $scope.SateliteAdd.StateCode != null && $scope.SateliteAdd.Zip != null) {
            SchoolInfoFactory.AddPreviousAddress($scope.SateliteAdd, key).success(function (data) {
                $scope.clearsateliteAddress();
                $scope.SateliteAddrIfanyGrid.api.setRowData(data.ListOfPreviousAddress);
                HideLoader();
            }).error(function (error) {
                $scope.Error = error;
            });
        }
        else {
            HideLoader();
        }
    }
    //Adding Satellite school Information with address 4

    //Adding Mblex
    $scope.Save_providermblex = function () {
        ShowLoader();

        $scope.Mblex.IsActive = 1;
        $scope.Mblex.IsDeleted = 0;
        $scope.Mblex.ProviderMBLExId = $scope.ProviderMBLExId;
        $scope.Mblex.ProviderId = $scope.ProviderId;
        SchoolInfoFactory.Save_providermblex(key, $scope.Mblex).success(function (data) {
            $scope.clearMblex();
            $scope.MBLExGrid.api.setRowData(data.ProvidermblexResponseList);
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //Adding Mblex

    //Get particular provider information
    $scope.GetSchoolInfoByProviderId = function () {
        ShowLoader();
        SchoolInfoFactory.GetSchoolInfoByProviderId(Provider, key).success(function (data) {
            HideLoader();

            $scope.ProviderInformationDetails = data.ProviderInformationDetails;

            $scope.ProviderInformation = data;
            $scope.ProviderInformationDetails = data.ProviderInformationDetails;

            //var result = _.each($scope.ProviderInformation.ListOfPreviousSchool, function (key, val)
            //{ });
            //if (result) {
            //}

            _.each($scope.ProviderInformation.ListOfPreviousSchool, function (value, key) {
                value.DateofNameChange = moment(value.DateofNameChange).format("MM/DD/YYYY");
            });

            $scope.PrevAddrGrid.api.setRowData($scope.ProviderInformation.ListOfPreviousSchool);

            $scope.PrevAddrIfanyGrid.api.setRowData($scope.ProviderInformation.ListOfPreviousAddress);

            $scope.SateliteAddrIfanyGrid.api.setRowData($scope.ProviderInformation.ListOfSatliteSchool);

            if (data.SchoolAddress != null && data.SchoolAddress.length > 0) {
                $scope.ProviderInformationDetails.SchoolAddressId = data.SchoolAddress[0].AddressId;
                $scope.ProviderInformationDetails.SchoolAddressStreet1 = data.SchoolAddress[0].StreetLine1;
                $scope.ProviderInformationDetails.SchoolAddressStreet2 = data.SchoolAddress[0].StreetLine2;
                $scope.ProviderInformationDetails.SchoolAddressCity = data.SchoolAddress[0].City;
                $scope.ProviderInformationDetails.SchoolAddressState = data.SchoolAddress[0].StateCode;
                $scope.ProviderInformationDetails.SchoolAddressZip = data.SchoolAddress[0].Zip;
                //SchoolInfo.SchoolAddressIsVerifiedClicked = $scope.ProviderInformationDetails.SchoolAddressIsVerifiedClicked;
                //SchoolInfo.SchoolAddressIsNotVerifiedClicked = $scope.ProviderInformationDetails.SchoolAddressIsNotVerifiedClicked;
            }
            else {
                $scope.ProviderInformationDetails.SchoolAddressState = 'CA';
            }
            if (data.MailingAddress != null && data.MailingAddress.length > 0) {
                $scope.ProviderInformationDetails.MailingAddressId = data.MailingAddress[0].AddressId;
                $scope.ProviderInformationDetails.MailingAddressStreet1 = data.MailingAddress[0].StreetLine1;
                $scope.ProviderInformationDetails.MailingAddressStreet2 = data.MailingAddress[0].StreetLine2;
                $scope.ProviderInformationDetails.MailingAddressCity = data.MailingAddress[0].City;
                $scope.ProviderInformationDetails.MailingAddressState = data.MailingAddress[0].StateCode;
                $scope.ProviderInformationDetails.MailingAddressZip = data.MailingAddress[0].Zip;
            }
            else {
                $scope.ProviderInformationDetails.MailingAddressState = 'CA';
            }

            if (data.ListOfContactJobTitle != null && data.ListOfContactJobTitle.length > 0) {
                $scope.ProviderInformationDetails.ContactNameFirstName = data.ListOfContactJobTitle[0].FirstName;
                $scope.ProviderInformationDetails.ContactNameJobTitle = data.ListOfContactJobTitle[0].ProvIndvJobTitle;
            }
            else {

            }
            if (data.ListOfDirectorJobTitle != null && data.ListOfDirectorJobTitle.length > 0) {
                $scope.ProviderInformationDetails.DirectorFirstName = data.ListOfDirectorJobTitle[0].FirstName;
                $scope.ProviderInformationDetails.DirectorJobTitle = data.ListOfDirectorJobTitle[0].ProvIndvJobTitle;
            }
            else {

            }
            //$scope.ProviderInformationDetails.ContactNameAdministratorEmail;
            //$scope.ProviderInformationDetails.ContactNamePrimaryNumber
            //$scope.ProviderInformationDetails.ContactNamePrimaryNumberIsMobile
            //$scope.ProviderInformationDetails.ContactNameSecondaryNumber
            //$scope.ProviderInformationDetails.ContactNameSecondaryNumberIsMobile
            //$scope.ProviderInformationDetails.DirectorPrimaryNumber
            //$scope.ProviderInformationDetails.DirectorPrimaryNumberIsMobile
            //$scope.ProviderInformationDetails.DirectorSecondaryNumber
            //$scope.ProviderInformationDetails.DirectorSecondaryNumberIsMobil
            //$scope.ProviderInformationDetails.DirectorAdministratorEmaile

            //$scope.ProviderInformationDetails.ContactNameAdministratorEmail

            //$scope.ProviderInformationDetails.SchoolTelephone
            //$scope.ProviderInformationDetails.IsSchoolTelephoneMobile
            //$scope.ProviderInformationDetails.SchoolWebsite

        }).error(function (error) {
            $scope.Error = error;
        });
    };


    //Previous school name only
    $scope.PrevAddrGrid = {
        columnDefs: [
        {
            headerName: "", hide: true, width: 250, field: "ProviderNameId",
        },
        {
            headerName: "Previous School Name", width: 220, field: "ProviderName", cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }
        },
        {
            headerName: "Date of Name Change", width: 120, field: "DateofNameChange", cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }
        },

        {
            headerName: "Action", width: 100, cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }, field: "IsActive", cellRenderer: function (params) {
                return "<a data-ng-click=\"showUpdatevalue('" + params.data.ProviderNameId + "','" + params.data.ProviderName + "','" + params.data.DateofNameChange + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a><span ng-show=\"!IsReadOnly\"> |</span><a data-ng-click=\"DeletePreviousSchoolInSchoolInformation('" + params.data.ProviderNameId + "')\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
            }
        },
        ],
        angularCompileRows: true,
        rowData: [],
        rowHeight: 25,
        headerHeight: 30,
        enableColResize: true,
        suppressCellSelection: true,
        onGridReady: function (event) {
            //$scope.PrevAddrGrid.api.sizeColumnsToFit();
        }
    };

    //Previous school address only
    $scope.PrevAddrIfanyGrid = {
        columnDefs: [
        {
            headerName: "", hide: true, width: 250, field: "AddressId",
        },
        {
            headerName: "", hide: true, width: 250, field: "StreetLine2",
        },
        {
            headerName: "Street", width: 180, field: "StreetLine1", cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }
        },
        {
            headerName: "City", width: 130, field: "City", cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }
        },
        {
            headerName: "State", width: 125, field: "StateCode", cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }
        },
        {
            headerName: "Zip", width: 125, field: "Zip", cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }
        },
        {
            headerName: "Action", width: 80, cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }, field: "IsActive", cellRenderer: function (params) {
                return "<a data-ng-click=\"showUpdatevaluePreviousAddress('" + params.data.AddressId + "','" + params.data.StreetLine1 + "','" + params.data.StreetLine2 + "','" + params.data.City + "','" + params.data.StateCode + "','" + params.data.Zip + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a> |</span><a data-ng-click=\"DeleteaddressRequestFromSchoolInformationTab('" + params.data.AddressId + "',3)\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
            }
        },
        ],
        angularCompileRows: true,
        rowData: [],
        rowHeight: 25,
        headerHeight: 30,
        enableColResize: true,
        suppressRowClickSelection: true,
        suppressHorizontalScroll: true,
        suppressCellSelection: true,
        onGridReady: function (event) {
            //$scope.userGrid.api.sizeColumnsToFit();
        }
    };

    //Satellite address only
    $scope.SateliteAddrIfanyGrid = {
        columnDefs: [
        {
            headerName: "", hide: true, width: 250, field: "AddressId",
        },
        {
            headerName: "Street", width: 180, field: "StreetLine1", cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }
        },
        {
            headerName: "City", width: 130, field: "City", cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }
        },
        {
            headerName: "State", width: 125, field: "StateCode", cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }
        },
        {
            headerName: "Zip", width: 125, field: "Zip", cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }
        },
        {
            headerName: "Action", width: 80, cellStyle: {
                'text-align': 'center', 'display': 'flex', 'align-items': 'center'
            }, field: "IsActive", cellRenderer: function (params) {
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

    $scope.MBLExGrid = {
        columnDefs: [
    {
        headerName: "", hide: true, width: 250, field: "ProviderMBLExId",
    },
    {
        headerName: "", hide: true, width: 250, field: "ProviderMBLExIdGuid",
    },
    {
        headerName: "MBLEx Passing Rates", width: 180, field: "PassingRates", cellStyle: {
            'text-align': 'center', 'display': 'flex', 'align-items': 'center'
        }
    },
    {
        headerName: "Year", width: 125, field: "PassingYear", cellStyle: {
            'text-align': 'center', 'display': 'flex', 'align-items': 'center'
        }
    },
    {
        headerName: "Half", width: 125, field: "PassingHalf", cellStyle: {
            'text-align': 'center', 'display': 'flex', 'align-items': 'center'
        }
    },
    {
        headerName: "Entered", width: 175, field: "DateEntered", cellStyle: {
            'text-align': 'center', 'display': 'flex', 'align-items': 'center'
        }
    },
    {
        headerName: "Action", width: 80, cellStyle: {
            'text-align': 'center', 'display': 'flex', 'align-items': 'center'
        }, field: "IsActive", cellRenderer: function (params) {

            return "<a data-ng-click=\"showUpdatevalueMblex('" + params.data.ProviderMBLExId + "','" + params.data.PassingRates + "','" + params.data.PassingYear + "','" + params.data.PassingHalf + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a><span ng-show=\"!IsReadOnly\"> |</span><a data-ng-click=\"EditUser('" + params.data.userId + "')\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
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

    $scope.SiteDetailsGrid = {
        columnDefs: [
    {
        headerName: "Site Visit Date", width: 125, field: "Street", cellStyle: {
            'text-align': 'center', 'display': 'flex', 'align-items': 'center'
        }
    },
    {
        headerName: "Type of Site Visit ", width: 125, field: "City", cellStyle: {
            'text-align': 'center', 'display': 'flex', 'align-items': 'center'
        }
    },
    {
        headerName: "Site Inspector", width: 125, field: "State", cellStyle: {
            'text-align': 'center', 'display': 'flex', 'align-items': 'center'
        }
    },
    {
        headerName: "Date Completed", width: 125, field: "Zip", cellStyle: {
            'text-align': 'center', 'display': 'flex', 'align-items': 'center'
        }
    },
    {
        headerName: "Supporting Docs", width: 125, field: "Zip", cellStyle: {
            'text-align': 'center', 'display': 'flex', 'align-items': 'center'
        }
    },
    {
        headerName: "Action", width: 80, cellStyle: {
            'text-align': 'center', 'display': 'flex', 'align-items': 'center'
        }, field: "IsActive", cellRenderer: function (params) {
            return "<a data-ng-click=\"GetUser('" + params.data.userId + "')\" href=\"javascript:;\">View</a> |  <a data-ng-click=\"EditUser('" + params.data.userId + "')\" href=\"javascript:;\"> Edit</a>";
        }
    },
        ],
        angularCompileRows: true,
        rowData: [],
        rowHeight: 25,
        headerHeight: 30,
        //enableColResize: true,
        // suppressRowClickSelection: true,
        suppressHorizontalScroll: true,
        //suppressCellSelection: true,
        onGridReady: function (event) {
            //$scope.userGrid.api.sizeColumnsToFit();
        }
    };

    $scope.clearPRevInfo = function () {
        $('#dvPRevInfo').hide();
        $scope.PrevSchoolname = null;
        $scope.DateofNameChange = null;
        $scope.ProviderNameId = 0;
    }

    // add/update previous address
    $scope.AddPreviousSchoolInSchoolInformation = function () {
        ShowLoader();
        if (btnSchoolInfoPreviousAddNewSave()) {
            if ($scope.PrevSchoolname != '' && $scope.PrevSchoolname != null) {
                var prevschooldata = {};
                prevschooldata.ProviderId = $scope.ProviderId;
                prevschooldata.ProviderNameId = $scope.ProviderNameId;
                prevschooldata.ProviderName = $scope.PrevSchoolname;
                prevschooldata.DateofNameChange = $scope.DateofNameChange;

                SchoolInfoFactory.AddPreviousSchoolInSchoolInformation(prevschooldata, key).success(function (data) {

                    _.each(data.ListOfPreviousSchool, function (value, key) {
                        value.DateofNameChange = moment(value.DateofNameChange).format("MM/DD/YYYY");
                    });
                    $scope.PrevAddrGrid.api.setRowData(data.ListOfPreviousSchool);
                    HideLoader();
                }).error(function (error) {
                    $scope.Error = error;
                });
            }
            else {
                HideLoader();
            }
        }
        else
            HideLoader();
    }
    // add/update previous address


    // Delete previous address
    $scope.DeletePreviousSchoolInSchoolInformation = function (ProviderNameId) {
        ShowLoader();
        var prevschooldata = {};
        prevschooldata.ProviderId = $scope.ProviderId;
        prevschooldata.ProviderNameId = ProviderNameId;

        SchoolInfoFactory.DeletePreviousSchoolInSchoolInformation(prevschooldata, key).success(function (data) {
            $scope.PrevSchoolname = null;
            $scope.DateofNameChange = null;
            $scope.ProviderNameId = 0;

            _.each(data.ListOfPreviousAddress, function (value, key) {
                value.DateofNameChange = moment(value.DateofNameChange).format("MM/DD/YYYY");
            });
            $scope.PrevAddrGrid.api.setRowData(data.ListOfPreviousSchool);
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
        });
    }
    // add/update previous address

    //Populate Edit Previous school name
    $scope.showUpdatevalue = function (ProviderNameId, ProviderName, DateofNameChange) {
        ShowLoader();
        $('#dvPRevInfo').show();
        $scope.PrevSchoolname = ProviderName;
        $scope.ProviderNameId = ProviderNameId;
        $scope.DateofNameChange = DateofNameChange;

        HideLoader();
    }
    //Populate Edit Previous school name



    //Populate Edit Previous Address
    $scope.showUpdatevaluePreviousAddress = function (AddressId, StreetLine1, StreetLine2, City, StateCode, Zip) {
        $scope.PreviousAddressId = AddressId;

        $scope.PrevAdd.StreetLine1 = StreetLine1;
        $scope.PrevAdd.StreetLine2 = StreetLine2
        $scope.PrevAdd.City = City;
        $scope.PrevAdd.StateCode = StateCode;
        $scope.PrevAdd.Zip = Zip;
        $('#divAddSchoolInfoPrevious').show();
    }
    //Populate Edit Previous Address


    //Populate Edit Satelite Address
    $scope.showUpdatevalueSateliteAddress = function (AddressId, StreetLine1, StreetLine2, City, StateCode, Zip) {
        $scope.SateliteAddressId = AddressId;
        $scope.SateliteAdd.StreetLine1 = StreetLine1;
        $scope.SateliteAdd.StreetLine2 = StreetLine2
        $scope.SateliteAdd.City = City;
        $scope.SateliteAdd.StateCode = StateCode;
        $scope.SateliteAdd.Zip = Zip;
        $('#divAddSatelliteLocation').show();
    }
    //Populate Edit Previous school name


    //Populate Edit Mblex 
    $scope.showUpdatevalueMblex = function (ProviderMBLExId, PassingRates, PassingYear, PassingHalf) {
        $scope.ProviderMBLExId = ProviderMBLExId;
        $scope.Mblex.PassingRates = PassingRates;
        $scope.Mblex.PassingYear = PassingYear
        $scope.Mblex.PassingHalf = PassingHalf;

    }
    //Populate Edit Mblex

    $scope.SaveSchoolInformation = function () {
        ShowLoader();
        if (checkfrm()) {
            var SchoolInfo = {};

            //SchoolInfo.SchoolTelephone = $scope.ProviderInformationDetails.SchoolTelephone;
            //SchoolInfo.IsSchoolTelephoneMobile = $scope.ProviderInformationDetails.IsSchoolTelephoneMobile;
            //SchoolInfo.SchoolWebsite = $scope.ProviderInformationDetails.SchoolWebsite;


            //SchoolInfo.SchoolAddressStreet1 = $scope.ProviderInformationDetails.SchoolAddressStreet1;
            //SchoolInfo.SchoolAddressStreet2 = $scope.ProviderInformationDetails.SchoolAddressStreet2;
            //SchoolInfo.SchoolAddressCity = $scope.ProviderInformationDetails.SchoolAddressCity;
            //SchoolInfo.SchoolAddressState = $scope.ProviderInformationDetails.SchoolAddressState;
            //SchoolInfo.SchoolAddressZip = $scope.ProviderInformationDetails.SchoolAddressZip;
            //SchoolInfo.SchoolAddressIsVerifiedClicked = $scope.ProviderInformationDetails.SchoolAddressIsVerifiedClicked;
            //SchoolInfo.SchoolAddressIsNotVerifiedClicked = $scope.ProviderInformationDetails.SchoolAddressIsNotVerifiedClicked;

            //SchoolInfo.MailingAddressStreet1 = $scope.ProviderInformationDetails.MailingAddressStreet1;
            //SchoolInfo.MailingAddressStreet2 = $scope.ProviderInformationDetails.MailingAddressStreet2;
            //SchoolInfo.MailingAddressCity = $scope.ProviderInformationDetails.MailingAddressCity;
            //SchoolInfo.MailingAddressState = $scope.ProviderInformationDetails.MailingAddressState;
            //SchoolInfo.MailingAddressZip = $scope.ProviderInformationDetails.MailingAddressZip;
            ////SchoolInfo.MailingAddressIsVerifiedClicked = $scope.ProviderInformationDetails.MailingAddressIsVerifiedClicked;
            ////SchoolInfo.MailingAddressIsNotVerifiedClicked = $scope.ProviderInformationDetails.MailingAddressIsNotVerifiedClicked;


            //SchoolInfo.DirectorFirstName = $scope.ProviderInformationDetails.DirectorFirstName;
            //SchoolInfo.DirectorLastName = $scope.ProviderInformationDetails.DirectorLastName;
            //SchoolInfo.DirectorAdministratorEmail = $scope.ProviderInformationDetails.DirectorAdministratorEmail;
            //SchoolInfo.DirectorJobTitle = $scope.ProviderInformationDetails.DirectorJobTitle;
            //SchoolInfo.DirectorPrimaryNumber = $scope.ProviderInformationDetails.DirectorPrimaryNumber;
            //SchoolInfo.DirectorPrimaryNumberIsMobile = $scope.ProviderInformationDetails.DirectorPrimaryNumberIsMobile;
            //SchoolInfo.DirectorSecondaryNumber = $scope.ProviderInformationDetails.DirectorSecondaryNumber;
            //SchoolInfo.DirectorSecondaryNumberIsMobile = $scope.ProviderInformationDetails.DirectorSecondaryNumberIsMobile;

            //SchoolInfo.ContactNameFirstName = $scope.ProviderInformationDetails.ContactNameFirstName;
            //SchoolInfo.ContactNameLastName = $scope.ProviderInformationDetails.ContactNameLastName;
            //SchoolInfo.ContactNameAdministratorEmail = $scope.ProviderInformationDetails.ContactNameAdministratorEmail;
            //SchoolInfo.ContactNameJobTitle = $scope.ProviderInformationDetails.ContactNameJobTitle;
            //SchoolInfo.ContactNamePrimaryNumber = $scope.ProviderInformationDetails.ContactNamePrimaryNumber;
            //SchoolInfo.ContactNamePrimaryNumberIsMobile = $scope.ProviderInformationDetails.ContactNamePrimaryNumberIsMobile;
            //SchoolInfo.ContactNameSecondaryNumber = $scope.ProviderInformationDetails.ContactNameSecondaryNumber;
            //SchoolInfo.ContactNameSecondaryNumberIsMobile = $scope.ProviderInformationDetails.ContactNameSecondaryNumberIsMobile;

            ////SchoolInfo.IsActive =$scope.ProviderInformationDetails.
            ////SchoolInfo.IsDeleted =$scope.ProviderInformationDetails.


            //SchoolInfo.ContactInfo = $scope.ProviderInformationDetails.ContactInfo;
            //SchoolInfo.ContactTypeId = $scope.ProviderInformationDetails.ContactTypeId;
            $scope.ProviderInformationDetails.ProviderId = $scope.ProviderId;
            //SchoolInfo.IsMobile = $scope.ProviderInformationDetails.IsMobile
            //SchoolInfo.IsPreferredContact = $scope.ProviderInformationDetails.IsPreferredContact


            ////  SchoolInfo.ApplicationId =
            ////SchoolInfo.AddressId = $scope.ProviderInformationDetails.AddressId;
            ////  SchoolInfo.DateValidated =$scope.ProviderInformationDetails.
            ////SchoolInfo.UseUserAddress =$scope.ProviderInformationDetails.
            ////SchoolInfo.UseVerifiedAddress =$scope.ProviderInformationDetails.
            //// SchoolInfo.AddressTypeId =$scope.ProviderInformationDetails.
            ////SchoolInfo.IsMailingSameasPhysical =$scope.ProviderInformationDetails.
            ////SchoolInfo.IndividualId =$scope.ProviderInformationDetails.

            SchoolInfoFactory.SaveSchoolInformation($scope.ProviderInformationDetails, key).success(function (data) {
                $scope.GetSchoolInfoByProviderId();

                if (mySharedService.ApplicationName == 'SchoolApp') {

                    var obj = {};
                    obj.ApplicationTabStatusId = 0;
                    obj.ApplicationId = $scope.applicationid;
                    obj.PageModuleId = 0;
                    obj.PageModuleTabSubModuleId = 0;
                    obj.PageTabSectionId = 0;
                    obj.IndividualId = 0;
                    obj.ProviderId = $scope.ProviderId;
                    obj.TabName = 'School Information'
                    obj.ApplicationTabStatus = true;
                    obj.IsActive = true;
                    SchoolInfoFactory.SaveProviderTabStatus(key, obj).success(function (data) {
                        if (data.ProviderTabStatusList != null && data.ProviderTabStatusList.length > 0) {
                            var result = _.where(data.ProviderTabStatusList, { TabName: 'Instructions' });
                            if (result.length > 0) {
                                $rootScope.checked1 = true;
                            }

                            var result = _.where(data.ProviderTabStatusList, { TabName: 'School Information' });
                            if (result.length > 0) {
                                $rootScope.checked2 = true;
                            }

                            var result = _.where(data.ProviderTabStatusList, { TabName: 'School Eligibility' });
                            if (result.length > 0) {
                                $rootScope.checked3 = true;
                            }

                            var result = _.where(data.ProviderTabStatusList, { TabName: 'About the School' });
                            if (result.length > 0) {
                                $rootScope.checked4 = true;
                            }
                            var result = _.where(data.ProviderTabStatusList, { TabName: 'Transcript' });
                            if (result.length > 0) {
                                $rootScope.checked5 = true;
                            }
                            var result = _.where(data.ProviderTabStatusList, { TabName: 'Enrollment Agreement' });
                            if (result.length > 0) {
                                $rootScope.checked6 = true;
                            }
                            var result = _.where(data.ProviderTabStatusList, { TabName: 'Course Catalog' });
                            if (result.length > 0) {
                                $rootScope.checked7 = true;
                            }
                            var result = _.where(data.ProviderTabStatusList, { TabName: 'Curriculum' });
                            if (result.length > 0) {
                                $rootScope.checked8 = true;
                            }
                            var result = _.where(data.ProviderTabStatusList, { TabName: 'Staff' });
                            if (result.length > 0) {
                                $rootScope.checked9 = true;
                            }


                        }
                        HideLoader();
                        mySharedService.prepForBroadcastTabClick('Eligibility');

                    }).error(function (error) {
                        $scope.Error = error;
                    });



                }

            }).error(function (error) {
                $scope.Error = error;
            });
        }


        else {
            HideLoader();
        }
    }


    $scope.Get_All_providermblex = function () {
        var obj = {
            ProviderId: $scope.ProviderId
        };
        ShowLoader();
        SchoolInfoFactory.Get_All_providermblex(key, obj).success(function (data) {

            $scope.MBLExGrid.api.setRowData(data.ProvidermblexResponseList);
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
        });
    }

    $scope.Get_All_Providersitevisittype = function () {
        SchoolInfoFactory.Get_All_Providersitevisittype(key).success(function (data) {
            $scope.sitevisittypeList = data.ProvidersitevisittypeGetList;
        }).error(function (error) {
            $scope.Error = error;
        });
    }

    $scope.Get_All_Providersitevisittype();
    //schoolInfo

    // on selecting provider
    $scope.GetProviderdataonchange = function (id, name) {
        $scope.ProviderId = mySharedService.message;
        $scope.applicationid = mySharedService.Applicationid;

        Provider.ProviderId = $scope.ProviderId;
        $scope.clearPreviousAddress();
        $scope.clearsateliteAddress();
        $scope.GetSchoolInfoByProviderId();
        $scope.Get_All_providermblex();
        $('#error_validation').hide();
    }
    // on selecting provider

    $scope.$on('handleBroadcast', function () {
        $('#error_validation').hide();
        if (mySharedService.CurrentPage == '') {
            mySharedService.prepForBroadcastTabClick('SchoolInfo');
        }
        $scope.ProviderId = mySharedService.message;
        $scope.ProviderName = mySharedService.message1;
        if (mySharedService.CurrentPage == 'SchoolInfo') {
            $('.errorinfo').text('');
            $('.errorinfo').hide();
            $scope.GetProviderdataonchange();
        }
    });


    $scope.$on('handleBroadcastForTab', function () {
        $('#error_validation').hide();
        if (mySharedService.CurrentPage == 'SchoolInfo') {
            $('.errorinfo').text('');
            $('.errorinfo').hide();
            $scope.GetProviderdataonchange();
            $scope.hasShow = 'true';
        }
        else {
            $scope.hasShow = 'false';
        }
        //$scope.GetProviderdataonchange();
    });




    function checkfrm() {
        $('#error_validation').text('');
        var error = '';
        var SchoolName = ValidateTextbox('<span class="notok"></span> Please enter the school name.<br/>', '#first', $('#first').val());
        var SchoolTelephone = ValidateTextbox('<span class="notok"></span> Please enter school telephone<br/>', '#tel', $('#tel').val());
        var SchoolWebsite = ValidateWebsite('<span class="notok"></span> Please enter website in correct format (www.websitename.com) <br/>', '<span class="notok"></span> Please enter school website<br/>', '#website', $('#website').val());
        //var _DateofNameChange = CheckDate('<span class="notok"></span> Future dates are not accepted. <br/>', '<span class="notok"></span> Please enter date in correct format (mm/dd/yyyy)<br/>', '#txtnamechange', $('#txtnamechange').val());
        var SchoolAddress = ValidateTextbox('<span class="notok"></span> Please enter school address<br/>', '#SchoolStreet', $('#SchoolStreet').val());
        var SchoolCity = ValidateTextbox('<span class="notok"></span> Please enter school city<br/>', '#city', $('#city').val());
        var SchoolState = ValidateDropdown('<span class="notok"></span> Please enter school state<br/>', '#State', $('#State').val());
        var SchoolZip = ValidateTextbox('<span class="notok"></span> Please enter school zip<br/>', '#zip', $('#zip').val());
        var DirectorFirstName = ValidateTextbox('<span class="notok"></span> Please enter director first name<br/>', '#DirFirstName', $('#DirFirstName').val());
        //var DirectorLastName = ValidateTextbox('<span class="notok"></span> Please enter director last name<br/>', '#DirLastName', $('#DirLastName').val());
        var AdministratorEmail = ValidateEmail('<span class="notok"></span> Please enter administrator email<br/>', '<span class="notok"></span> Please enter administrator email<br/>', '#DirectorEmail', $('#DirectorEmail').val());
        var JobTitle = ValidateTextbox('<span class="notok"></span> Please enter administrator job title<br/>', '#SclInfoJobTitle', $('#SclInfoJobTitle').val());
        var PrimaryNumber = ValidateTextbox('<span class="notok"></span> Please enter administrator primary number<br/>', '#SclInfoPriNumber', $('#SclInfoPriNumber').val());
        //        var _ContactEmail = ValidateEmail('<span class="notok"></span> Please enter email in correct format (joe@email.com)<br/>', '<span class="notok"></span> Please enter email in correct format (joe@email.com)<br/>', '#ApplicationEmail', $('#ApplicationEmail').val());
        error = SchoolName + SchoolTelephone + SchoolWebsite + SchoolAddress + SchoolCity + SchoolState + SchoolZip + DirectorFirstName + AdministratorEmail + JobTitle + PrimaryNumber;//DirectorLastName //_DateofNameChange ++ _ContactEmail 
        //error = SchoolName + SchoolTelephone + SchoolWebsite + _DateofNameChange + SchoolAddress + SchoolCity + SchoolState + SchoolZip + DirectorFirstName + AdministratorEmail + JobTitle + PrimaryNumber;//DirectorLastName + _ContactEmail

        $('.errorinfo').html(error);

        if (error != '') {
            $('#error_validation').show();
            $(document).scrollTop(0);
            return false;
        }
        else {
            return true;
        }

    }

    function btnSchoolInfoPreviousAddNewSave() {
        $('.errorinfo').text('');
        var error = '';
        var SchoolName = ValidateTextbox('<span class="notok"></span> Please enter the school name.<br/>', '#prevname', $('#prevname').val());
        var txtDateOfAddChange = CheckDate('<span class="notok"></span> Future dates are not accepted. <br/>', '<span class="notok"></span>  Please enter date in correct format (mm/dd/yyyy).<br/>', '#ContentPlaceHolder1_ucCertificationApplication1_txtDateOfAddChange', $('#ContentPlaceHolder1_ucCertificationApplication1_txtDateOfAddChange').val());
        error = SchoolName + txtDateOfAddChange;
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


});
