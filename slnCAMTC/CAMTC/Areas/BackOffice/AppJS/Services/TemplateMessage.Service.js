contentApp.factory('TemplateMessageFactory', function ($http, $q) {

    var templateurl = BaseURL + '/Template';
    var typevaluesurl = BaseURL + '/TypeValues';

    var TemplateMessageFactory = {
        //schoolInfo
        ApplicationTypeGetAll: function (key) {
            return $http.get(typevaluesurl + '/ApplicationTypeGetAll/' + key);
        },
        GetAllTemplates: function (key) {
            return $http.get(templateurl + '/GetAllTemplates/' + key);
        },
    };
    return TemplateMessageFactory;
});