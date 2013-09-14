'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msRemovePlus', [function () {
        return {
            link: function (scope, element, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
                    return viewValue.replace(/^\+/, '');
                });
            },
            require: 'ngModel',
            restrict: 'A'
        };
    }]);
