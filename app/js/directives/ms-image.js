'use strict';
/*global angular */

angular.module('mathSkills') 
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('image', {
            directiveTemplate: '<ms-image expected={{expected}} label=image></ms-image>'
        });
    }])
    .directive('msImage', [
        'parser',
        '$compile',
        function (parser, $compile) {
            return {
                controller: function ($scope, $element) {
					var imagePath;
					
                    $scope.controllerId = Math.random().toString();
                    
                     // Extract the value and sent size event.
                    $scope.$watch('expected', function () {
                        if($scope.expected) {
                            imagePath = $scope.expected.slice(7, $scope.expected.length - 1); 
							$scope.image = '<img src="lib/math_project_images/'+imagePath+'">';
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
    
                    /*$scope.$on('checkFocus', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check focus event for parent scope.
                            // html/string cannot have focus/tab, fire a notFocused event.
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
                    });*/
                   
                },
                restrict: 'E',
                scope: {
                    expected: '@', 
                    label: '@'
                },
                replace: true, // replace template
                template: '<div ng-bind-html-unsafe=image></div>'
            };
        }
    ]);