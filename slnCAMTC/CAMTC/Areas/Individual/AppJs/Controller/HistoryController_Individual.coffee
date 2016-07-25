HistoryController = ($scope, GlobalDataFactory, ApplicationDataFactory)->
    vm = @
    vm.appData = ApplicationDataFactory
    
    vm.states = {
        
    }
    
    vm.save = ()->
        window.location.hash = "#" + "/affidavit"
        IndividualSectionManager.changeSelection($("#liSection7"))
    return
    
angular
    .module('IndividualApp')
    .controller('historyCtrl', HistoryController)
    
    HistoryController.$inject = ['$scope','GlobalObjectsFactory', 'ApplicationDataFactory']