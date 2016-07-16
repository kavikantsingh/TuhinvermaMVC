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
        StaffFactory.GetAllProviderStaffDetails(key, $scope.applicationid, $scope.ProviderId).success(function (data) {
            HideLoader();
            $scope.StaffGrid.api.setRowData(data.ListOfProviderStaffDetails);

        }).error(function (error) {
            $scope.Error = error;
        });
    }



    $('#divAddRelatedschool').hide();

    $scope.ShowPopup = function (id) {
        if (id == 1) {
            $scope.clearRelatedAddress();
            $('#divAddRelatedschool').show();
        }
    }




    $scope.showUpdateRelatedProgram = function (ProviderIndvNameInfoId, ProviderStaffId, contactid, InduvidualNameId, posids, ids, titles, ProviderStaffFirstName, ProviderStaffLastName, ProviderStaffEmail, IsBackgroundCheckReq, CAMTCNumber) {
        $scope.clearRelatedAddress();
        $('#divAddRelatedschool').show();
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

        for (var i = 0; i < datasid.length; i++) {
            {
                if (datasid[i].trim() == '1') {
                    if ($scope.idlist.IsActive)
                        $scope.idlist.push('1')
                    $scope.roles[0].posid = datas[count].trim();
                    count++;
                }
                else if (datasid[i].trim() == '2') {
                    $scope.idlist.push('2')
                    $scope.roles[1].posid = datas[count].trim();
                    count++;
                }
                else if (datasid[i].trim() == '3') {
                    $scope.idlist.push('3')
                    $scope.roles[1].posid = datas[count].trim();
                    count++;
                }
            }

        }

    }

    $scope.DeleteRelatedProgram = function (ProviderStaffId, InduvidualNameId, posids, ids, titles, ProviderStaffFirstName, ProviderStaffLastName, ProviderStaffEmail, IsBackgroundCheckReq, CAMTCNumber) {

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
        $('#divAddRelatedschool').hide();
    }

    $scope.ProviderStaffId = 0;
    $scope.InduvidualNameId = 0;
    $scope.ContactId = 0;
    $scope.Chk = 'No';
    //Adding staffinfo
    $scope.SaveStaffInfo = function () {
        //  ShowLoader();
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
        $scope.staff.trues = '';

        var len = $scope.roles.length;

        if (len > 0) {
            for (var i = 0; i < len; i++) {
                $scope.staff.posids += $scope.roles[i].posid;

                var result = _.contains($scope.idlist, { 'Id': $scope.roles[j].Id });
                if (result) {
                    $scope.staff.ProvIndvNameTitlePositionId += $scope.idlist[i];
                    $scope.staff.ProvIndvNameTitlePosition += $scope.roles[i].Name;
                    $scope.staff.trues += 'Y';
                }
                else {
                    $scope.staff.ProvIndvNameTitlePositionId += 'N';
                    $scope.staff.ProvIndvNameTitlePosition += 'N';
                    $scope.staff.trues += 'N';
                }
                if ((len - 1) != i) {
                    $scope.staff.posids += ',';
                    $scope.staff.ProvIndvNameTitlePositionId += ',';
                    $scope.staff.ProvIndvNameTitlePosition += ',';
                    $scope.staff.trues += ',';
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
            $scope.getallthestaffinfo();
        }).error(function (error) {
            $scope.Error = error;
        });
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
                headerName: "Background Check Required", width: 125, field: "IsBackgroundCheckReq", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, cellRenderer: function (params) {
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
                      return "<a data-ng-click=\"showUpdateRelatedProgram('" + params.data.ProviderIndvNameInfoId + "','" + params.data.ProviderStaffId + "','" + params.data.ContactId + "','" + params.data.InduvidualNameId + "','" + params.data.posids + "','" + params.data.ids + "','" + params.data.titles + "','" + params.data.ProviderStaffFirstName + "','" + params.data.ProviderStaffLastName + "','" + params.data.ProviderStaffEmail + "','" + params.data.IsBackgroundCheckReq + "','" + params.data.CAMTCNumber + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a> | </span><a data-ng-click=\"DeleteaddressRequestFromSchoolInformationTab('" + params.data.AddressId + "',7)\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
                      //('" + params.data.ProviderStaffId + "','" + params.data.ContactId + "','" + params.data.InduvidualNameId + "','" + params.data.posids + "','" + params.data.ids + "','" + params.data.titles + "','" + params.data.ProviderStaffFirstName + "','" + params.data.ProviderStaffLastName + "','" + params.data.ProviderStaffEmail + "','" + params.data.IsBackgroundCheckReq + "','" + params.data.CAMTCNumber + "')
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
            //$scope.idlistGrid.api.sizeColumnsToFit();
        }
    };
});