/**
 * @ngInject
 */
function AttractionsController($scope, CarouselFactory, TypesFactory) {
    $scope.attractions = [];
    $scope.types = [];
    $scope.selected = [];


    CarouselFactory.then(function(response) {
        $scope.attractions = response.data;
    });

    TypesFactory.then(function(response) {
        $scope.types = response.data;
    });

    $scope.addType = function() {
        var item = $scope.types.filter(function(item) {
            return item.id === $scope.nv;
        })[0];
        $scope.selected.push(item);
        $scope.nv = null;
    };

    $scope.setType = function(id) {
        $scope.selected = $scope.types.filter(function(item) {
            return item.id === id;
        });
    };

    $scope.removeType = function(item) {
        var index = $scope.selected.indexOf(item);
        $scope.selected.splice(index, 1);
    };

    $scope.getType = function(id) {
        return $scope.types.filter(function(item) {
            return item.id === id;
        })[0];
    };
}

AttractionsController.$inject = ['$scope', 'CarouselFactory', 'TypesFactory'];

angular.module('app').controller('AttractionsController', AttractionsController);
