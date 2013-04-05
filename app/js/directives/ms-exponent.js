'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('exp', {
            argTemplates: [{
                name: 'base',
                template: '<ms-event-label expected={{base}} label=base></ms-event-label>'
            }, {
                name: 'exponent',
                template: '<ms-event-label expected={{exponent}} label=exponent></ms-event-label>'
            }],
            directiveTemplate: '<ms-exponent expected={{expected}} label={{label}}></ms-exponent>'
        });
    }])
    .directive('msExponent', [
        'directiveUtils',
        function (directiveUtils) {
            return {
                controller: function ($scope, $element) {
                    $scope.tag = 'exp';
                    $scope.children = ['base', 'exponent'];

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
