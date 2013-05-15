'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msStripCommas', [function () {
        return {
            link: function (scope, element, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
                    return viewValue.replace(/\,/g, '');
                });
            },
            require: 'ngModel',
            restrict: 'A'
        };
    }]);
