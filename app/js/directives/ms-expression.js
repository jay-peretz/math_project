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
                    // Relabel any events.
                    $scope.$on('answer', function (e, data) {
                        if (data.label === undefined) {
                            data.label = $scope.label;
                        }
                    });
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
