'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('percentarrows', {
            directiveTemplate: '<ms-percent-arrows expected={{expected}}></ms-percent-arrows>'
        });
    }])
	// decimaltopercent receives four parameters:  
	// a decimal number to convert, a multiplier for conversion (e.g. 100),
	// the name of the type converted from (e.g., decimal), 
	// and the name of the type converted to (e.g., percentage)
	// styling of move-left arrowheads works in \\row but not \\grp
  .directive('msPercentArrows', [
	'parser',
	function (parser) {
		return {
			restrict: 'E',
			scope: {
				expected: '@',
				label: '@'
			},
			controller: function ($scope, $element, $filter) {
				
				var answerObject,
					decimalDisplacement,
					displaceLeftOrRight,
					multiplicandLeft,
					multiplicandRight,
					multiplicandLength,
					multiplicandDecimalIndex,
					addText = '',
					addDecimalText = '',
					percentSignOrEmpty = '',
					tagParameters = [],
					problemObjects = [],
					decimalPointerArray = [],
					borderBelowArray = [],
					emptyArray = [],
					multiplicandArray = [];
					
				
					
					
				$scope.getClassBorder = function(index) {
					if ((borderBelowArray[index] == 'arrowRight')||(borderBelowArray[index] == 'arrowLeft')) {
						return ('borderArrowhead');
					}
					if (borderBelowArray[index] == 'decimalPoint') {
						return ('largeDecimal');
					}
				}
				$scope.getArrowhead = function(index) {	
					if (borderBelowArray[index] == 'arrowRight') {
						return ('arrowheadRight');
					}			
					if (borderBelowArray[index] == 'arrowLeft') {
						return ('arrowheadLeft');
					}
				}
					
				var decimalDigits = function (num) {
					if (num.toString().indexOf('.') !== -1 && num.toString().indexOf('.') !== num.toString().length - 1) {
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
						
					problemObjects[0] = Number(tagParameters[0]);
					problemObjects[1] = Number(tagParameters[1]);
					
					multiplicandArray = problemObjects[0].toString().split("");
					// for whole numbers, add a decimal to the right
					if (multiplicandArray.indexOf(".") === -1) {
						multiplicandArray.push(".");
					}
					
					multiplicandRight = decimalDigits(problemObjects[0]);
					multiplicandLength = multiplicandArray.length;
					multiplicandLeft = multiplicandArray.indexOf(".") === -1 ? multiplicandLength : multiplicandLength - (multiplicandRight + 1);
					
					// get the number of places displaced
					decimalDisplacement = Math.abs(Math.round(Math.log(problemObjects[1])/Math.log(10)));
					// easy reference for the direction of displacement 
					displaceLeftOrRight = Math.round(Math.log(problemObjects[1])/Math.log(10)) === Math.abs(Math.round(Math.log(problemObjects[1])/Math.log(10))) ? "right": "left";
					
					// displacement is left, more places than are in the number
					if (displaceLeftOrRight === "left" && multiplicandLeft < decimalDisplacement) {
						for (var ii = 0, len = decimalDisplacement - multiplicandLeft; ii < len; ii += 1) {
							multiplicandArray.unshift("0");
						}
					}
					
					// displacement is right, more places than are in the number
					if (displaceLeftOrRight === "right" && multiplicandRight < decimalDisplacement) {
						for (var ii = 0, len = decimalDisplacement - multiplicandRight; ii < len; ii += 1) {
							multiplicandArray.push("0");
						}
					}
					
					// build arrays for decimal point pointer and for border additions
					for (var ii = 0, len = multiplicandArray.length; ii < len; ii += 1) {
						decimalPointerArray.push("");
						borderBelowArray.push("");
						emptyArray.push("");
					}
					
					multiplicandDecimalIndex = multiplicandArray.indexOf(".");
					
					if (displaceLeftOrRight === "left") {
							// add decimal point at new location
							multiplicandArray.splice((multiplicandDecimalIndex - decimalDisplacement),0,".");
							// remove original
							multiplicandArray.splice((multiplicandDecimalIndex + 1),1);
							decimalPointerArray.splice(multiplicandArray.indexOf("."),1,"^");
							for (var ii = 0,  len = multiplicandArray.length; ii < len; ii += 1) {	
								if (ii === multiplicandArray.indexOf(".")) {
									borderBelowArray.splice(ii,1,"decimalPoint");
								}
								if (ii > multiplicandArray.indexOf(".") && ii < multiplicandArray.indexOf(".") + (decimalDisplacement + 1)) {
										borderBelowArray.splice(ii,1,"arrowLeft");
								}
							}
							
					}
					
					if (displaceLeftOrRight === "right") {
							// add decimal point at new location
							multiplicandArray.splice((multiplicandDecimalIndex + decimalDisplacement + 1),0,".");
							// remove original
							multiplicandArray.splice((multiplicandDecimalIndex),1);
							decimalPointerArray.splice(multiplicandArray.indexOf("."),1,"^");
							for (var ii = 0,  len = multiplicandArray.length; ii < len; ii += 1) {	
								if (ii === multiplicandArray.indexOf(".")) {
									borderBelowArray.splice(ii,1,"decimalPoint");
								}
								if (ii < multiplicandArray.indexOf(".") && ii > multiplicandArray.indexOf(".") - (decimalDisplacement + 1)) {
										borderBelowArray.splice(ii,1,"arrowRight");
								}
							}
					}
					
					if (tagParameters[1] === "100") {
							addText = "multiplying by 100";
					} 
					
					if (tagParameters[1] === ".01" || tagParameters[1] === "0.01") {
						addText = "dividing by 100";
					}
					
					if (tagParameters[2] === "percent") {
						percentSignOrEmpty = "%"
					} else {
						percentSignOrEmpty = ""
					}
					
											
					if (tagParameters[2] !== "skiptext") {
						addDecimalText = 'The '+tagParameters[2]+' '+problemObjects[0]+percentSignOrEmpty+' is converted to a '+tagParameters[3]+' by '+addText+'. This displaces the decimal point '+decimalDisplacement+' place(s) to the '+displaceLeftOrRight+'.';
					} else {
						addDecimalText = "";
					}
				
					$scope.helpInstructions = addDecimalText;
					$scope.firstArray = [];
					$scope.secondArray = [];
					$scope.thirdArray = [];
					$scope.firstArray = multiplicandArray.slice();
					$scope.secondArray = decimalPointerArray.slice();
					$scope.thirdArray[0] = emptyArray.slice();	
					$scope.arrowheads = true;				
					
				});
			},
			templateUrl: 'partials/directives/ms-multiply-decimals-power-ten.html'

		};
	}]);