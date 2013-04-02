'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('frac', {
            argTemplates: [{
                name: 'numerator',
                template: '<ms-event-label expected={{numerator}} label=numerator></ms-event-label>'
            }, {
                name: 'denominator',
                template: '<ms-event-label expected={{denominator}} label=denominator></ms-event-label>'
            }],
            directiveTemplate: '<ms-fraction expected={{expected}} label={{label}}></ms-fraction>'
        });
    }])
    .directive('msFraction', [
        'directiveUtils',
        function (directiveUtils) {
            return {
                controller: function ($scope, $element) {
                    $scope.tag = 'frac';
                    $scope.children = ['numerator', 'denominator'];

                    directiveUtils.aggregateChildAnswers($scope);
                    directiveUtils.compileExpected($scope, $element);
                    directiveUtils.routeHelp($scope);
                    directiveUtils.routeFocus($scope);
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
