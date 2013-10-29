'use strict';
/*global angular */

angular.module('mathSkills.services').value('dataUtils', {
    build: function (desc, template, data, shuffle) {
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
        },
		/**
		 * Randomize specified portions of variable "data" array of objects (in dataX_X.js)
		 * variable "shuffle" can be added to any dataX_X.js (suggest adding after variable "data")- example usage:
		 * shuffle = [
		 *		{ problems: [1,2,3], total: 1},
		 *		{ problems: [13,14,15], total: 1}
		 *	];
		 * the call:
		 * return dataUtils.build(desc, template, data, shuffle));
		 * returns array with first problem from shuffle of problems 1-3 & second problem from shuffle of 13-15
		 */
		shuffleArraySections = function (dataArray, shuffleArray) {
			var newArray = dataArray.slice(),
				returnArray = [];
			
			if (typeof shuffleArray !== "undefined" && typeof shuffleArray[0].problems !== "undefined" && typeof shuffleArray[0].total !== "undefined") { 
				for (var hh = 0, lenSO = shuffleArray.length; hh < lenSO; hh += 1) {
					var partialArray = [];
					for (var gg = 0, numberProbs = shuffleArray[hh].problems.length; gg < numberProbs; gg += 1) {
						partialArray = partialArray.concat(newArray[shuffleArray[hh].problems[gg] - 1]);
					}
					for (var ii = partialArray.length - 1; ii >= 0; ii -= 1) {
						var jj = Math.floor(Math.random() * (ii + 1));
						var temp = partialArray[ii];
						partialArray[ii] = partialArray[jj];
						partialArray[jj] = temp;
					}
					partialArray = partialArray.slice(0,shuffleArray[hh].total);
					returnArray = returnArray.concat(partialArray);
				}
			} else {
				returnArray = newArray.slice();
			}
			//console.log("returnArray.length is: ",returnArray.length," JSON.stringify(returnArray) is: ",JSON.stringify(returnArray));
			return returnArray;
		}
		
		if (typeof shuffle !== "undefined") {
			data = shuffleArraySections(data, shuffle);
			console.log("data.length is: ",data.length);
		}
		
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
    }
	
});
