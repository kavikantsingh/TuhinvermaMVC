LAPP.controller('CurriculumController', ['$scope', '$rootScope', 'mySharedService', 'CurriculumFactory', '$window', '$timeout', function ($scope, $rootScope, mySharedService, CurriculumFactory, $window, $timeout) {
    $scope.hasShow = 'false';

    $('#divAddCourseReq').hide();
    $('#upProgHrWrkSheet').hide();

    $scope.ShowPopup = function (id) {
        if (id == 1) {
            $scope.clearRelatedAddress();
            $('#divAddCourseReq').show();
        }
    }

    $scope.$on('handleBroadcastForTab', function () {

        $scope.ProviderId = mySharedService.message;
        $scope.applicationid = mySharedService.Applicationid;

        if (mySharedService.CurrentPage == 'Curriculum') {
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
    $scope.CurriculumSubGrid = {
        columnDefs: [
            { headerName: "", hide: true, width: 250, field: "ProvReqCourseTitleId", },
            { headerName: "", hide: true, width: 250, field: "ProvReqCourseofStudyId", },
            { headerName: "", hide: true, width: 250, field: "ApplicationId", },
            { headerName: "", hide: true, width: 250, field: "ProviderId", },
            { headerName: "Course Title", width: 280, field: "CourseTitleName", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "	No. of Hours", width: 280, field: "CourseHours", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
              {
                  headerName: "Action", width: 100, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
                      return "<a data-ng-click=\"showUpdatevalueOther('" + params.data.ProvReqCourseofStudyId + "','" + params.data.ProvReqCourseTitleId + "','" + params.data.CourseTitleName + "','" + params.data.CourseHours + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a> | </span><a data-ng-click=\"Delete('" + params.data.ProvReqCourseofStudyId + "','" + params.data.ProvReqCourseTitleId + "','" + params.data.CourseTitleName + "','" + params.data.CourseHours + "')\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
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

        }
    };




    $scope.getallthestaffinfo = function () {

        CurriculumFactory.ProvClinicHoursGetByProviderId(key, $scope.applicationid, $scope.ProviderId).success(function (data) {
            $scope.ProvClinicHoursId = data.ProvClinicHours.ProvClinicHoursId;
            $scope.viewProvClinicHours = parseInt(data.ProvClinicHours.ClinicHours);
        }).error(function (error) {
            $scope.Error = error;
        });
    }


    var json = [{ Id: 1, name: 'Anatomy & Physiology', value: '64' }, { Id: 2, name: 'Contraindications', value: '13' }, { Id: 3, name: 'Health & Hygiene', value: '5' }, { Id: 4, name: 'Business & Ethics', value: '18' }];

    $scope.CurriculumGrid = {
        columnDefs: [
            { headerName: "", hide: true, width: 250, field: "Id", },
            { headerName: "Required Course of Study", width: 200, field: "name", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "	Minimum Required Course Hours", width: 220, field: "value", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            {
                headerName: "Action", width: 180, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
                    return "<span class='fltrt AfterApproved'><a style='text-decoration:underline' data-ng-click=\"showUpdateRelatedProgram('" + params.data.Id + "','" + params.data.value + "')\" href=\"javascript:;\">Courses that Fulfill Requirements </a></span>";
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
            $scope.CurriculumGrid.api.setRowData(json);
        }
    };

    $scope.ProvReqCourseTitleId = 0;
    $scope.ProvReqCourseofStudyId = 0;
    $scope.ProvValue = 0;
    $scope.CourseTitleName = '';
    $scope.CourseHours = 0;
    $scope.currentval = 0;
    $scope.ProvClinicHoursId = 0;
    $scope.viewProvClinicHours = '';

    $scope.showUpdateRelatedProgram = function (id, val) {
        $('#upProgHrWrkSheet').show();
        $scope.ProvValue = val;
        $scope.ProvReqCourseofStudyId = id;
        CurriculumFactory.ProvReqCourseTitleGetAllByCourseOfStudyId(key, id, $scope.ProviderId, $scope.applicationid).success(function (data) {
            HideLoader();
            $scope.CurriculumSubGrid.api.setRowData(data.ProvReqCourseTitle);
            $scope.CurriculumSubGrid.rowData = data.ProvReqCourseTitle;
        }).error(function (error) {
            $scope.Error = error;
        });
    }


    $scope.clearRelatedAddress = function () {
        $('#divAddCourseReq').hide();
        $scope.ProvReqCourseTitleId = 0;
        $scope.CourseTitleName = '';
        $scope.CourseHours = 0;
        $scope.ListOfProviderStaffDetails = {};
        $scope.currentval = 0;
    }


    $scope.showUpdatevalueOther = function (pid, id, name, val) {
        $scope.clearRelatedAddress();
        $('#divAddCourseReq').show();
        $scope.ProvReqCourseTitleId = id;
        $scope.ProvReqCourseofStudyId = pid;
        $scope.CourseTitleName = name;
        $scope.CourseHours = val;
        $scope.currentval = angular.copy(val);
    }

    $scope.Delete = function (pid, id, name, val) {
        $scope.ListOfProviderStaffDetails = {};
        $scope.ListOfProviderStaffDetails.IsActive = 0;
        $scope.ListOfProviderStaffDetails.IsDeleted = 1;
        $scope.ListOfProviderStaffDetails.ProviderId = $scope.ProviderId;
        $scope.ListOfProviderStaffDetails.ApplicationId = $scope.applicationid;

        $scope.ListOfProviderStaffDetails.ProvReqCourseofStudyId = pid;
        $scope.ListOfProviderStaffDetails.ProvReqCourseTitleId = id;
        $scope.ListOfProviderStaffDetails.CourseTitleName = name;
        $scope.ListOfProviderStaffDetails.CourseHours = val;
        CurriculumFactory.ProvReqCourseTitleDelete(key, $scope.ListOfProviderStaffDetails).success(function (data) {
            $scope.ProgramOtherName = '';

        }).error(function (error) {
            $scope.Error = error;
        });
    }

    //Adding SaveProviderOtherProgram 
    $scope.SaveProviderOtherProgram = function () {
        //  ShowLoader();
        var total = 0;
        for (var i = 0; i < $scope.CurriculumSubGrid.rowData.length; i++) {
            total = parseInt($scope.CurriculumSubGrid.rowData[0].CourseHours);
        }
        total -= $scope.currentval;
        total += parseInt($scope.CourseHours);
        if (total > $scope.ProvValue) {
            alert('Exceed maximum hours');
        }
        else {

            $scope.ListOfProviderStaffDetails = {};
            $scope.ListOfProviderStaffDetails.IsActive = 1;
            $scope.ListOfProviderStaffDetails.IsDeleted = 0;
            $scope.ListOfProviderStaffDetails.ProviderId = $scope.ProviderId;
            $scope.ListOfProviderStaffDetails.ApplicationId = $scope.applicationid;
            $scope.ListOfProviderStaffDetails.ProvReqCourseofStudyId = $scope.ProvReqCourseofStudyId;
            $scope.ListOfProviderStaffDetails.CourseofStudyId = $scope.CourseofStudyId;
            $scope.ListOfProviderStaffDetails.ProvReqCourseTitleId = $scope.ProvReqCourseTitleId;
            $scope.ListOfProviderStaffDetails.CourseTitleName = $scope.CourseTitleName;
            $scope.ListOfProviderStaffDetails.CourseHours = $scope.CourseHours;

            CurriculumFactory.ProvReqCourseTitle(key, $scope.ListOfProviderStaffDetails).success(function (data) {
                $scope.clearRelatedAddress();

            }).error(function (error) {
                $scope.Error = error;
            });
        }
    }


    $scope.Savefinal = function () {
        //  ShowLoader();
        $scope.ListOfProviderStaffDetails = {};
        $scope.ListOfProviderStaffDetails.IsActive = 1;
        $scope.ListOfProviderStaffDetails.IsDeleted = 0;
        $scope.ListOfProviderStaffDetails.ProviderId = $scope.ProviderId;
        $scope.ListOfProviderStaffDetails.ApplicationId = $scope.applicationid;
        $scope.ListOfProviderStaffDetails.ProvClinicHoursId = $scope.ProvClinicHoursId;
        $scope.ListOfProviderStaffDetails.ClinicHours = $scope.viewProvClinicHours;

        CurriculumFactory.ProvClinicHours(key, $scope.ListOfProviderStaffDetails).success(function (data) {
            $scope.ProgramOtherName = '';

        }).error(function (error) {
            $scope.Error = error;
        });

    }

}]);