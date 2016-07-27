LAPP.controller('MainController', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window, $timeout, _) {
    mySharedService.ApplicationName = 'SchoolApp';
    $scope.Pagename = 'Instructions';


    $scope.TabChangeClick = function (Pagename) {
        $scope.Pagename = Pagename;
        mySharedService.Pagename = Pagename;
        mySharedService.prepForBroadcastTabClick(Pagename);

    };

    $scope.$on('prepForBroadcastTabClick', function (Pagename) {
        $scope.Pagename = mySharedService.Pagename;
    });

    $scope.GetProviderdataonchange = function (name) {
        var providerid = $window.sessionStorage.getItem('School_ProviderId');
        mySharedService.Applicationid = $window.sessionStorage.getItem('School_ApplicationId');
        mySharedService.prepForBroadcast(providerid, name);
    };

    $scope.$on('handleBroadcast', function () {
        $scope.message = mySharedService.message;
        $scope.message1 = mySharedService.message1;
    });


    $scope.handleClick = function (tabnumber) {
        //    sharedService.prepForBroadcast(msg);
        if (tabnumber == 1)
            $scope.TabChangeClick('Instructions');
        else if (tabnumber == 2)
            $scope.TabChangeClick('SchoolInfo');
        else if (tabnumber == 3)
            $scope.TabChangeClick('Eligibility');
        else if (tabnumber == 4)
            $scope.TabChangeClick('About');
        else if (tabnumber == 5)
            $scope.TabChangeClick('Transcript');
        else if (tabnumber == 6)
            $scope.TabChangeClick('Enrollment');
        else if (tabnumber == 7)
            $scope.TabChangeClick('CourseCatalog');
        else if (tabnumber == 8)
            $scope.TabChangeClick('Curriculum');
        else if (tabnumber == 9)
            $scope.TabChangeClick('Staff');

    };


    $scope.GetProviderById = function () {

        SchoolInfoFactory.GetProviderById(key, $window.sessionStorage.getItem('School_ProviderId')).success(function (data) {

            mySharedService.message1 = data.ProviderResponse.ProviderName;
            $scope.GetProviderdataonchange(mySharedService.message1);

        }).error(function (error) {
            $scope.Error = error;
        });
    }
    $scope.GetProviderById();

    $rootScope.checked1 = false;
    $rootScope.checked2 = false;
    $rootScope.checked3 = false;
    $rootScope.checked4 = false;
    $rootScope.checked5 = false;
    $rootScope.checked6 = false;
    $rootScope.checked7 = false;
    $rootScope.checked8 = false;
    $rootScope.checked9 = false;


    //$scope.checked1 = $rootScope.checked1;
    //$scope.checked2 = $rootScope.checked2;
    //$scope.checked3 = $rootScope.checked3;
    //$scope.checked4 = $rootScope.checked4;
    //$scope.checked5 = $rootScope.checked5;
    //$scope.checked6 = $rootScope.checked6;
    //$scope.checked7 = $rootScope.checked7;
    //$scope.checked8 = $rootScope.checked8;
    //$scope.checked9 = $rootScope.checked9;

    $scope.GetTabStatus = function () {
        ShowLoader();
        SchoolInfoFactory.GetTabStatus(key, $window.sessionStorage.getItem('School_ApplicationId'), $window.sessionStorage.getItem('School_ProviderId')).success(function (data) {
            //data.ProviderTabStatusList;

            //"Course Catalog"
            //ApplicationTabStatus
            //TabName
            if (data.ProviderTabStatusList != null && data.ProviderTabStatusList.length > 0) {
                var result = _.where(data.ProviderTabStatusList, { TabName: 'Instructions' });
                if (result.length > 0) {
                    $rootScope.checked1 = true;
                    $rootScope.Instructions = true;
                }
                else {
                    $rootScope.Instructions = false;
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

                $scope.TabChangeClick('Instructions');
                HideLoader();
            }

        }).error(function (error) {
            $scope.Error = error;
        });
    }

    $scope.GetTabStatus();


});
