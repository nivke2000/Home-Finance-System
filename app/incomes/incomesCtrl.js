homeFinanceApp.controller("IncomesCtrl", function($scope, breadcrumbService) {
  
    //Creating the appropriate breadcrumb
    breadcrumbService.buildBreadcrumb(["incomes", "main"]);
    $scope.breadcrumbArr = breadcrumbService.getTrail();
});