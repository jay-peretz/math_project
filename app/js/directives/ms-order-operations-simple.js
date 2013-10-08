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
                        saved = parser.replace($scope.rows[$scope.cur], 'btn', 'html');
                    },
                    showInput = function () {
                        var newArgs1 = parser.extractTag($scope.rows[$scope.cur]).args.map(function (tagString) {
                            var parsed = parser.extractTag(tagString);
                            if (parsed.tag === 'btn' && parsed.args[1] === 'T') {
                                tagString = '\\grp{\\html{}}{\\css{\\sign{' + parsed.args[0] + '}}{bigger}}';
                            }
                            return tagString;
                        });
						var newArgs2 = parser.extractTag($scope.rows[$scope.cur]).args.map(function (tagString) {
                            var parsed = parser.extractTag(tagString);
                            if (parsed.tag === 'btn' && parsed.args[1] === 'T') {
                                tagString = '\\rowgrp{css{\\html{&#125;}}{brace90}}{' + $scope.answers[$scope.cur] + '}';
                            } else {
								tagString = '\\css{' + tagString + '}{noShow}';
							}
                            return tagString;
                        });
                        $scope.rows[$scope.cur] = '\\grp{' + newArgs1.join('}{') + '}';
						$scope.inputExpression = '\\grp{' + newArgs2.join('}{') + '}';
						$scope.currentExpression = updateExpression($scope.rows, $scope.cur);
                    },
					updateExpression = function (scopeRows, scopeCur) {
						var workingExpression = "\\rowgrp{";
										
						for (var ii = 0; ii <= scopeCur; ii += 1) {	
							if (ii !== 0) {
								workingExpression += "}{"+scopeRows[ii];
							} else {
								workingExpression += scopeRows[ii];
							}
						}
						
						workingExpression += "}";
						console.log("workingExpression is: ",workingExpression);
						return workingExpression;
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
							$scope.currentExpression = updateExpression($scope.rows, $scope.cur);
                        } catch (e) {
                            console.error(e, $scope.rows);
                        }
                    }
                });

                $scope.$on('answer', function (e, data) {
					var answerExpected = $scope.answers[$scope.cur];
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
                            if (data.result === 'correct' && data.expected.indexOf(answerExpected) !== -1) {
								$scope.inputExpression = "";
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
										$scope.currentExpression = updateExpression($scope.rows, $scope.cur);
										console.log("$scope.currentExpression is: ",$scope.currentExpression);
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
			template:   '<div class="alert alert-block alert-info">'+
                                '{{instructions}}'+
                            '</div>'+
                            '<span>'+
							'<ms-expression expected={{currentExpression}}>'+
								'expected={{currentExpression}}'+
							'</ms-expression>'+
							'</span>'+
							'<span>'+
							'<ms-expression expected={{inputExpression}}>'+
								'expected={{inputExpression}}'+
							'</ms-expression>'+
							'</span>'
        };
    }]);
