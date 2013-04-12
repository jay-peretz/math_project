'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
		// 'mathorenglish' first parameter is 'english' to display text, otherwise displays number column
		// 'showresult' second parameter is 'complete' to display number column with addition result
        parserProvider.register('addwholes', {
            argTemplates: [{
                name: 'mathorenglish'
            },{
                name: 'showresult'
            },{
                name: 'addendparams'
            }],
            directiveTemplate: '<ms-addwholes expected={{expected}}></ms-addwholes>'
        });
    }])
  .directive('msAddwholes', [
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
				$scope.mathorenglish = [];
				$scope.mathdisplay = true;
				$scope.showresult = [];
				$scope.displayresult = false;
				$scope.addendparameters = [];
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
				
				function add(arrayNumObj) {
					var wholeSum = 0;
					for (var ii = 0, len = arrayNumObj.length; ii<len; ii += 1){
						wholeSum += +arrayNumObj[ii];
					}
					return wholeSum;
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
							answerObject = add(addendnumbers);
							answerArray = answerObject.toString().split("");
							tightNumbersArray = new Array(addendnumbers.length);	
							
							// create an empty copy of the answer array for display of addition without answer
							for (var ii = 0, len = answerArray.length; ii < len; ii += 1) {
								emptyAnswerArray[ii] = "";
							}
					
							// make arrays based on number of digits in answerArray for the problem numbers
							for (var ii = 0, len = addendnumbers.length; ii<len; ii++) {
								tightNumbersArray[ii] = addendnumbers[ii].toString().split("");
								for (jj = 0; jj < answerArray.length; jj++) {
									if (tightNumbersArray[ii].length < answerArray.length) {
										tightNumbersArray[ii].unshift("");
									}
								}
							}
							
							// carryNumArray represents carries 
							carryNumArray = new Array(answerArray.length);
							for (jj = 0; jj < carryNumArray.length; jj++) {
								carryNumArray[jj] = 0;
							}
							
							for (var jj = carryNumArray.length - 1; jj >= 0; jj=jj-1) { 
									var sumColumn = 0;
									if (jj != carryNumArray.length - 1) {				
										sumColumn += parseInt(carryNumArray[jj+1], 10);
									}
									if (jj != 0){
										for (var ii = 0, len = addendnumbers.length; ii<len; ii++) {
											if (!isNaN(parseInt(tightNumbersArray[ii][jj]), 10)) {
												sumColumn += parseInt(tightNumbersArray[ii][jj], 10);
											}
										}
									}
									if (jj != 0) {
										sumColumn = Math.floor(sumColumn/10);
										carryNumArray[jj] = sumColumn;
									}
							}
					
							carryNumStringArray = new Array(answerArray.length);
							for (var jj = 0; jj<answerArray.length; jj++) {
								if (!isNaN(parseInt(carryNumArray[jj], 10))&&(parseInt(carryNumArray[jj], 10)!=0)){
									carryNumStringArray[jj] = parseInt(carryNumArray[jj], 10).toString();
								} else{
									carryNumStringArray[jj] = "";
								}
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