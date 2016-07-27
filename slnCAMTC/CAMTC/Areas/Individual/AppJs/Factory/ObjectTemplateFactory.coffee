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
        
        contact : {
            newContact : {
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
    
    }

angular.module('IndividualApp')
    .factory("ObjectTemplateFactory", ObjectTemplateFactory)
    ObjectTemplateFactory.$inject = []