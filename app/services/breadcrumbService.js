homeFinanceApp.factory ("breadcrumbService", function () {
    var breadcrumbArr = [];

    var data = {
        "main": {
            url: "app/incomes/incomes.html",
            uiString: "Incomes"
        },
        "incomes": {
            url: "app/main/main.html",
            uiString: "Main page"
        }
    }

    buildBreadcrumb = function (elementsArr) {
        breadcrumbArr= [];
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