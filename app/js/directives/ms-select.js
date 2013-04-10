'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('select', {
            argTemplates: [{
                name: 'answercorrect'
            },{
                name: 'optionsarray'
            }],
            directiveTemplate: '<ms-select expected={{expected}}></ms-select>'
        });
    }])
  .directive('msSelect', [
	'parser',
	function (parser) {
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
					if (typeof $scope.answercorrect === "string"&& $scope.answercorrect !== "") {
						$scope.answercorrect = JSON.parse($scope.answercorrect);
					}
				});
				
				

				$scope.$on('checkAnswer', function () {
					var data = {
						expected: '\\select{'+$scope.answercorrect+'}{'+$scope.optionsarray+'}',
						answer: '\\select{'+$scope.answer+'}{'+$scope.optionsarray+'}',
                        label: $scope.label
					};
					if ($scope.answercorrect === $scope.answer) {
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
                        if ($scope.answer !== $scope.answercorrect){
                            $scope.answer = $scope.answercorrect; 
                            $scope.$emit('notHelped', {
                                controllerId: $scope.controllerId
                            });   
                        } else {
                            $scope.$emit('notHelped', {
                                controllerId: $scope.controllerId
                            }); 
                        }
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
			template: '<div class="control-group {{class}}"><label><span>{{label}}</span><select ng-model="answer" ng-options="value for value in optionsarray"> <option value="">-- select place value --</option></select></label></div>'
		};
	}]);