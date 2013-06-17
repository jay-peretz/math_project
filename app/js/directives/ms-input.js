
'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('input', {
            directiveTemplate: '<ms-input expected={{expected}} label={{label}}></ms-input>'
        });
    }])
    .directive('msInput', [
        'directiveUtils',
        '$timeout',
        'parser',
        'problemData',
        function (directiveUtils, $timeout, parser, problemData) {
            return {
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                controller: function ($scope, $element) {
                    $scope.answer = '';
                    $scope.controllerId = Math.random().toString();

                    $scope.$on('checkAnswer', function (e) {
                        if (e.defaultPrevented !== true) {
                            var parsedExpected = parser.extractTag($scope.expected).args[0];
                            var answer = '\\input{' + $scope.answer + '}',
                                data = {
                                    expected: $scope.expected,
                                    answer: answer,
                                    label: $scope.label
                                };

                            if (parsedExpected[0] === '[') {
                                var possibleAnswers = JSON.parse(parsedExpected).map(String);
                                var answerIndex = possibleAnswers.indexOf($scope.answer);
                                if (answerIndex !== -1) {
                                    var correctAnswerIndex = problemData.index(answerIndex);
                                    if (correctAnswerIndex === answerIndex) {
                                        data.result = 'correct';
                                        data.expected = data.answer;
                                        $scope.class = 'success';
                                    } else {
                                        data.result = 'incorrect';
                                        data.expected = '\\input{' + possibleAnswers[correctAnswerIndex] + '}';
                                        $scope.class = 'error';
                                        $scope.answer = "";
                                    }
                                    $scope.$emit('answer', data);
                                } else {
                                    problemData.getIndex().then(function (index){
                                        data.result = 'incorrect';
                                        data.expected = '\\input{' + possibleAnswers[index] + '}';
                                        $scope.class = 'error';
                                        $scope.answer = "";
                                        $scope.$emit('answer', data);
                                    });
                                }
                            } else {
                                if ($scope.expected === answer) {
                                    data.result = 'correct';
                                    $scope.class = 'success';
                                } else {
                                    data.result = 'incorrect';
                                    $scope.class = 'error';
                                    $scope.answer = '';
                                }
                                $scope.$emit('answer', data);
                            }
                        }
                    });

                    $scope.$on('reportAnswer', function () {
                        var answer = '\\input{' + $scope.answer + '}',
                            data = {
                                answer: answer,
                                label: $scope.label
                            };
                        $scope.$emit('answer', data);
                    });

                    $scope.$on('answerFeedback', function (e, data) {
                        if (data.result === 'correct') {
                            $scope.class = 'success';
                        } else {
                            $scope.class = 'error';
                            $scope.answer = '';
                        }
                    });

                    $scope.$on('checkFocus', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // Check if we can receive focus.
                            if ($scope.answer === '') {
                                $timeout(function () {
                                    // If we have no answer yet, focus on ourselves and fire a focused event.
                                    $element.find('input').focus();
                                    $scope.$emit('focused');
                                }, 0);
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
                                var parsedExpected = parser.extractTag($scope.expected).args[0];
                                if (parsedExpected[0] === '[') {
                                    var possibleAnswers = JSON.parse(parsedExpected);
                                    problemData.getIndex().then(function (index) {
                                        $scope.answer = possibleAnswers[index];
                                    });
                                } else {
                                    // Strip out the tag part of $scope.expected and extract the value.
                                    $scope.answer = $scope.expected.slice(7, $scope.expected.length - 1);
                                }
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
                    
                    $scope.$watch('expected', function () {
                        if($scope.expected) {
                            var arr = [];
                            var parsedExpected = parser.extractTag($scope.expected).args[0];
                            if (parsedExpected[0] === '[') {
                                arr = parsedExpected[0];
                            } else {
                                arr.push(parsedExpected[0]);
                            }   
                            directiveUtils.resize($scope, arr, 'input', 10, 10);
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
                template: '<div class="control-group {{class}}"><label><span>{{label}}</span><input style="width:{{width}};" ng-model=answer ms-strip-commas ms-add-zero></label></div>'
            };
        }
    ]);
