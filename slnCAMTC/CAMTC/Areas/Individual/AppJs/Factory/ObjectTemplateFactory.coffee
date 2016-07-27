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
            }#new Contact
        }#contact
        
        individual : {
            newIndividual : {
              "IndividualId": 0,
              "FirstName": "",
              "MiddleName": "",
              "LastName": "",
              "SuffixId": null,
              "SSN": "",
              "IsItin": false,
              "DateOfBirth": "",
              "RaceId": 0,
              "Gender": "",
              "HairColorId": 0,
              "EyeColorId": 0,
              "Weight": 0,
              "Height": 0,
              "PlaceOfBirth": null,
              "CitizenshipId": 1029,
              "ExternalId": null,
              "ExternalId2": null,
              "IsArchived": false,
              "IsActive": true,
              "IsDeleted": false,
              "Email": "",
              "IsNameChanged": false,
              "PlaceofBirthCity": "",
              "PlaceofBirthState": "",
              "PlaceofBirthCountry": 0,
              "Picture": "",
              "Name": ""
              
            }#new Individual
        }#individual
    
    }

angular.module('IndividualApp')
    .factory("ObjectTemplateFactory", ObjectTemplateFactory)
    ObjectTemplateFactory.$inject = []