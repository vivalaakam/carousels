function CarouselFactory($http) {
    return $http.get('/carousels');
}

function TypesFactory($http) {
    return $http.get('/types');
}

CarouselFactory.$inject = ['$http'];

TypesFactory.$inject = ['$http'];

angular
    .module('app')
    .factory('CarouselFactory', CarouselFactory)
    .factory('TypesFactory', TypesFactory);
