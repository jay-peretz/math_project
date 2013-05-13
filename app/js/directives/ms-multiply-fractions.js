'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('multiplyfracs', {
            directiveTemplate: '<ms-multiply-fractions expected={{expected}}></ms-multiply-fractions>'
        });
    }])
    .directive('msMultiplyFractions', ['numberUtils', 'parser', function (numberUtils, parser) {
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
                    $scope.answer = numberUtils.frac.multiply($scope.args);
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

                $scope.cancelHandler = function (e, data) {
                    var isntNull = function (x) {
                        return x !== null;
                    };

                    e.stopPropagation();
                    switch (data.label) {
                        case 'numerator':
                            // reduced numerator
                            if (data.expected.indexOf('css') === -1) {
                                $scope.cancel[2] = parser.extractTag(data.answer).args[0];
                            // original numerator
                            } else {
                                $scope.cancel[0] = parser.extractTag(parser.extractTag(data.answer).args[0]).args[0];
                            }
                            break;
                        case 'denominator':
                            // reduced denominator
                            if (data.expected.indexOf('css') === -1) {
                                $scope.cancel[3] = parser.extractTag(data.answer).args[0];
                            // original denominator
                            } else {
                                $scope.cancel[1] = parser.extractTag(parser.extractTag(data.answer).args[0]).args[0];
                            }
                            break;
                    }

                    if ($scope.cancel.every(isntNull)) {
                        // Transform $scope.cancel from form [1, 2, 3, 4] to form [[1, 2], [3, 4]]
                        var cancelFracs = $scope.cancel.reduce(function (acc, item, ii) {
                                ii % 2 === 0 ? acc.push([item]) : acc[acc.length - 1].push(item);
                                return acc;
                            }, []).map(function (item) {
                                return '\\frac{\\str{' + item.join('}}{\\str{') + '}}';
                            });

                        if (numberUtils.frac.equiv(cancelFracs)) {
                            $scope.$apply(function () {
                                $scope.replace($scope.cancelling.numerator.index, 0, $scope.cancel[2]);
                                $scope.replace($scope.cancelling.denominator.index, 1, $scope.cancel[3]);
                                $scope.cancelling.numerator = null;
                                $scope.cancelling.denominator = null;
                                $scope.cancel = [null, null, null, null];
                                $scope.update();
                            });
                        } else {
                            $scope.cancel = [null, null, null, null];
                        }
                    }
                };
            }],
            link: function (scope, element) {
                var restoreTag = function (tagString, area) {
                    switch (area) {
                        case 'numerator' : return parser.extractTag(parser.extractTag(tagString).args[1]).args[0];
                        case 'denominator' : return parser.extractTag(parser.extractTag(tagString).args[0]).args[0];
                    }
                };

                jQuery(element).on('click', '.problem ms-fraction ms-event-label', function (e) {
                    var clickedScope = angular.element(e.target).scope().$parent;
                    switch (clickedScope.label) {
                        case 'numerator':
                            if (scope.cancelling.numerator !== clickedScope) {
                                scope.$apply(function () {
                                    if (scope.cancelling.numerator !== null) {
                                        scope.cancelling.numerator.expected = restoreTag(scope.cancelling.numerator.expected, 'numerator');
                                        scope.cancelling.numerator.clear();
                                    }
                                    scope.cancelling.numerator = clickedScope;
                                    scope.cancelling.numerator.expected = '\\rowgrp{\\input{}}{\\css{' + scope.cancelling.numerator.expected + '}{cancel}}';
                                    scope.cancelling.numerator.clear = scope.cancelling.numerator.$on('answer', scope.cancelHandler);
                                    scope.cancelling.numerator.index = jQuery('ms-multiply-fractions ms-fraction').index(jQuery(e.target).closest('ms-fraction'));
                                });
                            }
                            break;
                        case 'denominator':
                            if (scope.cancelling.denominator !== clickedScope) {
                                scope.$apply(function () {
                                    if (scope.cancelling.denominator !== null) {
                                        scope.cancelling.denominator.expected = restoreTag(scope.cancelling.denominator.expected, 'denominator');
                                        scope.cancelling.denominator.clear();
                                    }
                                    scope.cancelling.denominator = clickedScope;
                                    scope.cancelling.denominator.expected = '\\rowgrp{\\css{' + scope.cancelling.denominator.expected + '}{cancel}}{\\input{}}';
                                    scope.cancelling.denominator.clear = scope.cancelling.denominator.$on('answer', scope.cancelHandler);
                                    scope.cancelling.denominator.index = jQuery('ms-multiply-fractions ms-fraction').index(jQuery(e.target).closest('ms-fraction'));
                                });
                            }
                            break;
                    }
                });
            },
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            templateUrl: 'partials/directives/ms-multiply-fractions.html'
        };
    }]);
