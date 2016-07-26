IdentificationController = ($scope, GlobalDataFactory, ApplicationDataFactory)->
    vm = @
    vm.appData = ApplicationDataFactory
    
    vm.save = ()->
        window.location.hash = "#" + "/licensure"
        IndividualSectionManager.changeSelection($("#liSection3"))
    return
    
angular
    .module('IndividualApp')
    .controller('identificationCtrl', IdentificationController)
    
    IdentificationController.$inject = ['$scope','GlobalObjectsFactory', 'ApplicationDataFactory']