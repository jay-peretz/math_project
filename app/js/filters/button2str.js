'use strict';
/*global angular */

angular.module('mathSkills')
    /**
     * Replaces all instances of \but{} with \str{}.
     */
    .filter('button2str', [
        'parser',
        function (parser) {
            return function (input) { 
//console.log('input string ' + input);
            if (input.indexOf("but") !== -1){
                
                var newString = "",
                    ii = 1;
                
                while (input.indexOf("but", ii) !== -1){
                    ii = input.indexOf("but", ii);
                    newString += input.slice(ii - 1, input.indexOf("}{", ii) + 1);
                    ii = input.indexOf("}{", ii) + 6;
                }
//console.log('new string ' + newString);
//console.log('replaced ' + newString.toString().replace(/\\but\{/g, '\\str{'));
                newString += input.slice(ii - 1);
                return newString.toString().replace(/\\but\{/g, '\\str{');
                
            }else{
                
                return input;
            }
            
            };
        }
    ]);
