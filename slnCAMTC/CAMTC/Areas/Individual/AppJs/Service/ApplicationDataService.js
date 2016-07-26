﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  var ApplicationDataService;

  ApplicationDataService = function($http, $q, $rootScope, ObjectTemplateFactory) {
    var vm;
    vm = this;
    vm.baseUrl = "http://ws.camtc.inlumon.com/api";
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
          var address, _i, _len, _ref, _results;
          console.log("Address", response.data);
          if (response.data.IndividualAddressResponse.length > 0) {
            _ref = response.data.IndividualAddressResponse;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              address = _ref[_i];
              if (address.AddressTypeId === 2) {
                _results.push(factory.Applicant.HomeAddress = address);
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          } else {
            factory.Applicant.HomeAddress = angular.copy(ObjectTemplateFactory.address.newAddress);
            return factory.Applicant.HomeAddress.AddressTypeId = 2;
          }
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
      },
      address: {
        get: {
          allByIndividualId: function(ind_id) {
            return $http.get(vm.baseUrl + "/Individual/IndividualAddressBYIndividualId/" + vm.key + "?IndividualId=" + ind_id);
          },
          byId: function(addressId) {
            return console.log(addressId);
          }
        },
        save: {
          individualAddress: function(newAddress) {
            return $http.post(vm.baseUrl + "/Individual/IndividualAddressSave/" + vm.key, newAddress);
          }
        }
      }
    };
  };

  angular.module('IndividualApp').service("ApplicationDataService", ApplicationDataService);

  ApplicationDataService.$inject = ['$http', '$q', '$rootScope', 'ObjectTemplateFactory'];

}).call(this);
