﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  var MainController_Individual;

  MainController_Individual = function($scope, $http, GlobalObjectsFactory, ApplicationDataFactory, ApplicationDataService) {
    var vm;
    vm = this;
    vm.testValue = "My Main Test Value";
    vm.globals = GlobalObjectsFactory;
    vm.applicationData = ApplicationDataFactory;
    console.log(vm.applicationData);
    console.log(vm.globals.countries);
    vm.ApplicationModel = {};
    vm.verifyAddress = function(address, addressType) {
      return ApplicationDataService.address.verify(address).then(function(response) {
        if (response.data.Status) {
          response.data.AddressId = 0;
          return ApplicationDataFactory.Applicant[addressType] = response.data;
        }
      });
    };
    vm.useVerifiedAddress = function(source, destination) {
      destination.StreetLine1 = source.StreetLine1;
      destination.StreetLine2 = source.StreetLine2;
      destination.StateCode = source.StateCode;
      destination.City = source.City;
      destination.Zip = source.Zip;
      destination.UseVerifiedAddress = true;
      return delete source;;
    };
  };

  angular.module('IndividualApp').controller('mainCtrl', MainController_Individual);

  MainController_Individual.$inject = ['$scope', '$http', 'GlobalObjectsFactory', 'ApplicationDataFactory', 'ApplicationDataService'];

}).call(this);
