LAPP.controller('InstructionsController', ['$scope', '$rootScope', 'mySharedService', 'SchoolInfoFactory', '$window', '$timeout', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window, $timeout) {
    $scope.hasShow = 'true';

    $scope.$on('handleBroadcastForTab', function () {
        $scope.ProviderId = mySharedService.message;
        $scope.ProviderName = mySharedService.message1;
        if (mySharedService.CurrentPage == 'Instructions') {
            $scope.hasShow = 'true';

        }
        else
            $scope.hasShow = 'false';
    });

}]);