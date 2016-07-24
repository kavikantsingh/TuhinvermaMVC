ApplicantController_Individual = ($scope, $http, GlobalObjectsFactory)->
    vm = @
    vm.globals = GlobalObjectsFactory
    vm.states = {
        addOtherName : no
        mailingAddressSameAsHome : no
    }
    console.log vm.globals
    
    vm.fullName = vm.globals.applicant.fullName
    
    vm.newOtherName = {
        firstName : ""
        middleName : ""
        lastName : ""
    }
    vm.otherNames = [
#        {
#            firstName : "FirstName"
#            middleName : "M"
#            lastName : "LastName"
#        }
    ]
    
    vm.fullNameTemplate = {
        firstName : ""
        middleName : ""
        lastName : ""
    }
    
    vm.addressTemplate = {
        street1 : ""
        street2 : ""
        city : ""
        state : ""
        zip : ""
    }
    
    
    vm.homeAddress = angular.copy(vm.addressTemplate)
    vm.homeAddress.street1 = "E-503, Gopalanand"
    vm.homeAddress.street2 = "Chandkheda"
    vm.homeAddress.city = "Ahmedabad"
    vm.homeAddress.state = "NJ"
    vm.homeAddress.zip = "38254"
    
    vm.mailingAddressSameAsHome = "false"
    
    vm.phoneNumberTemplate = {
        number : ""
        isMobile : no
    }
    
    vm.primaryPhone = angular.copy(vm.phoneNumberTemplate)
    vm.secondaryPhone = angular.copy(vm.phoneNumberTemplate)
    
    #vm.primaryPhone.isMobile = yes
    
    vm.primaryEmail = ""
    vm.secondaryEmail = ""
    
    vm.haveEmail = yes
    
    vm.haveWebsite = 0
    
    vm.website = "www.website.com"
    
    vm.saveOtherName = ()->
        console.log vm.newOtherName
        vm.otherNames.push(vm.newOtherName)
        vm.newOtherName = angular.copy(vm.fullNameTemplate)
    vm.saveApplicant = ()->
        #Validate Applicant Tab
        #If Success
        window.location.hash = "#" + "/identification"
        IndividualSectionManager.changeSelection($("#liSection2"))
    
    vm.thisObj = (obj, evt)->
        console.log evt
    return
    
angular
    .module('IndividualApp')
    .controller('applicantCtrl', ApplicantController_Individual)
    
    ApplicantController_Individual.$inject = ['$scope', '$http', 'GlobalObjectsFactory']