'use strict';
/*global angular */

angular.module('mathSkills', ['mathSkills.services']).
    config([
        '$routeProvider',
        '$rootScopeProvider',
        function ($routeProvider, $rootScopeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'partials/controllers/home.html',
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
                .when('/units/:unit/:problemSet/all/feedback', {
                    templateUrl: 'partials/controllers/feedback.html',
                    controller: 'feedback'
                })
                .otherwise({redirectTo: '/'});
                
                $rootScopeProvider.digestTtl(15);
        }
    ]);
