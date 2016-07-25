﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  var ApplicationDataService;

  ApplicationDataService = function($http, $q, $rootScope) {
    var vm;
    vm = this;
    vm.baseUrl = "http://localhost:1530/api";
    vm.key = sessionStorage.Key != null ? sessionStorage.Key : "";
    vm.factory = {};
    return vm.service = {
      startUp: function(factory) {
        vm.factory = factory;
        vm.service.getIndividual(sessionStorage.IndividualId).then(function(response) {
          console.log("Individual", response.data);
          return factory.Individual = response.data;
        });
        vm.service.getIndividualName(sessionStorage.IndividualId).then(function(response) {
          return factory.IndividualName = response.data.IndividualNameResponse[0];
        });
        return vm.service.getIndividualAddress(sessionStorage.IndividualId).then(function(response) {
          console.log("Address", response.data);
          return factory.IndividualAddress = response.data.IndividualAddressResponse[0];
        });
      },
      getIndividualName: function(ind_id) {
        return $http.get(vm.baseUrl + "/Individual/IndividualNameBYIndividualId/" + vm.key + "?IndividualId=" + ind_id);
      },
      getIndividualAddress: function(ind_id) {
        return $http.get(vm.baseUrl + "/Individual/IndividualAddressBYIndividualId/" + vm.key + "?IndividualId=" + ind_id);
      },
      getIndividual: function(ind_id) {
        return $http.get(vm.baseUrl + "/Individual/IndividualBYIndividualId/" + vm.key + "?IndividualId=" + ind_id);
      }
    };
  };

  angular.module('IndividualApp').service("ApplicationDataService", ApplicationDataService);

  ApplicationDataService.$inject = ['$http', '$q', '$rootScope'];

}).call(this);
