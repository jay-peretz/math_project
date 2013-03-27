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
                        // When we get a correct answer event, $emit panelDone event
                        $scope.$on('answer', function (e, data) {
                            if (data.result === 'correct') {
                                $scope.$emit('panelDone');
                            } else {
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
