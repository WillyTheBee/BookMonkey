bmApp.controller("AdminEditProductCtrl", function ($scope, $routeParams, $location, ProductDataService) {
    $scope.isEditMode = true;
    $scope.isPreview = true;
    $scope.submitBtnLabel = "Produkt editieren";

    var id = $routeParams.id;

    ProductDataService.getProductById(id)
        .then(function (response) {
            $scope.product = response.data;
        })
        .catch(function (error) {
            console.error("ERROR admin_edit_product | getProductById: ", error);
        });

    $scope.submitAction = function () {
        ProductDataService.updateProduct($scope.product)
            .then(function () {
                goToAdminListView();
            })
            .catch(function (error) {
                console.error("ERROR admin_edit_product | updateProduct: ", error);
            });
    };

    $scope.cancelAction = function () {
        goToAdminListView();
    };

    var goToAdminListView = function () {
        $location.path("/admin/products")
    };

});