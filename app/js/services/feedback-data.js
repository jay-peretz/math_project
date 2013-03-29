'use strict';
/*global angular */
var privateData = {};

angular.module('mathSkills.services')
    .run([
        '$rootScope',
        '$routeParams',
        function ($rootScope, $routeParams) {
            $rootScope.$on('answer', function (e, data) {
                if (privateData[$routeParams.unit] === undefined) {
                    privateData[$routeParams.unit] = {};
                }
                if (privateData[$routeParams.unit][$routeParams.problemSet] === undefined) {
                    privateData[$routeParams.unit][$routeParams.problemSet] = [];
                }

                privateData[$routeParams.unit][$routeParams.problemSet].push(data);
            });
        }
    ])
    .service('feedbackData', [
        '$rootScope',
        '$routeParams',
        function ($rootScope, $routeParams) {
            var feedbackData = {
                getData: function (unitPath, problemSetPath) {
                    console.log(privateData);
                    return privateData[unitPath][problemSetPath];
                }
            };

            return feedbackData;
        }
    ]);
