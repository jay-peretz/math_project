'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('divwholes', {
            argTemplates: [{
                name: 'divisor',
                template: '<span class="divisor"><ms-event-label expected={{divisor}} label=divisor></ms-event-label></span>'
            }, {
                name: 'dividend',
                template: '<span class="dividend"><ms-event-label expected={{dividend}} label=dividend></ms-event-label></span>'
            }],
            directiveTemplate: '<ms-div-wholes expected={{expected}} label={{label}}></ms-div-wholes>'
        });
    }])
    .directive('msDivWholes', [
        'directiveUtils',
        function (directiveUtils) {
            return {
                controller: function ($scope, $element) {
                    $scope.tag = 'divwholes';
                    $scope.children = ['divisor', 'dividend'];

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