'use strict';
/*global angular */

angular.module('mathSkills') 
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('commasnumber', {
            directiveTemplate: '<ms-commas-number expected={{expected}} label={{label}}></ms-commas-number>'
        });
    }])
    .directive('msCommasNumber', [
        'parser',
        'directiveUtils',
        function (parser, directiveUtils) {
            return {
                controller: function ($scope, $element, $filter) {
                    $scope.controllerId = Math.random().toString();
					var stringNumber,
						stringNumberCommas,
						templateArray = [];
                    
					var templateCompose = function (number) {
						var templateString = "<span>";
						for (var ii = 0, len = number.length; ii < len; ii += 1) {
							if (number.substr(ii,1) !== ",") {
								templateString += number.substr(ii,1);
							} else {
								templateString += "</span><span class='comma-size'>,</span><span>";
							}
						}
						templateString += "</span>"
						return templateString;
					}
					
                    // Extract the value and sent size event.
                    $scope.$watch('expected', function () {
                        if($scope.expected) {
                            stringNumber = $scope.expected.slice(14, $scope.expected.length - 1); 
							stringNumberCommas = $filter('commas')(stringNumber);
							$scope.templateString = templateCompose(stringNumberCommas);
                            // directiveUtils.size($scope, [stringNumber], 10, 5);    
                        }
                    });
                     
                    // handle check answer event for parent scope "always correct".
                    $scope.$on('checkAnswer', function () {
                        $scope.$emit('answer', {
                            result: 'correct',
                            expected: $scope.expected,
                            answer: $scope.expected,
                            label: $scope.label
                        });
                    });
    
                    $scope.$on('checkFocus', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check focus event for parent scope.
                            // string cannot have focus/tab, fire a notFocused event.
                            $scope.$emit('notFocused', {
                                controllerId: $scope.controllerId
                            });
                        }
                    });
    
                    $scope.$on('checkHelp', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check help event for parent scope.
                            // string does not use help, fire a notHelped event.
                            $scope.$emit('notHelped', {
                                controllerId: $scope.controllerId
                            }); 
                        }
                    });
                   
                },
                restrict: 'E',
                scope: {
                    expected: '@', 
                    label: '@'
                },
				replace: true, // replace template
                template: '<span ng-bind-html-unsafe=templateString></span>'
            };
        }
    ]);
