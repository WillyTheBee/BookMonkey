bmApp.controller('ProductDetailsCtrl', function ($scope) {
    console.log("Product Detail Ctrl meldet sich")
    // initalisieren eines book objektes für die Detailsansicht
    $scope.product = {
        name: "headset",
        producttype: "ELECTRONICS",
        id: 1,
        property: "kabellos",
        price: 5
    };
});