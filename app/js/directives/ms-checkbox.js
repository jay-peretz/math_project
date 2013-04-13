'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('chk', {
            argTemplates: [{
                name: 'lblValue'
            }, {
                name: 'check'
            }],
            directiveTemplate: '<ms-checkbox expected={{expected}} label={{label}}></ms-checkbox>'
        });
    }])
    .directive('msCheckbox', [
        'parser',
        '$compile',
        function (parser, $compile) {
            return {
                controller: function ($scope, $element) {
                    $scope.controllerId = Math.random().toString();
                    $scope.checkValue = false;

                    // Extract the value/s.
                    $scope.$watch('expected', function () {
                        if ($scope.expected) {
                            parser.parse($scope.expected, { scope: $scope });
                        }
                    });

                    // handle check answer event for parent scope.
                    $scope.$on ('checkAnswer', function () {
                        var data = {
                            expected: $scope.expected,
                            answer: '\\chk{' + $scope.lblValue + '}{' + ($scope.checkValue === true ? 'T' : 'F') + '}',
                            label: $scope.label
                        };

                        if ($scope.checkValue === true && $scope.check === "T"
                            || $scope.checkValue === false && $scope.check === 'F') {
                            data.result = 'correct';
                            $scope.color = 'green';
                        } else {
                            data.result = 'incorrect';
                            $scope.color = 'red';
                        }

                        $scope.$emit('answer', data);
                    });
                    
                    $scope.$on('checkHelp', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check help event for parent scope.
                            // checks the box if TRUE , fires a notHelped event so parent will check other siblings.
                            
                            if ($scope.check === "T") {
                                $scope.checkValue = true;
                            }    
                            
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
                template: '<label style="background-color:{{color}};"><input type="checkbox" ng-model="checkValue"> {{lblValue}}</label>'
            };
        }
    ]);
