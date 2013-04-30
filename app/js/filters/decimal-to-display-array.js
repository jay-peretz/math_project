'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('decimal-to-display-array', [
        function () {
            return function (decimal, maxPlacesLeft, maxPlacesRight, withZeros) {
				
				function getDecimalPlaces (givenDecimal) {
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
            };
        }
    ]);
