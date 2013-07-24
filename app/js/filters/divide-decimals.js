'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('divide-decimals', [
        function () {
            return function (dividend, divisor, decimalPlaces, returnWithSign) {
				// maximum decimal places 6, decimal places greater than 6 converted to 6
				// isNumber from jQuery 1.7.2
				var sign,
					quotientExpression,
					quotientExpressionString,
					quotientExponent,
					quotientDigitsOnly,
					quotientFinal;
									
				var isNumber = function(val){
					return !isNaN(parseFloat(val)) && isFinite(val);
				};
				
				if (!isNumber(dividend) || !isNumber(divisor) || !isNumber(decimalPlaces) || !divisor) {
					return null;
				}
				var sign = ((dividend * divisor) != Math.abs(dividend * divisor)) ? "-" : "";
				dividend = Math.abs(dividend);
				divisor = Math.abs(divisor);
				decimalPlaces = Math.abs(decimalPlaces);
				
				if (decimalPlaces > 9) {
					decimalPlaces = 9;
				}
			 
				quotientExpression = (dividend / divisor).toExponential(decimalPlaces);
				quotientExpressionString = quotientExpression.toString();
				quotientExponent = quotientExpression.slice(quotientExpressionString.indexOf("e") + 1);
				if (quotientExpressionString.indexOf('.') !== -1) {
					quotientExpressionString.replace(/./, '')
				}
				quotientDigitsOnly = quotientExpression.slice(0, quotientExpressionString.indexOf("e"));
			 	quotientFinal = quotientDigitsOnly*Math.pow(10,quotientExponent);
				console.log("dividend is: ",dividend," divisor is: ",divisor," decimalPlaces is: ",decimalPlaces," quotientFinal before sign is: ",quotientFinal);
				
				if (typeof returnWithSign !== "undefined" && returnWithSign === true) {
					return sign + quotientFinal;
				} else {
					return quotientFinal;
				}
				
			};
        }
    ]);
