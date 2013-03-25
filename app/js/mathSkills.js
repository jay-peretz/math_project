'use strict';
/*global angular */

angular.module('mathSkills', ['mathSkills.services']).
    config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'partials/home.html',
                    controller: 'home'
                })
                .when('/units', {
                    templateUrl: 'partials/controllers/unitList.html',
                    controller: 'unitList'
                })
                .when('/units/:unit', {
                    templateUrl: 'partials/controllers/problemSetList.html',
                    controller: 'problemSetList'
                })
                .when('/units/:unit/:problemSet/:problemNumber', {
                    templateUrl: 'partials/controllers/problem.html',
                    controller: 'problem'
                })
                .otherwise({redirectTo: '/'});
        }
    ])
    .controller('home', [
        '$scope',
        function ($scope) {
            $scope.course = 'CSKLS 371 GENERAL ARITHMETIC';
        }
    ]);
