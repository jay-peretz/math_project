'use strict';
/*global angular */

angular.module('mathSkills') 
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('str', {
            directiveTemplate: '<ms-string expected={{expected}} label={{label}}></ms-string>'
        });
    }])
    .directive('msString', [
        'parser',
        'directiveUtils',
        'problemData',
        function (parser, directiveUtils, problemData) {
            return {
                controller: function ($scope, $element, $filter) {
                    $scope.controllerId = Math.random().toString();
                    
                    // Extract the value and sent size event.
                    $scope.$watch('expected', function () {
                        if($scope.expected) {
                            //$scope.display = parser.extractTag($scope.expected).args[0].length === 0;
                            $scope.string = parser.extractTag($scope.expected).args[0];
                            
                            if ($scope.string && $scope.string[0] === '[') {
                                var possibleAnswers = JSON.parse($scope.string);
                                problemData.getIndex().then(function (index) {
                                    $scope.string = possibleAnswers[index];
                                });
                            }
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
                template: '<span ng-hide="display" ng-bind-html-unsafe= "string | enlargeOps | commas"></span>'
            };
        }
    ]);
