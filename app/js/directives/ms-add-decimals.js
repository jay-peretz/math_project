'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
		// first parameter is 'english' to display text, otherwise displays number column
		// second parameter is 'complete' to display number column with addition result
        parserProvider.register('adddecimals', {
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
			controller: function ($scope, $element, $filter) {
				$scope.mathdisplay = true;
				$scope.displayresult = false;
				$scope.sign = '+';
				
				var tagParameters = [],
					addendnumbers = [];
				
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
					
					addendnumbers = JSON.parse(tagParameters[2]).map(String);

					if (addendnumbers[0] !== "undefined" && addendnumbers[1] !== "undefined") {
						if ($scope.mathdisplay) {
							
							var numbarray = [],
								randomplacearray = [],
								emptyAnswerArray = [],
								answerObject = "",
								answerArray = [],
								tightNumbersArray = [],
								carryNumArray = [],
								carryNumStringArray = [],					
								answerArray,			
								answerArrayDecimal,
								displayDigitsRight,							
								startTightArray,
								endTightArray,
								sumColumn,
								displayPlacesLeft = 6,  // maximum 16 places left
								displayPlacesRight = 6, // maximum 16 places right
								numberDisplayArray = new Array(addendnumbers.length),
								allNumbersArray = new Array(addendnumbers.length),
								allNumbersLength,
								tightNumbersArray = new Array(addendnumbers.length),
								tightNoDecimal = new Array(addendnumbers.length),
								emptyAnswerArray = [];
								
							$scope.sign = '+';	
					
							answerObject = $filter('add-decimals')(addendnumbers);
							answerArray = answerObject.toString().split("");							
							answerArrayDecimal = answerArray.indexOf(".");
							displayDigitsRight = answerArray.length-(answerArrayDecimal+1);
							
							allNumbersLength = displayPlacesLeft + displayPlacesRight + 1;
							for (var ii = 0; ii < addendnumbers.length; ii++) {
								numberDisplayArray[ii] = $filter('decimal-to-display-array')(addendnumbers[ii], displayPlacesLeft, displayPlacesRight);
								allNumbersArray[ii] = $filter('decimal-to-display-array')(addendnumbers[ii], displayPlacesLeft, displayPlacesRight, true);
							}
							
							startTightArray = displayPlacesLeft+displayDigitsRight;
							endTightArray = displayPlacesLeft+displayDigitsRight - (answerArray.length);  
							
							// make arrays based on number of digits in answerArray for the problem numbers
							for (var ii = 0, len = addendnumbers.length; ii<len; ii++) {
								tightNumbersArray[ii] = new Array(answerArray.length);
								for (var kk = answerArray.length-1, jj = startTightArray; jj > endTightArray; jj--) {
										tightNumbersArray[ii][kk] = allNumbersArray[ii][jj];
										kk--;
								}
								tightNoDecimal[ii] = tightNumbersArray[ii].slice();
								tightNoDecimal[ii].splice(tightNoDecimal[ii].indexOf("."),1);
							}
							
							// carryNumArray represents carries only, no decimal point
							carryNumArray = new Array(answerArray.length-1);
							for (jj = 0; jj < carryNumArray.length; jj++) {
								carryNumArray[jj] = 0;
							}
							
							for (var jj = carryNumArray.length - 1; jj >= 0; jj=jj-1) { 
									sumColumn = 0;
									if (jj != carryNumArray.length - 1) {				
										sumColumn += parseInt(carryNumArray[jj+1], 10);
									}
									if (jj != 0){
										for (var ii = 0, len = addendnumbers.length; ii<len; ii++) {
											if (!isNaN(parseInt(tightNoDecimal[ii][jj]), 10)) {
												sumColumn += parseInt(tightNoDecimal[ii][jj], 10);
											}
										}
									}
									if (jj != 0) {
										sumColumn = Math.floor(sumColumn/10);
										carryNumArray[jj] = sumColumn;
									}
							}
							carryNumArray.splice(answerArrayDecimal+1, 0, ".");
					
							carryNumStringArray = new Array(answerArray.length);
							for (var jj = 0; jj<answerArray.length; jj++) {
								if (!isNaN(parseInt(carryNumArray[jj], 10))&&(parseInt(carryNumArray[jj], 10)!=0)){
									carryNumStringArray[jj] = parseInt(carryNumArray[jj], 10).toString();
								} else{
									carryNumStringArray[jj] = "";
								}
							}
							
							removeTrailingZeros(tightNumbersArray);
							
							// create an empty copy of the answer array for display of addition without answer
							for (var ii = 0, len = answerArray.length; ii < len; ii += 1) {
								emptyAnswerArray[ii] = "";
							}
							
							$scope.firstArray = [];
							$scope.secondArray = [];
							$scope.thirdArray = [];
							$scope.secondArray = tightNumbersArray.slice();
							if ($scope.displayresult) {
								$scope.firstArray = carryNumStringArray.slice();
								$scope.firstArray.push();
								$scope.firstArray.shift();
								$scope.thirdArray = answerArray.slice();
							} else {
								$scope.firstArray = emptyAnswerArray
								$scope.thirdArray = emptyAnswerArray
							}
							
						} else {
							$scope.inenglish = "";
							if (addendnumbers.length == 2){
									$scope.inenglish += addendnumbers[0] + " and "+addendnumbers[1];
							} else {
								for (var ii = 0, len = addendnumbers.length; ii < len; ii += 1) {
									if (ii != len - 1) { 
										$scope.inenglish += addendnumbers[ii]+", \xA0";
									} else {
										$scope.inenglish += " and \xA0"+addendnumbers[ii];
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