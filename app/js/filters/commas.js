'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('commas', [
        function () {
			// receives a whole number, returns a string of the number that includes commas
            return function (givenWhole) {
					var needsCommas = String(givenWhole),
						needsCommasLength = needsCommas.length,
						convertString = Number(givenWhole),
						buildCommas = [],
						thisManyCommas,
						numberWithCommas = '';
	
					// check "Number(givenWhole).toString().length === givenWhole.length" weeds out "80 \xA0" strings
					if (!isNaN(convertString) && typeof givenWhole === "string" && Number(givenWhole).toString().length === givenWhole.length) {
						givenWhole = convertString;
					}
					
					if (typeof givenWhole === "number") {
						// check for decimal point in the number- if so return the number, else add commas- either way return string
						if (needsCommas.indexOf(".") < 0) {
						
							thisManyCommas = Math.floor((needsCommasLength-1)/3);
							
							for (var i=0; i<thisManyCommas+1; i+=1){
									if (i<thisManyCommas){
										buildCommas[i] =  needsCommas.substr(needsCommasLength-(3*(i+1)), 3);
									} else {
										buildCommas[i] =  needsCommas.substr(0, needsCommasLength-(3*i));
									}					
							}
							
							numberWithCommas = buildCommas.reverse();
							numberWithCommas = numberWithCommas.join();;
							return numberWithCommas;
						} else {
							return needsCommas;
						}
						
					} else {
						return givenWhole;
					}
						
            };
        }
    ]);
