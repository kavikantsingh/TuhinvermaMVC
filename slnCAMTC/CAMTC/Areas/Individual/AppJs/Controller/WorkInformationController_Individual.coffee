WorkInformationController = ($scope, GlobalDataFactory, ApplicationDataFactory)->
    vm = @
    vm.appData = ApplicationDataFactory
    
    vm.states = {
        AddingCurrentPlaceOfWork : no
        AddingProspectiveEmployer : no
        AddingPreviousWorkLocations : no
        AddingPreviousResidentialLocations : no
    }
    
    vm.save = ()->
        window.location.hash = "#" + "/history"
        IndividualSectionManager.changeSelection($("#liSection6"))
    return
    
angular
    .module('IndividualApp')
    .controller('workCtrl', WorkInformationController)
    
    WorkInformationController.$inject = ['$scope','GlobalObjectsFactory', 'ApplicationDataFactory']