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
                    return (a + decimalDigits(b));
                }, 0);
				
				if (navigator.userAgent.indexOf('phantom') !== -1) {
					if (totalDecimals > 14) {
						console.log("due to IEEE 754 implementation in Javascript, operations on numbers with large decimal portions may not produce accurate results")
					}
				}	

               return Number(arrayNumObj.map(Number).reduce(function (a, b) {
                    return a * b;
                }).toFixed(totalDecimals));	
            };
        }
    ]);
