LAPP.factory('CurriculumFactory', function ($http, $q) {

    var providerurl = BaseURL + '/api/ProviderCurriculum';
    var LookupUrl = BaseURL + '/api/Lookup';

    var Factory = {

        ProvReqCourseOfStudyGetAll: function (key) {
            return $http.get(providerurl + '/ProvReqCourseOfStudyGetAll/?Key=' + key);
        },
        ProvReqCourseTitleGetAllByCourseOfStudyId: function (key, cid, providerid, appid) {
            return $http.get(providerurl + '/ProvReqCourseTitleGetAllByCourseOfStudyId/?Key=' + key + '&CourseOfStudyId=' + cid + '&ProviderId=' + providerid + '&ApplicationId=' + appid);
        },

        ProvReqCourseTitleGetByCourseTitleId: function (key, ApplicationId, ProviderId) {
            return $http.get(providerurl + '/ProvReqCourseTitleGetByCourseTitleId/?Key=' + key + '&CourseTitleId=' + ApplicationId + '&ProviderId=' + ProviderId);
        },

        GetAllProviderStaffDetails: function (key, ApplicationId, ProviderId) {
            return $http.get(providerurl + '/GetAllProviderStaffDetails/?Key=' + key + '&ApplicationId=' + ApplicationId + '&ProviderId=' + ProviderId);
        },

        ProvClinicHoursGetByProviderId: function (key, ApplicationId, ProviderId) {
            return $http.get(providerurl + '/ProvClinicHoursGetByProviderId/?Key=' + key + '&ProviderId=' + ProviderId + '&ApplicationId=' + ApplicationId);
        },
        ProvReqCourseTitleEdit: function (key, obj) {
            return $http.post(providerurl + '/ProvReqCourseTitleEdit/' + key, obj);
        },
        ProvReqCourseTitleDelete: function (key, obj) {
            return $http.post(providerurl + '/ProvReqCourseTitleDelete/' + key, obj);
        },
        ProvReqCourseTitle: function (key, obj) {
            return $http.post(providerurl + '/ProvReqCourseTitle/' + key, obj);
        },
        ProvClinicHours: function (key, obj) {
            return $http.post(providerurl + '/ProvClinicHours/' + key, obj);
        },
    };
    return Factory;
});