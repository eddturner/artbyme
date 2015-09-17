var controllers = angular.module('ctrlsModule', []);

//----------------- Home controller -----------------
controllers.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.started = true;
}]);

//----------------- Gallery controller -----------------
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

//----------------- Navigation controller -----------------
controllers.controller('NavCtrl', ['$scope', function($scope) {
    // default selected page on start up
    $scope.page = "home";
    $scope.setPage = function(page) {
        $scope.page = page;
    }
}]);