﻿contentApp.factory('ConfigurationFactory', function ($http, $q) {

    var configurationurl = BaseURL + '/Configuration';

    var ConfigurationFactory = {
        //schoolInfo
        GetDeficiencyTemplate: function (key, deficiencyTemplateSearch) {
            return $http.post(configurationurl + '/GetDeficiencyTemplate/' + key, deficiencyTemplateSearch);
        },
        GetAllMasterTransaction: function (key) {
            return $http.get(configurationurl + '/GetAllMasterTransaction/' + key);
        },
        SaveDeficiencyTemplate: function (key, objContent) {
            return $http.post(configurationurl + '/SaveDeficiencyTemplate/' + key, objContent);
        },
    };
    return ConfigurationFactory;
});