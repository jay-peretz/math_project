'use strict';
/*global angular */

angular.module('mathSkills.services')
    .service('panelGroupData', [
        function () {
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
                    if (privateData.index === undefined) {
                        privateData.index = ii;
                    }
                    return privateData.index === ii;
                },
                /**
                 * Resets the current answer index for a multiple answer problem.
                 *
                 * @return {Boolean} Whether the index was deleted.
                 */
                resetIndex: function () {
                    return delete privateData.index;
                }
            };

            return panelGroupData;
        }
    ]);
