var controllers = angular.module('ctrlsModule', []);

controllers.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.started = true;
}]);
controllers.controller('GalleryCtrl', ['$scope', function($scope) {
    $scope.started = true;
}]);