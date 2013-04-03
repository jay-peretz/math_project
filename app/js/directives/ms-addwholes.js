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
                name: 'addend1'
            },{
                name: 'addend2'
            },{
                name: 'addend3'
            },{
                name: 'addend4'
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
				$scope.addend1 = [];
				$scope.addend2 = [];
				$scope.addend3 = [];
				$scope.addend4 = [];
				$scope.addendnumbers = [];
				$scope.numbarray = [];
				$scope.randomplacearray = [];
				$scope.emptyAnswerArray = [];
				
				function add(arrayNumObj) {
					var wholeSum = 0;
					for (var ii = 0, len = arrayNumObj.length; ii<len; ii += 1){
						wholeSum += arrayNumObj[ii];
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
				$scope.$watch('addend1', function () {
					if (typeof $scope.addend1 === "string") {
						$scope.addendnumbers[0] = +$scope.addend1;
					}
				});
				$scope.$watch('addend2', function () {
					if (typeof $scope.addend2 === "string") {
						$scope.addendnumbers[1] = +$scope.addend2;
					}
				});
				$scope.$watch('addend3', function () {
					if (typeof $scope.addend3 === "string") {
						$scope.addendnumbers[2] = +$scope.addend3;
					}
				});
				$scope.$watch('addend4', function () {

					if (typeof $scope.addend4 === "string") {
						$scope.addendnumbers[3] = +$scope.addend4;
					}
					
					if ($scope.addendnumbers[0] !== "undefined" && $scope.addendnumbers[1] !== "undefined") {
						if ($scope.mathdisplay) {
							$scope.answerObject = add($scope.addendnumbers);
							$scope.answerArray = $scope.answerObject.toString().split("");
							$scope.tightNumbersArray = new Array($scope.addendnumbers.length);
							$scope.sign = '+';	
							
							// create an empty copy of the answer array for display of addition without answer
							for (var ii = 0, len = $scope.answerArray.length; ii < len; ii += 1) {
								$scope.emptyAnswerArray[ii] = "";
							}
					
							// make arrays based on number of digits in $scope.answerArray for the problem numbers
							for (var ii = 0, len = $scope.addendnumbers.length; ii<len; ii++) {
								$scope.tightNumbersArray[ii] = $scope.addendnumbers[ii].toString().split("");
								for (jj = 0; jj < $scope.answerArray.length; jj++) {
									if ($scope.tightNumbersArray[ii].length < $scope.answerArray.length) {
										$scope.tightNumbersArray[ii].unshift("");
									}
								}
							}
							
							// carryNumArray represents carries 
							$scope.carryNumArray = new Array($scope.answerArray.length);
							for (jj = 0; jj < $scope.carryNumArray.length; jj++) {
								$scope.carryNumArray[jj] = 0;
							}
							
							for (var jj = $scope.carryNumArray.length - 1; jj >= 0; jj=jj-1) { 
									$scope.sumColumn = 0;
									if (jj != $scope.carryNumArray.length - 1) {				
										$scope.sumColumn += parseInt($scope.carryNumArray[jj+1], 10);
									}
									if (jj != 0){
										for (var ii = 0, len = $scope.addendnumbers.length; ii<len; ii++) {
											if (!isNaN(parseInt($scope.tightNumbersArray[ii][jj]), 10)) {
												$scope.sumColumn += parseInt($scope.tightNumbersArray[ii][jj], 10);
											}
										}
									}
									if (jj != 0) {
										$scope.sumColumn = Math.floor($scope.sumColumn/10);
										$scope.carryNumArray[jj] = $scope.sumColumn;
									}
							}
					
							$scope.carryNumStringArray = new Array($scope.answerArray.length);
							for (var jj = 0; jj<$scope.answerArray.length; jj++) {
								if (!isNaN(parseInt($scope.carryNumArray[jj], 10))&&(parseInt($scope.carryNumArray[jj], 10)!=0)){
									$scope.carryNumStringArray[jj] = parseInt($scope.carryNumArray[jj], 10).toString();
								} else{
									$scope.carryNumStringArray[jj] = "";
								}
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
							if ($scope.addendnumbers.length == 2){
									$scope.inenglish += $scope.addendnumbers[0] + " and "+$scope.addendnumbers[1];
							} else {
								for (var ii = 0, len = $scope.addendnumbers.length; ii < len; ii += 1) {
									if (ii != len) { 
										$scope.inenglish += $scope.addendnumbers[ii]+", ";
									} else {
										$scope.inenglish += "and "+$scope.addendnumbers[ii];
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