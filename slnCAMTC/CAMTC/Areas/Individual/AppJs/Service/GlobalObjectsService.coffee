GlobalObjectsService = ($http)->
    vm = @
    vm.baseUrl = "http://ws.camtc.inlumon.com/api"
    #vm.baseUrl = "http://localhost:1530/api"
    vm.key = if sessionStorage.Key? then sessionStorage.Key else ""
    vm.lookupUrl = "/lookup/"
    vm.typeValuesUrl = "/typevalues/"
    
    vm.objects = {
    
        lookup : {
            getAllLookupTypes : ()->
                $http.get(vm.baseUrl + vm.lookupUrl + "LookupTypeGetAll/" + vm.key)
            
            getLookupByTypeId : (typeId, name)->
                $http.get(vm.baseUrl + vm.lookupUrl + "LookupGetBYLookupTypeID/" + vm.key + "?LookupTypeID=" + typeId)
                
            
        }# lookup Methods
        
        typevalues : {
            get : {
                addresTypes : ()->
                    $http.get(vm.baseUrl + vm.typeValuesUrl + "AddressTypeGetAll/" + vm.key)
            }
        }
        
        
        getAllCountries : ()->
            $http.get(vm.baseUrl + "/Country/CountryGetAll/" + vm.key)
    }
    #return @
    
angular.module('IndividualApp')
    .service("GlobalObjectsService", GlobalObjectsService)
    GlobalObjectsService.$inject = ['$http']
    