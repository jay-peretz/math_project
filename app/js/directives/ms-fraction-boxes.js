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
                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        var args = parser.extractTag($scope.expected).args;
                        $scope.boxes = new Array(+args[1]);
                        $scope.highlighted = +args[0];
                    }
                });
                $scope.isHighlighted = function (ii) {
                    return ii < $scope.highlighted;
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
