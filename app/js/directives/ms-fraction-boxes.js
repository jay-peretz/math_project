'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('fracbox', {
            directiveTemplate: '<ms-fraction-boxes expected={{expected}}></ms-fraction-boxes>'
        });
    }])
    .directive('msFractionBoxes', ['parser', function (parser) {
        return {
            controller: ['$scope', function ($scope) {
                var repeat = function (val, times) {
                    var ret = [];
                    while (times > 0) {
                        ret.push(angular.copy(val));
                        times -= 1;
                    }
                    return ret;
                };

                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        var args = parser.extractTag($scope.expected).args;
                        $scope.rows = repeat([], Math.ceil(args[0] / args[1]));
                        $scope.rows = $scope.rows.map(function (row) {
                            return repeat([], +args[1]);
                        });
                        $scope.cols = +args[1];
                        $scope.highlighted = +args[0];
                    }
                });

                $scope.isHighlighted = function (row, col) {
                    return row * $scope.cols + col < $scope.highlighted;
                };
            }],
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            templateUrl: 'partials/directives/ms-fraction-boxes.html'
        };
    }]);
