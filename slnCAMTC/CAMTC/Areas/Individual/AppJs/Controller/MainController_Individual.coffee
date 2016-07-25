MainController_Individual = ($scope, $http, GlobalObjectsFactory, ApplicationDataFactory)->
    vm = @
    vm.testValue = "My Main Test Value"
    vm.globals = GlobalObjectsFactory
    vm.applicationData = ApplicationDataFactory
    console.log vm.applicationData
    console.log vm.globals.countries
    vm.ApplicationModel = {}
    
    return
    
angular
    .module('IndividualApp')
    .controller('mainCtrl', MainController_Individual)
    
    MainController_Individual.$inject = ['$scope', '$http', 'GlobalObjectsFactory', 'ApplicationDataFactory']