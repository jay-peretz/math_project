'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msExpression', [
        'directiveUtils',
        'parser',
        'problemData',
        function (directiveUtils, parser, problemData) {
            return {
                controller: function ($scope, $element) {
                    // Let the parser determine our template.
                    directiveUtils.compileExpected($scope, $element, true);
                    // Relabel any events.
                    $scope.$on('answer', function (e, data) {
                       if (data.label === undefined || data.label === "") {
                            data.label = $scope.label;
                        }
                    });

                    $scope.$watch('expected', function () {
                        if ($scope.expected && $scope.uncompiled === undefined) {
                            if ($scope.expected.indexOf('$$') !== -1) {
                                $scope.uncompiled = $scope.expected;
                                $scope.expected = problemData.compile($scope.expected);
                                $scope.$on('recompile', function () {
                                    $scope.expected = problemData.compile($scope.uncompiled);
                                });
                            }
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
