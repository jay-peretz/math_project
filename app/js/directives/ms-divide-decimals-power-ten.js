'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('dividedecpowten', {
            directiveTemplate: '<ms-divide-decimals-power-ten expected={{expected}}></ms-divide-decimals-power-ten>'
        });
    }])
  .directive('msDivideDecimalsPowerTen', [
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
					dividend,
					divisor,
					decimalPlaces,
					answerObject = 0,
				 	allNumbersArray = new Array(2),
					numberDisplayArray = [],
					answerDisplayArray = [],
					answerArray = [],
					dividendDigits = 0,
					divisorDigits = 0,
					maxAnswerDigits = 0,
					answerString = "", 
					answerPlacesLeft = 0,
					answerPlacesRight = 0,
					divisorPlacesLeft = 0,
					divisorPlacesRight = 0,
					dividendPlacesLeft = 0,
					dividendPlacesRight = 0;
					
					
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
					
						
						dividend = Number(tagParameters[0]);
						divisor = Number(tagParameters[1]);
						decimalPlaces = Number(tagParameters[2]);
						
						answerObject = $filter('divide-decimals')(dividend, divisor, decimalPlaces);
						answerString = answerObject.toString();
						
						// get the number of digits in the dividend and divisor
						dividendDigits = dividend.toString().length;
						divisorDigits = divisor.toString().length;
						
						// get the maximum number of digits
						maxAnswerDigits = answerObject.toString().length;
						
						var decimalDigits = function (num) {
							if (num.toString().indexOf('.') > 0) {
								return num.toString().split('.')[1].length;
							} else {
								return 0;
							}
						};
						
						// get the maximum number of digits right and left of the answer decimal place
						
						answerPlacesRight = decimalDigits(answerObject);
						if (answerObject.toString().indexOf('.') > 0) {
							answerPlacesLeft = answerObject.toString().length - (answerPlacesRight + 1);
						} else {
							answerPlacesLeft = answerObject.toString().length;
						}
						
						// get the maximum number of digits right and left of the divisor decimal place
						
						divisorPlacesRight = decimalDigits(divisor);
						if (divisor.toString().indexOf('.') > 0) {
							divisorPlacesLeft = divisor.toString().length - (divisorPlacesRight + 1);
						} else {
							divisorPlacesLeft = divisor.toString().length;
						}
						
						// get the maximum number of digits right and left of the dividend decimal place
						
						dividendPlacesRight = decimalDigits(dividend);
						if (dividend.toString().indexOf('.') > 0) {
							dividendPlacesLeft = dividend.toString().length - (dividendPlacesRight + 1);
						} else {
							dividendPlacesLeft = dividend.toString().length;
						}
						
						numberDisplayArray = [];
						answerDisplayArray = [];
		
						// set up display arrays with correct number of places left and right
						numberDisplayArray[0] = $filter('decimal-to-display-array')(dividend, answerPlacesLeft, answerPlacesRight);
						numberDisplayArray[1] = $filter('decimal-to-display-array')(divisor, answerPlacesLeft, answerPlacesRight);
						answerDisplayArray = $filter('decimal-to-display-array')(answerObject, answerPlacesLeft, answerPlacesRight, 1);
						

		
						$scope.decimalPointerArray = [];
						$scope.borderBelowArray = [];
						
						//build an array with blank spaces and a carat for the indicated digit
						//build an array with blank spaces and "\xe2" (half circle below) to indicate shift of decimal
						
						for (var ii = 0, len = answerDisplayArray.length; ii<len ; ii++){
							console.log("dividendPlacesLeft is: ",dividendPlacesLeft," answerPlacesLeft is: ",answerPlacesLeft,"answerPlacesRight is: ",answerPlacesRight," dividendPlacesRight is: ",dividendPlacesRight);
								if (answerDisplayArray[ii] == '.') {
									$scope.decimalPointerArray[ii] = "^";
									$scope.borderBelowArray[ii] = " ";
									
								} else {
									$scope.decimalPointerArray[ii] = " ";
									$scope.borderBelowArray[ii] = " ";
									
									switch (true) {
															
										case (ii > (dividendPlacesLeft - 1)
												&& ii < (answerPlacesLeft)
												&& divisor < 1):
											// \u25e1 is Unicode UTF-16 for half-moon	
											//$scope.decimalPointerArray[ii] = '\u25e1';
											console.log("arrowRight for ii = ",ii);
											$scope.borderBelowArray[ii] = 'arrowRight';
											break;
											
										case ((ii > answerPlacesLeft + 1)
											   && (divisor > 1)
											   && (ii < (answerPlacesLeft + 1 + (answerPlacesRight - dividendPlacesRight)))):
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
						if (dividendPlacesRight < answerPlacesRight) {
							$scope.pointLeftOrRight = "left";
							$scope.decimalDisplacement = Math.abs(Math.round(Math.log(divisor)/Math.log(10)));
						} else {
							$scope.pointLeftOrRight = "right";
							$scope.decimalDisplacement = Math.abs(Math.round(Math.log(divisor)/Math.log(10)));
						}
						
						$scope.addDecimalText = 'The result of dividing '+dividend+' by '+divisor+' is formed by displacing the decimal point '+$scope.decimalDisplacement+' place(s) to the '+$scope.pointLeftOrRight+' and filling in any "open" place holders with zeros:'
						
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