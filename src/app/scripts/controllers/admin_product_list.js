bmApp.controller("AdminProductListCtrl", function($scope, $routeParams, ProductDataService){

    // diese Variable um elemente in der ProductList.html dynamisch Sichbar zu machen
    $scope.isAdmin = true;
    var type = $routeParams.type;

    ProductDataService.getProducts(type)
        .then(function (response) {
            $scope.products = response.data;
        })
        .catch(function (error) {
            console.error("ERROR admin_product_list | getProducts: ", error);
        });

    $scope.getProductOrder = function (product) {
        return product.name;
    };


});