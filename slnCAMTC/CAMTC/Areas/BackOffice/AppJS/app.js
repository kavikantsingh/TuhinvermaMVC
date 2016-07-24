agGrid.initialiseAgGridWithAngular1(angular);
var LAPP = angular.module('LAPP', ['agGrid','checklist-model','ngSanitize']);

//Configuration
//var BaseURL = 'http://localhost:1530';
var BaseURL = 'http://ws.camtc.inlumon.com';

LAPP.factory('mySharedService', function ($rootScope) {
    var sharedService = {};

    sharedService.Applicationid = '';
    sharedService.message = '';
    sharedService.message1 = '';
    sharedService.CurrentPage = '';
    sharedService.ApplicationName = '';
    sharedService.prepForBroadcastTabClick = function (Pagename) {
        this.CurrentPage = Pagename;
        this.broadcastTabItem();
    };

    sharedService.prepForBroadcast = function (msg, msg1) {
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




LAPP.factory('_', ['$window', function ($window) {
    return $window._; // assumes underscore has already been loaded on the page
}]);
