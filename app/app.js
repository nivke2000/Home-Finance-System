var homeFinanceApp = angular.module("homeFinanceApp", ["ngRoute"])

    homeFinanceApp.config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/main/main.html",
                controller: "MainCtrl"
            })
            .when("/incomes", {
                templateUrl: "app/incomes/incomes.html",
                controller: "IncomesCtrl"
            });
    });
