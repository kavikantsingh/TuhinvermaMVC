GlobalObjectsService = ($http)->
    vm = @
    vm.baseUrl = "http://ws.camtc.inlumon.com/api"
    vm.key = if sessionStorage.Key? then sessionStorage.Key else ""
    
    vm.objects = {
        
        getAllCountries : ()->
            $http.get(vm.baseUrl + "/Country/CountryGetAll/" + vm.key)
    
        applicant : {
            fullName : {
                firstName : "NancyGlobal"
                middleName : "E"
                lastName : "Blachly"
            }
            
        }
    }
    #return @
    
angular.module('IndividualApp')
    .factory("GlobalObjectsService", GlobalObjectsService)
    GlobalObjectsService.$inject = ['$http']
    