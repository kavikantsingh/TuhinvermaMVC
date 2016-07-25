angular
    .module('IndividualApp')
    .run ($rootScope, $http, GlobalObjectsService, GlobalObjectsFactory, $q)->
        console.log "Running App"
        ShowLoader()
        GlobalObjectsService.getAllCountries()
            .then (response)->
                GlobalObjectsFactory.countries = response.data.Country
                console.log GlobalObjectsFactory
                return
        return