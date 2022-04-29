bmApp.factory("ProductDataService", function ($http) {

    var srv = {};

    srv._baseUrl = "http://localhost:80/products";

    // Service Implementierung
    srv.getProductById = function (id) {
        return $http.get(srv._baseUrl + "/get/" + id);
    };

    srv.getProducts =  function () {
        // zurückgeben einer Kopie um die interne Datenstruktur nicht von außen manipulierbar zu machen
        //return angular.copy(srv._products)
        return $http.get(srv._baseUrl + "/get");
    };

    srv.storeProduct = function (product) {
        //srv._products.push(product);
        return $http.post(srv._baseUrl + "/save", product);
    };

    // ueberscheibt ein Product, mit der Funktion angular.extend -> das erste argument wird mit dem 2. abgeglichen und ggf.
    // ueberschrieben
    srv.updateProduct = function (product) {
        console.log("update Product... with id " + product.id);
        //for (var i = 0; i < srv._products.length; i++) {
        //    if (srv._products[i].id === product.id) {
        //        angular.extend(srv._products[i], product);
        //        return;
        //    }
        //}
        return $http.put(srv._baseUrl + "/update" , product);
    };

    // in der delete Funktion arbeitet man lieber mit einer while schleife weil der index des Arrays verändert wird wenn man
    // ein element löscht, und wenn man nicht mit return aus der schleife verschwindet würde man mit einer for schleife
    // in einen error rennen, weil nach dem löschen nicht mehr so viele elemente das sind wie vorher.
    srv.deleteProductByID = function (id) {
        /**
        var i = srv._products.length;
        while (i--) {
            if (id === srv._products[i].id) {
                srv._products.splice(i, 1);
                return;
            }
        }
         */
        return $http.delete(srv._baseUrl + "/delete/" + id);
    };


    // public API, also die methoden auf die von Außerhalb zugegriffen werden kann
    return {
        getProductById: function (id) {
            return srv.getProductById(id);
        },
        getProducts: function () {
            return srv.getProducts();
        },
        storeProduct: function (product) {
            return srv.storeProduct(product);
        },
        updateProduct: function (product) {
            return srv.updateProduct(product);
        },
        deleteProductByID: function (id) {
            return srv.deleteProductByID(id)
        }
    };
})