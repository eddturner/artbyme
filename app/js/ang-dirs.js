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
        template: '<div class="Collage effect-parent"><img ng-repeat="i in srcs" ng-src="{{i.src}}" height="{{i.h}}" width="{{i.w}}"/></div>',
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