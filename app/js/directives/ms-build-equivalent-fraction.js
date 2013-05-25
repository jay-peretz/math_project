'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('buildequivfracs', {
            directiveTemplate: '<ms-build-equivalent-fraction expected={{expected}}></ms-build-equivalent-fraction>'
        });
    }])
    .directive('msBuildEquivalentFraction', ['numberUtils', 'parser', function (numberUtils, parser) {
        return {
            controller: ['$scope', function ($scope) {
                $scope.controllerId = Math.random().toString();

                $scope.cancelling = {
                    numerator: null,
                    denominator: null
                };

                $scope.cancel = [null, null, null, null];

                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        $scope.args = parser.extractTag($scope.expected).args;
                        $scope.update();
                    }
                });

                $scope.update = function () {
                    $scope.problem = '\\row{' + $scope.args.join('}{\\html{&nbsp; &times; &nbsp;}}{') + '}';
                };

                $scope.replace = function (ii, part, val) {
                    // Get the argument piece we are keeping: numerator if part is 1, denominator if part is 0.
                    var keepArg = parser.extractTag($scope.args[ii]).args[part === 0 ? 1 : 0],
                    // Wrap the value in a \str tag.
                        val = '\\str{' + val + '}',
                    // Set our keepArg and our val parameter in the right order (depending on the part we are replacing) in a newArgs array.
                        newArgs = part === 0 ? [val, keepArg] : [keepArg, val];

                    // Rest the frac string
                    $scope.args[ii] = '\\frac{' + newArgs.join('}{') + '}';
                };
				
				$scope.$on('answer', function (e, data) {
                    if (data.controllerId !== $scope.controllerId) {
                        e.stopPropagation();
                        switch (data.label) {
                            case 'answer':
                                if (data.result === 'correct') {
                                    data.controllerId = $scope.controllerId;
                                    $scope.$emit('answer', data);
                                } else {
                                    $scope.$broadcast('checkFocus');
                                }
                                break;
                        }
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
