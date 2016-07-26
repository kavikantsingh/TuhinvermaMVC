LicensureController = ($scope, GlobalDataFactory, ApplicationDataFactory)->
    vm = @
    vm.appData = ApplicationDataFactory
    
    vm.states = {
        addingNewLicense : no
        editingLicense : no
    }
    
    vm.save = ()->
        window.location.hash = "#" + "/education"
        IndividualSectionManager.changeSelection($("#liSection4"))
    return
        
angular
    .module('IndividualApp')
    .controller('licensureCtrl', LicensureController)
    
    LicensureController.$inject = ['$scope','GlobalObjectsFactory', 'ApplicationDataFactory']