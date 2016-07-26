ObjectTemplateFactory = ()->
    vm = @
    
    vm.factory = {
    
        address : {
            newAddress : {
              "IndividualAddressId": 0
              "IndividualId": 0
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
              "BadAddress": false,
            } #new address
        } #address
    
    }

angular.module('IndividualApp')
    .factory("ObjectTemplateFactory", ObjectTemplateFactory)
    ObjectTemplateFactory.$inject = []