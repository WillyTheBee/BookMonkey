bmApp.controller("AdminNewProductCtrl", function ($scope, $location, ProductDataService) {
    $scope.isPreview = true;
    // eigentlich ist die Initalisierung nicht notwendig, da AngularJS beim ausfüllen des Formulars das Objekt
    // automatisch erstellen würde.
    $scope.product = {};

    $scope.submitBtnLabel = "Produkt anlegen";

    $scope.submitAction = function () {
        ProductDataService.storeProduct($scope.product);
        goToAdminListView(); 
    };
    
    $scope.cancelAction = function () {
        goToAdminListView(); 
    };
    
    var goToAdminListView = function () {
        $location.path("/admin/products")
    };
});