LAPP.factory('StaffFactory', function ($http, $q) {

    var providerurl = BaseURL + '/api/Provider';
    var LookupUrl = BaseURL + '/api/Lookup';

    var StaffFactory = {
        //schoolInfo
        GetAllProviderStaffDetails: function (key, ApplicationId, ProviderId) {
            return $http.get(providerurl + '/GetAllProviderStaffDetails/?Key=' + key + '&ApplicationId=' + ApplicationId + '&ProviderId=' + ProviderId);
        },
        SaveProviderStaff: function (key, obj) {
            return $http.post(providerurl + '/SaveProviderStaff/' + key, obj);
        },
        DeleteProviderStaff: function (key, obj) {
            return $http.post(providerurl + '/DeleteProviderStaff/' + key, obj);
        },

    };
    return StaffFactory;
});