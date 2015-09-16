var directives = angular.module('dirsModule', []);

directives.directive('imgGallery', ['$compile', '$timeout', function($compile, $timeout) {
    console.log("running directives js");

    function collage() {
        $('.Collage').removeWhitespace().collagePlus(
            {
                'fadeSpeed'     : 1000,
                'targetHeight'  : 400
            }
        );
    };

    return {
        restrict: 'E',
        scope: {
            srcs: '='
        },
        controller: function($scope) {
            $scope.galleryItemClick = function(image) {
                console.log("Image "+image+" clicked");
                showGallery(image.id);
            }
        },
        templateUrl: 'templates/collage.html',
        link: function(scope, element, attributes) {
            // on the next digest, redraw the collage
            $timeout(function() {
                console.log("drawing image gallery: "+attributes.srcs);
                collage();
                $('.Collage').collageCaption();
            });
        }
    };
}]);