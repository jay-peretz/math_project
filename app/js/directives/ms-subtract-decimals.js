'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
		// 'mathorenglish' first parameter is 'english' to display text, otherwise displays number column
		// 'showresult' second parameter is 'complete' to display number column with addition result
        parserProvider.register('subtractdecimals', {
            argTemplates: [{
                name: 'mathorenglish'
            },{
                name: 'showresult'
            },{
                name: 'minuendIn'
            },{
                name: 'subtrahendIn'
            }],
            directiveTemplate: '<ms-subtract-decimals expected={{expected}}></ms-subtract-decimals>'
        });
    }])
  .directive('msSubtractDecimals', [
	'parser',
	function (parser) {
		return {
			restrict: 'E',
			scope: {
				expected: '@',
				label: '@'
			},
			controller: function ($scope, $element, $filter) {
				$scope.answer = '';
                $scope.controllerId = Math.random().toString();
				$scope.mathorenglish = [];
				$scope.mathdisplay = true;
				$scope.showresult = [];
				$scope.displayresult = false;
				$scope.minuendIn = [];
				$scope.subtrahendIn = [];
				$scope.problemObjects = [];
				$scope.answerObject = 0;
				$scope.sign = '-';
				
				var numberArrays = new Array(2), //string arrays for minuend and subtrahend
					maxDigits = 0,  // the value of the length of the larger of minuend or subtrahend
					allNumbersArray = [], // array of problemObject number arrays, each maxDigit length, zeros fill lead places 
					workingCarriesArray = [], // a single-dimensional array to represent the effect of borrowing on the minuend
					levelsCarryArray = [], // array of borrowing-steps arrays, each maxDigit length, zeros fill lead places
					eachNumberArray = [], // represents minuend and subtrahend as arrays with maxDigits  
					finalCarryLayersArray = [], 
					displayWithBorrowsArray = [],
					displayWithBorrowsClean = [],
					displayWithBorrowsFinal = [],
					subtrahend = [],
					answerString = "",
					answerArray = [],
					answerWideArray = [],
					gotCarry = 0,
					rowForAddClass = 0,
					minuendParsed = "",
					subtrahendParsed = "",
					maxNumberLength = 0;
				
				function removeLeadingZeros(zerosNumberArray) {
					for (var ii = 0, oneNotZero = 0; ii < zerosNumberArray.length; ii++) {
						if (zerosNumberArray[ii]!=0) {
							oneNotZero = 1;
						} else if (oneNotZero == 0) {
							zerosNumberArray[ii] = "";
						}
					}			
				}
				
				// functions to style the help-display borrows
								
				$scope.getClass2 = function(index) {
						rowForAddClass = index;	
				}
				
				/*$scope.getClass3 = function(index) {
					var finalCarryCurrent = $scope.displayBorrowsDecimal[rowForAddClass][index],
						finalCarryAbove = "",
						finalCarryAboveRight = "",
						finalCarryOdd = index%2,
						classesReturn = "";	
						
					if (index%2==1) {
						classesReturn += "borrowSubtract "; 
					}
						
					if (rowForAddClass>0) {
						finalCarryAbove = $scope.displayBorrowsDecimal[rowForAddClass-1][index];
						finalCarryAboveRight = $scope.displayBorrowsDecimal[rowForAddClass-1][index+1];
					}
						
					if (rowForAddClass > 0) {
						if (finalCarryCurrent !== "" && finalCarryAbove !== "") {		
							classesReturn += "line_through_dimmed ";
						}
						if (finalCarryCurrent !== "" && finalCarryAboveRight !== "" &&finalCarryOdd){
							classesReturn += "line_through_dimmed ";
						}
					}
					
					return classesReturn;
				}*/
			
			
		$scope.getClass3 = function(index) {
			var finalCarryCurrent = $scope.displayBorrowsDecimal[rowForAddClass][index],
				finalCarryAbove = "",
				finalCarryAboveRight = "",
				finalCarryOdd = index%2,
				classesReturn = "";	
			
			for (var ii = $scope.displayBorrowsDecimal.length; ii > 0; ii--) {
				console.log ("$scope.displayBorrowsDecimal["+ii+"] is: "+$scope.displayBorrowsDecimal[ii]);
			}
			if (rowForAddClass>0) {
				finalCarryAbove = $scope.displayBorrowsDecimal[rowForAddClass-1][index];
				finalCarryAboveRight = $scope.displayBorrowsDecimal[rowForAddClass-1][index+1];
			}
				
			if (rowForAddClass > 0) {
				if (finalCarryCurrent !== "" && finalCarryAbove !== "") {		
					classesReturn = "line_through_dimmed ";
				} 
				if (finalCarryCurrent !== "" && finalCarryAboveRight !== "" &&finalCarryOdd){
					classesReturn = "line_through_dimmed ";
				} 
				if (finalCarryOdd) {
					classesReturn += " borrowSubtract";
					// selector below isolates columns without a borrow 
					if ((finalCarryCurrent == "" && finalCarryAbove == "")&&($scope.displayBorrowsDecimal[1][index]!=1)&&((typeof $scope.displayBorrowsDecimal[2] != "undefined")&&($scope.displayBorrowsDecimal[2][index] !=1))) {
						classesReturn += " paddingFullSubtract";
					// selector below isolates columns with a borrow
					} else {
						classesReturn += " paddingHalfSubtract";
					}
				} 
			}
			
			return classesReturn;
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
				
				$scope.$watch('minuendIn', function () {
					if (typeof $scope.minuendIn === "string"&& $scope.minuendIn !== "") {
						minuendParsed = JSON.parse($scope.minuendIn);
					}
				});
				
				$scope.$watch('subtrahendIn', function () {
					if (typeof $scope.subtrahendIn === "string") {
						subtrahendParsed = JSON.parse($scope.subtrahendIn);
						if ($scope.mathdisplay) {
							
							$scope.problemObjects[0] = minuendParsed;
							$scope.problemObjects[1] = subtrahendParsed;
							//  if minuend < subtrahend exchange the numbers
							if ($scope.problemObjects[0]<$scope.problemObjects[1]) {
								$scope.problemObjects.reverse();
							}
							
							$scope.numberQuestionArray = new Array($scope.problemObjects.length);
							$scope.numberDisplayArray = new Array($scope.problemObjects.length);
							$scope.answerDisplayArray = [];
							
							// logic to standardize position of decimal point in numbers
							$scope.answerObject = $filter("subtract-decimals")($scope.problemObjects);
							answerString = $scope.answerObject.toString().replace(".", "");
							$scope.answerArray = $scope.answerObject.toString().split("");
							$scope.answerArrayDecimal = $scope.answerArray.indexOf(".");
							$scope.displayDigitsRight = $scope.answerArray.length-($scope.answerArrayDecimal+1);
							$scope.holdDecimalPlaces = 0;
							$scope.placesLeft = 0;
							$scope.placesRight = 0;
							
							// find the maximum number of places right and left of the decimal for numbers in the subtraction
							// find the maximum number of places right and left of the decimal for numbers in the subtraction
							for (var ii = 0, currentPlacesLeft = 0; ii < $scope.problemObjects.length; ii++) {
								// check for decimal portion
								if ($scope.problemObjects[ii].toString().split('.')[0].length != $scope.problemObjects[ii].toString().length) {
									// if the number has a decimal portion get the number of decimal places
									$scope.holdDecimalPlaces = $scope.problemObjects[ii].toString().split('.')[1].length;
								} else {
									// if the number doesn't have a decimal portion make one 
									$scope.holdDecimalPlaces = 1;
									$scope.problemObjects[ii] = Number($scope.problemObjects[ii].toString()+'.0').toFixed(1);
								}
								if ($scope.holdDecimalPlaces > $scope.placesRight) {
									$scope.placesRight = $scope.holdDecimalPlaces;
								}
								currentPlacesLeft = $scope.problemObjects[ii].toString().length - ($scope.holdDecimalPlaces + 1);
								if ($scope.placesLeft < currentPlacesLeft) {
									$scope.placesLeft = currentPlacesLeft;
								}
					
							}
																			
							for (var ii = 0; ii < $scope.problemObjects.length; ii++) {
								$scope.numberQuestionArray[ii] = $filter("decimal-to-display-array")($scope.problemObjects[ii], $scope.placesLeft, $scope.placesRight);
								$scope.numberDisplayArray[ii] = $filter("decimal-to-display-array")($scope.problemObjects[ii], $scope.placesLeft, $scope.placesRight, 1);	
							}
									
							$scope.answerDisplayArray = $filter("decimal-to-display-array")($scope.answerObject, $scope.placesLeft, $scope.placesRight);
							
							$scope.numbersIntArray = new Array(2);
							$scope.numbersIntArray[0] = new Array($scope.numberDisplayArray[0].length-1);
							$scope.numbersIntArray[1] = new Array($scope.numberDisplayArray[0].length-1);
							
							// populate $scope.numbersIntArray[ii] with $scope.numberDisplayArray[ii] digits or "0", no decimal point
							for (ii = 0; ii < 2; ii++) {
									for (var jj = 0, kk = 0, len = $scope.numberDisplayArray[0].length; jj < len; jj++) {
										if ($scope.numberDisplayArray[ii][jj] != ".") {
											if (/^\d$/.test($scope.numberDisplayArray[ii][jj])) {
												$scope.numbersIntArray[ii][kk] = $scope.numberDisplayArray[ii][jj];
												kk++;
											} else {
												$scope.numbersIntArray[ii][kk] = "0";
												kk++;
											}
										}
									}
							}
							
							$scope.problemObjectsNoDecimal = [
										parseInt($scope.numbersIntArray[0].toString().replace(/,/g,''),10),
										parseInt($scope.numbersIntArray[1].toString().replace(/,/g,''),10)	
							]	
							
							//  get the maximum number length of minuend and subtrahend
							for (var ii = 0, len = $scope.problemObjectsNoDecimal.length; ii<len; ii++) {
								var numberString = $scope.problemObjectsNoDecimal[ii].toString();
								if (numberString.length>maxDigits){
									maxDigits = numberString.length;
								}
							}
							
							for (ii = 0; ii< maxDigits; ii++) {
								levelsCarryArray[ii] = new Array(maxDigits);
								displayWithBorrowsArray[ii] = new Array(maxDigits*2);
								for (var jj = 0; jj<maxDigits; jj++){
									levelsCarryArray[ii][jj] = "";
								}
								for (var jj = 0; jj < maxDigits*2; jj++) {
									displayWithBorrowsArray[ii][jj] = "";
								}
							}
							
							for (var jj = 0; jj < maxDigits*2; jj++) {
									subtrahend[jj] = "";
									answerWideArray[jj] = "";	
								}
					
							for (var ii = 0, len = maxDigits; ii<len; ii++) {
								workingCarriesArray[ii] = 0;
							}
							// numberStringArray- has # of rows = # of problemObjects and # of columns in each row = maxDigits
							// numberStringArray- each row a given number, if the number has fewer places than maxDigits extra cols are ""
							// problemObjects become strings to get the length, then string arrays, then number arrays
							for (var ii = 0, len = $scope.problemObjectsNoDecimal.length; ii<len; ii++) {
								var numberString = $scope.problemObjectsNoDecimal[ii].toString(),
									numberLength = numberString.length,
									numberStringArray = new Array(maxDigits),
									eachNumberArray = new Array(maxDigits),
									copyEachNumbArray = new Array(maxDigits);
								// fill in the parts of the arrays not filled by minuend/subtrahend
								for (var jj = 0; jj<maxDigits; jj++) {
									if (jj < maxDigits-numberLength) {
										numberStringArray[jj] ="";
										eachNumberArray[jj] =0;
										copyEachNumbArray[jj] =0;
									} else {
										var subIndex = jj-(maxDigits-numberLength);
										numberStringArray[jj] = numberString.charAt(subIndex);
										eachNumberArray[jj] = parseInt(numberString.charAt(subIndex), 10);
										copyEachNumbArray[jj] = parseInt(numberString.charAt(subIndex), 10);
									}
								}
								numberArrays[ii] = numberStringArray;
								allNumbersArray[ii] = eachNumberArray;
								if (ii == 0) {
									workingCarriesArray = copyEachNumbArray;
								}
							}
							
							// compute workingCarriesArray representing the complete record of borrows and additions
							// store each successive pass of borrowing as levelsCarryArray[gg]
							// if any borrowing occurs, set gotCarry to a value of 1
							for (var jj = maxDigits-1, kk = 0, gg = 0; jj>=0; jj--) {
									if (workingCarriesArray[jj]-allNumbersArray[1][jj]<0){					
										workingCarriesArray[jj] = workingCarriesArray[jj] + 10;
										workingCarriesArray[jj-1] = workingCarriesArray[jj-1]-1;
										if (workingCarriesArray[jj-1]<allNumbersArray[0][jj-1]){					
												levelsCarryArray[gg][jj] = workingCarriesArray[jj];
												levelsCarryArray[gg][jj-1] = workingCarriesArray[jj-1];
												gg++;
										}						
										gotCarry = 1;
									}
									kk++;
							}
							
							// trickle any value not "" down the columns of the levelsCarryArray (2-dimensional) array
							// to show successive borrows stacked one on top of the other for each column
							var trickleDown = 1;
							while (trickleDown == 1) {
								trickleDown = 0;
								for (var ii = 0, len = levelsCarryArray.length; ii<len-1; ii++) {
									for (var jj = maxDigits-1; jj>=0; jj--) {
										if ((levelsCarryArray[ii][jj] === "")&&(levelsCarryArray[ii+1][jj]!=="")){
											levelsCarryArray[ii][jj] = levelsCarryArray[ii+1][jj];
											levelsCarryArray[ii+1][jj] = "";
											trickleDown = 1;
										}
									}
								}
							}
							
							// create finalCarryLayersArray where each row is one level of carries from "trickled" levelsCarryArray
							// empty rows of levelsCarryArray are dropped and non-numeric elements of the array become empty strings ("").
							for (var ii = 0, kk = 0, stuff = 0; ii<maxDigits; ii++) {
								stuff = 0;
								for (var jj = maxDigits-1; jj>=0; jj--) {
									if ((levelsCarryArray[ii][jj]!=="")) {
										stuff = 1;
									}
									// correct for borrow from zero
									if (levelsCarryArray[ii][jj]==-1){
										levelsCarryArray[ii][jj] = 10;
									}
								}
								if (stuff == 1) {
									finalCarryLayersArray[kk] = new Array (maxDigits);
									for (jj = 0; jj<maxDigits; jj++) {
										if ((levelsCarryArray[ii][jj]==0)||levelsCarryArray[ii][jj]!=="") {
											finalCarryLayersArray[kk][jj] = levelsCarryArray[ii][jj]
										} else {
											finalCarryLayersArray[kk][jj] = "";
										}
									}
									if ((finalCarryLayersArray[kk][0]==0)&&(kk!=0)) {
										finalCarryLayersArray[kk][0]="";
									}
									kk++;
								}
							}
					
							finalCarryLayersArray.reverse();

							// fill in displayWithBorrowsArray[0] with the numbers of the minuend
							for (var jj = 0, kk = 0, len2 = maxDigits*2; jj < len2; jj = jj+2) {
									displayWithBorrowsArray[0][jj] = numberArrays[0][kk];
									kk++;
							}
							
							// finish displayWithBorrowsArray[0] by adding carries from last row of finalCarryLayersArray
							if (finalCarryLayersArray.length > 0) {
								for (var jj = 0, kk = 0, gg = finalCarryLayersArray.length-1, len2 = maxDigits*2; jj < len2; jj = jj+2) {
									if (finalCarryLayersArray[gg][kk] > 9) {
										displayWithBorrowsArray[0][jj-1] = finalCarryLayersArray[gg][kk].toString().substring(0, 1);
									} 
									kk++;
								}
							}
							
							//  build the rest of displayWithBorrowsArray from finalCarryLayersArray       
							//  add borrows from row above to the column on the left
							
							for (var gg = finalCarryLayersArray.length-1, hh = 1; gg >= 0; gg--) { 
								for (var jj = 0, kk = 0, len2 = maxDigits*2; jj < len2; jj = jj+2) {
									if (finalCarryLayersArray[gg][kk] < 10) {
										displayWithBorrowsArray[hh][jj] = finalCarryLayersArray[gg][kk].toString();
									} 
									if (gg-1>=0) {
										if (finalCarryLayersArray[gg-1][kk] > 9) {
											displayWithBorrowsArray[hh][jj-1] = finalCarryLayersArray[gg-1][kk].toString().substring(0, 1);
										} 
									}
									kk++;
								}
								hh++;
							}
							
							trickleDown = 1;
							while (trickleDown == 1) {
								trickleDown = 0;
								for (var ii = 0, len = displayWithBorrowsArray.length; ii<len-1; ii++) {
									for (var jj = (maxDigits*2)-1; jj>=0; jj--) {
										if ((displayWithBorrowsArray[ii][jj] === "")&&(displayWithBorrowsArray[ii+1][jj]!=="")&&(jj%2!=1)){
											displayWithBorrowsArray[ii][jj] = displayWithBorrowsArray[ii+1][jj];
											displayWithBorrowsArray[ii+1][jj] = "";
											trickleDown = 1;
										}
									}
								}
							}
							
							displayWithBorrowsArray.reverse();
							
							// create an array of length maxDigits where the answer is represented as string characters 
							for (var ii = 0, kk = 0, len=answerString.length; ii<maxDigits; ii++) {
								if (kk<maxDigits-len) {
									answerArray[ii] = "";
									kk++;
								} else {
										answerArray[ii] = answerString.charAt(ii-kk);
								}
							}
							
							// fill in double-wide subtrahend[] with numberArrays[1] and double-wide answerWideArray[] with answerArray
							for (var jj = 0, kk = 0, len=(maxDigits*2); jj<len; jj=jj+2) {
									subtrahend[jj] = numberArrays[1][kk];
									answerWideArray[jj] = answerArray[kk];
									kk++;
							}
							
							// transition from whole numbers back to decimal numbers
							$scope.answerWideArrayDecimal = new Array(answerWideArray.length+2);
							$scope.subtrahendDecimal = new Array(answerWideArray.length+2);
							$scope.displayBorrowsDecimal = new Array(displayWithBorrowsArray.length);
							
							$scope.decimalPointAt = (answerWideArray.length)-($scope.displayDigitsRight*2)
							
							// add the decimal point to the subtrahend and the answer
							for (var jj = 0, kk = 0, len = answerWideArray.length+2; jj < len; jj++) {
									if ((jj != $scope.decimalPointAt)&&(jj != $scope.decimalPointAt - 1)) {
										$scope.answerWideArrayDecimal[jj] = answerWideArray[kk];
										$scope.subtrahendDecimal[jj] = subtrahend[kk]
										kk++;
									} 
									if (jj == $scope.decimalPointAt - 1) {
										$scope.answerWideArrayDecimal[jj] = "";
										$scope.subtrahendDecimal[jj] = "";
									}
									if (jj == $scope.decimalPointAt) {
										$scope.answerWideArrayDecimal[jj] = ".";
										$scope.subtrahendDecimal[jj] = ".";
									}
							}
							
							$scope.borrowArrayLength = displayWithBorrowsArray.length;
							
							// add the decimal point or appropriate spaces to the borrows arrays
							for (var ii = 0, kk = 0; ii < $scope.borrowArrayLength; ii++) {
									kk = 0;
									$scope.displayBorrowsDecimal[ii] = new Array(answerWideArray.length+2);
									for (var jj = 0, len = answerWideArray.length+2; jj < len; jj++) {
										if ((jj != $scope.decimalPointAt)&&(jj != $scope.decimalPointAt - 1)) {
											$scope.displayBorrowsDecimal[ii][jj] = displayWithBorrowsArray[ii][kk];
											kk++
										} 
										if (jj == $scope.decimalPointAt - 1) {
											$scope.displayBorrowsDecimal[ii][jj] = "";
										}
										if (jj == $scope.decimalPointAt) {
											if (ii == ($scope.borrowArrayLength - 1)) {
												$scope.displayBorrowsDecimal[ii][jj] = ".";
											} else {
												$scope.displayBorrowsDecimal[ii][jj] = "";
											}
										}
									}
							}
							
							// remove elements of display array if 2nd parameter is anything but "complete"
							if ($scope.displayresult) {
									displayWithBorrowsFinal = $scope.displayBorrowsDecimal.slice();
							} else {
									for (var ii = 0, len = $scope.displayBorrowsDecimal[0].length; ii < len; ii += 1) {
										displayWithBorrowsFinal[0] = $scope.displayBorrowsDecimal[$scope.displayBorrowsDecimal.length-1];
									}

									for (var ii = 0, len = displayWithBorrowsFinal[0].length; ii < len; ii += 1) {																				// remove carries
											if (ii % 2 !== 0) {
												displayWithBorrowsFinal[0][ii] = "";
											}
									}

									for (var ii = 0, len = $scope.answerWideArrayDecimal.length; ii < len; ii += 1) {
										$scope.answerWideArrayDecimal[ii] = "";
									}
							}
								
							$scope.firstArray = [];
							$scope.secondArray = [];
							$scope.thirdArray = [];
							$scope.firstArray = displayWithBorrowsFinal.slice();
							$scope.secondArray = $scope.subtrahendDecimal.slice();
							$scope.thirdArray = $scope.answerWideArrayDecimal.slice();
							$scope.secondArray.pop();

							
						} else {
							if (subtrahendParsed != ""){
									$scope.inenglish = minuendParsed + " minus "+subtrahendParsed;
							} 
						}
					}
				});
			},
			templateUrl: 'partials/directives/ms-subtraction.html'

		};
	}]);