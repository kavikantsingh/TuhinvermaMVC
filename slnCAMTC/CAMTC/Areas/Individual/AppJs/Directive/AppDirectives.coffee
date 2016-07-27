app = angular.module('IndividualApp')

app.directive 'convertToNumber', ()->
    {
        require: 'ngModel',
        link: (scope, element, attrs, ngModel)->
          ngModel.$parsers.push (val)->
            return parseInt(val, 10)
          
          ngModel.$formatters.push (val)-> 
            return '' + val
          
        
    }