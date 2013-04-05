'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('mixed', {
            argTemplates: [{
                name: 'whole',
                template: '<ms-label expected={{whole}} label=whole></ms-label>'
            }, {
                name: 'fraction',
                template: '<ms-fraction expected={{fraction}} label=fraction></ms-fraction>'
            }],
            directiveTemplate: '<ms-mixednumber expected={{expected}}></ms-mixednumber>'
        });
    }])
    .directive('msMixedNumber', [
        'directiveUtils',
        function (directiveUtils) {
            return {
                controller: function ($element, $scope) {
                    $scope.tag = 'mixed';
                    $scope.children = ['whole', 'fraction'];

                    directiveUtils.aggregateChildAnswers($scope);
                    directiveUtils.compileExpected($scope, $element);
                    directiveUtils.routeHelp($scope);
                    directiveUtils.routeFocus($scope);
                },
                restrict: 'E',
                scope: {
                    expected: '@'
                },
                template: '<div></div>'
            };
        }
    ]);