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
			controller: function ($scope, $element) {
				$scope.numberArray = [];
				$scope.randomplacearray = [];
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
				 
				/*// receives string representation of number without commas, returns an array with commas
				function getNumberStringCommas(givenWhole) {
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
				  }*/
				
			 // Extract the value/s for $scope.numberdigits & $scope.numberdigitsplace
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						tagParameters = parser.extractTag($scope.expected).args;
						tagParmsZeroArray = tagParameters[0].split("");
						problemDecimalIndex = tagParameters[0].indexOf(".");
						if (problemDecimalIndex > 0) {
							roundedIntegerNumber = getRounded(Number(tagParameters[0].replace(".", "")), tagParameters[1] - 1);
							roundedDecimalArray = roundedIntegerNumber.toString().split("");
							roundedDecimalArray.splice(problemDecimalIndex,0,".");
						} else {
							roundedIntegerNumber = getRounded(Number(tagParameters[0]), tagParameters[1]);
							roundedDecimalArray = roundedIntegerNumber.toString().split("");
						}
						
						//logic for commas for the future
						/*if (tagParameters[0].indexOf('.') < 0) {
							$scope.numbStringCommas = getNumberStringCommas(tagParameters[0]);
							for (var ii = 0, len = $scope.numbStringCommas.length; ii < len; ii += 1) {
									$scope.numberArray[ii] = $scope.numbStringCommas.substr(ii, 1);
							}
						} else {*/							
									$scope.numberArray = roundedDecimalArray.slice();
						/*}*/

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
			template: '<div class="control-group {{class}}"><label><span>{{label}}</span><table class="margin-left-small"><tr><td><span class="label_like"><br>{{helpInstructions2}}<br><br>{{helpInstructions3}}</span></td></tr><tr class="label_like"><td><span><br> Answer: \xA0</span></td></tr></table><table class="margin-left-small"><tr class="label_like"><td ng-repeat="number in numberArray">{{number}}</td></tr><tr><td ng-repeat="place in randomplacearray">{{place}}</td></tr></table></label></div>'
		};
	}]);