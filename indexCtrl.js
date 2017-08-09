homeFinanceApp.controller("IndexCtrl", function($scope, breadcrumbService, $location) {
  
    
    //getting the url of the displayed page
    var absUrl = $location.absUrl();
    var absUrlElements = absUrl.split("/");
    var url = absUrlElements[(absUrlElements.length)-1];
    

    //Creating the appropriate breadcrumb
    switch (url) {
        case "main.html":
            breadcrumbService.buildBreadcrumb(["main"]);
            break;
        case "incomes.html":
            breadcrumbService.buildBreadcrumb(["incomes","main"]);
            break;
    }  
    $scope.breadcrumbArr = breadcrumbService.getTrail();
});