LAPP.controller('EnrollmentController', ['$scope', '$rootScope', 'mySharedService', 'SchoolInfoFactory', '$window', '$timeout', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window, $timeout) {


    $scope.$on('handleBroadcastForTab', function () {
        $scope.ProviderId = mySharedService.message;
        $scope.ProviderName = mySharedService.message1;
        if (mySharedService.CurrentPage == 'Enrollment') {
            $scope.hasShow = 'true';
        }
        else
            $scope.hasShow = 'false';
    });

}]);