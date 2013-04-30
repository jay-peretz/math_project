'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('add-decimals', [
        function () {
            return function (arrayNumObj) {
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
				
					for (var ii = 0, len = toBeAdded.length; ii<len; ii += 1){
						addResult += +toBeAdded[ii];
					}
										
					numberToString = addResult.toString();
					stringWithDecimal = numberToString.slice(0, -placesRight) + "." + numberToString.slice(-placesRight);
					decimalSum = parseFloat(stringWithDecimal);				
					return decimalSum;			
            };
        }
    ]);
