LAPP.controller('DeficiencyTemplate', ['$scope', '$rootScope', 'mySharedService', 'ConfigurationFactory', function ($scope, $rootScope, mySharedService, ConfigurationFactory) {

    
    $scope.DeficiencyTemplateGrid = {
        columnDefs: [
            { headerName: "Transaction Type", width: 150, field: "Name", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Deficiency Template Name", width: 150, field: "Deficiency_Template_Name", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "End Date", width: 150, field: "End_Date", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Is Active", width: 150, field: "Is_Active", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            { headerName: "Deficiency Template ID #", width: 150, field: "Deficiency_Template_ID", visible: "false", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
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


    //get all providers
    $scope.GetDeficiencyTemplate = function () {

        ConfigurationFactory.GetDeficiencyTemplate(key).success(function (data) {
            $scope.DeficiencyTemplateGrid.api.setRowData(data.DeficiencyTemplateResponseList);

            if (data.DeficiencyTemplateResponseList.length > 0) {
                //mySharedService.prepForBroadcast(data.ProviderResponseList[0].ProviderId, data.ProviderResponseList[0].ProviderName);
            }

        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //get all providers

    $scope.GetDeficiencyTemplate();

}]);
