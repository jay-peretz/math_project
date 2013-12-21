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
                        //saved = parser.replace($scope.rows[$scope.cur], 'btn', 'html');
						var newArgsSaved = parser.extractTag($scope.rows[$scope.cur]).args.map(function (tagString) {
                            var parsed = parser.extractTag(tagString);
                            if (parsed.tag === 'btn') {
                                tagString = '\\css{\\sign{' + parsed.args[0] + '}}{bigger}';
                            }
                            return tagString;
                        });
						saved = '\\grp{' + newArgsSaved.join('}{') + '}';
                    },
                    showInput = function () {
                        var newArgs1 = parser.extractTag($scope.rows[$scope.cur]).args.map(function (tagString) {
                            var parsed = parser.extractTag(tagString);
                            if (parsed.tag === 'btn' && parsed.args[1] === 'T') {
								// improve centering of brace- adjust space around operator in penultimate line of display based on last line tag displayed
								switch (true) {
									case(parser.extractTag($scope.answers[$scope.cur]).tag === "frac"):
										tagString = '\\sign{&nbsp;&nbsp;&nbsp;&nbsp;' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}';
										break;
									case(parser.extractTag($scope.answers[$scope.cur]).tag === "mixed"): 
										tagString = '\\sign{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}';
										break;
									// default includes whole numbers 
									default: 
										tagString = '\\sign{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}';
										break;
										
								}
                            } else if (parsed.tag === 'btn') {
								tagString = '\\grp{\\css{\\html{' + parsed.args[0] + '}}{fakeButton}}';
							}
							
                            return tagString;
                        });
						var newArgs2 = parser.extractTag($scope.rows[$scope.cur]).args.map(function (tagString) {
                            var parsed = parser.extractTag(tagString);
                            if (parsed.tag === 'btn' && parsed.args[1] === 'T') {
								tagString = '\\grp{\\rowgrp{css{\\html{&#125;}}{brace90Simple}}{' + $scope.answers[$scope.cur] + '}}';
                            } else {
								tagString = '\\css{' + tagString + '}{noShow}';
							}
                            return tagString;
                        });
                        $scope.rows[$scope.cur] = '\\rowgrp{\\grp{' + newArgs1.join('}{') + '}}{\\grp{' + newArgs2.join('}{') + '}}';
						$scope.currentExpression = updateExpression($scope.rows, $scope.cur);
                    },
					updateExpression = function (scopeRows, scopeCur) {
						var workingExpression = "\\rowgrp{";
										
						for (var ii = 0; ii <= scopeCur; ii += 1) {	
							if (ii !== 0) {
								workingExpression += "}}{\\grp{\\html{&nbsp;}}{"+scopeRows[ii];
							} else {						
								workingExpression += "\\grp{\\html{&nbsp;}}{"+scopeRows[ii];
							}
						}
						
						workingExpression += "}}";
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
								$timeout(function () { 
									$scope.$broadcast('checkFocus');
								}, 0);
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
                            '<span class=ms-order-ops-simple>'+
							'<ms-expression expected={{currentExpression}}>'+
								'expected={{currentExpression}}'+
							'</ms-expression>'+
							'</span>'
        };
    }]);
