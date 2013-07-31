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
					answerObject,
					answerDisplayArray = [],
					decimalIndex = 0,
					dividendDigits = 0,
					divisorDigits = 0,
					answerString = "", 
					answerPlacesLeft = 0,
					answerPlacesRight = 0,
					divisorPlacesLeft = 0,
					divisorPlacesRight = 0,
					dividendPlacesLeft = 0,
					dividendPlacesRight = 0;
					
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
					if (num.toString().indexOf('.') > 0) {
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
					
						dividend = Number(tagParameters[0]);
						divisor = Number(tagParameters[1]);
						// get the number of places shifted
						$scope.decimalDisplacement = Math.abs(Math.round(Math.log(divisor)/Math.log(10)));
						
						answerObject = $filter('divide-decimals')(dividend, divisor);
						answerString = answerObject.toString();
						console.log("answerString is: ",answerString);
						
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
							if (decimalIndex === 0) {
								answerDisplayArray.splice(answerPlacesLeft, 0, ".");
							}
						} else {
							$scope.pointLeftOrRight = "right";
							answerDisplayArray = $filter('decimal-to-display-array')(answerObject, Math.max($scope.decimalDisplacement, answerPlacesLeft), answerPlacesRight, 1);
							if (decimalIndex === 0) {
								answerDisplayArray.splice($scope.decimalDisplacement, 0, ".");
							}
						}
						console.log(".5 answerDisplayArray is: ",answerDisplayArray);
						// add string zeros in place of blanks 
						for (var ii = 0, len = answerDisplayArray.length; ii < len; ii += 1) { 
							if (answerDisplayArray[ii] == 0) {
										answerDisplayArray[ii] = "0";
							}
						}
						
						console.log("1 decimalIndex is: ",decimalIndex," answerObject is: ",answerObject," $scope.decimalDisplacement is: ",$scope.decimalDisplacement," $scope.pointLeftOrRight is: ",$scope.pointLeftOrRight," answerDisplayArray is: ",answerDisplayArray);
						
						// get the number of digits in the dividend and divisor
						dividendDigits = dividend.toString().length;
						divisorDigits = divisor.toString().length;
						
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
						
						//build an array with blank spaces and a carat for the indicated digit
						//build an array with blank spaces and "\xe2" (half circle below) to indicate shift of decimal					
						console.log("2 $scope.pointLeftOrRight is: ",$scope.pointLeftOrRight," answerDisplayArray is: ",answerDisplayArray);	
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
												&& ii > (answerPlacesLeft - $scope.decimalDisplacement - 1)
												&& ii < $scope.decimalDisplacement):
											// \u25e1 is Unicode UTF-16 for half-moon	
											//$scope.decimalPointerArray[ii] = '\u25e1';
											$scope.borderBelowArray[ii] = 'arrowRight';
											break;
											
										case ($scope.pointLeftOrRight === "left"
											  && ii > answerDisplayArray.indexOf(".")
											   && ii < (answerDisplayArray.indexOf(".") + $scope.decimalDisplacement + 1)):
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