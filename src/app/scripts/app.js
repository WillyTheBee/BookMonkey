// in ekigen klammern geben wir an von welchen anderen Modulen unser eigenes Modul abhängt
// wir binden also das Modul ngRoute in unser eigenes Modul ein
const bmApp = angular.module('bmApp', ['ngRoute']);


// der Route service wird per Dependencie injection an die Methode übergeben
// der route-Service arbeitet mit der ng-view directive zusammen, das html template wird also in das div mit dem ngview attr. geladen
bmApp.config(function ($routeProvider, $locationProvider) {
    // wenn also die URL localhost:/#!/products/123 requestet wird, wird product_details.html zurück gegebn
    // und direkt ein Controller mit scope auf dieses template gebunden
    // angular js erstellt bei jedem Aufruf der Route einen neuen Scope für den Controller
    $routeProvider.when('/products/:id', {
       templateUrl: 'templates/product_details.html',
       controller: 'ProductDetailsCtrl'
    })
    .when("/products", {
        templateUrl: "templates/product_list.html",
        controller : "ProductListCtrl"
    })
    // administrativer bereich
        .when("/admin/products", {
            // wir können das Template der Listenansicht wiederverwenden
            templateUrl: "templates/product_list.html",
            controller : "AdminProductListCtrl"
        })
        .when("/admin/products/new", {
            templateUrl: "templates/admin/product_form.html",
            controller: "AdminNewProductCtrl"
        })
        .when("/admin/products/:id/edit", {
            templateUrl: "templates/admin/product_form.html",
            controller: "AdminEditProductCtrl"
        })
        .when("/admin/products/:id/delete", {
            templateUrl: "templates/admin/product_delete.html",
            controller: "AdminDeleteProductCtrl"
        })
    .otherwise({
        redirectTo: "/products"
    });

    // html5Mode macht meine URL's kaputt idk...
    //$locationProvider.html5Mode(true);
});