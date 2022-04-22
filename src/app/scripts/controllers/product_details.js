bmApp.controller('ProductDetailsCtrl', function ($scope, $location, $routeParams, ProductDataService) {
    console.log("Product Detail Ctrl meldet sich")

    // dieser Service enthält die Daten die wir in app.js in den Routen definiert haben.
    $scope.id = $routeParams.id;

    // initalisieren eines book objektes für die Detailsansicht
    $scope.product = {
        name: "headset",
        producttype: "ELECTRONICS",
        id: 1,
        property: "kabellos",
        price: 5
    };

    $scope.goToListView = function () {
        // location Service um mit der Adresszeile des Browsers zu interagieren
        $location.path("/products")
    }
});