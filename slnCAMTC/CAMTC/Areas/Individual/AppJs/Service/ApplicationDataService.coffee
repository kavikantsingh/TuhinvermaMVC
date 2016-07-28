ApplicationDataService = ($http,$q, $rootScope, ObjectTemplateFactory, $filter)->
    vm = @
    vm.baseUrl = "http://ws.camtc.inlumon.com/api"
    #vm.baseUrl = "http://localhost:1530/api"
    vm.key = if sessionStorage.Key? then sessionStorage.Key else ""
    vm.factory = {}
    vm.service = {
        startUp : (factory)->
            vm.factory = factory
            vm.service.getIndividual(sessionStorage.IndividualId)
                .then (response)->
                    console.log "Individual", response.data.IndividualResponse
                    if response.data.IndividualResponse.length is 1
                        factory.Individual = response.data.IndividualResponse[0]
                    vm.service.getIndividualName(sessionStorage.IndividualId)
            .then (response)->
                factory.IndividualName = response.data.IndividualNameResponse[0]
                vm.service.getIndividualAddress(sessionStorage.IndividualId)
            
            .then (response)->
                HideLoader()
                console.log "Address", response.data
                if response.data.IndividualAddressResponse.length > 0
                    for address in response.data.IndividualAddressResponse
                        if address.AddressTypeId is 2
                            factory.Applicant.HomeAddress = address
                else 
                    factory.Applicant.HomeAddress = angular.copy(ObjectTemplateFactory.address.newAddress)
                    factory.Applicant.HomeAddress.AddressTypeId = 2
                        
                vm.service.contact.get.all(sessionStorage.IndividualId)
            .then (response)->
                console.log "Contacts", response.data
                primaryPhone = $filter('contactByTypeId')(response.data.IndividualContactResponse, 6)
                secPhone = $filter('contactByTypeId')(response.data.IndividualContactResponse, 7)
                    
                primaryEmail = $filter('contactByTypeId')(response.data.IndividualContactResponse, 18)
                secEmail = $filter('contactByTypeId')(response.data.IndividualContactResponse, 19)
                    
                website = $filter('contactByTypeId')(response.data.IndividualContactResponse, 17)
                    
                    
                if primaryPhone is null
                    factory.Applicant.PrimaryPhone = angular.copy(ObjectTemplateFactory.contact.newContact)
                    factory.Applicant.PrimaryPhone.ContactTypeId = 6
                    factory.Applicant.PrimaryPhone.ContactInfo = ""
                    factory.Applicant.PrimaryPhone.IndividualId = parseInt(sessionStorage.IndividualId)
                else 
                    primaryPhone.IsActive = yes
                    factory.Applicant.PrimaryPhone = primaryPhone
                    console.log primaryPhone
                    
                if secPhone is null
                    factory.Applicant.SecondaryPhone = angular.copy(ObjectTemplateFactory.contact.newContact)
                    factory.Applicant.SecondaryPhone.ContactTypeId = 7
                    factory.Applicant.SecondaryPhone.ContactInfo = ""
                    factory.Applicant.SecondaryPhone.IndividualId = parseInt(sessionStorage.IndividualId)
                else 
                    secPhone.IsActive = yes
                    factory.Applicant.SecondaryPhone = secPhone
                        
                        
                if primaryEmail is null
                    factory.Applicant.PrimaryEmail = angular.copy(ObjectTemplateFactory.contact.newContact)
                    factory.Applicant.PrimaryEmail.ContactTypeId = 18
                    factory.Applicant.PrimaryEmail.ContactInfo = ""
                    factory.Applicant.PrimaryEmail.IndividualId = parseInt(sessionStorage.IndividualId)
                else 
                    primaryEmail.IsActive = yes
                    factory.Applicant.PrimaryEmail = primaryEmail
                    #console.log primaryPhone
                        
                if secEmail is null
                    factory.Applicant.SecondaryEmail = angular.copy(ObjectTemplateFactory.contact.newContact)
                    factory.Applicant.SecondaryEmail.ContactTypeId = 19
                    factory.Applicant.SecondaryEmail.ContactInfo = ""
                    factory.Applicant.SecondaryEmail.IndividualId = parseInt(sessionStorage.IndividualId)
                else 
                    secEmail.IsActive = yes
                    factory.Applicant.SecondaryEmail = secEmail
                    #console.log primaryPhone
                        
                if website is null
                    factory.Applicant.Website = angular.copy(ObjectTemplateFactory.contact.newContact)
                    factory.Applicant.Website.ContactTypeId = 17
                    factory.Applicant.Website.ContactInfo = ""
                    factory.Applicant.Website.IndividualId = parseInt(sessionStorage.IndividualId)
                else 
                    website.IsActive = yes
                    factory.Applicant.Website = website
                    #console.log primaryPhone
                HideLoader()
                $rootScope.isMainLoading = false
                        
                    
                    
            
        getIndividualName : (ind_id)->
            $http.get(vm.baseUrl + "/Individual/IndividualNameBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
        
        getIndividualAddress : (ind_id)->
            $http.get(vm.baseUrl + "/Individual/IndividualAddressBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
            
        getIndividual : (ind_id)->
            $http.get(vm.baseUrl + "/Individual/IndividualOnlyBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
        
        individual : {
            save : (individual)->
                $http.post(vm.baseUrl + "/Individual/IndividualSave/" + vm.key , individual)
        }
        
        address : {
            get : {
                allByIndividualId : (ind_id)->
                    $http.get(vm.baseUrl + "/Individual/IndividualAddressBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
                    
                byId : (addressId)->
                    console.log addressId
            }
            
            verify : (address)->
                $http.post(vm.baseUrl + "/Individual/VerifyAddress/" + vm.key, address)
                
            save : {
                individualAddress : (newAddress)->
                    $http.post(vm.baseUrl + "/Individual/IndividualAddressSave/" + vm.key , newAddress)
            }
        }
        
        contact : {
            get : {
                all : (ind_id)->
                    $http.get(vm.baseUrl + "/Individual/IndividualContactBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
            }
            
            save : (contact)->
                $http.post(vm.baseUrl + "/Individual/IndividualContactSave/" + vm.key, contact)
        }    
    }
angular.module('IndividualApp')
    .service("ApplicationDataService", ApplicationDataService)
    ApplicationDataService.$inject = ['$http', '$q', '$rootScope', 'ObjectTemplateFactory', '$filter']