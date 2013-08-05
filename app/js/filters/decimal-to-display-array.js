'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('decimal-to-display-array', [
        function () {
			// withZeros = 1 fills in zeros to the right of the last digit, to the right of the decimal
            return function (decimal, maxPlacesLeft, maxPlacesRight, withZeros) {
				
				/*function getDecimalPlaces (givenDecimal) {
					var givenDecimalString = "" + givenDecimal,
						givenDecimalStringLength = givenDecimalString.length,
						decimalPlaces = 0;
						
					if (givenDecimalString.indexOf(".")>0 && givenDecimalString.indexOf(".") !== givenDecimalStringLength - 1) {
						decimalPlaces = (givenDecimalStringLength-1) - givenDecimalString.indexOf(".");
					} else {
						decimalPlaces = 0;
					}
					return decimalPlaces;		
				};*/
				
				var getDecimalPlaces = function (num) {
					if (num.toString().indexOf('.') !== -1) {
                    	return num.toString().split('.')[1].length;
					} else {
						return 0;
					}
                };
				
				if ((typeof maxPlacesLeft === "undefined")||(typeof maxPlacesRight === "undefined")||(maxPlacesLeft + maxPlacesRight > 32)) {
					maxPlacesLeft = 16;
					maxPlacesRight = 16;
				}
				
				var totalNumberPlaces = maxPlacesLeft + maxPlacesRight + 1, 
					displayArray = [],
					decimalString,
					digitsRight,
					decimalLength,
					decimalWithFix,
					digitsLeft = 0,
					addZeros = 0;
				
				if ((typeof withZeros !== "undefined")&&(withZeros == 1)) {
					addZeros = 1;
				}
				
				
				decimalString = decimal.toString();
				digitsRight = getDecimalPlaces(decimal);
				decimalLength = decimalString.length;
				
				if (digitsRight > 0) {
					digitsLeft = decimalLength - (digitsRight + 1);
				} else {
					if (decimalString.indexOf(".")>0) {
						digitsLeft = decimalLength - 1;
					} else {
						digitsLeft = decimalLength;
					}
				}
				
				if (digitsRight === 0 && maxPlacesRight > 0 && decimalString.indexOf(".")===-1) {
					decimalString = decimalString + ".";
					decimalLength = decimalLength + 1;
				}
				
				for (var ii = 0, jj = 0; ii < totalNumberPlaces; ii++) {
					switch (true) {
						case (ii < (maxPlacesLeft - digitsLeft)):					
							// blank is "\xA0"
							displayArray[ii] = "\xA0";
							break;
						case ((ii >= (maxPlacesLeft - digitsLeft))&&(ii <= (maxPlacesLeft + digitsRight))):
							displayArray[ii] = decimalString.charAt(jj);
							jj++;
							break;
						case (ii > (maxPlacesLeft + digitsRight)):
							if (addZeros == 1) {
								displayArray[ii] = "0";	
							} else {
								displayArray[ii] = "\xA0";
							}
							break;
					}
				}

				return displayArray;
            };
        }
    ]);
