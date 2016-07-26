LAPP.controller('CourseCatalogController', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window, $timeout) {

    $scope.hasShow = 'false';

    $scope.$on('handleBroadcastForTab', function () {
        $scope.ProviderId = mySharedService.message;
        $scope.applicationid = mySharedService.Applicationid;
        if (mySharedService.CurrentPage == 'CourseCatalog') {
            $('.errorinfo').hide();
            $('.errorinfo').text('');

            $scope.hasShow = 'true';
            
        }
        else
            $scope.hasShow = 'false';
    });

    $scope.Save_final = function () {

        var isValid = false;
        var listresult = [];;
        $("#course .documentContainer").each(function () {
            if ($(this).data('isrequired')) {
                isValid = $(this).find("#" + this.id + "_docList tr").length > 1;
                listresult.push(isValid);
            }
        });

        var issuccess = false;
        for (var i = 0; i < listresult.length; i++) {
            if (listresult[i] == true) {
                issuccess = true;
            }
            else {
                issuccess = false;
                break;
            }
        }
        if (issuccess) {
            var obj = {};
            obj.ApplicationTabStatusId = 0;
            obj.ApplicationId = $scope.applicationid;
            obj.PageModuleId = 0;
            obj.PageModuleTabSubModuleId = 0;
            obj.PageTabSectionId = 0;
            obj.IndividualId = 0;
            obj.ProviderId = $scope.ProviderId;
            obj.TabName = 'Course Catalog'
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
                mySharedService.prepForBroadcastTabClick('Curriculum');
            }).error(function (error) {
                $scope.Error = error;
            });

        }
        else {

            $('.errorinfo').html('Please ensure all mandatory documents are uploaded');
            $('.errorinfo').show();
            $(document).scrollTop(0);
        }

    }


    $scope.$on('handleBroadcast', function () {
        $scope.ProviderId = mySharedService.message;
        $scope.ProviderName = mySharedService.message1;
        $scope.applicationid = mySharedService.Applicationid;
    });

});