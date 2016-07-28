MainController_Individual = ($scope, $http, GlobalObjectsFactory, ApplicationDataFactory, ApplicationDataService)->
    vm = @
    vm.testValue = "My Main Test Value"
    vm.globals = GlobalObjectsFactory
    vm.applicationData = ApplicationDataFactory
    console.log vm.applicationData
    console.log vm.globals.countries
    vm.ApplicationModel = {}
    
    vm.verifyAddress = (address, addressType)->
        ApplicationDataService.address.verify(address)
            .then (response)->
                if response.data.Status
                    response.data.AddressId = 0
                    ApplicationDataFactory.Applicant[addressType] = response.data
                    
        
    vm.useVerifiedAddress = (source, destination)->
        destination.StreetLine1 = source.StreetLine1
        destination.StreetLine2 = source.StreetLine2
        destination.StateCode = source.StateCode
        destination.City = source.City
        destination.Zip = source.Zip
        destination.UseVerifiedAddress = yes
        `delete source;`
    return
    
angular
    .module('IndividualApp')
    .controller('mainCtrl', MainController_Individual)
    
    MainController_Individual.$inject = ['$scope', '$http', 'GlobalObjectsFactory', 'ApplicationDataFactory', 'ApplicationDataService']