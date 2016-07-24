InstructionController = ($scope)->
    vm = @
    vm.scope = $scope
    $(".testDiv").each (i, e)->
            e.modelValue = "Div " + i
    vm.myValue = "Test Value 1"
    @myfunction = (obj)->
        
        console.log obj
        #$scope.$apply()
        return
    @getValue = (obj)->
        console.log obj
        console.log vm.scope
    
    return
        
        
angular
    .module('IndividualApp')
    .controller('instructionCtrl', InstructionController)
    
    InstructionController.$inject = ['$scope']
    