'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('stylecharacter', [
        function () {
            return function (character) {
				var out = '';
                        
					switch (true) {
						case (character === '↓'): 
							out += '<span class="digit arrow">' + character + '</span>';
							break;
						case (character === '-'):
							out += '<span class="digit minus">' + character + '</span>';
							break;
						case (character === 'x'):
							out += '<span class="digitblank">\xA0</span>';
							break;
						case (character === ''):
							out += '<span class="digitblank">\xA0</span>';
							break;
						default:
							out += '<span class=digit>' + character + '</span>';
					}
                
                return out;
            };
        }
    ]);
