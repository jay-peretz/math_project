'use strict';
/*global angular */

angular.module('mathSkills')
    /**
     * Replaces all instances of \input{} with \str{}.
     */
    .filter('button2str', [
        'parser',
        function (parser) {
            return function (input) {
                return '\\str{' + parser.extractTag(input).args[0] + '}';
            };
        }
    ]);
