angular.module('IndividualApp', ['ngRoute'])
    .config ['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider)->
        #$locationProvider.hashPrefix('!')
        $("#menu-w-licensure li") .each ->
            
            $routeProvider.when $(this).data('hash'), {
                templateUrl: 'LoadSection/' + $(this).data('section'),
                controller: $(this).data('controller')
                reloadOnSearch : false
        }
        ]
        
    
