LAPP.factory('ConfigurationFactory', function ($http, $q) {

    var configurationurl = BaseURL + '/Configuration';

    var ConfigurationFactory = {
        //schoolInfo
        GetDeficiencyTemplate: function (key, deficiencyTemplateSearch) {
            return $http.post(configurationurl + '/GetDeficiencyTemplate/' + key, deficiencyTemplateSearch);
        },
        GetAllMasterTransaction: function (key) {
            return $http.get(configurationurl + '/GetAllMasterTransaction/' + key);
        },

    };
    return ConfigurationFactory;
});