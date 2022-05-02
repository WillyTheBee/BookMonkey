bmApp.controller('ProductDetailsCtrl', function ($scope, $location, $routeParams, ProductDataService) {
    console.log("Product Detail Ctrl meldet sich")

    // dieser Service enthält die Daten die wir in app.js in den Routen definiert haben.
    var id = $routeParams.id;

    // holen des Product Objektes für die Detailansicht
    ProductDataService.getProductById(id)
        .then(function (response) {
            $scope.product = response.data;
        })
        .catch(function (error) {
            console.error("ERROR product_details | getProductById: ", error);
        });

    $scope.goToListView = function () {
        // location Service um mit der Adresszeile des Browsers zu interagieren
        $location.path("/products")
    }
});