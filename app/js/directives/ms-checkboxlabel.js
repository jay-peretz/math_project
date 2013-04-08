'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('chklbl', {
            directiveTemplate: '<ms-checkboxlabel expected={{expected}} label={{label}}></ms-checkboxlabel>'
        });
    }])
    .directive('msCheckboxlabel', [
        'parser',
        function (parser) {
            return {
                controller: function ($scope, $element) {
                    $scope.checkValue = false;

                    // Extract the value/s.
                    $scope.$watch('expected', function () {
                        if ($scope.expected) {
                            $scope.myargs = parser.extractTag($scope.expected).args;
                            
                            if ($scope.myargs[1] === "T") {
                                $scope.checkValue = true;
                            }
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
