angular
    .module('IndividualApp')
    .run ($rootScope, $http, GlobalObjectsService, GlobalObjectsFactory, ApplicationDataService, ApplicationDataFactory, ObjectTemplateFactory, $q)->
        console.log "Running App"
        ShowLoader()
        
        #listen on event for tab navigation
        $rootScope.$on '$routeChangeStart', (event, toState, toParams, fromState, fromParams)->
        #if (toState.resolve)
            console.log "Loading..."
            ShowLoader();
        $rootScope.$on '$routeChangeSuccess', (event, toState, toParams, fromState, fromParams)->
            #if (toState.resolve)
                console.log "Done Loading..."
                HideLoader();
        
        
        
        GlobalObjectsService.lookup.getAllLookupTypes()
            .then (response)->
                console.log response.data
                GlobalObjectsFactory.lookupTypes = response.data.LookupType
                
        GlobalObjectsService.lookup.getLookupByTypeId("35","HairColorTypes")
            .then (response)->
                console.log response.data
                GlobalObjectsFactory.hairColorTypes = response.data.Lookup
                
        GlobalObjectsService.lookup.getLookupByTypeId("36","EyeColorTypes")
            .then (response)->
                console.log response.data
                GlobalObjectsFactory.eyeColorTypes = response.data.Lookup
                
        GlobalObjectsService.lookup.getLookupByTypeId("37","GenderTypes")
            .then (response)->
                console.log response.data
                GlobalObjectsFactory.genderTypes = response.data.Lookup
        
        
        
        GlobalObjectsService.typevalues.get.addresTypes()
            .then (response)->
                console.log response.data
                GlobalObjectsFactory.addressTypes = response.data.AddressTypeGetList
                
        GlobalObjectsService.getAllCountries()
            .then (response)->
                GlobalObjectsFactory.countries = response.data.Country
                console.log GlobalObjectsFactory
                HideLoader()
                return
                
        ApplicationDataService.startUp(ApplicationDataFactory);
        
        return