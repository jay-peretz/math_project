'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
		// 'mathorenglish' first parameter is 'english' to display text, otherwise displays number column
		// 'showresult' second parameter is 'complete' to display number column with addition result
        parserProvider.register('subtractwholes', {
            argTemplates: [{
                name: 'mathorenglish'
            },{
                name: 'showresult'
            },{
                name: 'minuendIn'
            },{
                name: 'subtrahendIn'
            }],
            directiveTemplate: '<ms-subtract-wholes expected={{expected}}></ms-subtract-wholes>'
        });
    }])
  .directive('msSubtractWholes', [
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
				
				// function getClass2, classes for display- finds the row $index for function getClass3
				$scope.getClass2 = function(index) {
						rowForAddClass = index;	
				}
				
				// add classes to elements of display that represent line-outs and borrows
				$scope.getClass3 = function(index) {
					var finalCarryCurrent = displayWithBorrowsClean[rowForAddClass][index],
						finalCarryAbove = "",
						finalCarryAboveRight = "",
						finalCarryOdd = index%2,
						classesReturn = "";	
					
					if (rowForAddClass>0) {
						finalCarryAbove = displayWithBorrowsClean[rowForAddClass-1][index];
						finalCarryAboveRight = displayWithBorrowsClean[rowForAddClass-1][index+1];
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
							if ((finalCarryCurrent == "" && finalCarryAbove == "")&&(displayWithBorrowsClean[1][index]!=1)&&((typeof displayWithBorrowsClean[2] != "undefined")&&(displayWithBorrowsClean[2][index] !=1))) {
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
							
							$scope.problemObjects[0] = parseInt(minuendParsed, 10);
							$scope.problemObjects[1] = parseInt(subtrahendParsed, 10);
							//  if minuend < subtrahend exchange the numbers
							if ($scope.problemObjects[0]<$scope.problemObjects[1]) {
								$scope.problemObjects.reverse();
							}
							
							$scope.answerObject = $filter('subtract-wholes')($scope.problemObjects);
							answerString = $scope.answerObject.toString();
							
							for (var ii = 0, len = $scope.problemObjects.length; ii<len; ii++) {
								var numberString = $scope.problemObjects[ii].toString();
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
							
							eachNumberArray = new Array(maxDigits);
					
							for (var ii = 0, len = maxDigits; ii<len; ii++) {
								workingCarriesArray[ii] = 0;
							}
							// numberStringArray- has # of rows = # of problemObjects and # of columns in each row = maxDigits
							// numberStringArray- each row a given number, if the number has fewer places than maxDigits extra cols are ""
							// problemObjects become strings to get the length, then string arrays, then number arrays
							for (var ii = 0, len = $scope.problemObjects.length; ii<len; ii++) {
								var numberString = $scope.problemObjects[ii].toString(),
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
							
							//displayWithBorrowsArray has one row for every number in minuend
							//displayWithBorrowsArray(displayWithBorrowsArray.length-2) is carry row
							//for angularjs layout, ng-class style of column elements, add empty row 0
							//displayWithBorrowsClean, displayWithBorrowsArray minus undefined or empty rows
							displayWithBorrowsClean[0] = [];
							for (var ii = 0, len1 = displayWithBorrowsArray[0].length; ii < len1; ii += 1) {
								displayWithBorrowsClean[0][ii] = "";
							}
								
							for (var ii = 0, len1 = displayWithBorrowsArray.length, newrowNumber = 1; ii < len1; ii += 1) {
								if (typeof(displayWithBorrowsArray[ii]) !== "undefined") {
									for (var jj = 0, len2 = displayWithBorrowsArray[ii].length, flag=false; jj < len2; jj += 1) {	
										if (displayWithBorrowsArray[ii][jj] !== "") {
											flag = true
										}
									}
									if (flag) {
										displayWithBorrowsClean[newrowNumber] = [];
										for (var kk = 0, len3 = displayWithBorrowsArray[ii].length - 1; kk < len3; kk += 1) {	
											displayWithBorrowsClean[newrowNumber][kk] = displayWithBorrowsArray[ii][kk];
										}
										newrowNumber += 1;
									}
								}
							}
							
							for (var ii = 0, len = displayWithBorrowsClean.length; ii < len; ii += 1) {
								displayWithBorrowsFinal[ii] = [];
								displayWithBorrowsFinal[ii] = displayWithBorrowsClean[ii];
							}
							
							// if the borrows line has a leading zero (borrow from 1 remainder), remove it
							if (displayWithBorrowsClean[1][0] == 0) {
								displayWithBorrowsFinal[1][0] = "";
							}
							
							// remove elements of display array if 2nd parameter is anything but "complete"
							if (!$scope.displayresult) {
								if (displayWithBorrowsFinal.length > 2) {
									// remove displayWithBorrowsFinal(0) to get even display height 
									displayWithBorrowsFinal.splice(0, 1);
									for (var ii = 0, len = displayWithBorrowsArray[0].length; ii < len; ii += 1) {							
											displayWithBorrowsFinal[0][ii] = "";
											if (ii % 2 !== 0) {
												displayWithBorrowsFinal[1][ii] = "";
											}
									}
								}
								for (var ii = 0, len = answerWideArray.length; ii < len; ii += 1) {
									answerWideArray[ii] = "";
								}
							}
												
							$scope.firstArray = [];
							$scope.secondArray = [];
							$scope.thirdArray = [];
							$scope.firstArray = displayWithBorrowsFinal.slice();
							$scope.secondArray = subtrahend.slice();
							$scope.thirdArray = answerWideArray.slice();
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