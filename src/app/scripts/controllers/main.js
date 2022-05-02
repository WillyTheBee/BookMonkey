bmApp.controller('mainCtrl', function ($scope, ProductDataService) {

    ProductDataService.getProductTypes()
        .then(function (response) {
            $scope.types = response.data;
        })
        .catch(function (error) {
            console.error("ERROR mainCtrl | getProductTypes", error);
        });

});