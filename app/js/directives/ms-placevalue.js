'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('placevalue', {
            directiveTemplate: '<ms-placevalue expected={{expected}}></ms-placevalue>'
        });
    }])
  .directive('msPlacevalue', [
	'parser',
	function (parser) {
		return {
			restrict: 'E',
			scope: {
				expected: '@',
				label: '@'
			},
			controller: function ($scope, $element, $filter) {
				$scope.numberArray = [];
				$scope.randomplacearray = [];
				$scope.decimalAnswerArray = [];
				$scope.numbStringCommas = "";
								
				var tagParameters = [],
					tagParmsZeroArray = [],
					roundedDecimalArray = [],
					problemDigit,
					problemDigitRight,
					problemDecimalIndex,
					roundToThisPlace,
					roundedIntegerNumber;
					
				var getRounded = function(numberObject, numberOfPlaces){
				     var leftNumber = 0,
					     givenNumberString = numberObject.toString(),
					     truncatedDecimal = numberObject/Math.pow(10, numberOfPlaces),
					     roundedDecimal = Math.round(truncatedDecimal);
     
				     leftNumber = roundedDecimal*Math.pow(10, numberOfPlaces);
					 
				     return leftNumber;    
				 };
				 
				 var decimalDigits = function (num) {
							if (num.toString().indexOf('.') > 0) {
								return num.toString().split('.')[1].length;
							} else {
								return 0;
							}
				 };
				 
				 var removeTrailingZeros = function (numberArray) {
					var zerosNumberArray = [];
					zerosNumberArray = numberArray.slice();
					for (var ii = zerosNumberArray.length - 1, oneNotZero = 0; ii >= 0; ii--) {
						if (zerosNumberArray[ii]!=0) {
							oneNotZero = 1;
						} else if (oneNotZero == 0) {
							zerosNumberArray.pop();
						}
					}			
					return zerosNumberArray;
				}
				
			 // Extract the value/s for parameters- second parameter is array elements from right for round place, counting decimal
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						tagParameters = parser.extractTag($scope.expected).args;
						
						if (tagParameters[2] !== "undefined" && tagParameters[2] === "showanswer") {
							$scope.showanswer = true;
						} else {
							$scope.showanswer = false;
						}
						
						tagParmsZeroArray = tagParameters[0].split("");
						problemDecimalIndex = tagParameters[0].indexOf(".");

						if (problemDecimalIndex >= 0) {
							roundedIntegerNumber = getRounded(Number(tagParameters[0].replace(".", "")), tagParameters[1] - 1);
							roundedDecimalArray = roundedIntegerNumber.toString().split("");
							// if the leading character of the given number was zero or decimal point, add lead "0" to rounded
							if (tagParameters[0].charAt(0) === "0" || tagParameters[0].charAt(0) === ".") {
								roundedDecimalArray.unshift("0");
								// if the leading character was the decimal point, increase decimal location index for added zero  
								if (tagParameters[0].charAt(0) === ".") {
									problemDecimalIndex += 1;
								}
							} 
							roundedDecimalArray.splice(problemDecimalIndex,0,".");
							$scope.decimalAnswerArray = removeTrailingZeros(roundedDecimalArray);
							//remove decimal point if there are no digits to the right of the decimal
							if (typeof $scope.decimalAnswerArray[$scope.decimalAnswerArray.indexOf(".") + 1] == "undefined") {
								$scope.decimalAnswerArray.pop();
							}
						} else {
							roundedIntegerNumber = getRounded(Number(tagParameters[0]), tagParameters[1]);
							roundedDecimalArray = roundedIntegerNumber.toString().split("");
							$scope.decimalAnswerArray = roundedDecimalArray.slice();
						}

						$scope.givenNumberArray = tagParmsZeroArray.slice();
						$scope.numberArray = roundedDecimalArray.slice();

						// check for numberdigitsplace value > the number of places in numberdigits
						if ( parseInt(tagParameters[1], 10) > $scope.numberArray.toString().length) {
							console.log("place value greater than value of given number");
						}
						
						//build an array the same length as $scope.numberArray with blank spaces and a carat for the indicated digit
						for (var ii = 0, jj = 1, len1 = $scope.numberArray.length; ii < len1; ii++){
							if (($scope.numberArray[ii] != ',')&&($scope.numberArray[ii] != '.')) {
								if (jj == tagParameters[0].length - tagParameters[1]) {
									$scope.randomplacearray[ii] = "^";
									problemDigit = tagParmsZeroArray[ii];
									if ($scope.numberArray[ii + 1] != '.') {
										problemDigitRight = tagParmsZeroArray[ii + 1];
									} else {
										problemDigitRight = tagParmsZeroArray[ii + 2];
									}
								} else {
									$scope.randomplacearray[ii] = " ";
								}
								jj++;
							} else {
								$scope.randomplacearray[ii] = " ";
							}
						}
						
						switch (true) {
				
							case (problemDigitRight < 5):
								$scope.helpInstructions2 = "Since the number to the right of the "+problemDigit+" is "+problemDigitRight+" (4 or lower), the "+problemDigit+" must stay the same.";
								$scope.helpInstructions3 = "The whole number digits to the right of the rounded value become zeros.";
								break;
							case ((problemDigitRight >= 5)&&((parseInt(problemDigit, 10)+1)<10)):
								$scope.helpInstructions2 = "Since the number to the right of the "+problemDigit+" is "+problemDigitRight+" (5 or higher), the "+problemDigit+" must go up one. It becomes "+(parseInt(problemDigit, 10)+1)+".";
								$scope.helpInstructions3 = "The whole number digits to the right of the rounded value become zeros.";
								break;
							case ((problemDigitRight >= 5)&&((parseInt(problemDigit, 10)+1)>9)):
								$scope.helpInstructions2 = "Since the number to the right of the "+problemDigit+" is "+problemDigitRight+" (5 or higher), the "+problemDigit+" must go up one. It becomes "+(parseInt(problemDigit, 10)+1)+". Write '0' in place of the "+problemDigit+" and add one to the column on the left; if necessary, continue to carry and add until there are no further carries." ;
								$scope.helpInstructions3 = "The whole number digits to the right of the rounded value '0' become zeros.";
								break;
							default:
								break;
						}

					}
				});				
			},
			templateUrl: 'partials/directives/ms-placevalue.html'
		};
	}]);