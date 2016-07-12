﻿LAPP.controller('MainController', ['$scope', '$rootScope', 'mySharedService', 'SchoolInfoFactory', '$window', '$timeout', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window, $timeout) {
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

    $scope.GetProviderdataonchange = function () {
        var providerid = $window.sessionStorage.getItem('School_ProviderId');
        mySharedService.prepForBroadcast(providerid, '');
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

    $timeout($scope.GetProviderdataonchange(), 5000);


}]);