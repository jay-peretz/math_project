'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('select', {
            argTemplates: [{
                name: 'answercorrect'
            },{
                name: 'optionsarray'
            }],
            directiveTemplate: '<ms-select expected={{expected}} label={{label}}></ms-select>'
        });
    }])
  .directive('msSelect', [
	'parser',
    'directiveUtils',
    'panelGroupData',
	function (parser, directiveUtils, panelGroupData) {
		return {
			restrict: 'E',
			scope: {
				expected: '@',
				label: '@'
			},
			controller: function ($scope, $element) {
				$scope.answer = '';
                $scope.controllerId = Math.random().toString();
				$scope.answercorrect = "";
				$scope.optionsarray = [];
				
			 // Extract the value/s for $scope.answercorrect & $scope.optionsarray
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						parser.parse($scope.expected, { scope: $scope });
					}
				});
				$scope.$watch('optionsarray', function () {
					if (typeof $scope.optionsarray === "string") {
						$scope.optionsarray = JSON.parse($scope.optionsarray);
					}
				});
				$scope.$watch('answercorrect', function () {
					if (typeof $scope.answercorrect === "string" && $scope.answercorrect !== "") {
						$scope.answercorrect = JSON.parse($scope.answercorrect);
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
                            var correctAnswerIndex = panelGroupData.index(answerIndex);
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
                            panelGroupData.getIndex().then(function (index){
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
                        if ($scope.answer !== $scope.answercorrect) {  var parsedExpected = parser.extractTag($scope.expected).args[0];
                            if (parsedExpected[0] === '[') {
                                var possibleAnswers = JSON.parse(parsedExpected);
                                panelGroupData.getIndex().then(function (index) {
                                    $scope.answer = possibleAnswers[index];
                                });
                            } else {
                                // Strip out the tag part of $scope.expected and extract the value.
                                $scope.answer = $scope.answercorrect; 
                            }
                            $scope.$emit('helped', {
                                controllerId: $scope.controllerId
                            });
                        } else {
                            $scope.$emit('notHelped', {
                                controllerId: $scope.controllerId
                            });
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
			template: '<div class="control-group {{class}}"><label><span>{{label}}</span><select style="width:{{width}};" ng-model="answer" ng-options="value for value in optionsarray"> <option value="">-- choose --</option></select></label></div>'
		};
	}]);