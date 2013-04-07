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
