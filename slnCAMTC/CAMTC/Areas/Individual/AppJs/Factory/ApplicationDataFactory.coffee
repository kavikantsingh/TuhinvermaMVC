ApplicationDataFactory = (ApplicationDataService)->
    vm = @
    vm.baseUrl = ""
    vm.factory = {
        ReadInstruction : 0
        UnderstandQualification : 0
        
        Individual : {}
        IndividualName : {}
        Applicant : {
            HomeAddress : {}
        }
        
        Identification : {
            LicenseStateNotCA : no
            LicenseState : "CA"
            DriverLicenseNumber : "012211554"
            DriverLicenseExpiration : "12/20/2050"
            DateOfBirth : "08/27/1983"
            Gender : "M"
            Height : "5.7"
            Weight : "55"
            EyeColor : "Brown"
            HairColor : "Black"
            SSN : "232332323"
            Address : {
                Street1 : "Street1"
                Street2 : "Street 2"
                City : "City"
                State : "CA"
                Zip : "25454"
            }
            
            isUSCitizen : 1
            everChangedName : 0
            
            OtherNames : []
            
            PlaceOfBirth : {
                Country : "US"
                State : "CA"
                City : "TestCity"
            }
        } #Identification
        
        
        Licensure : {
            HaveLicense : 0
            Licenses : []
        } #Licensure 
        
        Education : {
            ApprovedSchools : []
            UnApprovedSchools : []
            SchoolsOutsideCA : []
            Exams : []
        }
        
        Work : {
            WorkingInField : 1
            EverWorkedInField : 1
            
            CurrentPalcesOfWork : []
            ProspectiveEmployers : []
            PreviousWorkLocations : []
            PreviousResidentialLocations : []
        }
        
        History : {
            EverReceivedCitation : 0
            EverRevokedOrSuspended : 0
            HaveComplaints : 0
            AwareOfAnyComplaints : 0
            Convicted : 0
            RegisteredAsSexOffender : 0
            OtherInformation : ""
        }
    }
angular.module('IndividualApp')
    .factory("ApplicationDataFactory", ApplicationDataFactory)
    ApplicationDataFactory.$inject = ['ApplicationDataService']