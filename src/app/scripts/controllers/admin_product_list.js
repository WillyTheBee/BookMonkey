bmApp.controller("AdminProductListCtrl", function($scope, ProductDataService){

    // diese Variable um elemente in der ProductList.html dynamisch Sichbar zu machen
    $scope.isAdmin = true;

    $scope.products = ProductDataService.getProducts();

    $scope.getProductOrder = function (product) {
        return product.name;
    };


});