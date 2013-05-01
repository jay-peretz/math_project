'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('subtract-wholes', [
        function () {
            return function (arrayNumObj) {
				return arrayNumObj.map(Number).reduce(function (a, b) {
                    return a - b;
                });
            };
        }
    ]);
