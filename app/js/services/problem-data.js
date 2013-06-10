'use strict';
/*global angular */
var privateProblemData = {};
    
angular.module('mathSkills.services')
    .run([
        '$rootScope',
        '$routeParams',
        function ($rootScope, $routeParams) {
            
            // Store answer events.
            $rootScope.$on('answer', function (e, data) {  //console.log('problem answer', data);
                if (privateProblemData === undefined) {
                    privateProblemData = {};
                }
                privateProblemData.previousCorrect = data.result === 'correct' ? true : false;
                $rootScope.$broadcast('recompile');
            });
        }
    ])
    /**
     * Provides access to stored Problem data.
     */
    .service('problemData', [
        '$rootScope', 
        'panelGroupData',
        '$q',
        '$timeout',
        function ($rootScope, panelGroupData, $q, $timeout) {
            var problemData = {
                
                setObject: function (data) {
                    privateProblemData = data;
                    //console.log("set data-data", privateData);
                },
                
                setData: function (data, key) {
                    privateProblemData[key] = data;
                    $rootScope.$broadcast('recompile');
                    //console.log("set data-key", privateData[key]);
                },
                
                getData: function (key) {
                    return privateProblemData[key];
                },
                
                compile: function (expectedString){
                    for (var symbol in privateProblemData) {
                        if (privateProblemData.hasOwnProperty(symbol)) {
                            expectedString = expectedString.replace(new RegExp('\\$\\$' + symbol, 'g'), privateProblemData[symbol]);
                        }
                    }
                    //console.log("compile string", expectedString);
                    return expectedString; 
                },
                 
                flip: function () { 
                    if(privateProblemData.flip){
                        if (privateProblemData.flip[0].indexOf(privateProblemData.index) >= 0){
                            for (var ii = 1; ii < privateProblemData.flip.length; ii++ ){
                                var work = privateProblemData[privateProblemData.flip[ii][0]];
                                privateProblemData[privateProblemData.flip[ii][0]] = privateProblemData[privateProblemData.flip[ii][1]];
                                privateProblemData[privateProblemData.flip[ii][1]] = work;
                                $rootScope.$broadcast('recompile');
                            }
                        }
                    }    
                },
                
                /**
                 * Validates the answer index for a multiple answer problem.  If
                 * there is no current valid answer index, the passed in index
                 * becomes the valid index.
                 *
                 * @param {Number} ii The index value to validate.
                 * @return {Boolean} Whether the passed in index is correct.
                 */
                index: function (ii) {
                    if (privateProblemData.index === undefined) {
                        privateProblemData.index = ii;
                        this.flip();
                    }
                    return privateProblemData.index;
                },
                getIndex: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (privateProblemData.index === undefined) {
                            deferred.resolve(0);
                        } else {
                            deferred.resolve(privateProblemData.index);
                        }
                    }, 0);

                    return deferred.promise;
                },
            };

            return problemData;
        }
    ]);
