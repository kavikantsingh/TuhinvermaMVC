var contentApp = angular.module("contentApp", ['angularUtils.directives.dirPagination'])

// Creating a controller from the module
contentApp.controller("contentController", function ($scope, contentFactory) {

    $scope.currentPage = 1;

    function GetAllPage() {
        contentFactory.getAllPages(sessionStorage.BackOffice_Key)

                        .success(function (response) {
                            if (response.StatusCode == 00) {
                                $scope.PageList = response.PageModule;
                            } else {
                                alert('else part of success');
                            }
                        })
                        .error(function (data) {
                            alert('error')
                        });
    }

    $scope.FillContentGrid = function () {

        ShowLoader();

        contentFactory.fillGrid(sessionStorage.BackOffice_Key, $("#ddlContentType").val())
                        .success(function (response) {
                            if (response.StatusCode == 00) {
                                $scope.ContentList = response.ContentItemLk;
                            } else {
                                alert('else part of success');
                            }
                            HideLoader();
                        })
                        .error(function (data) {
                            alert('error')
                            HideLoader();
                        });

    }

    // -- Functions to be called on page load -- //
    GetAllPage();

    $scope.FillContentGrid('');

    // -- Functions to be called on page load -- //

    $scope.GetAllTabsSubModule = function () {

        ShowLoader();

        contentFactory.getAllTabsSubModule(sessionStorage.BackOffice_Key, $("#ddlPage").val())

                        .success(function (response) {
                            if (response.StatusCode == 00) {
                                $scope.PageModuleTabsSubModuleList = response.PageModuleTabSubModule;
                            } else {
                                alert('else part of success');
                            }

                            HideLoader();
                        })
                        .error(function (data) {
                            alert('Oops! Some Error Occurred.')
                            HideLoader();
                        });
    }

    $scope.GetAllTabSection = function () {

        ShowLoader();

        contentFactory.getAllTabSection(sessionStorage.BackOffice_Key, $("#ddlPageModuleTabsSubModule").val())

                        .success(function (response) {
                            if (response.StatusCode == 00) {
                                $scope.PageTabSectionList = response.PageTabSection;
                            } else {
                                alert('else part of success');
                            }

                            HideLoader();
                        })
                        .error(function (data) {
                            alert('Oops! Some Error Occurred.');
                            HideLoader();
                        });
    }

    $scope.GetAllContentType = function () {

        ShowLoader();

        contentFactory.getAllContentType(sessionStorage.BackOffice_Key, $("#ddlPage").val(), $("#ddlPageModuleTabsSubModule").val(), $("#ddlPageTabSection").val())

                        .success(function (response) {
                            if (response.StatusCode == 00) {
                                $scope.ContentLkToPageTabSectionList = response.ContentLkToPageTabSection;
                            } else {
                                alert('else part of success');
                            }

                            HideLoader();
                        })
                        .error(function (data) {
                            alert('Oops! Some Error Occurred.');
                            HideLoader();
                        });

    }

    $scope.UpdateContentById = function (contentId, contentHash, contentDesc, startDate, endDate) {

        ShowLoader();

        var objContent = JSON.stringify({
            ContentItemLkId: contentId,
            ContentItemHash: contentHash,
            ContentItemLkDesc: contentDesc,
            EffectiveDate: startDate,
            EndDate: endDate
        });

        contentFactory.updateContentById(sessionStorage.BackOffice_Key, objContent)
                        .success(function (response) {

                            alert(response.Message);
                            HideLoader();

                        })
                        .error(function (data) {
                            alert('Oops! Some Error Occurred.');
                            HideLoader();
                        });

    }

});