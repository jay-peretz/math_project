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
        '$timeout',
        function (parser, $timeout) {
            return {
                controller: function ($scope, $element) {
                    $scope.controllerId = Math.random().toString();
                    $scope.lock = false; 
                    
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
                        if ($scope.lock === false) {
                            // If this event has not been marked as ignored.
                            if (e.defaultPrevented === false) {
                                // handle check focus event for parent scope.
                                // set focus on button element, fire a focused event.
                                $element.find('button').focus(); 
                                $scope.$emit('focused', {
                                    controllerId: $scope.controllerId
                                });
                            }
                        } 
                        
                    });

                    $scope.$on('checkHelp', function (e) {
                        if ($scope.lock === false) {
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
                        }
                    });

                    $scope.$on('butLock', function (e, val) { 
                        $scope.lock = val ? true : false;
                    });

                    $element.on('click', 'button', function (event) {
                        
                        var data = {
                            expected: $scope.expected,
                            answer: '\\but{' + $scope.args[0] + '}{' + $scope.args[1] + '}',
                            label: $scope.label
                        };
    
                        if ($scope.lock === false) {
                            if ($scope.args[1] === "T") {
                                data.result = 'correct';
                                $scope.class = 'success';
                            } else {
                                data.result = 'incorrect';
                                $scope.class = 'danger';
                                $timeout(function () {
                                    $scope.class = '';
                                }, 900);
                            }
                            $scope.$emit('answer', data);
                            $scope.$apply();
                        } else {
                            $scope.class = 'danger';
                            $timeout(function () {
                                $scope.class = '';
                            }, 900);
                            data.focus = true;
                            data.result = 'incorrect';
                            $scope.$emit('answer', data);
                        }
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