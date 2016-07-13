
LAPP.factory('EligiblitiyFactory', function ($http, $q) {

    var Contenturl = BaseURL + '/api/Content';
    var Lookupurl = BaseURL + '/api/Lookup';
    var Eligiblityurl = BaseURL + '/api/Provider';

    var ProviderFactory = {

        LookupContentGetBYContentItemLkID: function (key, Id) {
            return $http.get(Contenturl + '/LookupContentGetBYContentItemLkID/' + key + '/?ID=' + Id);
        },
        LookupGetBYLookupTypeID: function (key, Id) {
            return $http.get(Lookupurl + '/LookupGetBYLookupTypeID/' + key + '/?LookupTypeID=' + Id);// );
        },
        GetAllProviderProgram: function (key, objProviderProgram) {
            return $http.post(Eligiblityurl + '/GetAllProviderProgram/' + key, objProviderProgram);
        },
        GetAllProviderApprovalAgency: function (key, AddressInfo) {
            return $http.post(Eligiblityurl + '/GetAllProviderApprovalAgency/' + key, AddressInfo);//{ Key: key, objAddress: AddressInfo }
        },

        Save_MassgeProgram: function (key, obj) {
            return $http.post(Eligiblityurl + '/SaveProviderProgram/' + key, obj);
        },

        Save_ApprovalAgency: function (key, SchoolInfo) {
            return $http.post(Eligiblityurl + '/SaveProviderApprovalAgency/' + key, SchoolInfo);
        },

        GetAllEligibilityDetails: function (key, objAprovidermblex) {
            return $http.post(Eligiblityurl + '/GetAllEligibilityDetails/' + key, objAprovidermblex);
        },
        SaveProviderEntityInformation: function (key, obj) {
            return $http.post(Eligiblityurl + '/SaveProviderEntityInformation/' + key, obj);
        },
        DeleteProviderApprovalAgency: function (key,obj) {
            return $http.post(Eligiblityurl + '/DeleteProviderApprovalAgency/' + key, obj);
        },

        DeleteProviderProgram: function ( key,obj) {
            return $http.post(Eligiblityurl + '/DeleteProviderProgram/' + key, obj);
        },
        

    };
    return ProviderFactory;
});
