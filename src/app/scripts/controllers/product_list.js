bmApp.controller("ProductListCtrl", function ($scope, $filter, ProductDataService) {
    console.log("Product List Ctrl meldet sich")

    $scope.products = ProductDataService.getProducts();

    $scope.getProductOrder = function (product) {
        return product.name;
    };


    /**
    // this is just to demonstate the programatic usage of a filter

    // um programmatisch sortieren zu können brauchen wir den $filter-service, den wir uns per Dependency injetion im Controller
    // aufruf übergeben lassen
    // mit diesem Aufruf holen wir uns eine Referenz auf die OrderBy funktion
    var orderBy = $filter('orderBy');

    var names = $scope.products.map(function (product) {
        return {name: product.name};
    });

    console.log("names before sorting", names)

    names = orderBy(names, "name");

    console.log("names after sorting", names)
    */
});