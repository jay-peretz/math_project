'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('primefac', {
            argTemplates: [{
                name: 'factoring'
            }],
            directiveTemplate: '<ms-prime-factorization expected={{expected}} label={{label}}></ms-prime-factorization>'
        });
    }])
    .directive('msPrimeFactorization', [
        'numberUtils',
        '$timeout',
        function (numberUtils, $timeout) {
            return {
                controller: [
                    'parser',
                    '$scope',
                    function (parser, $scope) {
                        $scope.controllerId = Math.random().toString();
                        $scope.factorStep = true;
                        $scope.completedRows = [];
                        $scope.completedFactors = [];

                        $scope.$watch('expected', function () {
                            if ($scope.expected) {
                                parser.decorateScope(parser.extractTag($scope.expected), $scope);
                                $scope.instructions = 'Enter a prime factor of ' + $scope.factoring;
                                $scope.primeFactors = numberUtils.primeFactors(+$scope.factoring);
                                $scope.finalAnswer = $scope.primeFactors
                                    .reduce(function (grouped, factor) {
                                        if (grouped[factor] !== undefined) {
                                            grouped[factor] += 1;
                                        } else {
                                            grouped[factor] = 1;
                                        }
                                        return grouped;
                                    }, [])
                                    .reduce(function (template, exponent, base, arr) {
                                        if (exponent > 1) {
                                            template += '{\\exp{\\input{' + base + '}}{\\input{' + exponent + '}}}';
                                        } else {
                                            template += '{\\input{' + base + '}}';
                                        }
                                        if (base + 1 !== arr.length) {
                                            template += '{\\str{·}}';
                                        }
                                        return template
                                    }, '\\grp');
                            }
                        });

                        $scope.remainingFactors = function () {
                            return JSON.stringify($scope.primeFactors);
                        };

                        $scope.$on('checkAnswer', function (e, data) {
                            // If we're still factoring, turn checkAnswer events into reportAnswer events.
                            if (!$scope.complete) {
                                e.preventDefault();
                                $scope.$broadcast('reportAnswer');
                            }
                        });

                        $scope.$on('answer', function (e, data) {
                            if ($scope.controllerId !== data.controllerId) {
                                if ($scope.complete) {
                                    // If this is the final answer.
                                    if (data.label === 'finalAnswer') {
                                        // Set some properties on the data object.
                                        data.label = 'primeFactorization';
                                        data.controllerId = $scope.controllerId;
                                    } else {
                                    // Otherwise stop this rouge event.
                                        e.stopPropagation();
                                    }
                                    return;
                                }

                                var answer = +data.answer.slice(7, -1);
                                e.stopPropagation();

                                if ($scope.factorStep) {
                                    var factorIndex = $scope.primeFactors.indexOf(answer);

                                    if (factorIndex !== -1) {
                                        $scope.factorStep = false;
                                        $scope.instructions = 'Divide ' + $scope.factoring + ' by ' + answer;
                                        $timeout(function () {
                                            $scope.$broadcast('checkFocus');
                                        }, 0);
                                        $scope.completedFactors.push($scope.primeFactors[factorIndex]);
                                        $scope.completedRows.push({
                                            dividend: $scope.factoring,
                                            divisor: answer
                                        });
                                        $scope.factoring /= $scope.primeFactors.splice(factorIndex, 1)[0];
                                        $scope.$broadcast('answerFeedback', { result: 'correct' });
                                        if ($scope.primeFactors.length === 0) {
                                            $scope.complete = true;
                                            $scope.instructions = 'Last step: enter the factors in ascending order and group like factors into exponents.';
                                        }
                                    } else {
                                        $scope.$broadcast('answerFeedback', { result: 'incorrect' });
                                    }
                                } else {
                                    if (answer === $scope.factoring) {
                                        $scope.factorStep = true;
                                        $scope.instructions = 'Enter a prime factor of ' + $scope.factoring;
                                        $timeout(function () {
                                            $scope.$broadcast('checkFocus');
                                        }, 0);
                                        $scope.$broadcast('answerFeedback', { result: 'correct' });
                                    } else {
                                        $scope.$broadcast('answerFeedback', { result: 'incorrect' });
                                    }
                                }
                            }
                        });
                    }
                ],
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                templateUrl: 'partials/directives/ms-prime-factorization.html'
            };
        }
    ]);
