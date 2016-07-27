LAPP.controller('InstructionsController', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window, $timeout) {
    $scope.hasShow = 'true';

    $scope.$on('handleBroadcastForTab', function () {
        $scope.ProviderId = mySharedService.message;
        $scope.applicationid = mySharedService.Applicationid;
        if (mySharedService.CurrentPage == 'Instructions') {
            $('.errorinfo').hide();
            $('.errorinfo').text('');

            $scope.hasShow = 'true';
            $scope.getalltheapi();
        }
        else
            $scope.hasShow = 'false';
    });


    $scope.$on('handleBroadcast', function () {
        $scope.ProviderId = mySharedService.message;
        $scope.ProviderName = mySharedService.message1;
        $scope.applicationid = mySharedService.Applicationid;
    });


    $scope.getalltheapi = function () {
        $scope.chk = $rootScope.Instructions;
        //var obj = {};
        //ShowLoader();
        //obj.ProviderInstructionsId = 0;
        //obj.ProviderId = $scope.ProviderId;
        //obj.ApplicationId = $scope.applicationid;
        //obj.ContentItemLkId = 0;
        //obj.ContentItemLkCode = 0;
        //obj.IsActive = true;
        //SchoolInfoFactory.CheckInitialTabStatus(key, obj).success(function (data) {
        //}).error(function (error) {
        //    HideLoader();
        //    $scope.Error = error;
        //});

    }


    $scope.Save_final = function () {
        ShowLoader();
        if ($scope.chk == true) {
            var obj = {};

            obj.ProviderInstructionsId = 0;
            obj.ProviderId = $scope.ProviderId;
            obj.ApplicationId = $scope.applicationid;
            obj.ContentItemLkId = 0;
            obj.ContentItemLkCode = 0;
            obj.IsActive = true;
            SchoolInfoFactory.SaveButtonOfInstructions(key, obj).success(function (data) {

                var obj = {};
                obj.ApplicationTabStatusId = 0;
                obj.ApplicationId = $scope.applicationid;
                obj.PageModuleId = 0;
                obj.PageModuleTabSubModuleId = 0;
                obj.PageTabSectionId = 0;
                obj.IndividualId = 0;
                obj.ProviderId = $scope.ProviderId;
                obj.TabName = 'Instructions'
                obj.ApplicationTabStatus = true;
                obj.IsActive = true;
                SchoolInfoFactory.SaveProviderTabStatus(key, obj).success(function (data) {
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

                        HideLoader();
                        mySharedService.prepForBroadcastTabClick('SchoolInfo');
                    }
                }).error(function (error) {
                    $scope.Error = error;
                });


            }).error(function (error) {
                $scope.Error = error;
            });

        }
        else {
            $('.errorinfo').html('Please ensure have you read policies');
            $('.errorinfo').show();
            $(document).scrollTop(0);
            HideLoader();
        }

    }

});