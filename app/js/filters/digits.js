'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('digits', [
        function () {
            return function (input, offset, container) {
                offset = +offset || 0;
                var out = '';
                
                while (offset > 0) {
                    out += '<span class="digit placeholder"></span>';
                    offset -= 1;
                }
                if (input && input.toString().length > 0) {
                    if (container === true) {
                        out += '<span class=answerContainer>';
                    }
                    input.toString().split('').forEach(function (character) {
                        // Close the answerContainer if this is an arrow and the container is still open.
                        if (character === '↓' && container === true) {
                            container = false;
                            out += '</span>';
                        }
                        
                        if (character === '↓') {
                            out += '<span class="digit arrow">' + character + '</span>';
                        } else if (character === '-') {
                            out += '<span class="digit minus">' + character + '</span>';
                        } else {
                            out += '<span class=digit>' + character + '</span>';
                        }
                    });
                    if (container === true) {
                        out += '</span>';
                    }
                }
                
                return out;
            };
        }
    ]);
