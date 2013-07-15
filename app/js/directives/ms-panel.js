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
                        $scope.showHelpPanel = false;
                        var triggerAnswerAreaEvent = function (event) {
                            if ($scope.$$childHead && $scope.$$childHead.$$nextSibling) {
                                $scope.$$childHead.$$nextSibling.$broadcast(event);
                            } else {
                                console.log('<ms-panel could not trigger ', event, ' in answer area.');
                            }
                        };

                        var turnOffAnswer = $scope.$on('answer', function (e, data) {
                            // Add problem property to all answer event data objects.
                            data.problem = $scope.problem;

                            // If the answer is correct, $emit panelDone
                            if (data.result === 'correct') {
                                $scope.$emit('panelDone');
                            } else {
                            // Otherwise $broadcast checkFocus.
                                triggerAnswerAreaEvent('checkFocus');
                            }
                        });

                        $scope.$on('triggerCheckAnswer', function () {
                            triggerAnswerAreaEvent('checkAnswer');
                        });

                        $scope.$on('triggerCheckHelp', function () {
                            $scope.$broadcast('checkHelp');
                        });

                        $scope.$on('showHelpPanel', function (e, data) {
                            turnOffAnswer();
                            $scope.$on('answer', function (e, data) {
                                 data.result = "helped";
                                 data.answer = "\\str{helped}";
                                 data.problem = $scope.problem;
                                 
                            });
                            e.stopPropagation();
                            $scope.showHelpPanel = true;
                            $scope.helpPanelClass = 'helpPanel';
                            $scope.helpPanelWell = 'well';
                            $scope.helpExpression = data.expression;
                        });

                        $scope.$on('triggerCheckFocus', function () {
                            triggerAnswerAreaEvent('checkFocus');
                        });

                        $scope.$on('checkFocus', function (e) {
                            if (e.defaultPrevented === false) {
                                e.preventDefault();
                                triggerAnswerAreaEvent('checkFocus');
                            }
                        });

                        $timeout(function () {
                            triggerAnswerAreaEvent('checkFocus');
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
