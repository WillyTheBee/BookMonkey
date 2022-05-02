bmApp.controller("AdminDeleteProductCtrl", function ($scope, $location, ProductDataService, $routeParams) {
    console.log("deleteController gestartet");

    var id =  $routeParams.id;
    ProductDataService.getProductById(id)
        .then(function (response) {
            $scope.product = response.data;
        })
        .catch(function (error) {
            console.error("ERROR admin_delete_product | getProductById: ", error);
        });


    $scope.deleteProduct = function (id) {
        ProductDataService.deleteProductByID(id)
            .then(function (){
            // erst view wechseln wenn delete Am Server erfolgreich war
                goToAdminListView();
            })
            .catch(function (error) {
                console.error("ERROR admin_delete_product | deleteProductById: ", error);
            });
    };

    $scope.cancel = function () {
        goToAdminListView();
    };

    var goToAdminListView = function () {
        $location.path("/admin/products")
    };

});