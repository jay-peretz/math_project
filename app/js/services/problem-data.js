'use strict';
/*global angular */
var privateProblemData = {};
    
angular.module('mathSkills.services')
    .run([
        '$rootScope',
        '$routeParams',
        '$timeout',
        function ($rootScope, $routeParams, $timeout) {
            
            // Store answer events.
            $rootScope.$on('answer', function (e, data) {  //console.log('problem answer', data);
               
                privateProblemData.previousCorrect = data.result === 'correct' ? true : false;
                if (data.noRecompile !== true){
                    $timeout(function () {
                        $rootScope.$broadcast('recompile');
                    }, 1000);
                }
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
                    //console.log("set data-key", privateProblemData[key]);
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
                    // console.log("compile string", expectedString);
                    return expectedString; 
                },
                 
                flip: function () { 
                    if(privateProblemData.flip){ console.log('ya flip');
                        if (privateProblemData.flip[0].indexOf(privateProblemData.index) !== -1){ console.log('ya flip index'); 
                            for (var ii = 1; ii < privateProblemData.flip.length; ii++ ){
                                var work = privateProblemData[privateProblemData.flip[ii][0]];
                                privateProblemData[privateProblemData.flip[ii][0]] = privateProblemData[privateProblemData.flip[ii][1]]; console.log(ii, '-0', privateProblemData[privateProblemData.flip[ii][0]]); 
                                privateProblemData[privateProblemData.flip[ii][1]] = work; console.log(ii, '-1', privateProblemData[privateProblemData.flip[ii][1]]); 
                            }
                            $rootScope.$broadcast('recompile'); console.log('ya recompiled');
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
                index: function (ii) { console.log('in index');
                    if (privateProblemData.index === undefined) {
                        privateProblemData.index = ii; console.log('in is!!!', privateProblemData.index);
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
                resetIndex: function () {
                    return delete privateProblemData.index;
                }
            };

            return problemData;
        }
    ]);
