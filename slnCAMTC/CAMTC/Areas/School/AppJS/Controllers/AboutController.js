LAPP.controller('AboutController', ['$scope', '$rootScope', 'mySharedService', 'SchoolInfoFactory', '$window', '$timeout', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window, $timeout) {

    $scope.hasShow = 'false';
    $scope.$on('handleBroadcastForTab', function () {
        $scope.ProviderId = mySharedService.message;
        $scope.ProviderName = mySharedService.message1;
        if (mySharedService.CurrentPage == 'About') {
            $scope.hasShow = 'true';
        }
        else
            $scope.hasShow = 'false';
    });

    

}]);