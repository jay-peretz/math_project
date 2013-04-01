'use strict';
/*global angular */

angular.module('mathSkills') 
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('str', {
            directiveTemplate: '<ms-string expected={{expected}} label=string></ms-string>'
        });
    }])
    .directive('msString', [
        'parser',
        'directiveUtils',
        function (parser, directiveUtils) {
            return {
                controller: function ($scope, $element) {
                    $scope.controllerId = Math.random().toString();
                    
                    // Extract the value and sent size event.
                    $scope.$watch('expected', function () {
                        if($scope.expected) {
                            $scope.string = $scope.expected.slice(5, $scope.expected.length - 1); 
                            // directiveUtils.size($scope, [$scope.string], 10, 5);    
                        }
                    });
                     
                    // handle check answer event for parent scope "always correct".
                    $scope.$on ('checkAnswer', function () {
                        $scope.$emit('answerCorrect');
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
                template: '<span>{{string}}</span>'
            };
        }
    ]);
