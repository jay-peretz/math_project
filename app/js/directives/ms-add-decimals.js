'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
		// 'mathorenglish' first parameter is 'english' to display text, otherwise displays number column
		// 'showresult' second parameter is 'complete' to display number column with addition result
        parserProvider.register('adddecimals', {
            argTemplates: [{
                name: 'mathorenglish'
            },{
                name: 'showresult'
            },{
                name: 'addendparams'
            }],
            directiveTemplate: '<ms-add-decimals expected={{expected}}></ms-add-decimals>'
        });
    }])
  .directive('msAddDecimals', [
	'parser',
	function (parser) {
		return {
			restrict: 'E',
			scope: {
				expected: '@',
				label: '@'
			},
			controller: function ($scope, $element) {
				$scope.answer = '';
                $scope.controllerId = Math.random().toString();
				$scope.mathdisplay = true;
				$scope.displayresult = false;
				$scope.sign = '+';
				
				var numbarray = [],
				    randomplacearray = [],
				    emptyAnswerArray = [],
					addendnumbers = [],
					answerObject = "",
					answerArray = [],
					tightNumbersArray = [],
					carryNumArray = [],
					carryNumStringArray = [];
				
				function getDecimalPlaces(givenDecimal) {
					var givenDecimalString = "" + givenDecimal,
						givenDecimalStringLength = givenDecimalString.length,
						decimalPlaces = 0;
					
					if (givenDecimalString.indexOf(".")>0) {
						decimalPlaces = (givenDecimalStringLength-1) - givenDecimalString.indexOf(".");
					} else {
						decimalPlaces = 0;
					}
					return decimalPlaces;				
				};
				
				function addWhole(arrayNumObj) {
					var wholeSum = 0;
					for (var ii = 0, len = arrayNumObj.length; ii<len; ii += 1){
						wholeSum += +arrayNumObj[ii];
					}
					return wholeSum;
				}
				
				function addDecimal(arrayNumObj) {
					var decimalSum = 0,
						numberOfArrays = arrayNumObj.length,
						toBeAdded = new Array(numberOfArrays),
						sixteenZeros = "0000000000000000",
						placesRight = 1,
						numberToString = "",
						addResult = 0,
						stringWithDecimal = ""; 
	
					// get the maximum number of places to the right of the decimal in the set of numbers
					for (var ii = 0; ii<numberOfArrays; ii++){
						numberToString = arrayNumObj[ii].toString();
						if (numberToString.length - numberToString.indexOf(".") - 1 > placesRight) {
							placesRight = numberToString.length - numberToString.indexOf(".") - 1;
						}
					}
					
					for (var ii = 0, kk = 0; ii<numberOfArrays; ii++){
						numberToString = arrayNumObj[ii].toString();
						kk = placesRight - (numberToString.length - numberToString.indexOf(".") - 1);
						if (kk > 0) {
							toBeAdded[ii] = parseInt(numberToString.replace(".", "") + sixteenZeros.substr(0,kk), 10);
						} else {
							toBeAdded[ii] = parseInt(numberToString.replace(".", ""), 10);
						}
					}
				
					addResult = addWhole(toBeAdded);
					numberToString = addResult.toString();
					stringWithDecimal = numberToString.slice(0, -placesRight) + "." + numberToString.slice(-placesRight);
					decimalSum = parseFloat(stringWithDecimal);				
					return decimalSum;	
				}
				
				function createDisplayArray(decimal, maxPlacesLeft, maxPlacesRight, withZeros) {
					if ((typeof maxPlacesLeft === "undefined")||(typeof maxPlacesRight === "undefined")||(maxPlacesLeft + maxPlacesRight > 32)) {
						maxPlacesLeft = 16;
						maxPlacesRight = 16;
					}
					var totalNumberPlaces = maxPlacesLeft + maxPlacesRight + 1, 
						displayArray = [],
						decimalString = decimal.toString(),
						digitsRight = getDecimalPlaces(decimal),
						rightWithDecimal = digitsRight + 1,
						decimalLength = decimalString.length,
						digitsLeft = 0,
						addZeros = 0;
						
					if (digitsRight > 0) {
						digitsLeft = decimalLength - (digitsRight + 1);
					} else {
						digitsLeft = decimalLength;
						totalNumberPlaces = maxPlacesLeft;
					}	
					
					if ((typeof withZeros !== "undefined")&&(withZeros == 1)) {
						addZeros = 1;
					}
									
					for (var ii = 0, jj = 0; ii < totalNumberPlaces; ii++) {
						if (ii < (maxPlacesLeft - digitsLeft)) {
							// blank is "\xA0"
							displayArray[ii] = "\xA0";
						} else if ((ii >= (maxPlacesLeft - digitsLeft))&&(ii <= (maxPlacesLeft + rightWithDecimal))) {
							displayArray[ii] = decimalString.charAt(jj);
							jj++;
						} else if (ii > (maxPlacesLeft + digitsRight)) {
							if (addZeros == 1) {
								displayArray[ii] = "0";							
							} else {
								displayArray[ii] = "\xA0";
							}
						}
					}
				
					return displayArray;
				}
				
				function removeTrailingZeros (zerosNumberArray) {
					for (var kk = 0, len = zerosNumberArray.length; kk < len; kk++) {
						for (var ii = zerosNumberArray[kk].length - 1, oneNotZero = 0; ii >= 0; ii--) {
							if ((zerosNumberArray[kk][ii]!=0)&&(oneNotZero == 0)) {
								oneNotZero = 1;
							} else if (oneNotZero == 0) {
								zerosNumberArray[kk][ii] = "";
							}
						}
					}
				}
				
			 // Extract the value/s for $scope.wholenumber & $scope.wholenumberplace
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						parser.parse($scope.expected, { scope: $scope });
					}
				});
				
				$scope.$watch('mathorenglish', function () {
					if (typeof $scope.showresult === "string") {
						if ($scope.mathorenglish === "english") {
							$scope.mathdisplay = false;
						}
					}
				});
				$scope.$watch('showresult', function () {
					if (typeof $scope.showresult === "string") {
						if ($scope.showresult === "complete") {
							$scope.displayresult = true;
							$scope.mathdisplay = true;
						}
					}
				});
				
				$scope.$watch('addendparams', function () {

					if (typeof $scope.addendparams === "string") {
						addendnumbers = $scope.addendparams.substr(1, $scope.addendparams.length - 2).split(",");
					}

					if (addendnumbers[0] !== "undefined" && addendnumbers[1] !== "undefined") {
						if ($scope.mathdisplay) {
							
							answerObject = addDecimal(addendnumbers);
							$scope.answerArray = answerObject.toString().split("");							
							$scope.answerArrayDecimal = $scope.answerArray.indexOf(".");
							$scope.displayDigitsRight = $scope.answerArray.length-($scope.answerArrayDecimal+1);
							
							$scope.numberDisplayArray = new Array(addendnumbers.length);
							$scope.allNumbersArray = new Array(addendnumbers.length);
							$scope.tightNumbersArray = new Array(addendnumbers.length);
							$scope.tightNoDecimal = new Array(addendnumbers.length);
							$scope.emptyAnswerArray = [];
							$scope.displayPlacesLeft = 6;  // maximum 16 places left
							$scope.displayPlacesRight = 6; // maximum 16 places right
							$scope.allNumbersLength = $scope.displayPlacesLeft + $scope.displayPlacesRight + 1;
							for (var ii = 0; ii < addendnumbers.length; ii++) {
								$scope.numberDisplayArray[ii] = createDisplayArray(addendnumbers[ii], $scope.displayPlacesLeft, $scope.displayPlacesRight);
								$scope.allNumbersArray[ii] = createDisplayArray(addendnumbers[ii], $scope.displayPlacesLeft, $scope.displayPlacesRight, true);
							}
							
							$scope.startTightArray = $scope.displayPlacesLeft+$scope.displayDigitsRight;
							$scope.endTightArray = $scope.displayPlacesLeft+$scope.displayDigitsRight - ($scope.answerArray.length);  
					
							$scope.sign = '+';	
							
							// make arrays based on number of digits in $scope.answerArray for the problem numbers
							for (var ii = 0, len = addendnumbers.length; ii<len; ii++) {
								$scope.tightNumbersArray[ii] = new Array($scope.answerArray.length);
								for (var kk = $scope.answerArray.length-1, jj = $scope.startTightArray; jj > $scope.endTightArray; jj--) {
										$scope.tightNumbersArray[ii][kk] = $scope.allNumbersArray[ii][jj];
										kk--;
								}
								$scope.tightNoDecimal[ii] = $scope.tightNumbersArray[ii].slice();
								$scope.tightNoDecimal[ii].splice($scope.tightNoDecimal[ii].indexOf("."),1);
							}
							
							// carryNumArray represents carries only, no decimal point
							$scope.carryNumArray = new Array($scope.answerArray.length-1);
							for (jj = 0; jj < $scope.carryNumArray.length; jj++) {
								$scope.carryNumArray[jj] = 0;
							}
							
							for (var jj = $scope.carryNumArray.length - 1; jj >= 0; jj=jj-1) { 
									$scope.sumColumn = 0;
									if (jj != $scope.carryNumArray.length - 1) {				
										$scope.sumColumn += parseInt($scope.carryNumArray[jj+1], 10);
									}
									if (jj != 0){
										for (var ii = 0, len = addendnumbers.length; ii<len; ii++) {
											if (!isNaN(parseInt($scope.tightNoDecimal[ii][jj]), 10)) {
												$scope.sumColumn += parseInt($scope.tightNoDecimal[ii][jj], 10);
											}
										}
									}
									if (jj != 0) {
										$scope.sumColumn = Math.floor($scope.sumColumn/10);
										$scope.carryNumArray[jj] = $scope.sumColumn;
									}
							}
							$scope.carryNumArray.splice($scope.answerArrayDecimal+1, 0, ".");
					
							$scope.carryNumStringArray = new Array($scope.answerArray.length);
							for (var jj = 0; jj<$scope.answerArray.length; jj++) {
								if (!isNaN(parseInt($scope.carryNumArray[jj], 10))&&(parseInt($scope.carryNumArray[jj], 10)!=0)){
									$scope.carryNumStringArray[jj] = parseInt($scope.carryNumArray[jj], 10).toString();
								} else{
									$scope.carryNumStringArray[jj] = "";
								}
							}
							
							removeTrailingZeros($scope.tightNumbersArray);
							
							// create an empty copy of the answer array for display of addition without answer
							for (var ii = 0, len = $scope.answerArray.length; ii < len; ii += 1) {
								$scope.emptyAnswerArray[ii] = "";
							}
							
							$scope.firstArray = [];
							$scope.secondArray = [];
							$scope.thirdArray = [];
							$scope.secondArray = $scope.tightNumbersArray.slice();
							if ($scope.displayresult) {
								$scope.firstArray = $scope.carryNumStringArray.slice();
								$scope.firstArray.push();
								$scope.firstArray.shift();
								$scope.thirdArray = $scope.answerArray.slice();
							} else {
								$scope.firstArray = $scope.emptyAnswerArray
								$scope.thirdArray = $scope.emptyAnswerArray
							}
							
						} else {
							$scope.inenglish = "";
							if (addendnumbers.length == 2){
									$scope.inenglish += addendnumbers[0] + " and "+addendnumbers[1];
							} else {
								for (var ii = 0, len = addendnumbers.length; ii < len; ii += 1) {
									if (ii != len - 1) { 
										$scope.inenglish += addendnumbers[ii]+", ";
									} else {
										$scope.inenglish += "and "+addendnumbers[ii];
									}
								}
							}
						}
					}
				});
			},
			templateUrl: 'partials/directives/ms-addition.html'

		};
	}]);