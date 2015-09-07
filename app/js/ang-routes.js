var artByMe = angular.module('app');

artByMe.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/gallery', {
                templateUrl: 'partials/gallery.html',
                controller: 'GalleryCtrl'
            }).
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);