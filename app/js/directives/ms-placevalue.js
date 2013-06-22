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
				$scope.givenNumberArray = [];
				$scope.numbStringCommas = "";
								
				var tagParameters = [],
					tagParmsZeroArray = [],
					roundedDecimalArray = [],
					wholesPlaceArray = [],
					decimalsPlaceArray = [],
					problemDigit,
					problemDigitRight,
					problemDecimalIndex,
					problemDecimalPlaces,
					roundToThisPlace,
					roundedIntegerNumber,
					numberPlaceWords;
					
				wholesPlaceArray = ["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]	
				
				decimalsPlaceArray = ["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"];
					
				var getRounded = function(numberObject, numberOfPlaces){
				     var leftNumber = 0,
					     givenNumberString = numberObject.toString(),
					     truncatedDecimal = numberObject/Math.pow(10, numberOfPlaces),
					     roundedDecimal = Math.round(truncatedDecimal);
     
				     leftNumber = roundedDecimal*Math.pow(10, numberOfPlaces);
					 
				     return leftNumber;    
				 };
				 
				 var decimalDigits = function (numString) {
							if (numString.indexOf('.') > 0) {
								return numString.split('.')[1].length;
							} else {
								return 0;
							}
				 };
				 
				 var adjustTrailingZeros = function (numberArray, tagParamsOne) {
					var zerosNumberArray = [],
						oneNotZero = 0,
						decimalsNumberArray = 0,
						finalDecimalPlaces = 0,
						finalPlacesIndex = 0;
					zerosNumberArray = numberArray.slice();
					decimalsNumberArray = decimalDigits(numberArray.join(""));
					finalDecimalPlaces = decimalsNumberArray - (tagParamsOne - 1);
					finalPlacesIndex = zerosNumberArray.length - (decimalsNumberArray - finalDecimalPlaces);
				
					for (var ii = zerosNumberArray.length - 1; ii >= finalPlacesIndex; ii--) {
						if (zerosNumberArray[ii]!=0) {
							oneNotZero = 1;
						} else if (oneNotZero == 0) {
							zerosNumberArray.pop();
						}
					}	
					
					return zerosNumberArray;
				}
				
				var getNumberStringCommas = function(givenWhole) {
					var needsCommas = givenWhole,
						buildCommas = [],
						thisManyCommas = Math.floor((needsCommas.length-1)/3),
						numberWithCommas = '';
				
					for (var i=0; i<thisManyCommas+1; i+=1){
							if (i<thisManyCommas){
								buildCommas[i] =  needsCommas.substr(needsCommas.length-(3*(i+1)), 3);
							} else {
								buildCommas[i] =  needsCommas.substr(0, needsCommas.length-(3*i));
							}					
					}
					numberWithCommas = buildCommas.reverse();
					numberWithCommas = numberWithCommas.join();
					return numberWithCommas;				
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
						problemDecimalPlaces = decimalDigits(tagParameters[0]);

						if (problemDecimalIndex >= 0) {
							$scope.givenNumberArray = tagParmsZeroArray.slice();
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
							$scope.decimalAnswerArray = adjustTrailingZeros(roundedDecimalArray, tagParameters[1]);
							//remove decimal point if there are no digits to the right of the decimal
							if (typeof $scope.decimalAnswerArray[$scope.decimalAnswerArray.indexOf(".") + 1] == "undefined") {
								$scope.decimalAnswerArray.pop();
							}
							// get the placename from decimalsPlaceArray
							numberPlaceWords = decimalsPlaceArray[Number(tagParameters[1]) + (5 - problemDecimalPlaces)];
						} else {
							$scope.givenNumberArray = getNumberStringCommas(tagParameters[0]).split("");
							roundedIntegerNumber = getRounded(Number(tagParameters[0]), tagParameters[1]);
							roundedIntegerNumber = getNumberStringCommas(roundedIntegerNumber.toString());
							roundedDecimalArray = roundedIntegerNumber.toString().split("");
							$scope.decimalAnswerArray = roundedDecimalArray.slice();
							// get the placename from wholesPlaceArray
							numberPlaceWords = wholesPlaceArray[tagParameters[1]];
						}

						$scope.numberArray = roundedDecimalArray.slice();
						
						//build an array the same length as $scope.numberArray with blank spaces and a carat for the indicated digit
						for (var ii = 0, jj = 1, len1 = $scope.numberArray.length; ii < len1; ii++){
							if (($scope.numberArray[ii] != ',')&&($scope.numberArray[ii] != '.')) {
								if (jj == tagParameters[0].length - tagParameters[1]) {
									$scope.randomplacearray[ii] = "^";
									problemDigit = tagParmsZeroArray[ii];
									if (($scope.numberArray[ii] != ',')&&($scope.numberArray[ii] != '.')) {
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
								$scope.helpInstructions2 = "Since the number to the right of the "+problemDigit+" in the "+numberPlaceWords+" place is "+problemDigitRight+" (4 or lower), the "+problemDigit+" (in the "+numberPlaceWords+" place) must stay the same."
								break;
							case ((problemDigitRight >= 5)&&((parseInt(problemDigit, 10)+1)<10)):
								$scope.helpInstructions2 = "Since the number to the right of the "+problemDigit+" in the "+numberPlaceWords+" place is "+problemDigitRight+" (5 or higher), the "+problemDigit+" must go up 1. It becomes "+(parseInt(problemDigit, 10)+1)+".";
								break;
							case ((problemDigitRight >= 5)&&((parseInt(problemDigit, 10)+1)>9)):
								$scope.helpInstructions2 = "Since the number to the right of the "+problemDigit+" in the "+numberPlaceWords+" place is "+problemDigitRight+" (5 or higher), the "+problemDigit+" must go up 1. It becomes "+(parseInt(problemDigit, 10)+1)+". Write '0' in the "+numberPlaceWords+" place and add one to the number on the left; if necessary, continue to carry and add until there are no further carries." ;
								break;
							default:
								break;
						}
						
						if (problemDecimalIndex >= 0) {
							$scope.helpInstructions3 = "The digits after the decimal point to the right of the rounded value are dropped.";
						} else {
							$scope.helpInstructions3 = "The whole number digits to the right of the rounded value become zeros.";
						}

					}
				});				
			},
			templateUrl: 'partials/directives/ms-placevalue.html'
		};
	}]);