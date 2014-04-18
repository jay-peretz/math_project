'use strict';
/*global angular */

angular.module('mathSkills') 
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('fracstr', {
            directiveTemplate: '<ms-fraction-string expected={{expected}} label={{label}}></ms-fraction-string>'
        });
    }])
	// same as msString directive except commas are not added to numbers
    .directive('msFractionString', [
        'parser',
        'directiveUtils',
        function (parser, directiveUtils) {
            return {
                controller: function ($scope, $element, $filter) {
                    $scope.controllerId = Math.random().toString();
                    
                    // Extract the value and sent size event.
                    $scope.$watch('expected', function () {
                        if($scope.expected) {
						
                            $scope.string = $scope.expected.slice(9, $scope.expected.length - 1); 
							
							
                            // directiveUtils.size($scope, [$scope.string], 10, 5);    
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
			    template: '<span ng-bind-html-unsafe= "string | enlargeOps"></span>'
            };
        }
    ]);
