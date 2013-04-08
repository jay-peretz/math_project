'use strict';
/*global angular */

angular.module('mathSkills')
    /**
     * Replaces all instances of \input{} with \str{}.
     */
    .filter('checkbox2lbl', [
        function () {
            return function (input) {
                return input.toString().replace(/\\chk\{/g, '\\chklbl{');
            };
        }
    ]);