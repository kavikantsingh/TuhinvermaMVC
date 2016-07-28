LAPP.controller('MainController', function ($scope, $rootScope, mySharedService, SchoolInfoFactory, $window) {
    mySharedService.ApplicationName = 'BackOffice';
    $scope.Pagename = 'SchoolInfo';

    $scope.TabChangeClick = function (Pagename) {
        $scope.Pagename = Pagename;
        mySharedService.prepForBroadcastTabClick(Pagename);
    };

    $scope.$on('prepForBroadcastTabClick', function (Pagename) {
        $scope.Pagename = mySharedService.Pagename;
    });

    $scope.GetProviderdataonchange = function (msg, msg1) {
        mySharedService.prepForBroadcast(msg, msg1);
    };

    $scope.$on('handleBroadcast', function () {
        $scope.message = mySharedService.message;
        $scope.message1 = mySharedService.message1;
    });


    //left pane all provider list
    $scope.providerGrid = {
        columnDefs: [
            {
                headerName: "School Name", width: 130, field: "ProviderName", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' },
                cellRenderer: function (params) {
                    return "<a data-ng-click=\"GetProviderdataonchange('" + params.data.ProviderId + "','" + params.data.ProviderName + "')\" href=\"javascript:;\">" + params.data.ProviderName + "</a>";
                }
            },
            { headerName: "Id #", width: 90, field: "ProviderId", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' } },
            {
                headerName: "Status", width: 95, field: "Status", cellStyle: { 'text-align': 'center', 'display': 'flex', 'align-items': 'center' },
                cellRenderer: function (params) {
                    return "<a data-ng-click=\"GetProviderdataonchange('" + params.data.ProviderId + "','" + params.data.ProviderName + "')\" href=\"javascript:;\"><img src='\\Content/Public/images/edit.png' /></a><span ng-show=\"!IsReadOnly\">";

                    //if (params.data.IsActive == 'true')
                    //    datab +='<div class="statusicon" style="color:green;"></div>';
                    //else
                    //    datab += '<div class="statusicon" style="color:red;"></div>';

                    //return datab;
                }
            }
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
    $scope.GetAllProvider = function () {
        ShowLoader();
        var providerid = $window.sessionStorage.getItem('School_ProviderId');
        mySharedService.Applicationid = $window.sessionStorage.getItem('School_ApplicationId');

        mySharedService.prepForBroadcast(providerid, mySharedService.Applicationid);
        
        

        SchoolInfoFactory.GetAllProvider(key).success(function (data) {
            HideLoader();

            $scope.providerGrid.api.setRowData(data.ProviderResponseList);
            $scope.TabChangeClick('SchoolInfo');
            //if (data.ProviderResponseList.length > 0) {
            //    mySharedService.prepForBroadcast(data.ProviderResponseList[0].ProviderId, data.ProviderResponseList[0].ProviderName);
            //    $scope.TabChangeClick('SchoolInfo');
            //}

            //    $scope.ProviderId = data.ProviderResponseList[0].ProviderId;
            //    Provider.ProviderId = data.ProviderResponseList[0].ProviderId;
            //    $scope.ProviderName = data.ProviderResponseList[0].ProviderName;

            //    $scope.GetSchoolInfoByProviderId();
            //    $scope.clearPreviousAddress();
            //    $scope.clearsateliteAddress();
            //    $scope.Get_All_providermblex();
            //}


        }).error(function (error) {
            $scope.Error = error;
        });
    }
    //get all providers

    $scope.GetAllProvider();


});
