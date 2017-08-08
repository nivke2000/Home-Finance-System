homeFinanceApp.controller("MainCtrl", function($scope, breadcrumbService) {
  
    //Creating the appropriate breadcrumb
    breadcrumbService.buildBreadcrumb(["main","income"]);
    $scope.breadcrumbArr = breadcrumbService.getTrail();

    //$location.path("/");
});