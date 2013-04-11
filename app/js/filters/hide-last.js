'use strict';
/*global angular */

angular.module('mathSkills')
    /**
    * Hides the last element of an array from a display if the passed in function returns true.
    *
    * @param {Array} input The array being filtered.
    * @param {Function} fn The function to test.
    *
    * @return {Array} The original or filtered array.
    */
    .filter('hideLast', [
        function () {
            return function (input, fn) {
                // If fn is a function that returns true, return input minus the last element.
                if (typeof fn === 'function' && fn() === true) {
                    return input.slice(0, -1);
                // Otherwise return the original input.
                } else {
                    return input;
                }
            };
        }
    ]);
