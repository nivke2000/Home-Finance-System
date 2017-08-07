homeFinanceApp.factory ("breadcrumbService", function () {
    var breadcrumbArr = [];

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
        getTrail: getTrail
    };
});