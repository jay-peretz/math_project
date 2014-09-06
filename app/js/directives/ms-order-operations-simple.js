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
					numberOfSpaces,
                    saveStep = function () {
                        //saved = parser.replace($scope.rows[$scope.cur], 'btn', 'html');
						var newArgsSaved = parser.extractTag($scope.rows[$scope.cur]).args.map(function (tagString) {
                            var parsed = parser.extractTag(tagString);
                            if (parsed.tag === 'btn') {
								if (parsed.args[0].length === 1) {
                                	tagString = '\\str{' + parsed.args[0] + '}';
								} else {
									tagString = '\\css{\\html{' + parsed.args[0] + '}}{large}';
								}
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
									
									// test for more than 2 digits in input numerator or denominator and no exponential/no pair of terms above, adjust space
									case(parser.extractTag($scope.answers[$scope.cur]).tag === "frac" && parsed.args[0].length === 1):
										if (curNum.length > 1 || curDen.length > 1) {
											tagString = '\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}';
										} else {
											tagString = '\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;}';
										}
										break;
										
									// test for mixed fraction input, and no exponential/no pair of terms above, adjust space
									case(parser.extractTag($scope.answers[$scope.cur]).tag === "mixed" && parsed.args[0].length === 1): 
										tagString = '\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}';
										break;
										
									// case for exponent "sup" tag in button text 
									case(parsed.args[0].length > 1 && parsed.args[0].indexOf("sup") !== -1): 
										tagString = '\\css{\\html{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}}{large}';
										break;
										
									// case for exponent or two terms as button text
									case(parsed.args[0].length > 1 && parsed.args[0].indexOf("sup") === -1): 
										if (parsed.args[0].length > 4) {
												numberOfSpaces = "&nbsp;";
										} else {
												numberOfSpaces = "&nbsp;&nbsp;&nbsp;";
										}
										tagString = '\\css{\\html{'+ numberOfSpaces + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}}{large}';
										break;
										
									// default includes whole numbers 
									default: 
										tagString = '\\str{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + parsed.args[0] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}';
										break;
										
								}
								//console.log("tagString is: ",tagString);
                            } else if (parsed.tag === 'btn') {
								tagString = '\\grp{\\css{\\str{' + parsed.args[0] + '}}{fakeButton}}';
							}
							
                            return tagString;
                        });
						var newArgs2 = parser.extractTag($scope.rows[$scope.cur]).args.map(function (tagString) {
                            var parsed = parser.extractTag(tagString);
							switch (true) {
								case(parsed.tag === 'btn' && parsed.args[1] === 'T'):
									
									// if this button has an operator for a label
									if (parsed.args[0].length === 1) {
										tagString = '\\grp{\\rowgrp{css{\\html{&#125;}}{brace90Simple}}{' + $scope.answers[$scope.cur] + '}}';
									// if this button has an exponent "<sup>" tag & a paren
									} else if (parsed.args[0].indexOf("sup") !== -1) {
										if (parsed.args[0].indexOf("(") !== -1 || parsed.args[0].indexOf("-") !== -1) {																			
											tagString = '\\grp{\\html{&nbsp;}}{\\rowgrp{css{\\html{&#125;}}{brace90Simple}}{' + $scope.answers[$scope.cur] + '}}';
										} else {
											tagString = '\\grp{\\rowgrp{css{\\html{&#125;}}{brace90Simple}}{' + $scope.answers[$scope.cur] + '}}';
										}
									// if this button has a fraction or a pair of terms as label
									} else {
										//exclude pair of terms
										if (parsed.args[0].indexOf("(") === -1) {
											tagString = '\\grp{\\html{&nbsp;&nbsp;&nbsp;&nbsp;}}{\\rowgrp{css{\\html{&#125;}}{brace90Simple}}{' + $scope.answers[$scope.cur] + '}}';
										} else {
											tagString = '\\grp{\\rowgrp{css{\\html{&#125;}}{brace90Simple}}{' + $scope.answers[$scope.cur] + '}}';
										}
									}
									//console.log("2 tagString is: ",tagString);
									break	
								case(parsed.tag === 'btn' && parsed.args[1] === 'F'):					
									tagString = '\\grp{\\css{\\str{' + parsed.args[0] + '}}{fakeButton noShow}}';
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
			template:   '<div class="alert alert-block alert-info" ng-bind-html-unsafe=instructions|enlargeOps>'+
                            '</div>'+
                            '<span class=ms-order-ops-simple>'+
							'<ms-expression expected={{currentExpression}}>'+
								'expected={{currentExpression}}'+
							'</ms-expression>'+
							'</span>'
        };
    }]);
