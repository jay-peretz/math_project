'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('add-wholes', [
        function () {
            return function (arrayNumObj) {
				var wholeSum = 0;
					for (var ii = 0, len = arrayNumObj.length; ii<len; ii += 1){
						wholeSum += +arrayNumObj[ii];
					}
					return wholeSum;
            };
        }
    ]);
