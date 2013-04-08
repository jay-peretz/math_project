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
                                $scope.$$childHead.$$nextSibling.$broadcast('checkFocus');
                            }
                        });

                        $scope.$on('triggerCheckAnswer', function () {
                            $scope.$$childHead.$$nextSibling.$broadcast('checkAnswer');
                        });

                        $scope.$on('triggerCheckHelp', function () {
                            $scope.$broadcast('checkHelp');
                        });

                        $scope.$on('triggerCheckFocus', function() {
                            $scope.$$childHead.$$nextSibling.$broadcast('checkFocus');
                        });

                        $timeout(function () {
                            $scope.$$childHead.$$nextSibling.$broadcast('checkFocus');
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
