'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('mixed', {
            argTemplates: [{
                name: 'whole',
                template: '<ms-event-label expected={{whole}} label=whole></ms-event-label>'
            }, {
                name: 'fraction',
                template: '<ms-fraction expected={{fraction}} label=fraction></ms-fraction>'
            }],
            directiveTemplate: '<ms-mixed-number expected={{expected}}></ms-mixed-number>'
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