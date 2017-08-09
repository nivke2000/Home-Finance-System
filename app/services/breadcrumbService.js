homeFinanceApp.factory ("breadcrumbService", function () {
    var breadcrumbArr = [];

    var data = {
        "main": {
            url: "app/main/main.html",
            uiString: "Main page"
        },
        "incomes": {
            url: "app/incomes/incomes.html",
            uiString: "Incomes"
        }
    };

    buildBreadcrumb = function (elementsArr) {
        breadcrumbArr= [];
        var a = 0;
        for (var index = 0; index < elementsArr.length; index++) {
            breadcrumbArr[index] = (data[elementsArr[index]]);
            
        }

        return breadcrumbArr;
    }

    addBreadcrumb = function (breadcrumbObj) {
        breadcrumbArr.push(breadcrumbObj);
    }

     clearAll = function () {
        breadcrumbArr= [];
    }

    getTrail = function () {
        return breadcrumbArr;
    }

    return {
        addBreadcrumb: addBreadcrumb,
        clearAll: clearAll,
        getTrail: getTrail,
        buildBreadcrumb: buildBreadcrumb
    };
});