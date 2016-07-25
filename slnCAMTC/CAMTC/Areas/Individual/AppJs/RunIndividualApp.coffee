angular
    .module('IndividualApp')
    .run ($rootScope, $http, GlobalObjectsService, GlobalObjectsFactory, ApplicationDataService, ApplicationDataFactory, $q)->
        console.log "Running App"
        ShowLoader()
        GlobalObjectsService.getAllCountries()
            .then (response)->
                GlobalObjectsFactory.countries = response.data.Country
                console.log GlobalObjectsFactory
                return
                
        ApplicationDataService.startUp(ApplicationDataFactory);
        
        return