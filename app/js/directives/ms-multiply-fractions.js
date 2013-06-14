'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('multiplyfracs', {
            directiveTemplate: '<ms-multiply-fractions expected={{expected}}></ms-multiply-fractions>'
        });
    }])
    .directive('msMultiplyFractions', ['numberUtils', 'parser', 'problemData', function (numberUtils, parser, problemData) {
        return {
            controller: ['$scope', function ($scope) {
                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        $scope.args = parser.extractTag($scope.expected).args;
                        $scope.update();
                    }
                });

                $scope.update = function () {
                    $scope.problem = '\\grp{' + $scope.args.join('}{\\html{&times;}}{') + '}';
                    $scope.answer = numberUtils.frac.multiply($scope.args);
                    $scope.template = '\\grp{' + $scope.problem + '}{\\sign{=}}{' + $scope.answer + '}';
                };

                $scope.$on('answer', function (e, data) {
                    if (data.label === 'problem') {
                        e.stopPropagation();
                    } else if (data.result === 'correct') {
                        var args = parser.extractTag(data.answer).args;
                        console.log(args);
                        problemData.setData(parser.extractTag(args[0]).args[0], 'mfn');
                        problemData.setData(parser.extractTag(args[1]).args[0], 'mfd');
                    }
                });
            }],
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            templateUrl: 'partials/directives/ms-multiply-fractions.html'
        };
    }]);
