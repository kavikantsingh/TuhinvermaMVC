reCertificationApp.factory('CertificationFactory', function ($http, $q) {

    var certificationUrl = BaseURL + 'api/Individual';
    var contentUrl = BaseURL + 'api/Content';
    var CertificationFactory = {
        Get_ContentGetAffidavitContent: function (key, contentItemLkId, code) {
            return $http.get(contentUrl + '/ContentGetAffidavitContent/' + key);
        },
        //Get_ContentItem_By_ContentItemLkId_AND_Code: function (key, contentItemLkId, code) {
        //    return $http.get(contentUrl + '/ContentGetBYContentItemLkIdAndCode/' + key + "?ContentItemLkId=" + contentItemLkId + "&ContentItemLkCode=" + code);
        //},
        Get_LicenseExpirationDate: function (key, individualId, referenceNumber, userId) {
            return $http.get(certificationUrl + '/ValidateIndividual/' + key + "?IndividualId=" + individualId + "&ReferenceNumber=" + referenceNumber + "&UserId=" + userId);
        },
        Get_ConfigurationSettingValue: function (key, setting) {
            return $http.get(certificationUrl + '/ConfigurationTypeBySetting/' + key + "?Setting=" + setting);
        },
        Get_CertificateHolderDetail: function (key, individualId, applicationId) {
            return $http.get(certificationUrl + '/LoadCertificateHolder/' + key + "?individualId=" + individualId + "&applicationId=" + applicationId);
        },
        Get_VerifiedAddress: function (key, address) {
            return $http.post(certificationUrl + '/VerifyAddress/' + key, address);
        },
        Save_CertificateHolderInfo: function (key, data) {
            return $http.post(certificationUrl + '/SaveReCertificationIndividualInfo/' + key,data);
        },
        Save_AffidavitInfo: function (key, data) {
            return $http.post(certificationUrl + '/SaveIndividualAffidavit/' + key,data);
    }
    };
    return CertificationFactory;
});