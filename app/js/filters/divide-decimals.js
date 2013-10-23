 'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('divide-decimals', [
        function () {
            return function (dividend, divisor, digitsRightInExponential, returnWithSign) {
				// isNumber from jQuery 1.7.2
				var sign,
					quotientExpression,
					quotientExpressionString,
					quotientExponent,
					quotientDigitsOnly,
					quotientDecimalPlace,
					quotientFinal;
									
				var isNumber = function(val){
					return !isNaN(parseFloat(val)) && isFinite(val);
				};
				
				if (!isNumber(dividend) || !isNumber(divisor) || !divisor) {
					return null;
				}

				var sign = ((dividend * divisor) != Math.abs(dividend * divisor)) ? "-" : "";
				dividend = Math.abs(dividend);
				divisor = Math.abs(divisor);
				
				quotientExpression = (dividend / divisor).toExponential(digitsRightInExponential);
				quotientExpressionString = quotientExpression.toString();
				quotientExponent = quotientExpression.slice(quotientExpressionString.indexOf("e") + 1);
				if (quotientExpressionString.indexOf('.') !== -1) {
					quotientExpressionString = quotientExpressionString.slice(0,quotientExpressionString.indexOf('.'))+quotientExpressionString.slice(quotientExpressionString.indexOf('.') + 1);
				}
				quotientDigitsOnly = quotientExpressionString.slice(0, quotientExpressionString.indexOf("e"));
				
				// add appropriate zeros and decimal point back into quotientDigitsOnly
				quotientFinal = quotientDigitsOnly;
				if (quotientExponent >= 0) {
					while (quotientFinal.length <= quotientExponent) {
								quotientFinal = quotientFinal + "0";
					} 
					quotientFinal = quotientFinal.slice(0,(1 + Math.abs(quotientExponent))) + "." + quotientFinal.slice(1 + Math.abs(quotientExponent));
				} else {
					for (var ii = 0, expAbs = Math.abs(quotientExponent) - 1; ii < expAbs; ii += 1) {
						quotientFinal = "0" + quotientFinal;
					}
					quotientFinal = "." + quotientFinal;
				}	
				
								
				if (typeof returnWithSign !== "undefined" && returnWithSign === true) {
					return sign + quotientFinal;
				} else {
					return quotientFinal;
				}
				
			};
        }
    ]);
