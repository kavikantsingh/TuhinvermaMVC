EducationController = ($scope, GlobalDataFactory, ApplicationDataFactory)->
    vm = @
    vm.appData = ApplicationDataFactory
    
    vm.states = {
        AddingApprovedSchool = no
        AddingNonApprovedSchool = no
        AddingSchoolOutsideCA = no
        AddingExams = no
    }
    vm.save = ()->
        window.location.hash = "#" + "/workinformation"
        IndividualSectionManager.changeSelection($("#liSection4"))
    return
    
angular
    .module('IndividualApp')
    .controller('educationCtrl', EducationController)
    
    EducationController.$inject = ['$scope','GlobalObjectsFactory', 'ApplicationDataFactory']