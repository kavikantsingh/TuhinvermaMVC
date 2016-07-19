contentApp.factory('ConfigurationFactory', function ($http, $q) {

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

        GetDeficiencyReason: function (key, deficiencyReasonSearch) {
            return $http.post(configurationurl + '/GetDeficiencyReason/' + key, deficiencyReasonSearch);
        },
        Get_All_LAPP_DeficiencyTemplate: function (key) {
            return $http.get(configurationurl + '/Get_All_LAPP_DeficiencyTemplate/' + key);
        },
        SaveDeficiencyReason: function (key, objContent) {
            return $http.post(configurationurl + '/SaveDeficiencyReason/' + key, objContent);
        },
    };
    return ConfigurationFactory;
});