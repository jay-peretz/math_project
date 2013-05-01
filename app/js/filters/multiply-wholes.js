'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('multiply-wholes', [
        function () {
            return function (arrayNumObj) {
				return arrayNumObj.map(Number).reduce(function (a, b) {
                    return a * b;
                });
            };
        }
    ]);
