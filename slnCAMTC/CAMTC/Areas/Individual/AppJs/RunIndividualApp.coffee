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
        
        
        lookupQ = []
        lookupQ.push GlobalObjectsService.lookup.getAllLookupTypes()
        lookupQ.push GlobalObjectsService.lookup.getLookupByTypeId("35","HairColorTypes")
        lookupQ.push GlobalObjectsService.lookup.getLookupByTypeId("36","EyeColorTypes")
        lookupQ.push GlobalObjectsService.lookup.getLookupByTypeId("37","GenderTypes")
        
        globalQ = []
                
        globalQ.push GlobalObjectsService.typevalues.get.addresTypes()
        globalQ.push GlobalObjectsService.getAllCountries()
        
        
        $q.all(lookupQ)
            .then (data)->
                console.log data
                GlobalObjectsFactory.lookupTypes = data[0].data.LookupType
                GlobalObjectsFactory.hairColorTypes = data[1].data.Lookup
                GlobalObjectsFactory.eyeColorTypes = data[2].data.Lookup
                GlobalObjectsFactory.genderTypes = data[3].data.Lookup
                
                $q.all(globalQ)
                    .then (data)->
                        #console.log response.data[0]
                        GlobalObjectsFactory.addressTypes = data[0].data.AddressTypeGetList
                        GlobalObjectsFactory.countries = data[1].data.Country
                        console.log GlobalObjectsFactory
                        ApplicationDataService.startUp(ApplicationDataFactory);
                        return
                
            
            
            
#        GlobalObjectsService.lookup.getAllLookupTypes()
#            .then (response)->
#                console.log response.data
#                GlobalObjectsFactory.lookupTypes = response.data.LookupType
#                
#        GlobalObjectsService.lookup.getLookupByTypeId("35","HairColorTypes")
#            .then (response)->
#                console.log response.data
#                GlobalObjectsFactory.hairColorTypes = response.data.Lookup
#                
#        GlobalObjectsService.lookup.getLookupByTypeId("36","EyeColorTypes")
#            .then (response)->
#                console.log response.data
#                GlobalObjectsFactory.eyeColorTypes = response.data.Lookup
#                
#        GlobalObjectsService.lookup.getLookupByTypeId("37","GenderTypes")
#            .then (response)->
#                console.log response.data
#                GlobalObjectsFactory.genderTypes = response.data.Lookup
        
        
        
        
                
        
        
        return