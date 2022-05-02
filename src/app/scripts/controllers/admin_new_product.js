bmApp.controller("AdminNewProductCtrl", function ($scope, $location, ProductDataService) {
    $scope.isPreview = true;
    // eigentlich ist die Initalisierung nicht notwendig, da AngularJS beim ausfüllen des Formulars das Objekt
    // automatisch erstellen würde.
    $scope.product = {};

    $scope.submitBtnLabel = "Produkt anlegen";

    $scope.submitAction = function () {
        ProductDataService.storeProduct($scope.product)
            .then(function () {
                goToAdminListView();
            })
            .catch(function (error) {
                console.error("ERROR admin_new_product | storeProduct: ", error);
            });
    };
    
    $scope.cancelAction = function () {
        goToAdminListView(); 
    };
    
    var goToAdminListView = function () {
        $location.path("/admin/products")
    };
});