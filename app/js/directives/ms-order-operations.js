'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('ordops', {
            directiveTemplate: '<ms-order-operations expected={{expected}}></ms-order-operations>'
        });
    }])
    .directive('msOrderOperations', ['Expression', 'parser', '$timeout', function (Expression, parser, $timeout) {
        return {
            controller: ['$scope', '$element', function ($scope, $element) {
                var convertSigns = function (symbol) {
                    switch (symbol) {
                        case '*': return '×';
                        case '/': return '÷';
                        default: return symbol;
                    }
                };

                $scope.instructions = 'Click on the first operator that should be evaluated.';
                $scope.currentExpression = null;    // The sub-expression currently being evauluated.
                $scope.index = null;                // The index of the current operator being evaluated.
                $scope.finished = [];               // An array of previous steps in the evaluation.
                $scope.controllerId = Math.random().toString();

                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        $scope.expression = Expression.create(parser.extractTag($scope.expected).args[0]);
                        $scope.queue = $scope.expression.getQueue().reduce(function flattenQueue(acc, item) {
                            if (typeof item.getQueue === 'function') {
                                acc = acc.concat([{ type: 'parens', value: '(' }], item.getQueue().reduce(flattenQueue, []), [{ type: 'parens', value: ')' }]);
                            } else {
                                acc.push(item);
                            }
                            return acc;
                        }, []);
                        $scope.evalQueue = $scope.expression.getEvaluationQueue();
                    }
                });

                $scope.$watch('queue', function () {
                    $scope.queue = $scope.queue.reduce(function (acc, item, ii, arr) {
                        if (item.value === '(') {
                            // empty parens.
                            if (arr[ii + 1].value === ')') {
                                arr.splice(ii + 1, 1);
                            // single item parens.
                            } else if (arr[ii + 2].value === ')') {
                                arr.splice(ii + 2, 1);
                            // parens to keep.
                            } else {
                                acc.push(item);
                            }
                        } else {
                            acc.push(item);
                        }
                        return acc;
                    }, []);
                }, true);

                $scope.getExpected = function (op, index) {
                    switch (op.type) {
                        case 'value':
                        case 'parens': return '\\str{' + op.value.toString() + '}';
                        case 'operator':
                            if (index === $scope.index) {
                                return '\\rowgrp{\\str{' + convertSigns(op.value) + '}}{\\html{&#9660;}}{\\input{' + Expression.evalQueueValue($scope.currentExpression) + '}}';
                            } else {
                                return '\\but{' + convertSigns(op.value) + '}{' + (op.operation === $scope.evalQueue[0].operator.operation ? 'T' : 'F') + '}';
                            }
                    }
                };

                $scope.getFinishedExpected = function (op) {
                    return '\\str{' + convertSigns(op.value) + '}';
                };

                $scope.$on('answer', function (e, data) {
                    // Ignore our own events.
                    if (data.controllerId !== $scope.controllerId) {
                        e.stopPropagation();
                        // Make sure data.expected is at least an empty string to avoid console errors.
                        data.expected = data.expected || '';
                        switch (parser.extractTag(data.expected).tag) {
                            case 'but' :
                                if (data.result === 'correct') {
                                    $scope.index = +data.label;
                                    $scope.currentExpression = $scope.evalQueue.shift();
                                    $scope.instructions = 'Solve ' + $scope.currentExpression.op1.value + ' ' + $scope.currentExpression.operator.value + ' ' + $scope.currentExpression.op2.value + '.';
                                    $timeout(function () { $scope.$broadcast('checkFocus'); }, 0);
                                }
                                break;
                            case 'input' :
                                if (data.result === 'correct') {
                                    $scope.finished.push($scope.queue.slice(0));
                                    $scope.queue.splice($scope.index - 1, 3, { type: 'value', value: Expression.evalQueueValue($scope.currentExpression) });
                                    $scope.index = null;
                                    $scope.currentExpression = null;

                                    // If this was the last evaluation.
                                    if ($scope.evalQueue.length === 0) {
                                        $scope.instructions = 'Great job!  You have fully solved the expression.';
                                        $scope.$emit('answer', {
                                            result: 'correct',
                                            expected: data.expected,
                                            answer: data.answer,
                                            label: $scope.label,
                                            controllerId: $scope.controllerId
                                        });
                                    } else {
                                        $scope.instructions = 'Click on the next operator that should be evaluated.';
                                    }
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
            templateUrl: 'partials/directives/ms-order-operations.html'
        };
    }]);
