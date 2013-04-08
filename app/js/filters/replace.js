'use strict';
/*global angular */

angular.module('mathSkills')
    /**
     * Replaces all instances of findTag with replaceTag.
     */
    .filter('replace', [
        'parser',
        function (parser) {
            return function (input, findTag, replaceTag) {
                return parser.replace(input, findTag, replaceTag);
            };
        }
    ]);
