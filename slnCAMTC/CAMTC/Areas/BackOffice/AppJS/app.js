agGrid.initialiseAgGridWithAngular1(angular);
var LAPP = angular.module('LAPP', ['agGrid']);

//Configuration
var BaseURL = 'http://localhost:1530/api';


LAPP.factory('mySharedService', function ($rootScope) {
    var sharedService = {};

    sharedService.message = '';
    sharedService.message1 = '';
    sharedService.CurrentPage = '';

    sharedService.prepForBroadcastTabClick = function (Pagename) {
        this.CurrentPage = Pagename;
        this.broadcastTabItem();
    };

    sharedService.prepForBroadcast = function (msg, msg1) {
        alert('inn directive');
        this.message = msg;
        this.message1 = msg1;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function () {
        $rootScope.$broadcast('handleBroadcast');
    };

    sharedService.broadcastTabItem = function () {
        $rootScope.$broadcast('handleBroadcastForTab');
    };

    return sharedService;
});


