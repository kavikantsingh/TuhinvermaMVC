GlobalObjectsService = ($http)->
    vm = @
    vm.baseUrl = "http://ws.camtc.inlumon.com/api"
    #vm.baseUrl = "http://localhost:1530/api"
    vm.key = if sessionStorage.Key? then sessionStorage.Key else ""
    
    vm.objects = {
        getAllCountries : ()->
            $http.get(vm.baseUrl + "/Country/CountryGetAll/" + vm.key)
    }
    #return @
    
angular.module('IndividualApp')
    .service("GlobalObjectsService", GlobalObjectsService)
    GlobalObjectsService.$inject = ['$http']
    