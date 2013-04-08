'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('input', {
            directiveTemplate: '<ms-input expected={{expected}} label={{label}}></ms-input>'
        });
    }])
    .directive('msInput', [
        function () {
            return {
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                controller: function ($scope, $element) {
                    $scope.answer = '';
                    $scope.controllerId = Math.random().toString();

                    $scope.$on('checkAnswer', function () {
                        var answer = '\\input{' + $scope.answer + '}',
                            data = {
                                expected: $scope.expected,
                                answer: answer,
                                label: $scope.label
                            };
                            if ($scope.expected === answer) {
                                data.result = 'correct';
                                $scope.class = 'success';
                            } else {
                                data.result = 'incorrect';
                                $scope.class = 'error';
                                $scope.answer = '';
                            }
                            $scope.$emit('answer', data);
                    });

                    $scope.$on('checkFocus', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // Check if we can receive focus.
                            if ($scope.answer === '') {
                                // If we have no answer yet, focus on ourselves and fire a focused event.
                                $element.find('input').focus();
                                $scope.$emit('focused');
                            } else {
                                // If we have an answer already, fire a notFocused event.
                                $scope.$emit('notFocused', {
                                    controllerId: $scope.controllerId
                                });
                            }
                        }
                    });

                    $scope.$on('checkHelp', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // Check if we can set our answer to expected.
                            if ($scope.answer === '') {
                                // Strip out the tag part of $scope.expected and extract the value.
                                $scope.answer = $scope.expected.slice(7, $scope.expected.length - 1);
                                $scope.class = '';
                                $element.find('input').focus();
                                $scope.$emit('helped');
                            } else {
                                // If we have an answer already, fire a notHelped event.
                                $scope.$emit('notHelped', {
                                    controllerId: $scope.controllerId
                                });
                            }
                        }
                    });

                    jQuery($element).on('keyup', 'input', function (event) {
                        if (event.keyCode === 13 || event.keyCode === 10) {
                            $scope.$apply($scope.$emit('triggerCheckAnswer'));
                        }
                    });

                    jQuery($element).on('keydown', 'input', function (event) {
                        if (event.keyCode === 9) {
                            event.preventDefault();
                            $scope.$apply($scope.$emit('triggerCheckFocus'));
                        }
                    });
                },
                template: '<div class="control-group {{class}}"><label><span>{{label}}</span><input ng-model=answer></label></div>'
            };
        }
    ]);
