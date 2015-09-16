var controllers = angular.module('ctrlsModule', []);

controllers.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.started = true;
}]);

controllers.controller('GalleryCtrl', ['$scope', '$document', function($scope, $document) {
    $scope.started = true;

    console.log("gallery controller started");
    $scope.mediumPictures = getPsMediumItems();
    for (var i = 0; i < $scope.mediumPictures.length; i++) {
        $scope.mediumPictures[i].id = i;
    }

    console.log("mediumPictures = " + $scope.mediumPictures);
    
    $scope.galleryItemClick = function(image) {
        console.log("Image "+image+" clicked");
    }

}]);