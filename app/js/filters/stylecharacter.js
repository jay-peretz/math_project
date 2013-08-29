'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('stylecharacter', [
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
                        
                        switch (true) {
							case (character === '↓'): 
								out += '<span class="spaceblank borderBlank">&nbsp;</span><span class="digit arrow borderBlank">' + character + '</span><span class="spaceblank borderBlank">&nbsp;</span>';
								break;
							case (character === '-'):
								out += '<span class="spaceblank">&nbsp;</span><span class="digit minus ">' + character + '</span><span class="spaceblank">&nbsp;</span>';
								break;
							case (character === 'x'):
								out += '<span class="spaceblank borderBlank">&nbsp;</span><span class="spaceblank borderBlank" style="visibility:hidden;">.</span><span class="spaceblank borderBlank">&nbsp;</span>';
								break;
							case (character === '.'):
								out += '<span class="spaceblank borderBlank">&nbsp;</span><span class="spaceblank borderBlank">.</span><span class="spaceblank borderBlank">&nbsp;</span>';
								break;
							case (character === 'y'):
								out += '<span class="spaceblank borderBlank">&nbsp;</span><span class="digitblank borderBlank">&nbsp;</span><span class="spaceblank borderBlank">&nbsp;</span>';
								break;
							case (character === ''):
								out += '<span class="spaceblank borderBlank">&nbsp;</span><span class="digit borderBlank">' + character + '</span><span class="spaceblank borderBlank">&nbsp;</span>';
								break;
							default:
								out += '<span class="spaceblank borderBottom">&nbsp;</span><span class="digit borderBottom">' + character + '</span><span class="spaceblank borderBottom">&nbsp;</span>';
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
