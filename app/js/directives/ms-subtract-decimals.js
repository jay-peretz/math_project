'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
		// first parameter is 'english' to display text, otherwise displays number columns
		// second parameter is 'complete' to display number column with addition result
        parserProvider.register('subtractdecimals', {
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

				var tagParameters = [],
					problemObjects = [], // two element array, minuend and subtrahend
					borrowsMinuendArray = [], // array of problemObject number arrays, each maxDigit length, zeros fill lead places 
					onesBorrowedArray = [], // array to track borrows
					borrowedFromZeroArray = [], // special case, array to track borrows from zero or consecutive zeros
					displayWithBorrowsFinal = [], // array for display of minuend and subtraction borrows
					answerArray = [],
					answerWideArray = [],
					subtrahend = [],
					subtrahendWide = [],
					displayBorrowsDecimal,
					answerObject = 0,
					answerString = "",
					gotCarry = 0,
					rowForAddClass = 0,
					wideArrayLength = 0,
					placesLeft = 0,
					placesRight = 0,
					answerObject;
				
				var addZeroInteger = function (num) {
					if (num.charAt(0) === ".") {
						num = "0" + num;
					}
					return num;
				}
				
				var digitsRight = function (num) {
					if (num.toString().indexOf('.') > 0) {
                    	return num.toString().split('.')[1].length;
					} else {
						return 0;
					}
                };
				
				var digitsLeft = function (num) {
					if (num.toString().indexOf('.') < 0) {
						return num.toString().length;
					} else {
                    	return num.toString().split('.')[0].length;
					}
                };
				
				// functions to style the help-display borrows
								
				$scope.getClass2 = function(index) {
						var arrayRow = [],
							returnClasses = "";
						
						rowForAddClass = index;	
						
						arrayRow = ["row-zero", "row-line-through", "row-two"];
						if ($scope.displayresult) {
							returnClasses += arrayRow[index];
						}
						//console.log(" getClass2 index is: ",index," getClass2 returnClasses is: ",returnClasses)
						return returnClasses;
				}			
						
				$scope.getClass3 = function(index) {
					var finalCarryCurrent = displayWithBorrowsFinal[0][index],
						finalCarryAbove = "",
						finalCarryAboveRight = "",
						finalCarryOdd = index%2,
						classesReturn = "";	
					
					finalCarryAbove = displayWithBorrowsFinal[0][index];
					finalCarryAboveRight = displayWithBorrowsFinal[0][index+1];
					
					if (rowForAddClass === 1) {
						
						if (finalCarryAbove !== "") {		
							classesReturn = "line_through_dimmed ";
						} 
						if (finalCarryCurrent !== "" && finalCarryAboveRight !== ""){
							classesReturn = "line_through_dimmed ";
						}
						if (!finalCarryOdd && finalCarryAboveRight !== ""){
							classesReturn = "line_through_dimmed ";
						} 
						
						if (!finalCarryOdd) {
							classesReturn += " borrowSubtract";
							
							// selector below isolates columns without a borrow 
							if ((finalCarryCurrent == "" && finalCarryAbove == "")&&(displayWithBorrowsFinal[1][index]!=1)) {
								classesReturn += " paddingFullSubtract";
							} else {
								classesReturn += " paddingHalfSubtract";
							}
						} 
					}
					//console.log("getClass3 index is: ",index,"getClass3 classesReturn is: ",classesReturn)
					return classesReturn;
				}

				$scope.mathdisplay = true;
				$scope.displayresult = false;
				$scope.sign = '-';
				
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
						
						problemObjects[0] = addZeroInteger(tagParameters[2]);
						problemObjects[1] = addZeroInteger(tagParameters[3]);
						//  if minuend < subtrahend exchange the numbers
						if (Number(problemObjects[0])<Number(problemObjects[1])) {
							problemObjects.reverse();
						}
 
						answerObject = $filter('subtract-decimals')(problemObjects);
						
						// get the maximum number of places left of the decimal and right of the decimal
						placesLeft = Math.max(digitsLeft(problemObjects[0]), digitsLeft(problemObjects[1]), digitsLeft(answerObject));
						placesRight = Math.max(digitsRight(problemObjects[0]), digitsRight(problemObjects[1]), digitsRight(answerObject));
						
						// create arrays for borrows, minuend, subtrahend and answer, all same index for the decimal point
						borrowsMinuendArray[0] = $filter("decimal-to-display-array")(problemObjects[0], placesLeft, placesRight, 1);
						borrowsMinuendArray[1] = borrowsMinuendArray[0].slice();
						subtrahend = $filter("decimal-to-display-array")(problemObjects[1], placesLeft, placesRight, 1);
						answerArray = $filter("decimal-to-display-array")(answerObject, placesLeft, placesRight, 1);
						
						// initialize onesBorrowedArray & borrowedFromZeroArray
						for (var ii = 0, len = placesLeft + placesRight + 1; ii < len; ii += 1) {
							onesBorrowedArray[ii] = "";
							borrowedFromZeroArray[ii] = "";
						}
						
						
						// build the borrows array- borrows array, each place same as minuend unless borrowed from
						for (var ii = placesLeft + placesRight; ii > 0; ii -= 1) {
							var kk, // kk represents the power of ten of the place in the decimal being examined
								jj = ii - 1; 
								
							if (borrowsMinuendArray[0][ii] !== ".") {
								if (ii > placesLeft) {
									kk = placesLeft - ii;
								} else {
									kk = (placesLeft - 1) - ii;
								}
								
								// if minuend[ii] < subtrahend[ii] then subtract 1 from minuend at the appropriate place
								// uses power of ten to create decimal with one in appropriate place for the subtraction
								// translates decimal after subtraction back into array with decimal in appropriate index
								if (borrowsMinuendArray[0][ii] - subtrahend[ii] < 0) {									
									onesBorrowedArray[ii] = "1";									
									// special case where borrow from zero or consecutive zeros
									while (jj > 0) {
										if (borrowsMinuendArray[1][jj] === "0") {
											borrowedFromZeroArray[jj] = "1";
										} else if (borrowsMinuendArray[1][jj] !== ".") {
											jj = 1;
										}
										jj -= 1;
									}
									
									displayBorrowsDecimal = $filter('subtract-decimals')([borrowsMinuendArray[0].join(""), Math.pow(10,(kk+1))]);
									borrowsMinuendArray[0] = $filter("decimal-to-display-array")(displayBorrowsDecimal, placesLeft, placesRight, 1);
								}
							}
						}
						
						borrowsMinuendArray[0][placesLeft + placesRight] = "";
						
						// insert zeros back into borrowsMinuendArray[0] as appropriate & remove decimal
						for (var ii = 0, len = borrowsMinuendArray[0].length; ii < len; ii += 1) {							
							// clear the borrow entry above the minuend decimal point and above the right-most entry
							if (borrowsMinuendArray[0][ii] === "." ) {
								borrowsMinuendArray[0][ii] = "";
							}
							if (borrowsMinuendArray[0][ii] === borrowsMinuendArray[1][ii] ) {
								borrowsMinuendArray[0][ii] = "";
							}
						}
						
						// width for final display arrays
						wideArrayLength = 2*(placesLeft + placesRight+1);
						
					    // displayWithBorrowsFinal represents the wide-array version of borrowsMinuendArray
						displayWithBorrowsFinal[0] = [];
						displayWithBorrowsFinal[1] = [];
						
						// translate arrays to wide format
						for (var ii = 0; ii < wideArrayLength; ii += 1) {
							if (ii % 2 == 0) {
								displayWithBorrowsFinal[0][ii] = "";
								displayWithBorrowsFinal[1][ii] = "";
								subtrahendWide[ii] = "";
								answerWideArray[ii] = "";
							} else {
								displayWithBorrowsFinal[0][ii] = borrowsMinuendArray[0][(ii-1)/2];
								displayWithBorrowsFinal[1][ii] = borrowsMinuendArray[1][(ii-1)/2];
								subtrahendWide[ii] = subtrahend[(ii-1)/2];
								answerWideArray[ii] = answerArray[(ii-1)/2];
							}
						}
						
						// add borrows to displayWithBorrowsFinal[0] (borrows row) & displayWithBorrowsFinal[1] (minuend)
						for (var ii = 0; ii < wideArrayLength; ii += 1) {
							if (ii % 2 !== 0) {
								if (displayWithBorrowsFinal[0][ii] === ""){
									displayWithBorrowsFinal[1][ii-1] = onesBorrowedArray[Math.floor(ii/2)];
								} else {
									displayWithBorrowsFinal[0][ii-1] = onesBorrowedArray[Math.floor(ii/2)];
								}
								// special case where borrow from zero or consecutive zeros
								if (borrowedFromZeroArray[Math.floor(ii/2)] === "1") {
									displayWithBorrowsFinal[1][ii-1] = borrowedFromZeroArray[Math.floor(ii/2)];
								}
							}
						}
						

						// remove elements of display array if 2nd parameter is anything but "complete"
						if ($scope.displayresult == false) {
								for (var ii = 0; ii < wideArrayLength; ii += 1) {
									displayWithBorrowsFinal[0][ii] = "";
									answerWideArray[ii] = "";
									if (ii%2 === 0) {
										displayWithBorrowsFinal[1][ii] = "";
									}
								}
						}
						
						console.log("bottom- displayWithBorrowsFinal[0] is: ", displayWithBorrowsFinal[0]);
						
						$scope.firstArray = [];
						$scope.secondArray = [];
						$scope.thirdArray = [];
						$scope.firstArray = displayWithBorrowsFinal.slice();
						$scope.secondArray = subtrahendWide.slice();
						$scope.thirdArray = answerWideArray.slice();
						
						
					} else {
								$scope.inenglish = tagParameters[2] + " minus "+tagParameters[3];
					}
					
				});
			},
			templateUrl: 'partials/directives/ms-subtraction.html'

		};
	}]);