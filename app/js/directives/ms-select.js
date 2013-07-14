'use strict';
/*global angular jQuery*/
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('select', {
            directiveTemplate: '<ms-select expected={{expected}} label={{label}}></ms-select>'
        });
    }])
  .directive('msSelect', [
	'parser',
    'directiveUtils',
    'problemData',
    function (parser, directiveUtils, problemData) {
        return {
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            controller: function ($scope, $element) {

                $scope.controllerId = Math.random().toString();

                // Extract the args array.
                $scope.$watch('expected', function () { 
                    if ($scope.expected){ 
                        $scope.answer = '';
                        $scope.myargs = parser.extractTag($scope.expected).args;
                        $scope.answercorrect = $scope.myargs[0]; 
                        $scope.optionsarray = $scope.myargs[1]; 

                        //turn answer string-arrays into array
                        if (typeof $scope.answercorrect === "string" && $scope.answercorrect[0] === "[") {
                            $scope.answercorrect = JSON.parse($scope.answercorrect);
                        }
                            //console.log('args0 answer', $scope.myargs[0], '= ', $scope.answercorrect);

                        //turn options string-arrays into array
                        if (typeof $scope.optionsarray === "string" && $scope.optionsarray[0] === "[") {
                            //strip-out escape char.
                            $scope.optionsarray = $scope.optionsarray.replace(new RegExp('\\\\', 'g'),'');
                            $scope.optionsarray = JSON.parse($scope.optionsarray);
                        }  //console.log('args1 arr', $scope.myargs[1], '= ', $scope.optionsarray);

                        // ****start live data/event stuff****
                        $scope.data = {
                            expt: ($scope.myargs.length >= 0 ? $scope.myargs[0] : false),
                            key: ($scope.myargs.length > 2 ? $scope.myargs[2] : false),
                            func: ($scope.myargs.length > 3 ? $scope.myargs[3] : false),
                            arr: ($scope.myargs.length > 4 ? $scope.myargs[4] : false),
                        };
                        problemData.init($element, $scope, ['answer', 'answercorrect', 'optionsarray']); // may need to be outside watch?
                    }
                });

                $scope.$on('checkAnswer', function () {
                    
                    var data = {
                        expected: '\\select{'+$scope.answercorrect+'}{['+$scope.optionsarray.join(',')+']}',
                        answer: '\\select{'+$scope.answer+'}{['+$scope.optionsarray.join(',')+']}',
                        label: $scope.label
                    };

                    if (Array.isArray($scope.answercorrect)){
                        data.answer = '\\select{"'+$scope.answer+'"}{["'+$scope.optionsarray.join('","')+'"]}';
                        var answerIndex = $scope.answercorrect.indexOf($scope.answer);
                        if (answerIndex !== -1) {
                            var correctAnswerIndex = problemData.index(answerIndex);
                            if (correctAnswerIndex === answerIndex) {
                                data.result = 'correct';
                                data.expected = data.answer;
                                $scope.class = 'success';
                            } else {
                                data.result = 'incorrect';
                                data.expected = '\\select{"'+$scope.answercorrect[correctAnswerIndex]+'"}{["'+$scope.optionsarray.join('","')+'"]}';
                                $scope.class = 'error';
                                $scope.answer = "";
                            }
                            $scope.$emit('answer', data);
                        } else {
                            problemData.getIndex().then(function (index){
                                data.result = 'incorrect';
                                data.expected = '\\select{"'+$scope.answercorrect[index]+'"}{["'+$scope.optionsarray.join('","')+'"]}';
                                $scope.class = 'error';
                                $scope.answer = "";
                                $scope.$emit('answer', data);
                            });
                        }
                    }else {

                        if ($scope.answercorrect === $scope.answer) {
                            data.result = 'correct';
                            $scope.class = 'success';
                        } else {
                            data.result = 'incorrect';
                            $scope.class = 'error';
                            $scope.answer = '';
                        }
                        $scope.$emit('answer', data);
                    }
                });

                 $scope.$on('checkFocus', function (e) {
                    // If this event has not been marked as ignored.
                    if (e.defaultPrevented === false) {
                        // Check if we can receive focus.
                        if ($scope.answer === '') {
                            // If we have no answer yet, focus on ourselves and fire a focused event.
                            $element.find('select').focus();
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
                        var parsedExpected = parser.extractTag($scope.expected).args[0],
                            correctAnswer = "",
                            handleHelp = function () {
                                if ($scope.answer !== correctAnswer) {  
                                    $scope.answer = correctAnswer; 
                                    $scope.$emit('helped', {
                                        controllerId: $scope.controllerId
                                    });
                                } else {
                                    $scope.$emit('notHelped', {
                                        controllerId: $scope.controllerId
                                    });
                                }    
                            };
                        if (parsedExpected[0] === '[') {
                            var possibleAnswers = JSON.parse(parsedExpected);
                            problemData.getIndex().then(function (index) {
                                correctAnswer = possibleAnswers[index];
                                handleHelp();
                            });
                        } else{
                            correctAnswer = $scope.answercorrect;
                            handleHelp();
                        }
                    }
                });
 
                $scope.$watch('expected', function () {
                    if($scope.expected) {
                        directiveUtils.resize($scope, $scope.optionsarray, 'select', 10, 10);
                    }
                });
                
                jQuery($element).on('keyup', 'select', function (event) {
                    if (event.keyCode === 13 || event.keyCode === 10) {
                        $scope.$apply($scope.$emit('triggerCheckAnswer'));
                    }
                });

                jQuery($element).on('keydown', 'select', function (event) {
                    if (event.keyCode === 9) {
                        event.preventDefault();
                        $scope.$apply($scope.$emit('triggerCheckFocus'));
                    }
                });

            },
            template: '<div class="control-group {{class}}"><label><span>{{label}}</span><select style="width:{{width}}; margin:0;" ng-model="answer" ng-options="value for value in optionsarray"> <option value="">-- choose --</option></select></label></div>'
        };
    }]);