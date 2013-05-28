'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msAddZero', [function () {
        return {
            link: function (scope, element, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
                    return viewValue.replace(/^\./, '0.');
                });
            },
            require: 'ngModel',
            restrict: 'A'
        };
    }]);
