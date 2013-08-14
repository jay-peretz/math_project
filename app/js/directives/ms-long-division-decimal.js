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
            var getDivisionStep = function (dividend, divisor, dividendArr, poppedArr, steps) {
                var curDividend = '',
                    dividendPiece,
                    quotient;
                
                if (steps.length > 0) {
                    curDividend = steps[steps.length - 1].difference;
                    dividendPiece = dividendArr.shift();
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
                return {
                    type: 'division',
                    dividend: dividend,
                    divisor: divisor,
                    quotient: quotient,
                    offset: steps.length === 0 ? poppedArr.length - 1 : undefined,
                    instructions: 'Divide ' +  dividend + ' by ' + divisor + '.'
                };
            },
            getMultiplicationStep = function (dividend, divisor, dividendArr, poppedArr, steps) {
                var multiplicand1 = divisor,
                    multiplicand2 = steps[steps.length - 1].quotient,
                    product = multiplicand1 * multiplicand2;
                
                return {
                    type: 'multiplication',
                    multiplicand1: multiplicand1,
                    multiplicand2: multiplicand2,
                    product: product,
                    offset: poppedArr.length - product.toString().length,
                    instructions: 'Multiply ' +  multiplicand1 + ' by ' + multiplicand2 + '.'
                };
            },
            getSubtractionStep = function (dividend, divisor, dividendArr, poppedArr, steps) {
                var minuend = steps[steps.length - 2].dividend,
                    subtrahend = steps[steps.length - 1].product,
                    difference = minuend - subtrahend;
                
                return {
                    type: 'subtraction',
                    minuend: minuend,
                    subtrahend: subtrahend,
                    difference: difference,
                    offset: poppedArr.length - difference.toString().length,
                    instructions: 'Subtract ' +  subtrahend + ' from ' + minuend + '.'
                };
            },
            getLongDivisionSteps = function (dividend, divisor) {
                var steps = [],
                    dividendArr = dividend.toString().split(''),
                    poppedArr = [];
                
                while (dividendArr.length > 0) {
                    steps.push(getDivisionStep(dividend, divisor, dividendArr, poppedArr, steps));
                    steps.push(getMultiplicationStep(dividend, divisor, dividendArr, poppedArr, steps));
                    steps.push(getSubtractionStep(dividend, divisor, dividendArr, poppedArr, steps));
                }
                
                if (steps.length > 0) {
                    steps.quotientOffset = steps[0].offset;
                }
                
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
                            changeStep = function () {
                                $scope.currentStep = steps.shift();
                                if ($scope.currentStep !== undefined) {
                                    $scope.instructions = $scope.currentStep.instructions;
                                } else {
                                    $scope.instructions = 'Great Job!  Enter the complete quotient and remainder below.';
                                    $scope.complete = true;
                                }
                                $timeout(function () {
                                    $scope.$broadcast('checkFocus');
                                }, 0);
                            },
                            addDownArrows = function () {
                                $scope.completedSteps.slice(0, -1).forEach(function (step) {
                                    step.value += '↓';
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
							moveDividendDecimal = function(dividend, divisor) {
								var newDividend;
								if (decimalDigits(dividend) >= decimalDigits(divisor)) {
									newDividend = dividend.slice(0,integerDigits(dividend)) + dividend.substr(integerDigits(dividend) + 1, decimalDigits(divisor))+"."+ dividend.slice(integerDigits(dividend) + decimalDigits(divisor) + 1);
									console.log("decimalDigits(dividend) >= decimalDigits(divisor), newDividend is: ",newDividend);
									return newDividend;
								} else {
									for (var ii = 0, len = decimalDigits(divisor) - decimalDigits(dividend); ii < len; ii += 1) {
										dividend = dividend + "0";
									}
									newDividend = dividend.slice(0,integerDigits(dividend)) + dividend.substr(integerDigits(dividend) + 1, decimalDigits(divisor))+"."+ dividend.slice(integerDigits(dividend) + decimalDigits(divisor) + 1);
									console.log("decimalDigits(dividend) < decimalDigits(divisor), newDividend is: ",newDividend);
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
								console.log("answer is: ",answer);
								$scope.dividend = moveDividendDecimal($scope.dividend, $scope.divisor);
								$scope.divisor = $scope.divisor.replace(".","");
								console.log("$scope.dividend is: ",$scope.dividend," $scope.divisor is: ",$scope.divisor);
                                steps = getLongDivisionSteps($scope.dividend, $scope.divisor);
                                $scope.quotientOffset = steps.quotientOffset;
                                $scope.finalAnswer = '\\grp{\\input{' + Math.floor($scope.dividend / $scope.divisor) +
                                    '}}{\\str{quotient}}{\\input{' + ($scope.dividend % $scope.divisor) + '}}{\\str{remainder}}';
                                changeStep();
                            }
                        });

                        $scope.completedSteps = [];
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
                                        $scope.quotientDone += $scope.currentStep.quotient;
                                        changeStep();
                                        $scope.currentOffset = $scope.currentStep.offset;
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
