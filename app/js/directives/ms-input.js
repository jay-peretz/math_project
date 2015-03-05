
'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('input', {
            directiveTemplate: '<ms-input ng-hide="display" expected={{expected}} label={{label}}></ms-input>'
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
                    
                    $scope.$watch('expected', function () { 
                        if($scope.expected) {   
                            
                            var arr = [];
                            $scope.myargs = parser.extractTag($scope.expected).args; 
                            $scope.display = $scope.myargs[0].length === 0;

                            //handle width/with multiple answers 
                            if ($scope.myargs[0][0] === '[') {
                                arr = JSON.parse($scope.myargs[0]);
                            } else {
                                arr.push($scope.myargs[0]);
                            }
                            if (arr[0] !== undefined){
                                directiveUtils.resize($scope, arr, 'input', 10, 10);
                            }

                            //****start live data/event stuff****
                            $scope.data = {
                                expt: ($scope.myargs.length >= 0 ? $scope.myargs[0] : false),
                                key: ($scope.myargs.length > 1 ? $scope.myargs[1] : false),
                                func: ($scope.myargs.length > 2 ? $scope.myargs[2] : false),
                                arr: ($scope.myargs.length > 3 ? $scope.myargs[3] : false),
                            };
                            problemData.init($element, $scope, ['answer']); // may need to be outside watch?
                        }
                    });

                    $scope.$on('checkAnswer', function (e) {
                        if (e.defaultPrevented !== true) {
                            
                            var parsedExpected = parser.extractTag($scope.expected).args[0];

                            var data = { 
                                expected: '\\input{' + parsedExpected + '}',
                                answer: '\\input{' + $scope.answer + '}',
                                label: $scope.label
                                },
                                
                                badAnswer = function () {
                                    data.result = 'incorrect';
                                    $scope.class = 'error';
                                    $scope.answer = "";
                                    $timeout(function () {
                                        
                                        $scope.class = '';
                                    }, 900);
                                };

                            if (parsedExpected[0] === '[') {
                                var possibleAnswers = JSON.parse(parsedExpected).map(String);
                                var answerIndex = possibleAnswers.indexOf($scope.answer);
								// "flip" relies on retension of problemData.index, but ms-reduce-fraction.js factorization requires that problemData.index be reset
								if (problemData.checkData("flip") === false) {
									problemData.resetIndex();
								}
                                if (answerIndex !== -1) {
                                    var correctAnswerIndex = problemData.index(answerIndex);
                                    if (correctAnswerIndex === answerIndex) {
                                        data.result = 'correct';
                                        data.expected = data.answer;
                                        $scope.class = 'success';
                                    } else {
                                        data.expected = '\\input{' + possibleAnswers[correctAnswerIndex] + '}';
                                        badAnswer();
                                    }
                                    $scope.$emit('answer', data);
                                } else {
                                    problemData.getIndex().then(function (index){
                                        data.expected = '\\input{' + possibleAnswers[index] + '}';
                                        badAnswer();
                                        $scope.$emit('answer', data);
                                    });
                                }
                            } else { 
                                if (data.expected === data.answer) {
                                    data.result = 'correct';
                                    $scope.class = 'success';
                                } else {
                                    badAnswer();
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
                            $scope.answer = "";
                            $timeout(function () {
                                
                                $scope.class = '';
                            }, 900);
                        }
                    });

                    $scope.$on('checkFocus', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // Check if we can receive focus.
                            if ($scope.answer === '' && $scope.display !== true) {
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
                            if ($scope.answer === '' && $scope.display !== true) {
                                if ($scope.myargs[0][0] === '[') {
                                    var possibleAnswers = JSON.parse($scope.myargs[0]);
                                    problemData.getIndex().then(function (index) {
                                        $scope.answer = possibleAnswers[index].toString();
                                    });
                                } else {
                                    // Strip out the tag part of $scope.expected and extract the value.
                                    $scope.answer = $scope.myargs[0];
                                }
                                $scope.class = '';
                                $element.find('input').focus();
                                $scope.$emit('helped');
                            } else {
                                // If we have an answer already, fire a notHelped event.
                                
                                // var parsedExpected = parser.extractTag($scope.expected).args[0];
                                
                                // if ($scope.myargs[0][0] === '[') {
                                //     var answersArr = JSON.parse($scope.myargs[0]).map(String); console.log('answersArr ', answersArr);
                                //     var answerIndex = answersArr.indexOf($scope.answer);  console.log('answerIndex ', answerIndex);
                                    
                                //     if (answerIndex !== -1) { 
                                //         var correctAnswerIndex = problemData.index(answerIndex);  console.log('correctAnswerIndex ', correctAnswerIndex);
                                //         if (correctAnswerIndex === answerIndex) {
                                             
                                //             $scope.$emit('notHelped', {
                                //                 controllerId: $scope.controllerId
                                //             });
                                //         } else {
                                //             $scope.answer = answersArr[correctAnswerIndex];
                                //             $scope.$emit('helped');
                                //         }
                                         
                                //     } else {
                                //         problemData.getIndex().then(function (index){
                                //             $scope.answer = answersArr[index];
                                //             $scope.$emit('helped');
                                //         });
                                        
                                //     }
                                // } else { 
                                //     if (parsedExpected === $scope.answer) {
                                        
                                //         $scope.$emit('notHelped', {
                                //             controllerId: $scope.controllerId
                                //         });
                                //     } else {
                                //         $scope.answer = parsedExpected;
                                //         $scope.$emit('helped');
                                //     }
                                     
                                // }
                                
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
                template: '<div class="control-group {{class}}"><label><span>{{label}}</span><input style="width:{{width}};" ng-model=answer ms-strip-commas ms-add-zero ms-to-lowercase ms-remove-plus></label></div>'
            };
        }
    ]);
