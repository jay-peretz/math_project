'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('longdivdecimal', {
            argTemplates: [{
                name: 'dividend'
            }, {
                name: 'divisor'
            }, {
                name: 'digitsRightInExponential'
            }],
            directiveTemplate: '<ms-long-division-decimal expected={{expected}} label={{label}}></ms-long-division-decimal>'
        });
    }])
    .directive('msLongDivisionDecimal', [
        'parser',
        function (parser) {
            var getDivisionStep = function (dividend, divisor, centralArray, dividendArr, poppedArr, steps) {
                var curDividend = '',
                    dividendPiece,
                    quotient, 
					returnObject;
                
                if (steps.length > 0) {
                    curDividend = steps[steps.length - 1].difference;
                    dividendPiece = dividendArr.shift();
					if (dividendPiece.toString().slice(-1) === ".") {
						dividendPiece = dividendArr.shift();
					}
                    curDividend += dividendPiece;
                    poppedArr.push(dividendPiece);
                } else {
                    while ( +curDividend < divisor) {
                        dividendPiece = dividendArr.shift();
                        curDividend += dividendPiece;
                        poppedArr.push(dividendPiece);
                    }
                }
                
                dividend = +curDividend;
                quotient = Math.floor(dividend / divisor);

				for (var ii = 0, len = centralArray[0].length; ii < len; ii += 1) {
					switch (true) {
						case (ii < (poppedArr.length - dividend.toString().length)):
						  centralArray[steps.length][ii] = "";
						  break;
						case (ii > (poppedArr.length - dividend.toString().length) - 1 && ii < poppedArr.length):							
						  centralArray[steps.length][ii] = dividend.toString().charAt(ii - (poppedArr.length - dividend.toString().length));
						  break;
						case (ii > poppedArr.length - 1):
						  centralArray[steps.length][ii] = "";
						  break;
					}
				}
				
				// add space in front to accommodate "-" on multiplication step
				centralArray[steps.length].unshift("");
	
				returnObject = {
                    type: 'division',
                    dividend: dividend,
                    divisor: divisor,
                    quotient: quotient,
                    offset: steps.length === 0 ? poppedArr.length - 1 : undefined,
                    instructions: 'Divide ' +  dividend + ' by ' + divisor + '.'
                };
				return returnObject;
            },
            getMultiplicationStep = function (dividend, divisor, centralArray, dividendArr, poppedArr, steps) {
                var multiplicand1 = divisor,
                    multiplicand2 = steps[steps.length - 1].quotient,
                    product = multiplicand1 * multiplicand2,
					returnObject;
				
				for (var ii = 0, len = centralArray[0].length; ii < len; ii += 1) {
					switch (true) {
						case (ii < (poppedArr.length - product.toString().length - 1)):
						  centralArray[steps.length][ii] = "";
						  break;
						// numbers that have spaces in front, add "-" in front of number
						case (ii === (poppedArr.length - product.toString().length - 1)):
						  centralArray[steps.length][ii] = "-";
						  break;
						case (ii > (poppedArr.length - product.toString().length) - 1 && ii < poppedArr.length ):							
						  centralArray[steps.length][ii] = product.toString().charAt(ii - (poppedArr.length - product.toString().length));
						  break;
						case (ii > poppedArr.length - 1):
						  centralArray[steps.length][ii] = "";
						  break;
					}
				}
				
				// numbers with no blanks in front, add space with "-", else add space with ""
			    if ((poppedArr.length - product.toString().length - 1) <= 0) {
				 	centralArray[steps.length].unshift("-");
			    } else {
					centralArray[steps.length].unshift("");
				}
				
                returnObject = {
                    type: 'multiplication',
                    multiplicand1: multiplicand1,
                    multiplicand2: multiplicand2,
                    product: product,
                    offset: poppedArr.length - product.toString().length,
                    instructions: 'Multiply ' +  multiplicand1 + ' by ' + multiplicand2 + '.'
                };
				
				return returnObject;
				
            },
            getSubtractionStep = function (dividend, divisor, centralArray, dividendArr, poppedArr, steps) {
                var minuend = steps[steps.length - 2].dividend,
                    subtrahend = steps[steps.length - 1].product,
                    difference = minuend - subtrahend,
					returnObject;

				for (var ii = 0, len = centralArray[0].length; ii < len; ii += 1) {
					switch (true) {
						case (ii < (poppedArr.length - difference.toString().length)):
						  centralArray[steps.length][ii] = "";
						  break;
						case (ii > (poppedArr.length - difference.toString().length) - 1 && ii < poppedArr.length):							
						  centralArray[steps.length][ii] = difference.toString().charAt(ii - (poppedArr.length - difference.toString().length));
						  break;
						case (ii > (poppedArr.length - difference.toString().length) + difference.toString().length - 1):
						  centralArray[steps.length][ii] = "";
						  break;
					}
				}
				
				// add space in front to accommodate "-" on multiplication step
				centralArray[steps.length].unshift("");
				
                returnObject = {
                    type: 'subtraction',
                    minuend: minuend,
                    subtrahend: subtrahend,
                    difference: difference,
                    offset: poppedArr.length - difference.toString().length,
                    instructions: 'Subtract ' +  subtrahend + ' from ' + minuend + '.'
                };
				
				return returnObject;
            },
            getLongDivisionSteps = function (dividend, divisor, centralArray) {
                var steps = [],
                    dividendArr = dividend.toString().split(''),
                    poppedArr = [];
                
                while (dividendArr.length > 0) {
                    steps.push(getDivisionStep(dividend, divisor, centralArray, dividendArr, poppedArr, steps));
                    steps.push(getMultiplicationStep(dividend, divisor, centralArray, dividendArr, poppedArr, steps));
                    steps.push(getSubtractionStep(dividend, divisor, centralArray, dividendArr, poppedArr, steps));
					
                }
                
				//console.log("JSON.stringify(centralArray) is: ",JSON.stringify(centralArray));
				
                if (steps.length > 0) {
                    steps.quotientOffset = steps[0].offset;
                }
          		steps.centralArray = centralArray;
                return steps;
            };

            return {
                controller: [
                    '$scope',
                    '$timeout',
					'$filter',
                    function ($scope, $timeout, $filter) {
                        var steps,
							answer,
							completedArrayCounter = 0,
							positionFirstDigit,
							completedArrayMinusLast,
							lastDigitPosition = 0,
							numberDigit,
							completedArrayLength,
							priorStepCarry = false,
                            changeStep = function () {
                                $scope.currentStep = steps.shift();
                                if ($scope.currentStep !== undefined) {
                                    $scope.instructions = $scope.currentStep.instructions;
                                } else {
                                    $scope.instructions = "Great Job!  Enter the quotient below"
									$scope.addedInstructions = "(remember to round if necessary):";
                                    $scope.complete = true;
                                }
					
								if (typeof $scope.currentStep !== 'undefined' && $scope.currentStep.type === 'division') {
									$scope.completedArray.splice($scope.completedArray.length - 2, 1);
								}
															
								// completedArrayMinusLast represents $scope.completedArray less last
								completedArrayMinusLast = $scope.completedArray.slice();
								
								if (priorStepCarry === false) {
									completedArrayMinusLast.pop();	
								}
								
								if (typeof $scope.currentStep !== "undefined" && $scope.currentStep.type === "carry") {
									priorStepCarry = true;
									$scope.arrowStep = true;
								} else {
									priorStepCarry = false;
									$scope.arrowStep = false;
								}					
							
							 // get position of the ones digit in last row of completedArrayMinusLast 
								numberDigit = false;
								if (typeof completedArrayMinusLast[0] !== "undefined") {
									completedArrayLength = completedArrayMinusLast[0].length;
									for (var ii = 0, minusLastLength = completedArrayMinusLast.length; ii < completedArrayLength; ii += 1) {
										switch (true) {
											case (completedArrayMinusLast[minusLastLength - 1][ii] === "" && numberDigit === false):
												if (lastDigitPosition < ii) {
													lastDigitPosition = ii;
												}
												break;
											case (completedArrayMinusLast[minusLastLength - 1][ii] !== "" && completedArrayMinusLast[minusLastLength - 1][ii] !== "x" && numberDigit === false):
												if (lastDigitPosition < ii) {
													lastDigitPosition = ii;
												}
												numberDigit = true;
												break;
											case (completedArrayMinusLast[minusLastLength - 1][ii] !== "" && completedArrayMinusLast[minusLastLength - 1][ii] !== "x" && numberDigit === true):
												if (lastDigitPosition < ii) {
													lastDigitPosition = ii;
												}
												break;
										}
									}
								}

								// $scope.narrowDisplayArray, each element lastDigitPosition + 1 length
								if (typeof completedArrayMinusLast[0] !== "undefined") {
									$scope.narrowDisplayArray = [];
									$scope.subtractionRowNumbers = [];
									for (var ii = 0, lenRows = completedArrayMinusLast.length; ii < lenRows; ii += 1) {
										$scope.narrowDisplayArray[ii] = [];
										for (var jj = 0, lenColumns = lastDigitPosition + 1; jj < lenColumns; jj += 1) {	
											// fill all columns with completedArrayMinusLast value | "y"
											if (completedArrayMinusLast[ii][jj] !== "") {
												$scope.narrowDisplayArray[ii][jj] =completedArrayMinusLast[ii][jj];
											} else {
												$scope.narrowDisplayArray[ii][jj] = "y";
											}
											// make array w entries representing subtraction row indexes
											if (completedArrayMinusLast[ii][jj] === "-") {
												$scope.subtractionRowNumbers.push(ii);
											}
										}
									}
								}
								
                                $timeout(function () {
                                    $scope.$broadcast('checkFocus');
                                }, 0);
                            },
                            addDownArrows = function () {
                                $scope.completedSteps.slice(0, -1).forEach(function (step) {
                                    if (integerDigits($scope.dividend) !== step.value.toString().length + step.offset) {
                                    	step.value += '↓';
									} else {
										step.value += 'y';
									}
                                });
                            },
							decimalDigits = function (num) {
								if (num.toString().indexOf('.') !== -1) {
									return num.toString().split('.')[1].length;
								} else {
									return 0;
								}
							},
							integerDigits = function (num) {
								if (num.toString().indexOf('.') !== -1) {
									return num.toString().split('.')[0].length;
								} else {
									return num.toString().length;
								}
							},
							trim = function(str) {
									return str.replace(/^\s+|\s+$/g,"");
							},
							moveDividendDecimal = function(dividend, divisor) {
								var newDividend;
								if (decimalDigits(dividend) >= decimalDigits(divisor)) {
									newDividend = dividend.slice(0,integerDigits(dividend)) + dividend.substr(integerDigits(dividend) + 1, decimalDigits(divisor))+"."+ dividend.slice(integerDigits(dividend) + decimalDigits(divisor) + 1);
									return newDividend;
								} else {
									for (var ii = 0, len = decimalDigits(divisor) - decimalDigits(dividend); ii < len; ii += 1) {
										dividend = dividend + "0";
									}
									newDividend = dividend.slice(0,integerDigits(dividend)) + dividend.substr(integerDigits(dividend) + 1, decimalDigits(divisor))+"."+ dividend.slice(integerDigits(dividend) + decimalDigits(divisor) + 1);
									return newDividend;
								}
							};

                        $scope.$watch('expected', function () {
                            if ($scope.expected) {
                                parser.decorateScope(parser.extractTag($scope.expected), $scope);
                            }
                        });

                        $scope.$watch('divisor', function () {
                            if ($scope.dividend && $scope.divisor) {
								answer = $filter('divide-decimals')($scope.dividend, $scope.divisor, $scope.digitsRightInExponential);
								$scope.centralArray = new Array(answer.length * 3);
								$scope.completedArray = [];
								//initialize $scope.centralArray, array from steps of Long Division
								for (var ii = 0, len = $scope.centralArray.length; ii < len; ii += 1) {
									$scope.centralArray[ii] = Array.apply(null, new Array(answer.toString().length)).map(function () {return "";});
								}
								$scope.dividend = moveDividendDecimal($scope.dividend, $scope.divisor);
								$scope.divisor = $scope.divisor.replace(".","");
                                steps = getLongDivisionSteps($scope.dividend, $scope.divisor, $scope.centralArray);
								// remove the last two steps for the final dividend digit from steps
								for (var ii = 0; ii < 2; ii += 1) {
									steps.pop();
								}
								// the steps of LongDivision become $scope.centralArray
								$scope.centralArray = steps.centralArray;
								
								// remove last two steps (for final dividend digit), $scope.centralArray
								for (var ii = 0; ii < 2; ii += 1) {
									$scope.centralArray.pop();
								}
								
								// remove first step entry, for steps completed display
								$scope.centralArray.shift();
								// add the space for the decimal point to $scope.centralArray
								for (var ii = 0, len = $scope.centralArray.length; ii < len; ii += 1) {
									//  splice is integerDigits($scope.dividend) + 1 due to column for -
									$scope.centralArray[ii].splice(integerDigits($scope.dividend) + 1,0,"x");
								}
								
                                $scope.quotientOffset = steps.quotientOffset;
                                $scope.finalAnswer = '\\grp{\\css{\\input{$$answer}}{width200px}}{\\str{quotient}}';
								$scope.downArrow = '↓';
								$scope.arrowStep = false;
                                changeStep();
                            }
                        });

                        $scope.completedSteps = [];
						$scope.subtractionRowNumbers = [];
                        $scope.quotientDone = '';
                        $scope.controllerId = Math.random().toString();

                        $scope.$on('answer', function (e, data) {
                            // Decorate the final answer events and let them pass through.
                            if (data.label === 'finalAnswer') {
                                data.label = 'longDivision';
                                return;
                            }

                            var difference,
                                product,
                                gutterMinus = false;

                            e.stopPropagation();

                            if (data.result === 'correct') {
								
                                switch ($scope.currentStep.type) {
                                    case 'division':
                                        if ($scope.quotientDone.length + 2	=== integerDigits($scope.dividend)) {
                                        	$scope.quotientDone += $scope.currentStep.quotient + ".";
										} else {
											$scope.quotientDone += $scope.currentStep.quotient;
										}
                            
										$scope.completedArray.push($scope.centralArray[completedArrayCounter]);
										completedArrayCounter += 1;
										changeStep();
										if (typeof $scope.currentStep !== "undefined") {
                                        	$scope.currentOffset = $scope.currentStep.offset;
										}
                                        break;
                                    case 'multiplication':
                                        product = $scope.currentStep.product.toString();
										
                                        // Add a minus sign if it will fit in the work area, otherwise
                                        // trip the gutterMinus flag.
                                        if ($scope.currentStep.offset > 0) {
                                            product = '-' + product;
                                            $scope.currentStep.offset -= 1;
                                        } else {
                                            gutterMinus = true;
                                        }
                                        
                                        // Properly pad the product with zeros so that the bottom border
                                        // will go across the entire step.
                                        if ($scope.completedSteps.length > 0) {
                                            difference = $scope.completedSteps[$scope.completedSteps.length - 1].value.toString();
                                            while (product.length < difference.length) {
                                                product = '0' + product;
                                                $scope.currentStep.offset -= 1;
                                            }
                                        }
                                        
                                        $scope.completedSteps.push({
                                            type: 'product',
                                            value: product,
                                            offset: $scope.currentStep.offset,
                                            gutterMinus: gutterMinus
                                        });
                                        $scope.currentOffset = $scope.currentStep.offset;
										$scope.completedArray.push($scope.centralArray[completedArrayCounter]);
										completedArrayCounter += 1;
                                        changeStep();
                                        break;
                                    case 'subtraction':
                                        // Check if this is the last step.
                                        if (steps.length === 0) {
                                            difference = +parser.extractTag(data.answer).args[0];
                                        } else {
                                            difference = +parser.extractTag(data.answer).args[0] === 0 ? '0' + steps[0].dividend : steps[0].dividend;
                                        	
                                            // Get the last digit of the upcoming dividend to determine the carry.	
                                            var carry = steps[0].dividend.toString().slice(-1);
                                          
                                            // Add a carry step to the beginning of the step array.
                                            steps.unshift({
                                                type: 'carry',
                                                offset: $scope.currentStep.offset,
                                                // Shave off the last digit of the difference to get the leading digits.
                                                leading: difference.toString().substring(0, difference.toString().length - 1),
                                                carry: carry,
                                                instructions: 'Carry down a ' + carry + ' from the dividend.'
                                            });
											
                                        }
                                        
                                        $scope.completedSteps.push({
                                            type: 'difference',
                                            value: difference,
                                            offset: $scope.currentStep.offset
                                        });
                                        
										$scope.completedArray.push($scope.centralArray[completedArrayCounter]);
										completedArrayCounter += 1;
                                        changeStep();
                                        
                                        if (steps.length > 0) {
                                            addDownArrows();
                                        }
                                        break;
                                    case 'carry':
                                        changeStep();
                                        break;
                                }
								
                            } else {
                                $scope.$broadcast('checkFocus');
                            }
                        });

                        $scope.$on('triggerCheckAnswer', function (e, data) {
                            e.stopPropagation();
                            $scope.$broadcast('checkAnswer');
                        });

                        $scope.showQuotient = function () {
                            return $scope.currentStep && $scope.currentStep.type === 'division';
                        };

                        $scope.showProduct = function () {
                            return $scope.currentStep && $scope.currentStep.type === 'multiplication';
                        };

                        $scope.showDifference = function () {
                            return $scope.currentStep && $scope.currentStep.type === 'subtraction';
                        };

                        $scope.showCarry = function () {
                            return $scope.currentStep && $scope.currentStep.type === 'carry';
                        };

                        $scope.getInputClass = function () {
                            if ($scope.currentStep === undefined) {
                                return null;
                            }
                            switch ($scope.currentStep.type) {
                                case 'multiplication':
                                    return 'wide' + $scope.currentStep.product.toString().length;
                                case 'subtraction':
                                    return 'wide' + $scope.completedSteps[$scope.completedSteps.length - 1].value.toString().length;
                            }
                        };
						
						$scope.getRow = function (rowIndex) {
							$scope.getRowCurrent = rowIndex;
							if (typeof $scope.currentStep !== "undefined" && $scope.getRowCurrent === $scope.narrowDisplayArray.length - 1 && $scope.currentStep.type === "carry") {
								// turn on extra space for decimal in display prior to input box 
								if ($scope.narrowDisplayArray[0].length - 1 === integerDigits($scope.dividend)) {
									$scope.showBlankSpace = true;
								} else {
									$scope.showBlankSpace = false;
								}
								return true;
							} else {
								return false;
							}
						}
						
						$scope.getLineUnder = function (index) {
							if (typeof $scope.currentStep !== "undefined" && $scope.subtractionRowNumbers.indexOf(index) !== -1) {
								return "rowWithBottom";
							}
						}
						
						$scope.showDownArrow = function () {
							 if ($scope.getRowCurrent < $scope.narrowDisplayArray.length && $scope.arrowStep) {
								 return true;
							 }	else {
								 return false;
							 }
						 }
						
                    }
                ],
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                templateUrl: 'partials/directives/ms-long-division-decimal.html'
            };
        }
    ]);
