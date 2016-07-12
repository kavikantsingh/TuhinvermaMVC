// Creating a factory from the module
contentApp.factory('contentFactory', function ($http) {
    return {

        fillGrid: function (key, ContentLkToPageTabSectionId) {
            if (ContentLkToPageTabSectionId == '')
                return $http.get('http://ws.camtc.inlumon.com/api/Content/ContentItemLkGetAll/' + key);
            else
                return $http.get('http://ws.camtc.inlumon.com/api/Content/ContentGetBYContentLkToPageTabSectionId/' + key + '?ContentLkToPageTabSectionId=' + ContentLkToPageTabSectionId);
        },

        getAllPages: function (key) {
            return $http.get('http://ws.camtc.inlumon.com/api/Page/PageGetAllPageNames/' + key);
        },

        getAllTabsSubModule: function (key, PageModuleId) {
            return $http.get('http://ws.camtc.inlumon.com/api/Page/PageGetAllTabsByPageModuleId/' + key + '?PageModuleId=' + PageModuleId);
        },

        getAllTabSection: function (key, PageModuleTabSubModuleId) {
            return $http.get('http://ws.camtc.inlumon.com/api/Page/PageGetAllSectionsByTabId/' + key + '?PageModuleTabSubModuleId=' + PageModuleTabSubModuleId);
        },

        getAllContentType: function (key, PageModId, PageTabSecId, PageModTabSubModId) {
            return $http.get('http://ws.camtc.inlumon.com/api/Content/ContentGetContentTypeNameByPageTabSectionId/' + key + '?PageModId=' + PageModId + '&PageTabSecId=' + PageTabSecId + '&PageModTabSubModId=' + PageModTabSubModId);
        },

        updateContentById: function (key, obj) {
            return $http.post('http://ws.camtc.inlumon.com/api/Content/ContentUpdateContentInfo/' + key, obj);
        }

    }
})

