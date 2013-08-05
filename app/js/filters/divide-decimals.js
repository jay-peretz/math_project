'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('divide-decimals', [
        function () {
            return function (dividend, divisor, answerDigitsMinusOne, returnWithSign) {
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
				console.log("answerDigitsMinusOne is: ",answerDigitsMinusOne);
				var sign = ((dividend * divisor) != Math.abs(dividend * divisor)) ? "-" : "";
				dividend = Math.abs(dividend);
				divisor = Math.abs(divisor);
				
				quotientExpression = (dividend / divisor).toExponential(answerDigitsMinusOne);
				console.log("quotientExpression is: ",quotientExpression);
				quotientExpressionString = quotientExpression.toString();
				quotientExponent = quotientExpression.slice(quotientExpressionString.indexOf("e") + 1);
				if (quotientExpressionString.indexOf('.') !== -1) {
					quotientExpressionString = quotientExpressionString.slice(0,quotientExpressionString.indexOf('.'))+quotientExpressionString.slice(quotientExpressionString.indexOf('.') + 1);
				}
				quotientDigitsOnly = quotientExpressionString.slice(0, quotientExpressionString.indexOf("e"));
				
				// add appropriate zeros and decimal point back into quotientDigitsOnly
				quotientFinal = quotientDigitsOnly;
				if (quotientExponent > 0) {
					console.log("quotientFinal.length is: ",quotientFinal.length," quotientFinal.length < quotientExponent is: ",quotientFinal.length < quotientExponent);
					if (quotientFinal.length < quotientExponent) {
						for (var ii = 0; ii < quotientExponent; ii += 1) {
							if (quotientFinal.length < quotientExponent) {
								quotientFinal = quotientFinal + "0";
							} 
						}
					} 
				} else {
					for (var ii = 0, expAbs = Math.abs(quotientExponent) - 1; ii < expAbs; ii += 1) {
						quotientFinal = "0" + quotientFinal;
					}
					quotientFinal = "." + quotientFinal;
				}					
				
				
			 	//quotientFinal = quotientDigitsOnly*Math.pow(10,quotientExponent);
				
				console.log(" quotientExponent is: ",quotientExponent," quotientExpressionString is: ",quotientExpressionString," quotientDigitsOnly is: ",quotientDigitsOnly," quotientFinal is: ",quotientFinal);
				
				if (typeof returnWithSign !== "undefined" && returnWithSign === true) {
					return sign + quotientFinal;
				} else {
					return quotientFinal;
				}
				
			};
        }
    ]);
