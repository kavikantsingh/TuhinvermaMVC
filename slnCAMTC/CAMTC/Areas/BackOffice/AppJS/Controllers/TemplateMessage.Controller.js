var contentApp = angular.module("contentApp", ['angularUtils.directives.dirPagination'])
//var BaseURL = 'http://localhost/LAPP.WS/api';
var BaseURL = 'http://ws.camtc.inlumon.com/api';

contentApp.controller('TemplateMessage', ['$scope', '$rootScope', 'TemplateMessageFactory', function ($scope, $rootScope, TemplateMessageFactory) {
    $scope.ddlApplicationType = [];
    $scope.TMSearch = {};
    $scope.TemplateMessageInfo = {};


    $scope.GetTemplateMessage = function (isSearch) {
        ShowLoader();
        if (isSearch && ($scope.TMSearch.ApplicationTypeId != "-1" || $("#txttempnameSearch").val() != "")) {
            if ($scope.TMSearch.ApplicationTypeId == "-1") {
                var objContent = {};
                objContent.tempName = $("#txttempnameSearch").val();
                TemplateMessageFactory.GetAllTemplatesGetByTemplateName(sessionStorage.BackOffice_Key, objContent).success(function (data) {
                    $scope.TemplateMessageList = data;
                    HideLoader();
                }).error(function (error) {
                    $scope.Error = error;
                    HideLoader();
                });
            }
            else if ($("#txttempnameSearch").val() == "") {
                var objContent = {};
                objContent.applicationTy = parseInt($scope.TMSearch.ApplicationTypeId);
                TemplateMessageFactory.GetAllTemplatesGetByAppTyId(sessionStorage.BackOffice_Key, objContent).success(function (data) {
                    $scope.TemplateMessageList = data;
                    HideLoader();
                }).error(function (error) {
                    $scope.Error = error;
                    HideLoader();
                });
            }
            else {
                var objContent = {};
                objContent.tempName = $("#txttempnameSearch").val();
                objContent.applicationTy = parseInt($scope.TMSearch.ApplicationTypeId);
                TemplateMessageFactory.GetAllTemplatesGetByAppTyIdTemplateName(sessionStorage.BackOffice_Key, objContent).success(function (data) {
                    $scope.TemplateMessageList = data;
                    HideLoader();
                }).error(function (error) {
                    $scope.Error = error;
                    HideLoader();
                });
            }
        }
        else {
            TemplateMessageFactory.GetAllTemplates(sessionStorage.BackOffice_Key).success(function (data) {
                $scope.TemplateMessageList = data;
                HideLoader();
            }).error(function (error) {
                $scope.Error = error;
                HideLoader();
            });
        }
    }

    $scope.ApplicationTypeGetAll = function () {
        ShowLoader();
        TemplateMessageFactory.ApplicationTypeGetAll(sessionStorage.BackOffice_Key).success(function (data) {
            $scope.ddlApplicationType = data.ApplicationTypeGetList;
            $scope.TMSearch.ApplicationTypeId = "-1";
            $scope.TemplateMessageInfo.ApplicationTypeId = "-1";
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
            HideLoader();
        });
    }


    $scope.GetTemplateMessage();

    $scope.ApplicationTypeGetAll();
    tinymce.init({ mode: 'textareas' });

    //$scope.SaveTemplateMessageAPI = function (TemplateId, ApplicationTypeId, TemplateName, TemplateSubject, TemplateMessage) {

    //    ShowLoader();

    //    var objContent = {};
    //    objContent.TemplateId = TemplateId;
    //    objContent.ApplicationTypeId = ApplicationTypeId;
    //    objContent.TemplateName = TemplateName;
    //    objContent.TemplateSubject = TemplateSubject;
    //    objContent.TemplateMessage = TemplateMessage;

    //    TemplateMessageFactory.SaveTemplateMessage(sessionStorage.BackOffice_Key, objContent)
    //                    .success(function (response) {
    //                        HideLoader();
    //                        $scope.DeficiencyTemplateList = response.DeficiencyTemplateResponseList;

    //                    })
    //                    .error(function (data) {
    //                        alert('Oops! Some Error Occurred.');
    //                        HideLoader();
    //                    });

    //}

    $scope.SaveTemplateMessage = function () {
        
        if (checkTMform()) {
            ShowLoader();
            $('#divAddAppReqPanel').hide();
            var objContent = {};
            objContent.TemplateId = 0;
            objContent.ApplicationTypeId = $scope.TemplateMessageInfo.ApplicationTypeId;
            objContent.TemplateName = $("#txtTempName").val();
            objContent.TemplateSubject = tinyMCE.get("txtsubject").getContent();
            objContent.TemplateMessage = tinyMCE.get("txtmsg").getContent();

            TemplateMessageFactory.CreateTemplate(sessionStorage.BackOffice_Key, objContent)
                            .success(function (response) {
                                HideLoader();
                                tinymce.remove('textarea');
                                tinymce.init({ selector: '#txtsubject' });
                                tinymce.init({ selector: '#txtmsg' });

                                $scope.GetTemplateMessage();

                            })
                            .error(function (data) {
                                alert('Oops! Some Error Occurred.');
                                HideLoader();
                            });
        }
    }

    $scope.TMEditStuff = function (id) {
        tinymce.init({ selector: '#txtsubject_' + id.m.TemplateId });
        tinymce.init({ selector: '#txtmsg_' + id.m.TemplateId });
        document.getElementById('TM_' + id.m.TemplateId).style.display = 'table-row';
        $('#ddlApplicationType_' + id.m.TemplateId).val(id.m.ApplicationTypeId);
    }

    $scope.TMhideStuff = function (id) {
        document.getElementById('TM_' + id.m.TemplateId).style.display = 'none';
    }

    $scope.TMdoStuff = function (id) {
        if (checkTMEditform(id.m.TemplateId)) {
            ShowLoader();

            var objContent = {};
            objContent.TemplateId = id.m.TemplateId;
            objContent.ApplicationTypeId = id.m.ApplicationTypeId;
            objContent.TemplateName = $('#txtTempName_' + id.m.TemplateId).val();
            objContent.TemplateSubject = tinyMCE.get('txtsubject_' + id.m.TemplateId).getContent();
            objContent.TemplateMessage = tinyMCE.get('txtmsg_' + id.m.TemplateId).getContent();

            TemplateMessageFactory.UpdateTemplate(sessionStorage.BackOffice_Key, objContent)
                            .success(function (response) {
                                HideLoader();
                                $scope.GetTemplateMessage();

                            })
                            .error(function (data) {
                                alert('Oops! Some Error Occurred.');
                                HideLoader();
                            });
            document.getElementById('TM_' + id.m.TemplateId).style.display = 'none';
        }
    };

    $scope.IsConfirm = false;
    $scope.TMDeleteStuff = function (id) {
        if ($scope.IsConfirm) {

            ShowLoader();

            var objContent = {};
            objContent.TemplateId = id.m.TemplateId;

            TemplateMessageFactory.DeleteTemplateById(sessionStorage.BackOffice_Key, objContent)
                            .success(function (response) {
                                HideLoader();
                                $scope.GetTemplateMessage();

                            })
                            .error(function (data) {
                                alert('Oops! Some Error Occurred.');
                                HideLoader();
                            });
            $scope.IsConfirm = false;
        }
        else {
            if (confirm('Are you sure you want to delete?')) {
                $scope.IsConfirm = true;
                $scope.TMDeleteStuff(id);
            }
        }
    };

}]);