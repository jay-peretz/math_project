'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msRemovePlus', [function () {
        return {
            link: function (scope, element, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
					if (typeof viewValue !== "undefined" && viewValue.length > 1){
                    	return viewValue.replace(/^\+/, '');
					} else {
						return viewValue;
					}
                });
            },
            require: 'ngModel',
            restrict: 'A'
        };
    }]);
