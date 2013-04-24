'use strict';
/*global angular */

angular.module('mathSkills')
    .config([
        'parserProvider',
        function (parserProvider) {
            parserProvider.register('grp', {
                directiveTemplate: '<ms-group expected={{expected}} label={{label}}></ms-group>'
            });
        }
    ])
    .directive('msGroup', [
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
                restrict: 'E',
                template: '<div><table><tr><td ng-repeat="child in childElements"><ms-expression expected={{child}} label={{$index}}></ms-expression></td></tr></table></div>'
            };
        }
    ]);
