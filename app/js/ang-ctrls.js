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

    //function redraw() {
    //    console.log("redraw() called.");
    //    collage();
    //    $('.Collage').collageCaption();
    //}
    //
    //function collage() {
    //    $('.Collage').removeWhitespace().collagePlus(
    //        {
    //            'fadeSpeed'     : 1000,
    //            'targetHeight'  : 400
    //        }
    //    );
    //};
    //
    //angular.element(window).load(function () {
    //    $document.ready(function () {
    //        console.log("document in gallery is ready.");
    //        collage();
    //        $('.Collage').collageCaption();
    //    });
    //});
    //
    //function imageClick() {
    //    console.log("clicked");
    //}

}]);