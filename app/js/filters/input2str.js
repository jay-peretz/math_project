'use strict';
/*global angular */

angular.module('mathSkills')
    /**
     * Replaces all instances of \input{} with \str{}.
     */
    .filter('input2str', [
        function () {
            return function (input) {
                return input.toString().replace(/\\input\{/g, '\\str{');
            };
        }
    ]);
