var contentApp = angular.module("contentApp", ['angularUtils.directives.dirPagination'])
//var BaseURL = 'http://localhost/LAPP.WS/api';
var BaseURL = 'http://ws.camtc.inlumon.com/api';

contentApp.controller('DeficiencyTemplate', ['$scope', '$rootScope', 'ConfigurationFactory', function ($scope, $rootScope, ConfigurationFactory) {
    $scope.ddlMasterTransaction = [];
    $scope.DTSearch = {};
    $scope.DeficiencyTemplateInfo = {};

    $scope.GetDeficiencyTemplate = function (isSearch) {
        ShowLoader();
        var deficiencyTemplateSearch = {};
        if (isSearch)
            deficiencyTemplateSearch.IsSearch = true;
        else
            deficiencyTemplateSearch.IsSearch = false;
        deficiencyTemplateSearch.MasterTransactionId = $scope.DTSearch.sMasterTransactionId;
        deficiencyTemplateSearch.DeficiencyTemplateName = $scope.DTSearch.sDeficiencyTemplateName;
        deficiencyTemplateSearch.IsActive = $scope.DTSearch.sIsActive;
        ConfigurationFactory.GetDeficiencyTemplate(sessionStorage.BackOffice_Key, deficiencyTemplateSearch).success(function (data) {
            //$scope.DeficiencyTemplateGrid.api.setRowData(data.DeficiencyTemplateResponseList);
            $scope.DeficiencyTemplateList = data.DeficiencyTemplateResponseList;
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
            HideLoader();
        });
    }

    $scope.GetAllMasterTransaction = function () {
        ShowLoader();
        ConfigurationFactory.GetAllMasterTransaction(sessionStorage.BackOffice_Key).success(function (data) {
            $scope.ddlMasterTransaction = data.MasterTransactionList;
            $scope.DTSearch.sMasterTransactionId = "-1";
            $scope.DeficiencyTemplateInfo.MasterTransactionId = "-1";
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
            HideLoader();
        });
    }


    $scope.GetDeficiencyTemplate();

    $scope.GetAllMasterTransaction();

    $scope.SaveDeficiencyTemplateAPI = function (Deficiency_Template_ID, Deficiency_Template_Name, Deficiency_Template_Message, Deficiency_Template_Subject, Is_Active, Master_Transaction_Id,IsDeleted) {

        ShowLoader();

        var objContent = {};
        objContent.Deficiency_Template_ID = Deficiency_Template_ID;
        objContent.Deficiency_Template_Name = Deficiency_Template_Name;
        objContent.Deficiency_Template_Message=Deficiency_Template_Message;
        objContent.Deficiency_Template_Subject=Deficiency_Template_Subject;
        objContent.Master_Transaction_Id=Master_Transaction_Id;
        objContent.Is_Active = Is_Active;
        objContent.Is_Deleted = IsDeleted;

        ConfigurationFactory.SaveDeficiencyTemplate(sessionStorage.BackOffice_Key, objContent)
                        .success(function (response) {


                            //alert(response.Message);
                            HideLoader();
                            //$scope.GetDeficiencyTemplate();
                            $scope.DeficiencyTemplateList = response.DeficiencyTemplateResponseList;

                        })
                        .error(function (data) {
                            alert('Oops! Some Error Occurred.');
                            HideLoader();
                        });

    }

    $scope.SaveDeficiencyTemplate = function () {
        $('#divAddAppReqPanel').hide();
        $scope.SaveDeficiencyTemplateAPI(0, $("#txtName").val(), $("#txtmsg").val(), $("#txtsub").val(), $("chkIsActive1").is(":checked"), $scope.DeficiencyTemplateInfo.MasterTransactionId,false);
    }

    $scope.EditStuff = function (id) {
        //var index = $(id).attr('class');
        document.getElementById(id.m.Deficiency_Template_ID).style.display = 'table-row';
        $('#ddlMasterTransaction_' + id.m.Deficiency_Template_ID).val(id.m.Master_Transaction_Id);

        //tinymce.init({ mode: 'textareas' });

        ////tinymce.init({ mode: 'textareas', elements: '#txtEditor_' + index });

        //$('#txtEffectiveDate_' + index).datepicker({
        //    inline: true,
        //    changeMonth: true,
        //    changeYear: true,
        //    yearRange: "2016:2030"
        //});
        //$('#txtEndDate_' + index).datepicker({
        //    inline: true,
        //    changeMonth: true,
        //    changeYear: true,
        //    yearRange: "2016:2030"
        //});

    }

    $scope.hideStuff = function (id) {
        //var val = $(id).attr('name');
        document.getElementById(id.m.Deficiency_Template_ID).style.display = 'none';
    }

    $scope.doStuff = function (id) {

        $scope.SaveDeficiencyTemplateAPI(id.m.Deficiency_Template_ID, $('#txtName_' + id.m.Deficiency_Template_ID).val(), $('#txtmsg_' + id.m.Deficiency_Template_ID).val(), $('#txtsub_' + id.m.Deficiency_Template_ID).val(), $('#txtIsActive_' + id.m.Deficiency_Template_ID).is(":checked"), $('#ddlMasterTransaction_' + id.m.Deficiency_Template_ID).val(),false);
        document.getElementById(id.m.Deficiency_Template_ID).style.display = 'none';
    };
    $scope.IsConfirm = false;
    $scope.DeleteStuff = function (id) {
        if ($scope.IsConfirm) {
            $scope.SaveDeficiencyTemplateAPI(id.m.Deficiency_Template_ID, id.m.Deficiency_Template_Name, id.m.Deficiency_Template_Message, id.m.Deficiency_Template_Subject, id.m.Is_Active, id.m.Master_Transaction_Id, true);
            $scope.IsConfirm = false;
        }
        else {
            if (confirm('Are you sure you want to delete?')) {
                $scope.IsConfirm = true;
                $scope.DeleteStuff(id);
            }
        }
    };

}]);
