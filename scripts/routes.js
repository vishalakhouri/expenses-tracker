'use strict';

angular.module('expensesTracker')
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '../templates/home.html',
            controller: 'HomeController'
        })
        .when('/profile', {
            templateUrl: '../templates/profile.html',
            controller: 'ProfileController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
);