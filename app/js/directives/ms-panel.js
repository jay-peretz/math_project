'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msPanel', [
        function () {
            return {
                controller: [
                    '$scope',
                    '$timeout',
                    function ($scope, $timeout) {
                        $scope.$on('answer', function (e, data) {
                            // Add problem property to all answer event data objects.
                            data.problem = $scope.problem;

                            // If the answer is correct, $emit panelDone
                            if (data.result === 'correct') {
                                $scope.$emit('panelDone');
                            } else {
                            // Otherwise $broadcast checkFocus.
                                $scope.$broadcast('checkFocus');
                            }
                        });

                        $scope.$on('triggerCheckAnswer', function () {
                            $scope.$broadcast('checkAnswer');
                        });

                        $scope.$on('triggerCheckFocus', function() {
                            $scope.$broadcast('checkFocus');
                        });

                        $timeout(function () {
                            $scope.$broadcast('checkFocus');
                        }, 0);
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
