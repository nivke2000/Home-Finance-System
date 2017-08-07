homeFinanceApp.controller("MainCtrl", function($scope, breadcrumbService) {
  
    breadcrumbService.clearAll();
    breadcrumbService.addBreadcrumb ({uiString: "Main page", url: "index.html"});
        
    $scope.breadcrumbArr = breadcrumbService.getTrail();
});