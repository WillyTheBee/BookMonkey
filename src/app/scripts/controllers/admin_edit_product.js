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
            console.log("ERROR: getProductById: "
            + "id = " + id
            + "statusCode = " +error.statusCode
            + "message = " + error.message
            );
        });

    $scope.submitAction = function () {
        ProductDataService.updateProduct($scope.product)
            .then(function () {
                goToAdminListView();
            })
            .catch(function (error) {
                console.log("ERROR: submitAction", error)
            });
    };

    $scope.cancelAction = function () {
        goToAdminListView();
    };

    var goToAdminListView = function () {
        $location.path("/admin/products")
    };

});