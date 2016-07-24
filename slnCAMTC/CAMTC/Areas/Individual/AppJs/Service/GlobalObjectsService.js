﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  var GlobalObjectsService;

  GlobalObjectsService = function($http) {
    var vm;
    vm = this;
    vm.baseUrl = "http://ws.camtc.inlumon.com/api";
    vm.key = sessionStorage.Key != null ? sessionStorage.Key : "";
    return vm.objects = {
      getAllCountries: function() {
        return $http.get(vm.baseUrl + "/Country/CountryGetAll/" + vm.key);
      },
      applicant: {
        fullName: {
          firstName: "NancyGlobal",
          middleName: "E",
          lastName: "Blachly"
        }
      }
    };
  };

  angular.module('IndividualApp').factory("GlobalObjectsService", GlobalObjectsService);

  GlobalObjectsService.$inject = ['$http'];

}).call(this);