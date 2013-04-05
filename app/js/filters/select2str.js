'use strict';
/*global angular */

angular.module('mathSkills')
    /**
     * Replaces all instances of \input{} with \str{}.
     */
    .filter('select2str', [
        function () {
            return function (tagLine) {
				var tagString = tagLine.toString(),
					selectTagIndexes = [],
					tagNumber = 0,
					selectPattern = /\\select\{(.+?)}{(.+?)}/g;
					
				while (selectPattern.test(tagString)==true) {
					  selectTagIndexes[tagNumber] = selectPattern.lastIndex;
					  tagNumber += 1;
				}
				/*for (var ii = 0, len = selectTagIndexes.length; ii < len; ii += 1) {
					  newTagLine += tagString.substr(
				}*/
				
                return selectTagIndexes.toString();
				
				//return input.toString().replace(/\\input\{/g, '\\str{');
            };
        }
    ]);
