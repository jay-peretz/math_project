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

				var tagParameters = [],
					dividend,
					divisor,
					digitsRightInExponential,
					digitCountWithoutDecimal,
					answerObject,
					answerDisplayArray = [],
					decimalIndex = 0,
					answerDecimalIndex = 0,
					answerString = "", 
					answerPlacesLeft = 0,
					answerPlacesRight = 0;

					
				$scope.decimalPointerArray = [];
				$scope.borderBelowArray = [];					
					
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
				
				var decimalDigits = function (num) {
					if (num.toString().indexOf('.') !== -1) {
						return num.toString().split('.')[1].length;
					} else {
						return 0;
					}
				};
				
			 // Extract the tag values
				$scope.$watch('expected', function () { 
					if ($scope.expected) {
						tagParameters = parser.extractTag($scope.expected).args;
					}
					// tagParameters[3] for number sign not implemented yet
						dividend = Number(tagParameters[0]);
						divisor = Number(tagParameters[1]);
						
						// digitsRightInExponential, override for # of digits right of decimal in exponential						
						if (tagParameters[2] !== "$digitsRightInExponential" && typeof tagParameters[2] !== "undefined") {
							digitsRightInExponential = tagParameters[2];
						} else {												
							if (divisor > 1) {
								digitsRightInExponential = tagParameters[0].replace(".","")	.length - 1;
							} else {
								if (dividend > 1) {
									digitsRightInExponential = decimalDigits(divisor) + decimalDigits(dividend);
								} else {
									digitsRightInExponential = decimalDigits(dividend) - 1;
								}
							}
						}
						
						// get the number of places shifted
						$scope.decimalDisplacement = Math.abs(Math.round(Math.log(divisor)/Math.log(10)));
						
						answerObject = $filter('divide-decimals')(dividend, divisor, digitsRightInExponential);
						answerString = answerObject.toString();
						
						// get the maximum number of digits right and left of the answer decimal place						
						answerPlacesRight = decimalDigits(answerObject);
						
						if (answerString.indexOf('.') !== -1) {
							decimalIndex = answerString.indexOf('.');
							answerPlacesLeft = answerString.length - (answerPlacesRight + 1);
						} else {
							answerPlacesLeft = answerString.length;
							decimalIndex = 0;
						}
						
						// get whether the shift is left or right
						if (divisor >= 1) {
							$scope.pointLeftOrRight = "left";
							answerDisplayArray = $filter('decimal-to-display-array')(answerObject, answerPlacesLeft, Math.max($scope.decimalDisplacement, answerPlacesRight), 1);
						} else {
							$scope.pointLeftOrRight = "right";
							answerDisplayArray = $filter('decimal-to-display-array')(answerObject, Math.max($scope.decimalDisplacement, answerPlacesLeft), answerPlacesRight, 1);
						}
						
						// add decimal point if necessary
						if (answerDisplayArray.indexOf(".") === -1) {
							answerDisplayArray.splice(answerPlacesLeft, 0, ".");
						}
						
						answerDecimalIndex = answerDisplayArray.indexOf(".");

						// add string zeros in place of blanks 
						for (var ii = 0, len = answerDisplayArray.length; ii < len; ii += 1) { 
							if (answerDisplayArray[ii] == 0) {
										answerDisplayArray[ii] = "0";
							}
						}
						
						//build an array with blank spaces and a carat for the indicated digit
						// "\xe2" (half circle below); here just for future reference if needed				
						for (var ii = 0, len = answerDisplayArray.length; ii<len ; ii++){
								if (answerDisplayArray[ii] == '.') {
									$scope.decimalPointerArray[ii] = "^";
									$scope.borderBelowArray[ii] = " ";									
								} else {
									// initialize values
									$scope.decimalPointerArray[ii] = " ";
									$scope.borderBelowArray[ii] = " ";
						
									switch (true) {
															
										case ($scope.pointLeftOrRight === "right"
												&& ii > (answerDecimalIndex - $scope.decimalDisplacement - 1)
												&& ii < answerDecimalIndex):
											// \u25e1 is Unicode UTF-16 for half-moon	
											//$scope.decimalPointerArray[ii] = '\u25e1';
											$scope.borderBelowArray[ii] = 'arrowRight';
											break;
											
										case ($scope.pointLeftOrRight === "left"
											  && ii > answerDecimalIndex
											   && ii < (answerDecimalIndex + $scope.decimalDisplacement + 1)):
											// \u25e1 is Unicode UTF-16 for half-moon
											//$scope.decimalPointerArray[ii] = '\u25e1';  
											$scope.borderBelowArray[ii] = 'arrowLeft';
											break;
				
									}
								}
								
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