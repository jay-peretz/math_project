'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('cancelfracs', {
            directiveTemplate: '<ms-cancel-fractions expected={{expected}}></ms-cancel-fractions>'
        });
    }])
    .directive('msCancelFractions', ['numberUtils', 'parser', 'problemData', function (numberUtils, parser, problemData) {
        return {
            controller: ['$scope', function ($scope) {
                var makeFracPlusRecord = function (frac, i) {
                    var str = '\\frac{';
                    str += $scope.cancelRecord[i].num.length > 0 ? '\\col{\\str{' + frac[0] +  '}}{\\css{' + $scope.getCancelledRecord(i, 'num') + '}{cancel}}' : '\\str{' + frac[0] +  '}';
                    str += '}{';
                    str += $scope.cancelRecord[i].den.length > 0 ? '\\col{\\css{' + $scope.getCancelledRecord(i, 'den') + '}{cancel}}{\\str{' + frac[1] +  '}}' : '\\str{' + frac[1] +  '}';
                    return str + '}';
                };
                // Generates ms-expresion expected tag string for question display.
                $scope.display = function () {
                    return '\\row{' + $scope.fracs.map(makeFracPlusRecord).join('}{\\sign{&times;}}{') + '}';
                };

                // Generates ms-expression expected tag string for question buttons.
                $scope.question = function () {
                    var simplified = $scope.isSimplified();

                    return '\\butgrp{\\row{\\but{Yes}{' + (simplified === true ? 'F' : 'T') + '}}{\\but{No}{' + (simplified === false ? 'F' : 'T') + '}}}';
                };

                // Determines whether the fractions have been fully cancelled.
                $scope.isSimplified = function () {
                    var multiplied = numberUtils.frac.multiply($scope.fracs.map(numberUtils.frac.toFrac), 'str');

                    return multiplied === numberUtils.frac.simplify(multiplied);
                };

                $scope.curStep = 'cancelling';
                $scope.cancelling = { num: null, den: null };
                $scope.cancelled = [null, null];
                $scope.controllerId = Math.random().toString();
                $scope.instructions = 'Click on 2 values (1 numerator and 1 denominator) that have a common factor other than one.';
                $scope.hasCancelledRecord = function (i, piece) {
                    return $scope.cancelRecord[i][piece].length > 0;
                };

                $scope.getCancelledRecord = function (i, piece) {
                    if (piece === 'num') {
                        return '\\col{\\str{' + angular.copy($scope.cancelRecord[i][piece]).reverse().join('}}{\\str{') + '}}';
                    } else {
                        return '\\col{\\str{' + $scope.cancelRecord[i][piece].join('}}{\\str{') + '}}';
                    }
                };

                $scope.padding = function (i, piece) {
                    var mostCancelledNumerators = $scope.cancelRecord.map(function (frac) { return frac.num.length; }).reduce(function (a, b) { return Math.max(a, b); }),
                        pads = mostCancelledNumerators - $scope.cancelRecord[i][piece].length;

                    return pads > 0 ? new Array(pads) : [];
                };

                $scope.cancelClick = function (frac, piece) {
                    $scope.cancelling[piece] = frac;
                    if ($scope.cancelling.num !== null && $scope.cancelling.den !== null) {
                        $scope.instructions = 'Enter the result of cancelling the selected numerator and denominator.';
                    }
                };

                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        $scope.fracs = parser.extractTag($scope.expected).args.map(JSON.parse);
                        $scope.cancelRecord = $scope.fracs.map(function () { return { num: [], den: [] } });

                        // If the fractions are already simplified.
                        if ($scope.isSimplified()) {
                            // Display the question step.
                            $scope.curStep = 'question';
                            $scope.instructions = 'Can you cancel?';
                        }
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
                            problemData.setData($scope.fracs[0][0], 'n1');
                            problemData.setData($scope.fracs[0][1], 'd1');
                            problemData.setData($scope.fracs[1][0], 'n2');
                            problemData.setData($scope.fracs[1][1], 'd2');
                            if ($scope.fracs.length === 3) {
                                problemData.setData($scope.fracs[2][0], 'n3');
                                problemData.setData($scope.fracs[2][1], 'd3');
                            }
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
                                $scope.cancelRecord[$scope.cancelling.num].num.push($scope.fracs[$scope.cancelling.num][0]);
                                $scope.cancelRecord[$scope.cancelling.den].den.push($scope.fracs[$scope.cancelling.den][1]);
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
