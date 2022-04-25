bmApp.factory("ProductDataService", function () {

    var srv = {};

    srv._products = [

        {
            name: "headset",
            producttype: "ELECTRONICS",
            id: 1,
            price: 5
        },
        {
            name: "HotDog",
            producttype: "FOOD",
            id: 2,
            price: 1
        },
        {
            name: "Burger",
            producttype: "FOOD",
            id: 3,
            price: 3
        },

    ];

    // Service Implementierung
    srv.getProductById = function (id) {
        for (var i = 0, n = srv._products.length; i < n; i++) {
            if (id === srv._products[i].id.toString()) {
                return angular.copy(srv._products[i]);
            }
        }
        return null;
    }

    srv.getProducts =  function () {
        // zurückgeben einer Kopie um die interne Datenstruktur nicht von außen manipulierbar zu machen
        return angular.copy(srv._products)
    }


    // public API, also die methoden auf die von Außerhalb zugegriffen werden kann
    return {
        getProductById: function (id) {
            return srv.getProductById(id);
        },
        getProducts: function () {
            return srv.getProducts();
        }
    };
})