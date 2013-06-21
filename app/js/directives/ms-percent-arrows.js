'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('percentarrows', {
            directiveTemplate: '<ms-percent-arrows expected={{expected}}></ms-percent-arrows>'
        });
    }])
	// decimaltopercent receives four parameters:  a decimal number to convert, a multiplier for conversion (e.g. 100),
	// the name of the type converted from (e.g., decimal), and the name of the type converted to (e.g., percentage)
  .directive('msPercentArrows', [
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
					multiplierArray = [],
					answerObject = 0,
				 	allNumbersArray = new Array(2),
					numberDisplayArray = [],
					answerDisplayArray = [],
					answerArray = [],
					multiplicandDigits = 0,
					multiplierDigits = 0,
					maxAnswerDigits = 0,
					answerString = "", 
					answerPlacesLeft = 0,
					answerPlacesRight = 0,
					multiplierPlacesLeft = 0,
					multiplierPlacesRight = 0,
					multiplicandPlacesLeft = 0,
					multiplicandPlacesRight = 0;
					
					
		$scope.getClassBorder = function(index) {				
			if (($scope.borderBelowArray[index] == 'arrowRight')||($scope.borderBelowArray[index] == 'arrowLeft')) {
				return ('borderArrowhead');
			}
		}
		$scope.getArrowhead = function(index) {				
			if ($scope.borderBelowArray[index] == 'arrowRight') {
				return ('arrowheadRight');
			}			
			if ($scope.borderBelowArray[index] == 'arrowLeft') {
				return ('arrowheadLeft');
			}
		}
				
				function removeLeadingZeros (zerosNumberArray) {
					for (var ii = 0, oneNotZero = 0; ii < zerosNumberArray.length; ii++) {
						if (zerosNumberArray[ii]!==0) {
							oneNotZero = 1;
						} else if (oneNotZero == 0) {
							zerosNumberArray[ii] = "";
						}
					}			
				}
				
			 // Extract the tag values
				$scope.$watch('expected', function () { 
					if ($scope.expected) {
						tagParameters = parser.extractTag($scope.expected).args;
					}
					// tagParameters 0 & 1 are starting number and multiplier to move the decimal point, respectively
					// tagParameters 2 & 3 become part of the explanatory text, unless
					// tagParameter 2 === "skiptext", then no explanatory text appears
						
						problemObjects[0] = Number(tagParameters[0]);
						problemObjects[1] = Number(tagParameters[1]);
						
						answerObject = $filter('multiply-decimals')(problemObjects);
						answerString = answerObject.toString();
					
						// get the number of digits in the multiplicand and multiplier
						multiplicandDigits = problemObjects[0].toString().length;
						multiplierDigits = problemObjects[1].toString().length;
						
						// get the maximum number of digits
						maxAnswerDigits = answerString.length;
						
						var decimalDigits = function (num) {
							if (num.toString().indexOf('.') > 0) {
								return num.toString().split('.')[1].length;
							} else {
								return 0;
							}
						};
						
						// get the maximum number of digits right and left of the answer decimal place
						
						answerPlacesRight = decimalDigits(answerObject);
						if (answerString.indexOf('.') > 0) {
							answerPlacesLeft = answerString.length - (answerPlacesRight + 1);
						} else {
							answerPlacesLeft = answerString.length;
						}
						
						// get the maximum number of digits right and left of the multiplier decimal place
						
						multiplierPlacesRight = decimalDigits(problemObjects[1]);
						if (problemObjects[1].toString().indexOf('.') > 0) {
							multiplierPlacesLeft = problemObjects[1].toString().length - (multiplierPlacesRight + 1);
						} else {
							multiplierPlacesLeft = problemObjects[1].toString().length;
						}
						multiplierArray = tagParameters[0].split("");
						
						// get the maximum number of digits right and left of the multiplicand decimal place
						
						multiplicandPlacesRight = decimalDigits(problemObjects[0]);
						if (problemObjects[0].toString().indexOf('.') > 0) {
							multiplicandPlacesLeft = problemObjects[0].toString().length - (multiplicandPlacesRight + 1);
						} else {
							multiplicandPlacesLeft = problemObjects[0].toString().length;
						}
						
						numberDisplayArray = new Array(problemObjects.length);
						answerDisplayArray = [];
		
						// set up display arrays with correct number of places left and right
						for (var ii = 0; ii < problemObjects.length; ii++) {
							numberDisplayArray[ii] = $filter('decimal-to-display-array')(problemObjects[ii], answerPlacesLeft, answerPlacesRight);
						}
						answerDisplayArray = $filter('decimal-to-display-array')(answerObject, answerPlacesLeft, answerPlacesRight, 1);
						// account for case like: 10 x .01 
						// digits right of decimal in mutliplier >= digits left of decimal in multiplicand 
						// && one or more zeros immediately to the left of decimal in multiplicand
						// for example need answer for display in 10 x .01 as .10 not .1 to show decimal moved 2 places						
						if (multiplierPlacesRight >= multiplicandPlacesLeft) {
							for (var ii = 0, len = multiplicandPlacesLeft - multiplierPlacesRight + 1; ii < len; ii += 1) {
								if (multiplierArray[multiplicandPlacesLeft - ii - 1] === "0") {
									answerDisplayArray.push("0");
									answerPlacesRight = answerPlacesRight + 1;
								}
							}
						}

						$scope.decimalPointerArray = [];
						$scope.borderBelowArray = [];
						
						//build an array with blank spaces and a carat for the indicated digit
						//build an array with blank spaces and "\xe2" (half circle below) to indicate shift of decimal
			
						for (var ii = 0, lengthAnswerArray = answerDisplayArray.length; ii<lengthAnswerArray; ii++){
								if (answerDisplayArray[ii] == '.') {
									$scope.decimalPointerArray[ii] = "^";
									$scope.borderBelowArray[ii] = " ";
									
								} else {
									$scope.decimalPointerArray[ii] = " ";
									$scope.borderBelowArray[ii] = " ";
									
									switch (true) {
															
										case ((ii > (answerPlacesLeft - multiplierPlacesLeft))
												&&(ii < answerPlacesLeft)):
											// \u25e1 is Unicode UTF-16 for half-moon	
											//$scope.decimalPointerArray[ii] = '\u25e1';
											$scope.borderBelowArray[ii] = 'arrowRight';
											break;
											
										case ((ii > answerPlacesLeft)
											   && (answerPlacesRight > multiplicandPlacesRight)
											   && (ii < (answerPlacesLeft + 1 + (answerPlacesRight - multiplicandPlacesRight)))):
											// \u25e1 is Unicode UTF-16 for half-moon
											//$scope.decimalPointerArray[ii] = '\u25e1';  
											$scope.borderBelowArray[ii] = 'arrowLeft';
											break;
				
									}
								}
								
						}				
						
						// for whole number results, display decimal to the right of the ones place
						
						if (answerPlacesRight == 0) {
							answerDisplayArray.push(".");
							// use this to add a carat under the decimal point if desired
							$scope.decimalPointerArray.push("^");
							$scope.decimalPointerArray.push("\xA0");
						}
						
						// get the number of places shifted and whether the shift is left or right
						if (multiplicandPlacesRight < answerPlacesRight) {
							$scope.pointLeftOrRight = "left";
							$scope.decimalDisplacement = Math.abs(Math.round(Math.log(problemObjects[1])/Math.log(10)));
						} else {
							$scope.pointLeftOrRight = "right";
							$scope.decimalDisplacement = Math.abs(Math.round(Math.log(problemObjects[1])/Math.log(10)));
						}
						
						if (tagParameters[2] !== "skiptext") {
							$scope.addDecimalText = 'The '+tagParameters[2]+' '+problemObjects[0]+' is converted to a '+tagParameters[3]+' by displacing the decimal point '+$scope.decimalDisplacement+' place(s) to the '+$scope.pointLeftOrRight+' and filling in any "open" place holders with zeros:'
						} else {
							$scope.addDecimalText = "";
						}
						
						$scope.emptyArray = [];
						$scope.emptyArray[0] = [];
						for (var ii = 0, len = $scope.decimalPointerArray.length; ii < len; ii += 1) {
							$scope.emptyArray[0][ii] = "";
						}
				
						$scope.helpInstructions = $scope.addDecimalText;
						$scope.firstArray = [];
						$scope.secondArray = [];
						$scope.thirdArray = [];
						$scope.firstArray = answerDisplayArray.slice();
						$scope.secondArray = $scope.decimalPointerArray.slice();
						$scope.thirdArray = $scope.emptyArray.slice();	
						$scope.arrowheads = true;				
					
				});
			},
			templateUrl: 'partials/directives/ms-multiply-decimals-power-ten.html'

		};
	}]);