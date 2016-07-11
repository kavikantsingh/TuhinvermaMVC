LAPP.factory('ConfigurationFactory', function ($http, $q) {

    var configurationurl = BaseURL + '/Configuration';

    var ConfigurationFactory = {
        //schoolInfo
        GetDeficiencyTemplate: function (key) {
            return $http.get(configurationurl + '/GetDeficiencyTemplate/' + key);
        },
    };
    return ConfigurationFactory;
});