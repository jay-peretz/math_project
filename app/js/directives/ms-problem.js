'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msProblem', [
        function () {
            return {
                controller: [
                    '$scope',
                    function ($scope) {
                        // Listen for panelGroupDone events.
                        $scope.$on('panelGroupDone', function (e, data) {
                            // $emit problemDone in response.
                            $scope.$emit('problemDone');
                        });
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
