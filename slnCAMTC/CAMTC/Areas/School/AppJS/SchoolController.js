LAPP.controller('MainController', ['$scope', '$rootScope', 'mySharedService', 'SchoolInfoFactory', '$window', '$timeout', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window, $timeout) {
    mySharedService.ApplicationName = 'SchoolApp';
    $scope.Pagename = 'SchoolInfo';
    $scope.TabChangeClick = function (Pagename) {
        $scope.Pagename = Pagename;
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
        if (tabnumber == 2)
            $scope.TabChangeClick('SchoolInfo');
        else if (tabnumber == 3)
            $scope.TabChangeClick('Eligibility');
        //$scope.TabChangeClick('SchoolInfo');
        //$scope.GetProviderdataonchange('1163', '');
    };

    $timeout($scope.GetProviderdataonchange(), 1000);


}]);
