'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('rowgrp', {
            directiveTemplate: '<ms-row-group expected={{expected}} label={{label}}></ms-row-group>'
        });
    }])
  .directive('msRowGroup', [
        function () {
            return {
                controller: [
                    'directiveUtils',
                    'parser',
                    '$scope',
                    function (directiveUtils, parser, $scope) {
                        $scope.tag = 'grp';
                        $scope.$watch('expected', function () {
                            if ($scope.expected) {
                                $scope.childElements = parser.extractTag($scope.expected).args;
                                $scope.children = $scope.childElements.map(function (val, ii) {
                                    return ii.toString();
                                });
                            }
                        });

                        directiveUtils.aggregateChildAnswers($scope);
                        directiveUtils.routeFocus($scope);
                        directiveUtils.routeHelp($scope);
                    }
                ],
                scope: {
                    expected: '@',
                    label: '@'
                },
                restrict: 'E',
            template: '<table><tr ng-repeat="child in childElements"><td><ms-expression expected={{child}}></td></tr></table>'
        };
    }]);