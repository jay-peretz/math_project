'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('multiply-decimals', [
        function () {
            return function (arrayNumObj) {
                var decimalDigits = function (num) {
                    return num.toString().split('.')[1].length;
                };

                var totalDecimals = arrayNumObj.reduce(function (a, b) {
                    return a + decimalDigits(b);
                }, 0);

               var productNoDecimal = String(arrayNumObj.map(String).reduce(function (a, b) {
					var bnodecimal = b.replace(/\./g, "");
					return (a * bnodecimal);
                }, 1));	
			   
			   if (productNoDecimal.length > 17) {
			   		console.log("large digit products may lose accuracy due to Javascript IEEE 754 implementation- number of digits: "+productNoDecimal.length);
			   }
			   
			   return Number([productNoDecimal.slice(0, productNoDecimal.length-totalDecimals), '.', productNoDecimal.slice(productNoDecimal.length-totalDecimals)].join(''));
				
            };
        }
    ]);
