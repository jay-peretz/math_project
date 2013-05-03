'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('subtract-decimals', [
        function () {
            return function (arrayNumObj) {
                var decimalDigits = function (num) {
					if (typeof num.toString().split('.')[1] != "undefined") {
                    	return num.toString().split('.')[1].length;
					} else {
						return 0;
					}
                };

                var largestDecimal = arrayNumObj.reduce(function (a, b) {
                    return Math.max(a, decimalDigits(b));
                }, 0);

               return Number(arrayNumObj.map(Number).reduce(function (a, b) {
                    return a - b;
                }).toFixed(largestDecimal));	
				
            };
        }
    ]);
