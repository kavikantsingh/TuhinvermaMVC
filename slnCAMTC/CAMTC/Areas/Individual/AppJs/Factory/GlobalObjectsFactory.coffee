GlobalObjectsFactory = (GlobalObjectsService)->
    vm = @
    vm.objects = {
        
        countries : []
        
        getAllCountries : ()->
            if @countries.length > 0
                return @countries
            else
                GlobalObjectsService.getAllCountries()
                    .success (response)->
                        console.log response
                        vm.objects.countries = response.Country
                        return vm.objects.countries
                return
        getAllStatesByCountry : (country)->
            console.log country
        
            
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
    .factory("GlobalObjectsFactory", GlobalObjectsFactory)
    GlobalObjectsFactory.$inject = ['GlobalObjectsService']
    