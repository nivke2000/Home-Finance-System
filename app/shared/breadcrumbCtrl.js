homeFinanceApp.controller("BreadcrumbCtrl", function($scope, breadcrumbService) {
  
    breadcrumbService.clearAll();
    breadcrumbService.addBreadcrumb ({uiString: "Home", url: "index.html"});
    breadcrumbService.addBreadcrumb ({uiString: "Landing", url: "landingPage.html"});
    
    $scope.breadcrumbArr = breadcrumbService.getTrail();
});