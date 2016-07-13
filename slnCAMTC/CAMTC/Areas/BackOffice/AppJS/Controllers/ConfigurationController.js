LAPP.controller('DeficiencyTemplate', ['$scope', '$rootScope', 'mySharedService', 'ConfigurationFactory', function ($scope, $rootScope, mySharedService, ConfigurationFactory) {
    $scope.ddlMasterTransaction = [];
    $scope.DTSearch = {};
    $scope.DeficiencyTemplateInfo = {};


    $scope.DeficiencyTemplateGrid = {
        columnDefs: [
             { headerName: "Transaction Type", width: 250, field: "Name", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
             { headerName: "Deficiency Template Name", width: 250, field: "Deficiency_Template_Name", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
             { headerName: "End Date", width: 250, field: "End_Date", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
              {
                  headerName: "Is Active", width: 200, field: "Is_Active", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, cellRenderer: function (params) {
                      if (params.data.Is_Active)
                          return "<input type='checkbox' checked />";
                      else
                          return "<input type='checkbox' />";
                  }
              },
             {
                 headerName: "Action", width: 150, cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' }, field: "IsActive", cellRenderer: function (params) {
                     return "<a data-ng-click=\"UpdateDeficiencyTemplate('" + params.data.Deficiency_Template_ID + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a><span ng-show=\"!IsReadOnly\"> |</span><a data-ng-click=\"DeleteDeficiencyTemplate('" + params.data.Deficiency_Template_ID + "')\" href=\"javascript:;\"> <img src='\\Content/Public/images/delete.png' /></a>";
                 }
             },

        ],
        angularCompileRows: true,
        rowData: [],
        // enableFilter: true,
        rowHeight: 25,
        headerHeight: 30,
        // pinnedColumnCount: 1,
        enableColResize: true,
        suppressRowClickSelection: true,
        suppressHorizontalScroll: true,
        suppressCellSelection: true,
        onGridReady: function (event) {
            //$scope.providerGrid.api.sizeColumnsToFit();
        }
    };


    $scope.GetDeficiencyTemplate = function (isSearch) {
        var deficiencyTemplateSearch = {};
        if (isSearch)
            deficiencyTemplateSearch.IsSearch = true;
        else
            deficiencyTemplateSearch.IsSearch = false;
        deficiencyTemplateSearch.MasterTransactionId = $scope.DTSearch.sMasterTransactionId;
        deficiencyTemplateSearch.DeficiencyTemplateName = $scope.DTSearch.sDeficiencyTemplateName;
        deficiencyTemplateSearch.IsActive = $scope.DTSearch.sIsActive;
        ConfigurationFactory.GetDeficiencyTemplate(key, deficiencyTemplateSearch).success(function (data) {
            $scope.DeficiencyTemplateGrid.api.setRowData(data.DeficiencyTemplateResponseList);
        }).error(function (error) {
            $scope.Error = error;
        });
    }

    $scope.GetAllMasterTransaction = function () {

        ConfigurationFactory.GetAllMasterTransaction(key).success(function (data) {
            $scope.ddlMasterTransaction = data.MasterTransactionResponseList;
            $scope.DTSearch.sMasterTransactionId = "-1";
            $scope.DeficiencyTemplateInfo.MasterTransactionId = "-1";
        }).error(function (error) {
            $scope.Error = error;
        });
    }


    $scope.GetDeficiencyTemplate();

    $scope.GetAllMasterTransaction();

    $scope.UpdateDeficiencyTemplate = function (Deficiency_Template_ID) {
        alert(Deficiency_Template_ID);
    }
    $scope.DeleteDeficiencyTemplate = function (Deficiency_Template_ID) {
        alert(Deficiency_Template_ID);
    }
}]);
