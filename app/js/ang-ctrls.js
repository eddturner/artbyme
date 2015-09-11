var controllers = angular.module('ctrlsModule', []);

controllers.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.started = true;
}]);
controllers.controller('GalleryCtrl', ['$scope', '$document', function($scope, $document) {
    $scope.started = true;

    console.log("gallery controller started");
    $scope.mediumPictures = getPsMediumItems();
    console.log("mediumPictures = " + $scope.mediumPictures);

    function collage() {
        $('.Collage').removeWhitespace().collagePlus(
            {
                'fadeSpeed'     : 1500,
                'targetHeight'  : 300
            }
        );
    };

    angular.element(window).load(function () {
        $document.ready(function () {
            console.log("document in gallery is ready.");
            collage();
            $('.Collage').collageCaption();
        });
    });

}]);