ApplicantController_Individual = ($scope, $http, GlobalObjectsFactory, ApplicationDataFactory, ApplicationDataService)->
    vm = @
    vm.globals = GlobalObjectsFactory
    vm.appData = ApplicationDataFactory
    
    vm.states = {
        addOtherName : no
        mailingAddressSameAsHome : no
    }
    
    #console.log vm.globals
    #console.log ApplicationDataFactory
    vm.fullName = {}
    
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
    
    vm.mailingAddressSameAsHome = "false"
    
    vm.phoneNumberTemplate = {
        number : ""
        isMobile : no
    }
    
    vm.primaryPhone = angular.copy(vm.phoneNumberTemplate)
    vm.secondaryPhone = angular.copy(vm.phoneNumberTemplate)
    
    vm.primaryPhone.isMobile = yes
    
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
        home = vm.appData.Applicant.HomeAddress
        home.BeginDate = new Date()
        home.EndDate = new Date()
        home.IndividualId = parseInt(sessionStorage.IndividualId)
        home.AddressTypeId = 2
        home.AddressStatusId = 9
        #if home.AddressId not 0
        ApplicationDataService.address.save.individualAddress(home)
            .then (response)->
                console.log response , "Saved Home Address"
        
        ApplicationDataService.contact.save(vm.appData.Applicant.PrimaryPhone)
            .then (response)->
                console.log response, "Saved Primary Phone"
        
        if vm.appData.Applicant.SecondaryPhone.ContactInfo != ""
            ApplicationDataService.contact.save(vm.appData.Applicant.SecondaryPhone)
                .then (response)->
                    console.log response, "Saved Secondary Phone"
        
        if vm.appData.Applicant.PrimaryEmail.ContactInfo != ""
            ApplicationDataService.contact.save(vm.appData.Applicant.PrimaryEmail)
                .then (response)->
                    console.log response, "Saved Primary Email"
        
        if vm.appData.Applicant.SecondaryEmail.ContactInfo != ""        
            ApplicationDataService.contact.save(vm.appData.Applicant.SecondaryEmail)
                .then (response)->
                    console.log response, "Saved Secondary Email"
        if vm.appData.Applicant.Website.ContactInfo != ""        
            ApplicationDataService.contact.save(vm.appData.Applicant.Website)
                .then (response)->
                    console.log response, "Saved Website"
                    
        window.location.hash = "#" + "/identification"
        IndividualSectionManager.changeSelection($("#liSection2"))
    
    vm.thisObj = (obj, evt)->
        console.log evt
    return
    
angular
    .module('IndividualApp')
    .controller('applicantCtrl', ApplicantController_Individual)
    
    ApplicantController_Individual.$inject = ['$scope', '$http', 'GlobalObjectsFactory', 'ApplicationDataFactory', 'ApplicationDataService']