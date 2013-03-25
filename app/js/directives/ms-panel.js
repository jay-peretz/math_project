'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msPanel', [
        function () {
            return {
                controller: [
                    '$scope',
                    function ($scope) {
                        
                    }
                ],
                restrict: 'E',
                scope: {
                    answer: '@',
                    controls: '@',
                    problem: '@'
                },
                templateUrl: 'partials/directives/ms-panel.html'
            };
        }
    ]);
