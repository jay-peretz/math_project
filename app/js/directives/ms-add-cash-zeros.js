'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msAddCashZeros', [function () {
        return {
            link: function (scope, element, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
					if (viewValue.indexOf(".") === -1) {
                    	return viewValue+".00";
					} else {
						return viewValue;
					}
                });
            },
            require: 'ngModel',
            restrict: 'A'
        };
    }]);
