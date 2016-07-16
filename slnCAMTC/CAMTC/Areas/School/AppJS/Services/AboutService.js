LAPP.factory('AboutFactory', function ($http, $q) {

    var providerurl = BaseURL + '/api/Provider';
    var LookupUrl = BaseURL + '/api/Lookup';

    var ConfigurationFactory = {
        //schoolInfo
        GetAllProviderGraduatesNumber: function (key, ApplicationId, ProviderId) {
            return $http.get(providerurl + '/GetAllProviderGraduatesNumber/?Key=' + key + '&ApplicationId=' + ApplicationId + '&ProviderId=' + ProviderId);
        },
        LookupGetBYLookupTypeID: function (key, ApplicationId, ProviderId) {
            return $http.get(LookupUrl + '/LookupGetBYLookupTypeID/?Key=' + key + '&LookupTypeID=80');
        },
        GetProviderBusinessTypeByProviderId: function (key, ApplicationId, ProviderId) {
            return $http.get(providerurl + '/GetProviderBusinessTypeByProviderId/?Key=' + key + '&ApplicationId=' + ApplicationId + '&ProviderId=' + ProviderId);
        },
        SaveProviderOtherProgram: function (key, ObjProviderOtherProgram) {
            return $http.post(providerurl + '/SaveProviderOtherProgram/' + key, ObjProviderOtherProgram);
        },

        GetAllProviderOtherProgram: function (key, ApplicationId, ProviderId) {
            return $http.get(providerurl + '/GetAllProviderOtherProgram/?Key=' + key + '&ApplicationId=' + ApplicationId + '&ProviderId=' + ProviderId);
        },
        SaveProviderGraduatesNumber: function (key,obj) {
            return $http.post(providerurl + '/SaveProviderGraduatesNumber/' + key, obj);
        },
        SaveProviderBusinessType: function (key, obj) {
            return $http.post(providerurl + '/SaveProviderBusinessType/' + key, obj);
        },
        DeleteProviderRelatedSchools: function (key, obj) {
            return $http.post(providerurl + '/DeleteProviderRelatedSchools/' + key, obj);//{ Key: key, objAddress: AddressInfo }
        },     
        SaveProviderRelatedSchools: function (key, obj) {
            return $http.post(providerurl + '/SaveProviderRelatedSchools/' + key, obj);//{ Key: key, objAddress: AddressInfo }
        },
        GetAllProviderRelatedSchools: function (key, ApplicationId, ProviderId) {
            return $http.get(providerurl + '/GetAllProviderRelatedSchools/?Key=' + key + '&ApplicationId=' + ApplicationId + '&ProviderId=' + ProviderId);
        },
        

    };
    return ConfigurationFactory;
});