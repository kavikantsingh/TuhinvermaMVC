ApplicationDataService = ($http,$q, $rootScope, ObjectTemplateFactory)->
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
                    console.log "Individual", response.data
                    factory.Individual = response.data
            vm.service.getIndividualName(sessionStorage.IndividualId)
                .then (response)->
                    factory.IndividualName = response.data.IndividualNameResponse[0]
            
            vm.service.getIndividualAddress(sessionStorage.IndividualId)
                .then (response)->
                    console.log "Address", response.data
                    if response.data.IndividualAddressResponse.length > 0
                        for address in response.data.IndividualAddressResponse
                            if address.AddressTypeId is 2
                                factory.Applicant.HomeAddress = address
                    else 
                        factory.Applicant.HomeAddress = angular.copy(ObjectTemplateFactory.address.newAddress)
                        factory.Applicant.HomeAddress.AddressTypeId = 2
                        
            
        getIndividualName : (ind_id)->
            $http.get(vm.baseUrl + "/Individual/IndividualNameBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
        
        getIndividualAddress : (ind_id)->
            $http.get(vm.baseUrl + "/Individual/IndividualAddressBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
            
        getIndividual : (ind_id)->
            $http.get(vm.baseUrl + "/Individual/IndividualBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
            
        address : {
            get : {
                allByIndividualId : (ind_id)->
                    $http.get(vm.baseUrl + "/Individual/IndividualAddressBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
                    
                byId : (addressId)->
                    console.log addressId
            }
            
            save : {
                individualAddress : (newAddress)->
                    $http.post(vm.baseUrl + "/Individual/IndividualAddressSave/" + vm.key , newAddress)
            }
        }    
    }
angular.module('IndividualApp')
    .service("ApplicationDataService", ApplicationDataService)
    ApplicationDataService.$inject = ['$http', '$q', '$rootScope', 'ObjectTemplateFactory']