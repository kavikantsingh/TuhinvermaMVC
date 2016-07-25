var contentApp = angular.module("contentApp", ['angularUtils.directives.dirPagination'])
//var BaseURL = 'http://localhost/LAPP.WS/api';
var BaseURL = 'http://ws.camtc.inlumon.com/api';

contentApp.controller('TemplateMessage', ['$scope', '$rootScope', 'TemplateMessageFactory', function ($scope, $rootScope, TemplateMessageFactory) {
    $scope.ddlApplicationType = [];
    $scope.TMSearch = {};
    $scope.TemplateMessageInfo = {};


    $scope.GetTemplateMessage = function (isSearch) {
        ShowLoader();
        TemplateMessageFactory.GetAllTemplates(sessionStorage.BackOffice_Key).success(function (data) {
            //$scope.DeficiencyTemplateGrid.api.setRowData(data.DeficiencyTemplateResponseList);
            $scope.TemplateMessageList = data;
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
            HideLoader();
        });
    }

    $scope.ApplicationTypeGetAll = function () {
        ShowLoader();
        TemplateMessageFactory.ApplicationTypeGetAll(sessionStorage.BackOffice_Key).success(function (data) {
            $scope.ddlApplicationType = data.ApplicationTypeGetList;
            $scope.TMSearch.ApplicationTypeId = "-1";
            //$scope.DeficiencyTemplateInfo.MasterTransactionId = "-1";
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
            HideLoader();
        });
    }


    $scope.GetTemplateMessage();

    $scope.ApplicationTypeGetAll();

    //$scope.SaveDeficiencyTemplateAPI = function (Deficiency_Template_ID, Deficiency_Template_Name, Deficiency_Template_Message, Deficiency_Template_Subject, Is_Active, Master_Transaction_Id, IsDeleted) {

    //    ShowLoader();

    //    var objContent = {};
    //    objContent.Deficiency_Template_ID = Deficiency_Template_ID;
    //    objContent.Deficiency_Template_Name = Deficiency_Template_Name;
    //    objContent.Deficiency_Template_Message = Deficiency_Template_Message;
    //    objContent.Deficiency_Template_Subject = Deficiency_Template_Subject;
    //    objContent.Master_Transaction_Id = Master_Transaction_Id;
    //    objContent.Is_Active = Is_Active;
    //    objContent.Is_Deleted = IsDeleted;

    //    TemplateMessageFactory.SaveDeficiencyTemplate(sessionStorage.BackOffice_Key, objContent)
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
        $('#divAddAppReqPanel').hide();
        //if (checkDTform()) {
        //    $scope.SaveDeficiencyTemplateAPI(0, $("#txtName").val(), $("#txtmsg").val(), $("#txtsub").val(), $("chkIsActive1").is(":checked"), $scope.DeficiencyTemplateInfo.MasterTransactionId, false);
        //}
    }

    $scope.TMEditStuff = function (id) {
        //document.getElementById('DT_' + id.m.Deficiency_Template_ID).style.display = 'table-row';
        //$('#ddlMasterTransaction_' + id.m.Deficiency_Template_ID).val(id.m.Master_Transaction_Id);
    }

    $scope.TMhideStuff = function (id) {
        //document.getElementById('DT_' + id.m.Deficiency_Template_ID).style.display = 'none';
    }

    $scope.TMdoStuff = function (id) {

        //$scope.SaveDeficiencyTemplateAPI(id.m.Deficiency_Template_ID, $('#txtName_' + id.m.Deficiency_Template_ID).val(), $('#txtmsg_' + id.m.Deficiency_Template_ID).val(), $('#txtsub_' + id.m.Deficiency_Template_ID).val(), $('#txtIsActive_' + id.m.Deficiency_Template_ID).is(":checked"), $('#ddlMasterTransaction_' + id.m.Deficiency_Template_ID).val(), false);
        //document.getElementById(id.m.Deficiency_Template_ID).style.display = 'none';
    };
    $scope.IsConfirm = false;
    $scope.TMDeleteStuff = function (id) {
        //if ($scope.IsConfirm) {
        //    $scope.SaveDeficiencyTemplateAPI(id.m.Deficiency_Template_ID, id.m.Deficiency_Template_Name, id.m.Deficiency_Template_Message, id.m.Deficiency_Template_Subject, id.m.Is_Active, id.m.Master_Transaction_Id, true);
        //    $scope.IsConfirm = false;
        //}
        //else {
        //    if (confirm('Are you sure you want to delete?')) {
        //        $scope.IsConfirm = true;
        //        $scope.DeleteStuff(id);
        //    }
        //}
    };

}]);