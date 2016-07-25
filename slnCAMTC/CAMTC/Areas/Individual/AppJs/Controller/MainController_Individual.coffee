MainController_Individual = ($scope, $http, GlobalObjectsFactory)->
    vm = @
    vm.testValue = "My Main Test Value"
    vm.globals = GlobalObjectsFactory
    
    console.log vm.globals.countries
    vm.ApplicationModel = {}
    
    return
    
angular
    .module('IndividualApp')
    .controller('mainCtrl', MainController_Individual)
    
    MainController_Individual.$inject = ['$scope', '$http', 'GlobalObjectsFactory']