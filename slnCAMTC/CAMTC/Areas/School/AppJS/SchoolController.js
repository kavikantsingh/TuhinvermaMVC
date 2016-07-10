LAPP.controller('MainController', ['$scope', '$rootScope', 'mySharedService', 'SchoolInfoFactory', function ($scope, $rootScope, mySharedService, SchoolInfoFactory) {

    $scope.Pagename = 'SchoolInfo';
    $scope.TabChangeClick = function (Pagename) {
        $scope.Pagename = Pagename;
        mySharedService.prepForBroadcastTabClick(Pagename);
    };

    $scope.$on('prepForBroadcastTabClick', function (Pagename) {
        $scope.Pagename = mySharedService.Pagename;
    });

    $scope.GetProviderdataonchange = function (msg, msg1) {
        mySharedService.prepForBroadcast(msg, msg1);
    };

    $scope.$on('handleBroadcast', function () {
        $scope.message = mySharedService.message;
        $scope.message1 = mySharedService.message1;
    });

    //$scope.GetProviderdataonchange('1163', '');
    //$scope.TabChangeClick('SchoolInfo');


    $scope.handleClick = function () {
        //    sharedService.prepForBroadcast(msg);
        mySharedService.prepForBroadcast(1163, '');
        //$scope.TabChangeClick('SchoolInfo');
        //$scope.GetProviderdataonchange('1163', '');
    };

}]);
