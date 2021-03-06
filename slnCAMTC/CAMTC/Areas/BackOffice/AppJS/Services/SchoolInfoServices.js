﻿
LAPP.factory('SchoolInfoFactory', function ($http, $q) {

    var providerurl = BaseURL + '/api/Provider';
    var Stateurl = BaseURL + '/api/State';

    var ProviderFactory = {
        GetTabStatus: function (key, ApplicationId, ProviderId) {
            return $http.get(providerurl + '/GetAllProviderTabStatus/' + key + '?ApplicationId=' + ApplicationId + '&ProviderId=' + ProviderId);
        },

        //schoolInfo
        GetAllProvider: function (key) {
            return $http.get(providerurl + '/GetAllProvider/' + key);
        },

        GetProviderById: function (key, providerid) {
            return $http.get(providerurl + '/GetProviderById/' + key + '?providerid=' + providerid);
        },

        GetSchoolInfoByProviderId: function (Provider, key) {
            return $http.post(providerurl + '/GetAllSchoolInformationDetails/' + key, Provider);// );
        },
        AddPreviousAddress: function (AddressInfo, key) {
            return $http.post(providerurl + '/SaveAddressRequestFromSchoolInformationTab/' + key, AddressInfo);//{ Key: key, objAddress: AddressInfo }
        },

        AddPreviousSchoolInSchoolInformation: function (PreviousScName, key) {
            return $http.post(providerurl + '/AddPreviousSchoolInSchoolInformation/' + key, PreviousScName);
        },

        SaveSchoolInformation: function (SchoolInfo, key) {
            return $http.post(providerurl + '/SaveSchoolInformation/' + key, SchoolInfo);
        },

        GetAllStatebyCountryID: function (key, code) {
            return $http.get(Stateurl + '/StateGetByCountryID/' + key + '?CountryID=' + 235);
        },

        Get_All_providermblex: function (key, objAprovidermblex) {
            return $http.post(providerurl + '/GetAllProvidermblex/' + key, objAprovidermblex);
        },

        Save_providermblex: function (key, objAprovidermblex) {
            return $http.post(providerurl + '/SaveProvidermblex/' + key, objAprovidermblex);
        },

        DeletePreviousSchoolInSchoolInformation: function (AddressInfo, key) {
            return $http.post(providerurl + '/DeletePreviousSchoolInSchoolInformation/' + key, AddressInfo);//{ Key: key, objAddress: AddressInfo }
        },

        DeleteaddressRequestFromSchoolInformationTab: function (PreviousScName, key) {
            return $http.post(providerurl + '/DeleteaddressRequestFromSchoolInformationTab/' + key, PreviousScName);
        },
        Get_All_Providersitevisittype: function (key) {
            return $http.get(providerurl + '/Get_All_Providersitevisittype/' + key);
        },
        //schoolInfo
        SaveProviderTabStatus: function (key, objAprovidermblex) {
            return $http.post(providerurl + '/SaveProviderTabStatus/' + key, objAprovidermblex);
        },
        SaveProviderTabStatus: function (key, objAprovidermblex) {
            return $http.post(providerurl + '/SaveProviderTabStatus/' + key, objAprovidermblex);
        },
        SaveButtonOfInstructions: function (key, objAprovidermblex) {
            return $http.post(providerurl + '/SaveButtonOfInstructions/' + key, objAprovidermblex);
        },
        CheckInitialTabStatus: function (key, objAprovidermblex) {
            return $http.post(providerurl + '/CheckInitialTabActive/' + key, objAprovidermblex);
        },

        verifyaddress: function (data) {
            return $http.get('https://api.lob.com/v1/verify', data, auth = ('info@inlumon.com', '12345678'))
        },


    };
    return ProviderFactory;
});
