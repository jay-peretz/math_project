'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('frac', {
            argTemplates: [{
                name: 'numerator',
                template: '<table ng-hide="display" class=fraction><tr><td><ms-event-label expected={{numerator}} label=numerator></ms-event-label></td></tr><tr><td><hr></td></tr>'
            }, {
                name: 'denominator',
                template: '<tr><td><ms-event-label expected={{denominator}} label=denominator></td></tr></table></ms-event-label>'
            }],
            directiveTemplate: '<ms-fraction expected={{expected}} label={{label}}></ms-fraction>'
        });
    }])
    .directive('msFraction', [
        'directiveUtils',
        '$timeout',
        'parser',
        function (directiveUtils, $timeout, parser) {
            return {
                controller: function ($scope, $element) {

                    $scope.$watch('denominator', function () {
                        if ($scope.expected){ 
                            $scope.display = parser.extractTag($scope.denominator).args[0].length === 0;
                        }
                    });

                    $scope.tag = 'frac';
                    $scope.children = ['numerator', 'denominator'];

                    directiveUtils.aggregateChildAnswers($scope);
                    directiveUtils.compileExpected($scope, $element);
                    directiveUtils.routeHelp($scope);
                    directiveUtils.routeFocus($scope);
                    directiveUtils.size($scope);
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<div></div>'
            };
        }
    ]);
