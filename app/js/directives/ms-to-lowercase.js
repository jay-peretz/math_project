'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msToLowercase', [function () {
        return {
            link: function (scope, element, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
					if (typeof viewValue === 'string') {
                    	return viewValue.toLowerCase();
					} else {
						return viewValue;
					}
                });
            },
            require: 'ngModel',
            restrict: 'A'
        };
    }]);
