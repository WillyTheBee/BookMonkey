bmApp.controller('ProductDetailsCtrl', function ($scope, $location, $routeParams, ProductDataService) {
    console.log("Product Detail Ctrl meldet sich")

    // dieser Service enthält die Daten die wir in app.js in den Routen definiert haben.
    var id = $routeParams.id;

    // holen des Product Objektes für die Detailansicht
    $scope.product = ProductDataService.getProductById(id);

    $scope.goToListView = function () {
        // location Service um mit der Adresszeile des Browsers zu interagieren
        $location.path("/products")
    }
});