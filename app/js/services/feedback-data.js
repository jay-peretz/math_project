'use strict';
/*global angular */
var privateData = {},
    varData = {};

angular.module('mathSkills.services')
    .run([
        '$rootScope',
        '$routeParams',
        function ($rootScope, $routeParams) {
            
            // Store answer events.
            $rootScope.$on('answer', function (e, data) {

                // Generate our storage structure if this is the first answer for a problem set.
                if (privateData[$routeParams.unit] === undefined) {
                    privateData[$routeParams.unit] = {};
                }
                if (privateData[$routeParams.unit][$routeParams.problemSet] === undefined) {
                    privateData[$routeParams.unit][$routeParams.problemSet] = [];
                } 
                // Store the answer event data.
                privateData[$routeParams.unit][$routeParams.problemSet].push(data);
                // set previous answer data
                privateData.previous = data;
                //privateData.previousResult = data.result === 'correct' ? true : false; //########################################################################
            });
        }
    ])
    /**
     * Provides access to stored Problem Set answer data.
     */
    .service('feedbackData', [
        '$rootScope',
        '$routeParams',
        function ($rootScope, $routeParams) {
            var feedbackData = {
                /**
                 * Returns the data stored for a problem set.
                 *
                 * @param {String} unitPath The :unit $routeParam for a problem set.
                 * @param {String} problemSetPath The :problemSet $routeParam for a problem set.
                 *
                 * @return {Array} An array of answer event objects for the problem set.
                 */
                getData: function (unitPath, problemSetPath) {
                    return privateData[unitPath][problemSetPath];
                },
                /**
                 * Returns answer result of the last answer event.
                 * 
                 * @return {boolean} true if correct and false if incorrect.
                 */
                getPrevious: function () {
                    return privateData.previous;
                },
                // getPreviousResult: function () { //########################################################################
                //     return privateData.previousResult;
                // },
            };
            return feedbackData;
        }
    ]);
