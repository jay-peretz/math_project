'use strict';
/*global angular */

angular.module('mathSkills', ['mathSkills.services']).
    config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider
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
    ]);
