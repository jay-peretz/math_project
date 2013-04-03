'use strict';
/*global angular */

angular.module('mathSkills')
    .config([
        'parserProvider',
        function (parserProvider) {
            parserProvider.register('chkgrp', {
                directiveTemplate: '<ms-checkbox-group expected={{expected}}></ms-checkbox-group>'
            });
        }
    ])
    .directive('msCheckboxGroup', [
        function () {
            return {
                controller: [
                    'directiveUtils',
                    'parser',
                    '$scope',
                    function (directiveUtils, parser, $scope) {
                        $scope.tag = 'chkgrp';
                        $scope.$watch('expected', function () {
                            if ($scope.expected) {
                                $scope.checkboxes = parser.extractTag($scope.expected).args;
                                $scope.children = $scope.checkboxes.map(function (val, ii) {
                                    return ii.toString();
                                });
                            }
                        });

                        directiveUtils.aggregateChildAnswers($scope);
                    }
                ],
                restrict: 'E',
                template: '<div><ms-checkbox ng-repeat="checkbox in checkboxes" expected={{checkbox}} label={{$index}}></ms-checkbox></div>'
            };
        }
    ]);
