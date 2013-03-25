'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msProblem', [
        function () {
            return {
                controller: [
                    '$scope',
                    function ($scope) {
                        
                    }
                ],
                restrict: 'E',
                scope: {
                    mainanswer: '@',
                    workbook: '@'
                },
                templateUrl: 'partials/directives/ms-problem.html'
            };
        }
    ]);
