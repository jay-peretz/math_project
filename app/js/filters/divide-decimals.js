'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('divide-decimals', [
        function () {
            return function (dividend, divisor, returnWithSign) {
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
				
				if (!isNumber(dividend) || !isNumber(divisor) || !divisor) {
					return null;
				}
				var sign = ((dividend * divisor) != Math.abs(dividend * divisor)) ? "-" : "";
				dividend = Math.abs(dividend);
				divisor = Math.abs(divisor);
				
				quotientExpression = (dividend / divisor).toExponential();
				quotientExpressionString = quotientExpression.toString();
				quotientExponent = quotientExpression.slice(quotientExpressionString.indexOf("e") + 1);
				if (quotientExpressionString.indexOf('.') !== -1) {
					quotientExpressionString.replace(/./, '')
				}
				quotientDigitsOnly = quotientExpression.slice(0, quotientExpressionString.indexOf("e"));
			 	quotientFinal = quotientDigitsOnly*Math.pow(10,quotientExponent);
				
				if (typeof returnWithSign !== "undefined" && returnWithSign === true) {
					return sign + quotientFinal;
				} else {
					return quotientFinal;
				}
				
			};
        }
    ]);
