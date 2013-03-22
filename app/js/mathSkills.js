'use strict';
/*global angular */

angular.module('mathSkills', ['mathSkills.services']).
    config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/', {
                    templateUrl: 'partials/controllers/unitList.html',
                    controller: 'unitList'
                })
                .otherwise({redirectTo: '/'});
        }
    ]);
