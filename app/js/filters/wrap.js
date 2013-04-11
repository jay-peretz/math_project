'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('wrap', [
        function () {
            return function (input, tag) {
                if (tag === undefined) {
                    return input;
                } else {
                    return '\\' + tag + '{' + input + '}';
                }
            };
        }
    ]);
