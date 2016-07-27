﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  var ObjectTemplateFactory;

  ObjectTemplateFactory = function() {
    var vm;
    vm = this;
    return vm.factory = {
      address: {
        newAddress: {
          "IndividualAddressId": 0,
          "IndividualId": 0,
          "AddressId": 0,
          "AddressTypeId": 0,
          "BeginDate": "",
          "EndDate": "",
          "IsMailingSameasPhysical": false,
          "IsActive": true,
          "IsDeleted": false,
          "AdressStatusId": 0,
          "ApplicationId": 0,
          "Addressee": "",
          "StreetLine1": "",
          "StreetLine2": "",
          "City": "",
          "StateCode": "",
          "Zip": "",
          "CountyId": 0,
          "CountryId": 235,
          "BadAddress": false
        }
      },
      contact: {
        newContact: {
          "IndividualContactId": 0,
          "IndividualId": 0,
          "ContactId": 0,
          "ContactTypeId": 0,
          "BeginDate": null,
          "EndDate": null,
          "IsPreferredContact": false,
          "IsMobile": false,
          "IsActive": true,
          "IsDeleted": false,
          "ContactFirstName": null,
          "ContactLastName": null,
          "ContactMiddleName": null,
          "Code": null,
          "ContactInfo": "",
          "DateContactValidated": null
        }
      }
    };
  };

  angular.module('IndividualApp').factory("ObjectTemplateFactory", ObjectTemplateFactory);

  ObjectTemplateFactory.$inject = [];

}).call(this);