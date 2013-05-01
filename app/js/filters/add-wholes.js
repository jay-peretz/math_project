'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('add-wholes', [
        function () {
            return function (arrayNumObj) {
				return arrayNumObj.map(Number).reduce(function (a, b) {
                    return a + b;
                });
            };
        }
    ]);
