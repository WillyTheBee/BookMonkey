bmApp.controller("ProductListCtrl", function ($scope) {
    console.log("Product List Ctrl meldet sich")

    $scope.products = [
        {
            name: "headset",
            producttype: "ELECTRONICS",
            id: 1,
            property: "kabellos",
            price: 5
        },

        {
            name: "HotDog",
            producttype: "FOOD",
            id: 2,
            property: "saftig",
            price: 1
        },

        {
            name: "Burger",
            producttype: "FOOD",
            id: 3,
            property: "trocken",
            price: 3
        },
    ];

    $scope.getProductOrder = function (product) {
        return product.name;
        // seite 113 / 124
    };
});