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
        GetAllTemplatesGetByAppTyId: function (key, obj) {
            return $http.post(templateurl + '/GetAllTemplatesGetByAppTyId/' + key, obj);
        },
        GetAllTemplatesGetByTemplateName: function (key, obj) {
            return $http.post(templateurl + '/GetAllTemplatesGetByTemplateName/' + key, obj);
        },
        GetAllTemplatesGetByAppTyIdTemplateName: function (key, obj) {
            return $http.post(templateurl + '/GetAllTemplatesGetByAppTyIdTemplateName/' + key, obj);
        },
        CreateTemplate: function (key,obj) {
            return $http.post(templateurl + '/CreateTemplate/' + key,obj);
        },
        UpdateTemplate: function (key, obj) {
            return $http.post(templateurl + '/UpdateTemplate/' + key, obj);
        },
        DeleteTemplateById: function (key,id) {
            return $http.post(templateurl + '/DeleteTemplateById/' + key, id);
        },
    };
    return TemplateMessageFactory;
});