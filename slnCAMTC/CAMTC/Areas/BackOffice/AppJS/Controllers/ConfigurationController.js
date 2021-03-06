﻿var contentApp = angular.module("contentApp", ['angularUtils.directives.dirPagination'])
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
    tinymce.init({ mode: 'textareas' });

    $scope.SaveDeficiencyTemplateAPI = function (Deficiency_Template_ID, Deficiency_Template_Name, Deficiency_Template_Message, Deficiency_Template_Subject, Is_Active, Master_Transaction_Id, IsDeleted) {

        ShowLoader();

        var objContent = {};
        objContent.Deficiency_Template_ID = Deficiency_Template_ID;
        objContent.Deficiency_Template_Name = Deficiency_Template_Name;
        objContent.Deficiency_Template_Message = Deficiency_Template_Message;
        objContent.Deficiency_Template_Subject = Deficiency_Template_Subject;
        objContent.Master_Transaction_Id = Master_Transaction_Id;
        objContent.Is_Active = Is_Active;
        objContent.Is_Deleted = IsDeleted;

        ConfigurationFactory.SaveDeficiencyTemplate(sessionStorage.BackOffice_Key, objContent)
                        .success(function (response) {


                            //alert(response.Message);
                            HideLoader();
                            tinymce.remove('textarea');
                            tinymce.init({ selector: '#txtsub' });
                            tinymce.init({ selector: '#txtmsg' });
                            $scope.DeficiencyTemplateList = response.DeficiencyTemplateResponseList;

                        })
                        .error(function (data) {
                            alert('Oops! Some Error Occurred.');
                            HideLoader();
                        });

    }

    $scope.SaveDeficiencyTemplate = function () {
       
        if (checkDTform()) {
         $('#divAddAppReqPanel').hide();
            $scope.SaveDeficiencyTemplateAPI(0, $("#txtName").val(), tinyMCE.get("txtmsg").getContent(), tinyMCE.get("txtsub").getContent(), $("chkIsActive1").is(":checked"), $scope.DeficiencyTemplateInfo.MasterTransactionId, false);
        }
    }

    $scope.EditStuff = function (id) {
        tinymce.init({ selector: '#txtsub_' + id.m.Deficiency_Template_ID });
        tinymce.init({ selector: '#txtmsg_' + id.m.Deficiency_Template_ID });
        document.getElementById('DT_' + id.m.Deficiency_Template_ID).style.display = 'table-row';
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
        document.getElementById('DT_' + id.m.Deficiency_Template_ID).style.display = 'none';
    }

    $scope.doStuff = function (id) {
        if (checkDTEditform(id.m.Deficiency_Template_ID)) {
            $scope.SaveDeficiencyTemplateAPI(id.m.Deficiency_Template_ID, $('#txtName_' + id.m.Deficiency_Template_ID).val(), tinyMCE.get('txtmsg_' + id.m.Deficiency_Template_ID).getContent(), tinyMCE.get('txtsub_' + id.m.Deficiency_Template_ID).getContent(), $('#txtIsActive_' + id.m.Deficiency_Template_ID).is(":checked"), $('#ddlMasterTransaction_' + id.m.Deficiency_Template_ID).val(), false);
            document.getElementById(id.m.Deficiency_Template_ID).style.display = 'none';
        }
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

contentApp.controller('DeficiencyReason', ['$scope', '$rootScope', 'ConfigurationFactory', function ($scope, $rootScope, ConfigurationFactory) {
    $scope.ddlMasterTransaction = [];
    $scope.DRSearch = {};
    $scope.DeficiencyReasonInfo = {};




    $scope.GetDeficiencyReason = function (isSearch) {
        ShowLoader();
        var deficiencyReasonSearch = {};
        if (isSearch)
            deficiencyReasonSearch.IsSearch = true;
        else
            deficiencyReasonSearch.IsSearch = false;
        deficiencyReasonSearch.ApplicationTypeId = $scope.DRSearch.sMasterTransactionId;
        deficiencyReasonSearch.DeficiencyReasonName = $scope.DRSearch.sDeficiencyTemplateName;
        deficiencyReasonSearch.IsActive = $scope.DRSearch.sIsActive;
        ConfigurationFactory.GetDeficiencyReason(sessionStorage.BackOffice_Key, deficiencyReasonSearch).success(function (data) {
            //$scope.DeficiencyTemplateGrid.api.setRowData(data.DeficiencyTemplateResponseList);
            $scope.DeficiencyReasonList = data.DeficiencyReasonResponseList;
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
            HideLoader();
        });
    }

    $scope.Get_All_LAPP_DeficiencyTemplate = function () {
        ShowLoader();
        ConfigurationFactory.Get_All_LAPP_DeficiencyTemplate(sessionStorage.BackOffice_Key).success(function (data) {
            $scope.ddlddldeftemp = data.DeficiencyTemplateResponseList;
            $scope.DeficiencyReasonInfo.Deficiency_Template_ID = "-1";
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
            $scope.DRSearch.sMasterTransactionId = "-1";
            $scope.DeficiencyReasonInfo.MasterTransactionId = "-1";
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
            HideLoader();
        });
    }


    $scope.GetDeficiencyReason();
    $scope.Get_All_LAPP_DeficiencyTemplate();
    $scope.GetAllMasterTransaction();
    tinymce.init({ mode: 'textareas' });

    $scope.SaveDeficiencyReasonAPI = function (Deficiency_ID, Deficiency_Name, Description, Is_Active, Application_Type_ID, Deficiency_Template_ID, Additional_Text, Is_Deleted) {

        ShowLoader();

        var objContent = {};
        objContent.Deficiency_ID = Deficiency_ID;
        objContent.Deficiency_Name = Deficiency_Name;
        objContent.Description = Description;
        objContent.Application_Type_ID = Application_Type_ID;
        objContent.Deficiency_Template_ID = Deficiency_Template_ID;
        objContent.Additional_Text = Additional_Text;
        objContent.Is_Active = Is_Active;
        objContent.Is_Deleted = Is_Deleted;

        ConfigurationFactory.SaveDeficiencyReason(sessionStorage.BackOffice_Key, objContent)
                        .success(function (response) {


                            //alert(response.Message);
                            HideLoader();
                            //$scope.GetDeficiencyTemplate();
                            tinymce.remove('textarea');
                            tinymce.init({ selector: '#DRtxtDesc' });
                            $scope.DeficiencyReasonList = response.DeficiencyReasonResponseList;
                        })
                        .error(function (data) {
                            alert('Oops! Some Error Occurred.');
                            HideLoader();
                        });

    }

    $scope.SaveDeficiencyReason = function () {
        
        if (checkDRform()) {
            $('#DRdivAddAppReqPanel').hide();
            $scope.SaveDeficiencyReasonAPI(0, $("#DRtxtName").val(), tinyMCE.get("DRtxtDesc").getContent(), $("#DRchkIsActive1").is(":checked"), $scope.DeficiencyReasonInfo.MasterTransactionId, $scope.DeficiencyReasonInfo.Deficiency_Template_ID, $("#DRchkadditional").is(":checked"), false);
        }
    }

    $scope.DREditStuff = function (id) {
        //var index = $(id).attr('class');
        tinymce.init({ selector: '#DRtxtmsg_' + id.m.Deficiency_ID });
        document.getElementById('DR_' + id.m.Deficiency_ID).style.display = 'table-row';
        $('#DRddlMasterTransaction_' + id.m.Deficiency_ID).val(id.m.Application_Type_ID);
        $('#DRddldeftempEdit_' + id.m.Deficiency_ID).val(id.m.Deficiency_Template_ID);
    }

    $scope.DRhideStuff = function (id) {
        //var val = $(id).attr('name');
        document.getElementById('DR_' + id.m.Deficiency_ID).style.display = 'none';
    }

    $scope.DRdoStuff = function (id) {
        if (checkDREditform(id.m.Deficiency_ID)) {
            $scope.SaveDeficiencyReasonAPI(id.m.Deficiency_ID, $('#DRtxtName_' + id.m.Deficiency_ID).val(), tinyMCE.get('DRtxtmsg_' + id.m.Deficiency_ID).getContent(), $('#DRtxtIsActive_' + id.m.Deficiency_ID).is(":checked"), id.m.Application_Type_ID, id.m.Deficiency_Template_ID, $('#DRchkadditionalEdit_' + id.m.Deficiency_ID).is(":checked"), false);
            document.getElementById(id.m.Deficiency_ID).style.display = 'none';
        }
    };
    $scope.DRDeleteStuff = function (id) {
        if ($scope.IsConfirm) {
            $scope.SaveDeficiencyReasonAPI(id.m.Deficiency_ID, id.m.Deficiency_Name, id.m.Description, id.m.Is_Active, id.m.Is_Active, id.m.Application_Type_ID, id.m.Deficiency_Template_ID, id.m.Additional_Text, true);
            $scope.IsConfirm = false;
        }
        else {
            if (confirm('Are you sure you want to delete?')) {
                $scope.IsConfirm = true;
                $scope.DRDeleteStuff(id);
            }
        }
    };

}]);

contentApp.controller('ApplicationConfiguration', ['$scope', '$rootScope', 'ConfigurationFactory', function ($scope, $rootScope, ConfigurationFactory) {
    $scope.ACSearch = {};
    $scope.ApplicationConfigurationInfo = {};


    $scope.GetApplicationConfiguration = function (isSearch) {
        ShowLoader();
        var applicationConfigurationSearch = {};
        if (isSearch)
            applicationConfigurationSearch.Setting = $scope.ACSearch.SettingName;
        else
            applicationConfigurationSearch.Setting = "";

        ConfigurationFactory.ConfigurationSearch(sessionStorage.BackOffice_Key, applicationConfigurationSearch).success(function (data) {
            $scope.ApplicationConfigurationList = data.Configuration;
            HideLoader();
        }).error(function (error) {
            $scope.Error = error;
            HideLoader();
        });
    }


    $scope.GetApplicationConfiguration();

    $scope.SaveApplicationConfigurationAPI = function (ConfigurationId, Value) {

        ShowLoader();

        var objContent = {};
        objContent.ConfigurationId = ConfigurationId;
        objContent.Value = Value;

        ConfigurationFactory.SaveApplicationConfiguration(sessionStorage.BackOffice_Key, objContent)
                        .success(function (response) {


                            //alert(response.Message);
                            HideLoader();
                            $scope.GetApplicationConfiguration();
                            //$scope.GetDeficiencyTemplate();
                            //$scope.DeficiencyTemplateList = response.DeficiencyTemplateResponseList;

                        })
                        .error(function (data) {
                            alert('Oops! Some Error Occurred.');
                            HideLoader();
                        });

    }

    $scope.ACEditStuff = function (id) {
        document.getElementById('AC_' + id.m.ConfigurationId).style.display = 'table-row';
    }

    $scope.AChideStuff = function (id) {
        //var val = $(id).attr('name');
        document.getElementById('AC_' + id.m.ConfigurationId).style.display = 'none';
    }

    $scope.ACdoStuff = function (id) {
        if (checkACEditform(id.m.ConfigurationId)) {
            $scope.SaveApplicationConfigurationAPI(id.m.ConfigurationId, $('#ACtxtValue_' + id.m.ConfigurationId).val());
            document.getElementById('AC_' + id.m.ConfigurationId).style.display = 'none';
        }
    };

}]);
