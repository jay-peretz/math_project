'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
		// first parameter is 'english' to display text, otherwise displays number columns
		// second parameter is 'complete' to display number column with addition result
        parserProvider.register('multiplydecimals', {
            directiveTemplate: '<ms-multiply-decimals expected={{expected}}></ms-multiply-decimals>'
        });
    }])
  .directive('msMultiplyDecimals', [
	'parser',
	function (parser) {
		return {
			restrict: 'E',
			scope: {
				expected: '@',
				label: '@'
			},
			controller: function ($scope, $element, $filter) {
				$scope.mathdisplay = true;
				$scope.displayresult = false;
				$scope.sign = '\xD7';

				var tagParameters = [],
					problemObjects = [],
					answerObject = 0,
				 	allNumbersArray = new Array(2),
					numberDisplayArray = [],
					answerDisplayArray = [],
					productArray = [],
					carryArray = [],
					userAnswer = [],
					answerArray = [],
					multiplicandDigits = 0,
					multiplierDigits = 0,
					maxAnswerDigits = 0,
					productColumn = 0,
					gotCarry = 0,
					answerString = "",
					multiplier = [],
					multiplicand = [],
					multiplicandParsed = "",
					multiplierParsed = "",
					maxNumberLength = 0, 
					placesLeft = 0,
					placesRight = 0;
				
				function removeLeadingZeros (zerosNumberArray) {
					for (var ii = 0, oneNotZero = 0; ii < zerosNumberArray.length; ii++) {
						if (zerosNumberArray[ii]!==0) {
							oneNotZero = 1;
						} else if (oneNotZero == 0) {
							zerosNumberArray[ii] = "";
						}
					}			
				}
						
				// function arrayRemoveEmptyRows produces a new array that only has rows with numbers in them
				// single-digit multiplier is determined below in help setup, and the $scope.thirdArray set to []
				function arrayRemoveEmptyRows(arrayOrig) {
					var rowNotEmpty = 0,
						kk = 0,
						copyArray = [],
						newArray = [];
						
					copyArray = arrayOrig.slice();
					for (var ii = arrayOrig.length - 1; ii >= 0; ii--) {
						rowNotEmpty = 0;
						
						for (var jj = arrayOrig[ii].length - 1; jj >= 0; jj--) {
							if (arrayOrig[ii][jj] !== "") {
								rowNotEmpty = 1;
							}
						}
						if (rowNotEmpty == 1) {
							newArray[kk] = new Array(arrayOrig[ii].length);
							for (var jj = arrayOrig[ii].length - 1; jj >= 0; jj--) {
								newArray[kk][jj] = arrayOrig[ii][jj];
							}
							kk++;
						}
					}
					return (newArray.reverse());
				}
				
				function isBlank(str) {
    				return (!str || /^\s*$/.test(str));
				}
				
				// right-align the multiplier and multiplicand
				function shiftRight (arrayRow) {
					var newArrayRow = [];					
					newArrayRow = arrayRow.slice();					
					for (var ii = arrayRow.length - 1; ii >= 0; ii -= 1) {
						if (isBlank(newArrayRow[arrayRow.length - 1])) {
							newArrayRow.pop();
							newArrayRow.unshift(" ");
						} else {
							return newArrayRow;
						}
					}					
				}
				
				function replaceDecimalRight (arrayRow) {
					var newArrayRow = [];					
					newArrayRow = arrayRow.slice();	
					if (newArrayRow[newArrayRow.length - 1] === ".") {
						newArrayRow.pop();
						newArrayRow.unshift(" ");
					}
					return newArrayRow;
				}
				
				// add padding if not the decimal point- decimal point gets no padding
				$scope.styleDecimal = function (index, arrayNumber) {
					var arrayValue = eval("$scope." + arrayNumber + "Array["+index+"]"),
						arrayValuePlusOne = eval("$scope." + arrayNumber + "Array["+(index + 1)+"]"),
						arrayValueMinusOne = eval("$scope." + arrayNumber + "Array["+(index - 1)+"]");
					
					switch (true) {
						case (arrayValuePlusOne !== undefined && arrayValuePlusOne === "."):
							return "addPaddingLeft";
							break;
						case (arrayValue === "."):
							return "noPadding";
							break;
						case (arrayValueMinusOne !== undefined && arrayValueMinusOne === "."):
							return "addPaddingRight";
							break;
						default:
							return "addPadding";
							break;
					}
				}
				
			 // Extract the tag values
				$scope.$watch('expected', function () { 
					if ($scope.expected) {
						tagParameters = parser.extractTag($scope.expected).args;
					}
					
					if (tagParameters[0] === "english") {
						$scope.mathdisplay = false;
					}
					
					if (tagParameters[1] === "complete") {
						$scope.displayresult = true;
						$scope.mathdisplay = true;
					}

					if ($scope.mathdisplay) {
						
						problemObjects[0] = Number(tagParameters[2]);
						problemObjects[1] = Number(tagParameters[3]);
						//  if multiplicand < multiplier exchange the numbers
						/*if (problemObjects[0]<problemObjects[1]) {
							problemObjects.reverse();
						}*/
						
						answerObject = $filter('multiply-decimals')(problemObjects);
						answerString = answerObject.toString();
						
						// get the number of digits in the multiplicand and multiplier
						multiplicandDigits = problemObjects[0].toString().length;
						multiplierDigits = problemObjects[1].toString().length;
						
						// get the maximum number of digits
						maxAnswerDigits = answerObject.toString().length;
						
						var decimalDigits = function (num) {
							if (num.toString().indexOf('.') > 0) {
								return num.toString().split('.')[1].length;
							} else {
								return 0;
							}
						};
						
						// get the maximum number of digits right and left of the decimal place
						
						placesRight = decimalDigits(answerObject);
						if (answerObject.toString().indexOf('.') > 0) {
							placesLeft = answerObject.toString().length - (placesRight + 1);
						} else {
							placesLeft = answerObject.toString().length;
						}
						
						numberDisplayArray = new Array(problemObjects.length);
						answerDisplayArray = [];
		
						// set up display arrays with correct number of places left and right
						for (var ii = 0; ii < problemObjects.length; ii++) {
							numberDisplayArray[ii] = $filter('decimal-to-display-array')(problemObjects[ii], placesLeft, placesRight);
						}
						answerDisplayArray = $filter('decimal-to-display-array')(answerObject, placesLeft, placesRight, 1);
						
						
						for (var ii = 0, len = 2; ii<len; ii++) {
							allNumbersArray[ii] = new Array(maxAnswerDigits); 
						}
						
						// initialize arrays
						for (var ii = 0; ii<2; ii++) {
							for (var jj = 0; jj<maxAnswerDigits; jj++) {
								allNumbersArray[ii][jj] = 0;
								answerArray[jj] = 0;
							}
						}
						// create a two-dimensional array for ones-column multiplication results 
						for (var ii = 0; ii<maxAnswerDigits; ii++) {
							productArray[ii] = new Array(maxAnswerDigits);
							for (var jj = 0; jj<maxAnswerDigits; jj++) {
								productArray[ii][jj] = 0;
							}
						}
						
						// create an array with a row for each number, one digit per column
						for (var ii = 0; ii<2; ii++) {
							var currentNumber = problemObjects[ii],
								currentNumberString = currentNumber.toString().replace(".", ""),
								currentNumbLength = currentNumberString.length,
								endPosArrayWrite = maxAnswerDigits-currentNumbLength;
							
							for (var jj = maxAnswerDigits-1, kk = 1; jj>=endPosArrayWrite; jj--) {
								allNumbersArray[ii][jj] = currentNumberString.substr(currentNumbLength-kk, 1);
								kk++;
							}
						}
				
						// create an array of results of multiplication of the two numbers
						for (var ii = maxAnswerDigits - 1, kk = 0; ii >= 0; ii--) {
							for (var jj = maxAnswerDigits - 1; jj >= 0; jj--) {
								productColumn = 0;
								productColumn = allNumbersArray[0][jj]*allNumbersArray[1][ii];
								/*while (productColumn > 9) {
									productColumn = productColumn - 10;
								}*/
								if (kk<multiplierDigits) {
									productArray[kk][jj-kk] = productColumn;
								}
							}
							kk++
						}
						
						// work the carries
						for (var ii = 0; ii < multiplierDigits; ii++) {
							for (var jj = maxAnswerDigits-1; jj > 0; jj--) {
								productColumn = 0;
								productColumn = productArray[ii][jj];
								if ((productColumn > 9)&&(jj<maxAnswerDigits)){
									productColumn = Math.floor(productColumn/10);				
									productArray[ii][jj-1] = productArray[ii][jj-1]+productColumn;
								}
							}
						}
						
						// rework productArray to only show the part of the product < 10
						for (var ii = 0, len = productArray.length; ii < len; ii++) {
							for (var jj = maxAnswerDigits-1; jj > 0; jj--) {
								productColumn = 0;
								productColumn = productArray[ii][jj];
								if ((productColumn > 9)&&(jj<maxAnswerDigits)){
									productColumn = productColumn - (Math.floor(productColumn/10)*10);				
									productArray[ii][jj] = productColumn;
								}
							}
						}
						
						$scope.productArraysSum = 0;
						$scope.arraysTotalArray = [];
						for (var ii = 0, len = productArray.length; ii < len; ii++) {
							$scope.productArraysSum += parseInt(productArray[ii].toString().replace(/,/g, ''), 10);
						}
						$scope.arraysTotalArray = $scope.productArraysSum.toString().split("");
						
						// create an array for the answer, one digit per column
						for (var ii = maxAnswerDigits-1, kk = $scope.arraysTotalArray.length-1; ii >= 0; ii--) {
							if (kk >= 0) {
								answerArray[ii] = $scope.arraysTotalArray[kk];
								kk--;
							}					
						}
						
						if ($scope.answerObject >= 1) {
							removeLeadingZeros(answerArray);
						}
						for (var ii = 0, len = productArray.length; ii < len; ii++) {
							removeLeadingZeros(productArray[ii]);
						}		
						
						$scope.firstArray = [];
						$scope.secondArray = [];
						$scope.thirdArray = [];
						$scope.fourthArray = [];
						$scope.firstArray = replaceDecimalRight(shiftRight(numberDisplayArray[0]).slice());
						$scope.secondArray = replaceDecimalRight(shiftRight(numberDisplayArray[1]).slice());
						if ($scope.displayresult) {
							$scope.thirdArray = arrayRemoveEmptyRows(productArray).slice();
							// if productArray.length = 1, the multiplier is single digit, so just display answerArray (not productArray) 
							if (productArray.length == 1) {
								$scope.thirdArray = [];
							} 
							$scope.fourthArray = replaceDecimalRight(answerDisplayArray.slice());
						} else {
							$scope.thirdArray = [];
							$scope.fourthArray = [];
						}
					
					} else {
								$scope.inenglishfirst = tagParameters[2]
								$scope.inenglishsecond = tagParameters[3];
					}
					
				});
			},
			templateUrl: 'partials/directives/ms-multiplication-decimals.html'

		};
	}]);