'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('ordopssimple', {
            directiveTemplate: '<ms-order-operations-simple expected={{expected}}></ms-order-operations-simple>'
        });
    }])
    .directive('msOrderOperationsSimple', ['parser', '$timeout', function (parser, $timeout) {
        return {
            controller: ['$scope', '$element', function ($scope, $element) {
                var saved = null,
                    saveStep = function () {
                        saved = parser.replace($scope.rows[$scope.cur], 'but', 'str');
                    },
                    showInput = function () {
                        var newArgs = parser.extractTag($scope.rows[$scope.cur]).args.map(function (tagString) {
                            var parsed = parser.extractTag(tagString);
                            if (parsed.tag === 'but' && parsed.args[1] === 'T') {
                                tagString = '\\col{\\sign{' + parsed.args[0] + '}}{\\html{&#9660;}}{' + $scope.answers[$scope.cur] + '}';
                            }
                            return tagString;
                        });
                        $scope.rows[$scope.cur] = '\\row{' + newArgs.join('}{') + '}';
                    };
                $scope.cur = 0;
                $scope.mode = 'row';
                $scope.instructions = 'Click on the operator that should be evaluated first.';

                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        try {
                            var expecteds = parser.extractTag($scope.expected).args[0].split(',');
                            $scope.rows = expecteds.filter(function (str, i) { return i % 2 === 0; });
                            $scope.answers = expecteds.filter(function (str, i) { return i % 2 !== 0; });
                        } catch (e) {
                            console.error(e, $scope.rows);
                        }
                    }
                });

                $scope.$on('answer', function (e, data) {
                    switch ($scope.mode) {
                        case 'row':
                            if (data.result === 'correct') {
                                saveStep();
                                showInput();
                                $scope.mode = 'answer';
                                $scope.instructions = 'Evaluate the operator.';
                            }
                            e.stopPropagation();
                            break;
                        case 'answer':
                            if (data.result === 'correct' && data.expected === $scope.answers[$scope.cur]) {
                                if ($scope.rows.length === $scope.cur + 2) {
                                    $scope.instructions = 'Great Job!  You have fully solved the problem.';
                                    $timeout(function () {
                                        $scope.rows[$scope.cur] = saved;
                                        $scope.cur += 1;
                                        $scope.mode = 'row';
                                    }, 0);
                                } else {
                                    $timeout(function () {
                                        $scope.rows[$scope.cur] = saved;
                                        $scope.cur += 1;
                                        $scope.mode = 'row';
                                        $scope.instructions = 'Click on the operator that should be evaluated next.';
                                    }, 0);
                                    e.stopPropagation();
                                }
                            } else {
                                e.stopPropagation();
                            }
                            break;
                        default: e.stopPropagation(); break;
                    }
                });
            }],
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            templateUrl: 'partials/directives/ms-order-operations-simple.html'
        };
    }]);
