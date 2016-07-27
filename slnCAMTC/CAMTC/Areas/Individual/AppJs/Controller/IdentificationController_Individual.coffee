IdentificationController = ($scope, GlobalDataFactory, ApplicationDataFactory, ApplicationDataService)->
    vm = @
    vm.appData = ApplicationDataFactory
    vm.appService = ApplicationDataService
    vm.save = ()->
        vm.appService.individual.save(vm.appData.Individual)
            .then (response)->
                console.log response.data
        window.location.hash = "#" + "/licensure"
        IndividualSectionManager.changeSelection($("#liSection3"))
    return
    
angular
    .module('IndividualApp')
    .controller('identificationCtrl', IdentificationController)
    
    IdentificationController.$inject = ['$scope','GlobalObjectsFactory', 'ApplicationDataFactory', 'ApplicationDataService']