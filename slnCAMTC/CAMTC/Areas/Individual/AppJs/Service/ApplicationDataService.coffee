ApplicationDataService = ($http,$q, $rootScope)->
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
                    factory.IndividualAddress = response.data.IndividualAddressResponse[0]
            
        getIndividualName : (ind_id)->
            $http.get(vm.baseUrl + "/Individual/IndividualNameBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
        
        getIndividualAddress : (ind_id)->
            $http.get(vm.baseUrl + "/Individual/IndividualAddressBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
            
        getIndividual : (ind_id)->
            $http.get(vm.baseUrl + "/Individual/IndividualBYIndividualId/" + vm.key + "?IndividualId=" + ind_id )
            
            
    }
angular.module('IndividualApp')
    .service("ApplicationDataService", ApplicationDataService)
    ApplicationDataService.$inject = ['$http', '$q', '$rootScope']