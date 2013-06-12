'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('cancelfracs', {
            directiveTemplate: '<ms-cancel-fractions expected={{expected}}></ms-cancel-fractions>'
        });
    }])
    .directive('msCancelFractions', ['numberUtils', 'parser', function (numberUtils, parser) {
        return {
            controller: ['$scope', function ($scope) {
                // Generates ms-expresion expected tag string for question display.
                $scope.display = function () {
                    return '\\row{' + $scope.fracs.map(numberUtils.frac.toFrac).join('}{\\sign{&times;}}{') + '}';
                };
                // Generates ms-expression expected tag string for question buttons.
                $scope.question = function () {
                    var multiplied = numberUtils.frac.multiply($scope.fracs.map(numberUtils.frac.toFrac), 'str'),
                        simplified = multiplied === numberUtils.frac.simplify(multiplied);

                    return '\\butgrp{\\row{\\but{Yes}{' + (simplified === true ? 'F' : 'T') + '}}{\\but{No}{' + (simplified === false ? 'F' : 'T') + '}}}';
                };
                $scope.curStep = 'cancelling';
                $scope.cancelling = { num: null, den: null };
                $scope.cancelled = [null, null];
                $scope.controllerId = Math.random().toString();
                $scope.instructions = 'Click on 2 values (1 numerator and 1 denominator) that have a common factor other than one.';

                $scope.cancelClick = function (frac, piece) {
                    $scope.cancelling[piece] = frac;
                    if ($scope.cancelling.num !== null && $scope.cancelling.den !== null) {
                        $scope.instructions = 'Enter the result of cancelling the selected numerator and denominator.';
                    }
                };

                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        $scope.fracs = parser.extractTag($scope.expected).args.map(JSON.parse);
                    }
                });

                $scope.$on('answer', function (e, data) {
                    if (data.label === 'question') {
                        if (data.result === 'correct' && parser.extractTag(data.answer).args[0] === 'Yes') {
                            e.stopPropagation();
                            $scope.curStep = 'cancelling';
                            $scope.instructions = 'Click on 2 values (1 numerator and 1 denominator) that have a common factor other than one.';
                        } else if (data.result === 'incorrect') {
                            e.stopPropagation();
                        } else {
                            data.answer = data.expected = $scope.display();
                        }
                    } else {
                        e.stopPropagation();

                        switch (data.label) {
                            case 'num' : $scope.cancelled[0] = +parser.extractTag(data.answer).args[0]; break;
                            case 'den' : $scope.cancelled[1] = +parser.extractTag(data.answer).args[0]; break;
                        }
    
                        if ($scope.cancelled.every(function (val) { return val !== null; })) {
                            var cancelling = [$scope.fracs[$scope.cancelling.num][0], $scope.fracs[$scope.cancelling.den][1]];
    
                            if (numberUtils.frac.equiv([numberUtils.frac.toFrac(cancelling), numberUtils.frac.toFrac($scope.cancelled)])) {
                                $scope.fracs[$scope.cancelling.num][0] = $scope.cancelled[0];
                                $scope.fracs[$scope.cancelling.den][1] = $scope.cancelled[1];
                                $scope.cancelling = { num: null, den: null };
                                $scope.curStep = 'question';
                                $scope.instructions = 'Can you cancel again?';
                            } else {
                                $scope.cancelled = [null, null];
                            }
                        }
                    }
                });
            }],
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            templateUrl: 'partials/directives/ms-cancel-fractions.html'
        };
    }]);
