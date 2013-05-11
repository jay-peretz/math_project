'use strict';
/*global angular */

angular.module('mathSkills.services')
    .service('panelGroupData', [
        '$q',
        '$timeout',
        function ($q, $timeout) {
            var privateData = {};

            var panelGroupData = {
                /**
                 * Validates the answer index for a multiple answer problem.  If
                 * there is no current valid answer index, the passed in index
                 * becomes the valid index.
                 *
                 * @param {Number} ii The index value to validate.
                 * @return {Boolean} Whether the passed in index is correct.
                 */
                index: function (ii) {
                    if (privateData.flipIndex === undefined) {
                        privateData.flipIndex = ii;
                    }
                    if (privateData.index === undefined) {
                        privateData.index = ii;
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
                /**
                 * Resets the current answer index for a multiple answer problem.
                 *
                 * @return {Boolean} Whether the index was deleted.
                 */
                resetIndex: function () {
                    return delete privateData.index;
                },
                getFlipIndex: function () {
                    return privateData.flipIndex;
                },
                /**
                 * Resets the current answer FlipIndex for panel set
                 *
                 * @return {Boolean} Whether the index was deleted.
                 */
                resetFlipIndex: function () {
                    return delete privateData.flipIndex;
                }
            };

            return panelGroupData;
        }
    ]);
