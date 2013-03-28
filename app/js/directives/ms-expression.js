'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msExpression', [
        'directiveUtils',
        'parser',
        function (directiveUtils, parser) {
            return {
                controller: function ($scope, $element) {
                    // Let the parser determine our template.
                    directiveUtils.compileExpected($scope, $element, true);
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<div ng-bind-html-unsafe=template></div>'
            };
        }
    ]);
