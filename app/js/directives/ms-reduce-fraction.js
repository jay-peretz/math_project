'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('reducefrac', {
            directiveTemplate: '<ms-reduce-fraction expected={{expected}}></ms-reduce-fraction>'
        });
    }])
    .directive('msReduceFraction', ['parser', function (parser) {
        return {
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            templateUrl: 'partials/directives/ms-reduce-fraction.html',
            controller: ['$scope', function ($scope) {
                var yes = '\\butgrp{\\row{\\but{Yes}{T}}{\\but{No}{F}}}',
                    no = '\\butgrp{\\row{\\but{Yes}{F}}{\\but{No}{T}}}',
                    simplify = function(num, den) {
                        var leastPart = num > den ? den : num,
                            ii;

                        for (ii = 2; ii <= leastPart; ii += 1) {
                            while (num % ii === 0 && den % ii === 0) {
                                num = num / ii;
                                den = den / ii;
                                leastPart = leastPart / ii;
                            }
                        }

                        return {
                            numerator: num,
                            denominator: den
                        };
                    },
                    simplified = function(num, den) {
                        var simplified = simplify(num, den);
                        return num === simplified.numerator && den === simplified.den;
                    },
                    commonFactors = function(num, den) {
                        var factors = [];
                        var leastPart = num > den ? den : num,
                            ii;

                        for (ii = 2; ii <= leastPart; ii += 1) {
                            if (num % ii === 0 && den % ii === 0) {
                                factors.push(ii.toString());
                            }
                        }
                        return factors;
                    };

                $scope.$watch('expected', function() {
                    if ($scope.expected) {
                        $scope.args = parser.extractTag($scope.expected).args;
                        $scope.instructions = "Can the fraction be simplified?";
                        $scope.simplifiedexp = simplified($scope.args[0], $scope.args[1]) ? no : yes;
                        $scope.simplifiedlbl = "simplified";
                        $scope.step = 'simplified';
                    }
                });

                $scope.$on('answer', function(e, data) {
                    console.log(data);
                    e.stopPropagation();
                    switch (data.label) {
                        case "simplified":
                            if (data.result === "correct") {
                                $scope.instructions = "What is a common factor of the numerator and denominator?";
                                $scope.factorexp = '\\input{["' + commonFactors($scope.args[0], $scope.args[1]).join('","') + '"]}';
                                $scope.factorlbl = "factor";
                                $scope.step = 'factor';
                            } else {
                                $scope.$emit('checkFocus');
                            }
                            break;
                    }
                });
            }]
        };
    }]);
