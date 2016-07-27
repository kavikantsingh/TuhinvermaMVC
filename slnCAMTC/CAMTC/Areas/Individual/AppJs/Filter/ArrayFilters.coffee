app = angular.module('IndividualApp')

app.filter 'contactByTypeId', ()->
    (input, id)->
        for item in input
            if item.ContactTypeId is id
                #console.log item
                return item
        null