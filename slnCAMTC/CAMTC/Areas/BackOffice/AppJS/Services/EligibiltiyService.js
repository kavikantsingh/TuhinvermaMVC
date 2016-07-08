
LAPP.factory('EligiblitiyFactory', function ($http, $q) {

    var Eligiblityurl = BaseURL + '/Content';
    var Lookupurl = BaseURL + '/Lookup';

    var ProviderFactory = {

        LookupContentGetBYContentItemLkID: function (key, Id) {
            return $http.get(Eligiblityurl + '/LookupContentGetBYContentItemLkID/' + key + '/?ID=' + Id);
        },
        LookupGetBYLookupTypeID: function (key, Id) {
            return $http.get(Lookupurl + '/LookupGetBYLookupTypeID/' + key + '/?LookupTypeID=' + Id);// );
        },
        AddPreviousAddress: function (AddressInfo, key) {
            return $http.post(Eligiblityurl + '/SaveAddressRequestFromSchoolInformationTab/' + key, AddressInfo);//{ Key: key, objAddress: AddressInfo }
        },

        AddPreviousSchoolInSchoolInformation: function (PreviousScName, key) {
            return $http.post(Eligiblityurl + '/AddPreviousSchoolInSchoolInformation/' + key, PreviousScName);
        },
        SaveSchoolInformation: function (SchoolInfo, key) {
            return $http.post(Eligiblityurl + '/SaveSchoolInformation/' + key, SchoolInfo);
        },

        Get_All_providermblex: function (key, objAprovidermblex) {
            return $http.post(Eligiblityurl + '/GetAllProvidermblex/' + key, objAprovidermblex);
        },
        Save_providermblex: function (key, objAprovidermblex) {
            return $http.post(Eligiblityurl + '/SaveProvidermblex/' + key, objAprovidermblex);
        },
        DeletePreviousSchoolInSchoolInformation: function (AddressInfo, key) {
            return $http.post(Eligiblityurl + '/DeletePreviousSchoolInSchoolInformation/' + key, AddressInfo);//{ Key: key, objAddress: AddressInfo }
        },

        DeleteaddressRequestFromSchoolInformationTab: function (PreviousScName, key) {
            return $http.post(Eligiblityurl + '/DeleteaddressRequestFromSchoolInformationTab/' + key, PreviousScName);
        },
        Get_All_Providersitevisittype: function (key) {
            return $http.get(Eligiblityurl + '/Get_All_Providersitevisittype/' + key);
        },
        //schoolInfo




    };
    return ProviderFactory;
});
