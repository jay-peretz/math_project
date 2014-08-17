'use strict';
/*global angular */
// ordopssimple tag accepts multiple parameters:
// first parameter a series of lines in mathproject language with commas between them
// first parameter odd lines represent the terms and operators including buttons
// first parameter even lines are answer input when term or operator button is clicked
// second parameter can be {terms}- changes default instructions to "terms and operators"
// otherwise second and all other parameters represent successive instructions
// if there is no second parameter the default instructions apply.
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
					termsFlag = false,
                    saveStep = function () {
                        //saved = parser.replace($scope.rows[$scope.cur], 'btn', 'html');
						var newArgsSaved = parser.extractTag($scope.rows[$scope.cur]).args.map(function (tagString) {
                            var parsed = parser.extractTag(tagString);
                            if (parsed.tag === 'btn') {
                                tagString = '\\css{\\html{' + parsed.args[0] + '}}{bigger}';
                            }
                            return tagString;
                        });
						saved = '\\grp{' + newArgsSaved.join('}{') + '}';
                    },
                    showInput = function () {
                        var newArgs1 = parser.extractTag($scope.rows[$scope.cur]).args.map(function (tagString) {
                            var parsed = parser.extractTag(tagString),
								curWhole = "0",
								curNum = "0",
								curDen = "0";
							// given inputs in frac tag, get numerator, denominator
							if (parser.extractTag($scope.answers[$scope.cur]).tag === "frac") {			
								curNum = parser.extractTag(parser.extractTag($scope.answers[$scope.cur]).args[0]).args[0];
								curDen = parser.extractTag(parser.extractTag($scope.answers[$scope.cur]).args[1]).args[0]
							}
							// given inputs in mixed tag, get whole, numerator, denominator- this is not used at the moment
							/*if (parser.extractTag($scope.answers[$scope.cur]).tag === "mixed") {					
								curWhole = parser.extractTag(parser.extractTag($scope.answers[$scope.cur]).args[0]).args[0];
								curNum = parser.extractTag(parser.extractTag(parser.extractTag($scope.answers[$scope.cur]).args[1]).args[0]).args[0];
								curDen = parser.extractTag(parser.extractTag(parser.extractTag($scope.answers[$scope.cur]).args[1]).args[1]).args[0]
							}*/
							
                            if (parsed.tag === 'btn' && parsed.args[1] === 'T') {
								// improve centering of brace- adjust space around operator in second-to-last line of display based on last line tag displayed
								switch (true) {
									case(parser.extractTag($scope.answers[$scope.cur]).tag === "frac"):
									// test for two digit numbers in numerator or denominator and adjust space
										if (curNum.length > 1 || curDen.length > 1) {
											tagString = '\\sign{&nbsp;&nbsp;&nbsp;&nbsp;' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;}';
										} else {
											tagString = '\\sign{&nbsp;&nbsp;&nbsp;' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;}';
										}
										break;
									case(parser.extractTag($scope.answers[$scope.cur]).tag === "mixed"): 
										tagString = '\\sign{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}';
										break;
									// default includes whole numbers 
									default: 
										tagString = '\\sign{<span style="padding-left:.8em;">&nbsp;</span>' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;}';
										break;
										
								}
                            } else if (parsed.tag === 'btn') {
								tagString = '\\grp{\\css{\\html{' + parsed.args[0] + '}}{fakeButton}}';
							}
							
                            return tagString;
                        });
						var newArgs2 = parser.extractTag($scope.rows[$scope.cur]).args.map(function (tagString) {
                            var parsed = parser.extractTag(tagString);
							switch (true) {
								case(parsed.tag === 'btn' && parsed.args[1] === 'T'):
									tagString = '\\grp{\\rowgrp{css{\\html{&#125;}}{brace90Simple}}{' + $scope.answers[$scope.cur] + '}}';
									break	
								case(parsed.tag === 'btn' && parsed.args[1] === 'F'):					
									tagString = '\\grp{\\css{\\html{' + parsed.args[0] + '}}{fakeButton noShow}}';
									break;
								default:
									tagString = '\\css{' + tagString + '}{noShow}';
									break;
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
				$scope.instructArray = ['Evaluate the operator.'];
                $scope.instructions = 'Click on the operator that should be evaluated first.';

                $scope.$watch('expected', function () {
                    if ($scope.expected) {
						// more than one parameter to ordopssimple tag, push to array
						// set 'row' instruction to first additional parameter 
						if (parser.extractTag($scope.expected).args.length > 1) {
							if (parser.extractTag($scope.expected).args[1] === "terms") {
								termsFlag = true;
								$scope.instructions = 'Click on the term or the operator that should be evaluated first.';
							}
							for (var ii = termsFlag? 2: 1, len = parser.extractTag($scope.expected).args.length; ii < len; ii += 1) {
								$scope.instructArray.push(parser.extractTag($scope.expected).args[ii]);
							}
							$scope.evalText = $scope.instructArray[$scope.cur + 1];
						} else {
							// if only one parameter, 'row' instruction to default
							$scope.evalText = $scope.instructArray[$scope.cur];
						}
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
								if ($scope.cur + 1 < $scope.instructArray.length) { 
                                	$scope.evalText = $scope.instructArray[$scope.cur + 1];
								}
								$scope.instructions = $scope.evalText;
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
                                        if (termsFlag === false) {
                                        	$scope.instructions = 'Click on the operator that should be evaluated next.';
										} else {
											$scope.instructions = 'Click on the term or the operator that should be evaluated first.';
										}
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
			template:   '<div class="alert alert-block alert-info" ng-bind-html-unsafe=instructions>'+
                            '</div>'+
                            '<span class=ms-order-ops-simple>'+
							'<ms-expression expected={{currentExpression}}>'+
								'expected={{currentExpression}}'+
							'</ms-expression>'+
							'</span>'
        };
    }]);
