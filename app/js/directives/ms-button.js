'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('but', {
            directiveTemplate: '<ms-button expected={{expected}} label={{label}} class=bigger></ms-button>'
        });
    }])
    .directive('msButton', [
        'parser',
        function (parser) {
            return {
                controller: function ($scope, $element) {
                    $scope.controllerId = Math.random().toString();
                    
                    // Extract the args array.
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.args = parser.extractTag($scope.expected).args;
                        }
                    });
                     
                    // handle check answer event for parent scope "always correct".
                    $scope.$on ('checkAnswer', function (e) {
                        if (e.defaultPrevented === false){
                            var data = {
                                result: 'correct',
                                answer: '\\btn{' + $scope.args[0] + '}{' + $scope.args[1] + '}'
                            };
                            $scope.$emit('answer', data);
                        }
                    });
                    
                    $scope.$on('checkFocus', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check focus event for parent scope.
                            // set focus on button element, fire a focused event.
                            $element.find('button').focus(); 
                            $scope.$emit('focused', {
                                controllerId: $scope.controllerId
                            });
                        }
                    });

                    $scope.$on('checkHelp', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check help event for parent scope.
                            // button does not use help, fire a notHelped event.
                            
                            if ($scope.args[1] === "T") {
                                $scope.class = 'success';
                                
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

                    $element.on('click', 'button', function (event) {
                        var data = {
                            expected: $scope.expected,
                            answer: '\\but{' + $scope.args[0] + '}{' + $scope.args[1] + '}',
                            label: $scope.label
                        };

                        if ($scope.args[1] === "T") {
                            data.result = 'correct';
                            $scope.class = 'success';
                        } else {
                            data.result = 'incorrect';
                            $scope.class = 'danger';
                        }
                        $scope.$emit('answer', data);
                        $scope.$apply();
                    });
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<button class="btn btn-{{class}}" type=button>{{args[0] | changeSigns}}</button>'
            };
        }
    ]);