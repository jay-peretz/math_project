'use strict';
/*global angular */

// \findlcm{2}{12}

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('findlcm', {
            directiveTemplate: '<ms-find-lcm expected={{expected}} label={{label}}></ms-find-lcm>'
        });
    }])
    .directive('msFindLcm', ['numberUtils', 'parser', function (numberUtils, parser) {
        return {
            controller: ['$scope', function ($scope) {
                $scope.numbers = null;

                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        // Get the numbers we are factoring.
                        $scope.numbers = parser.extractTag($scope.expected).args.map(Number);

                        // Get an array of arrays of their prime factors.
                        $scope.primeFactors = $scope.numbers.map(numberUtils.primeFactors);
                        console.log($scope.primeFactors);
                    }
                });
            }],
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            templateUrl: 'partials/directives/ms-find-lcm.html'
        };
    }]);
