'use strict';
/*global angular */

angular.module('mathSkills.services').value('dataUtils', {
    build: function (desc, template, data) {
        var interpolate = function (obj, data) {
            var string = JSON.stringify(obj);
            for (var symbol in data) {
                if (data.hasOwnProperty(symbol)) {
                    string = string.replace(new RegExp('(\\$)?\\$' + symbol, 'g'), function ($0, $1) { return $1?$0 : data[symbol]; }); //console.log(string); 
                }
            }
            var ret = JSON.parse(string);
            ret.data = angular.copy(data);
            return ret;
        };

        desc.children = data.map(function (problem) {
            return interpolate(template[problem.template], problem);
        });

        return desc;
    },
    pre: function (string) {
        string = string
            .replace(new RegExp('\\\\', 'g'),'\\\\')
            .replace(new RegExp('"', 'g'),'\\"'); 
        //console.log(string);
        return string;
    },
	/**
	 * Randomize array element order in-place.
	 * Using Fisher-Yates shuffle algorithm
	 */
	shuffleArray: function (array) {
		var newArray = array.slice();
		for (var i = newArray.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = newArray[i];
			newArray[i] = newArray[j];
			newArray[j] = temp;
		}
		return newArray;
	},
	/**
	 * Randomize specified portions of variable "data" array of objects (in dataX_X.js) & concatenate
	 * Receives the variable data array and the variable problemShuffle array from a dataX_X.js
	 * for example, assuming 15 problem objects in variable data,
	 * then for variable problemShuffle in dataX_X.js of:
	 * problemShuffle = [
	 *		{ problems: [1,2,3], select: 1},
	 *		{ problems: [13,14,15], select: 1}
	 *	];
	 * the call:
	 *
	 * return dataUtils.build(desc, template, numberUtils.shuffleArraySections(data, problemShuffle));
	 *
	 * returns a set w/ first problem from shuffle of problems 1-3 & second problem from shuffle of 13-15
	 */
	shuffleArraySections: function (dataArray, shuffleObject) {
		var newArray = dataArray.slice(),
			returnArray = [];
		
		if (typeof shuffleObject !== "undefined" && typeof shuffleObject[0].problems !== "undefined" && typeof shuffleObject[0].select !== "undefined") { 
			for (var hh = 0, lenSO = shuffleObject.length; hh < lenSO; hh += 1) {
				var partialArray = [];
				for (var gg = 0, numberProbs = shuffleObject[hh].problems.length; gg < numberProbs; gg += 1) {
					partialArray = partialArray.concat(newArray[shuffleObject[hh].problems[gg]]);
				}
				for (var ii = partialArray.length - 1; ii > 0; ii = -1) {
					var jj = Math.floor(Math.random() * (ii + 1));
					var temp = partialArray[ii];
					partialArray[ii] = partialArray[jj];
					partialArray[jj] = temp;
				}
				partialArray = partialArray.slice(0,shuffleObject[hh].select);
				returnArray = returnArray.concat(partialArray);
			}
		} else {
			returnArray = newArray.slice();
		}
		return returnArray;
	}
});
