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
					numberDisplayArray = [],
					answerDisplayArray = [],
					productArray = [],
					multiplicandDigits = 0,
					multiplierDigits = 0,
					answerString = "",
					multiplier = [],
					multiplicand = [],
					placesLeft = 0,
					placesRight = 0;
				
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
				
				function createWorkArray (multiplicand, multiplier, maxAnswerDigits) {
					var workArray = [],
						multDigit,
						newIndex = 0,
						workLength,
						reps,
						multiplierString,
						lengthMultiplier,
						multiplicandLessDecimal,
						multiplierLessDecimal;	
					
					multiplicandLessDecimal = Number(multiplicand.toString().replace(".", ""));
					multiplierLessDecimal = Number(multiplier.toString().replace(".", ""));
					multiplierString = multiplierLessDecimal.toString();
					lengthMultiplier = multiplierString.length;
					
					for (var ii = lengthMultiplier - 1; ii >= 0; ii -= 1) {						
							multDigit = Number(multiplierString.substr(ii, 1));
							workArray[newIndex] = ($filter('multiply-decimals')([multDigit,multiplicandLessDecimal])).toString().split("");
							newIndex += 1;
					}
					
					for (var ii = 0, numberRows = workArray.length; ii < numberRows; ii += 1) {
						reps = maxAnswerDigits - workArray[ii].length;
						for (var kk = 0; kk < ii; kk += 1) {
							workArray[ii].push(" ");							
						}
						for (var kk = 0, diff = reps - ii; kk < diff; kk += 1) {
							workArray[ii].unshift(" ");							
						}
					}

					return workArray;
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
						
						var decimalDigits = function (num) {
							if (num.toString().indexOf('.') > 0) {
								return num.toString().split('.')[1].length;
							} else {
								return 0;
							}
						};
						
						// get the maximum number of digits right and left of the decimal place
						placesRight = decimalDigits(problemObjects[0]) + decimalDigits(problemObjects[1]);
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
						
						var displayWorkArray = [];
						displayWorkArray = createWorkArray(problemObjects[0], problemObjects[1], answerDisplayArray.length).slice();	
						$scope.firstArray = [];
						$scope.secondArray = [];
						$scope.thirdArray = [];
						$scope.fourthArray = [];
						$scope.firstArray = replaceDecimalRight(shiftRight(numberDisplayArray[0]).slice());
						$scope.secondArray = replaceDecimalRight(shiftRight(numberDisplayArray[1]).slice());
						if ($scope.displayresult) {
							$scope.thirdArray = displayWorkArray;
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