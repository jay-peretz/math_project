'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('add-decimals', [
        function () {
            return function (arrayNumObj) {
                var decimalDigits = function (num) {
                    return num.toString().split('.')[1].length;
                };

                var largestDecimal = arrayNumObj.reduce(function (a, b) {
                    return Math.max(a, decimalDigits(b));
                }, 0);

               return Number(arrayNumObj.map(Number).reduce(function (a, b) {
                    return a + b;
                }).toFixed(largestDecimal));	
				
            };
        }
    ]);
