'use strict';
/*global angular */
var privateData = {};
    
angular.module('mathSkills.services')
    .run([
        '$rootScope',
        '$routeParams',
        function ($rootScope, $routeParams) {
            
            // Store answer events.
            $rootScope.$on('answer', function (e, data) {  //console.log('problem answer', data);
                privateData.previousCorrect = data.result === 'correct' ? true : false;
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
                    privateData = data;
                    //console.log("set data-data", privateData);
                },
                
                setData: function (data, key) {
                    privateData[key] = data;
                    $rootScope.$broadcast('recompile');
                    //console.log("set data-key", privateData[key]);
                },
                
                getData: function (key) {
                    return privateData[key];
                },
                
                compile: function (expectedString){
                    for (var symbol in privateData) {
                        if (privateData.hasOwnProperty(symbol)) {
                            expectedString = expectedString.replace(new RegExp('\\$\\$' + symbol, 'g'), privateData[symbol]);
                        }
                    }
                    //console.log("compile string", expectedString);
                    return expectedString; 
                },
                 
                flip: function () { 
                    if(privateData.flip){
                        if (privateData.flip[0].indexOf(privateData.index) >= 0){
                            for (var ii = 1; ii < privateData.flip.length; ii++ ){
                                var work = privateData[privateData.flip[ii][0]];
                                privateData[privateData.flip[ii][0]] = privateData[privateData.flip[ii][1]];
                                privateData[privateData.flip[ii][1]] = work;
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
                    if (privateData.index === undefined) {
                        privateData.index = ii;
                        this.flip();
                    }
                    return privateData.index;
                },
                getIndex: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (privateData.index === undefined) {
                            deferred.resolve(0);
                        } else {
                            deferred.resolve(privateData.index);
                        }
                    }, 0);

                    return deferred.promise;
                },
            };

            return problemData;
        }
    ]);
