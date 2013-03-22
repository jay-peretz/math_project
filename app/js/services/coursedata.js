'use strict';
/*global angular */

angular.module('mathSkills.services')
    .service('courseData', [
        function () {
            var course = {
                title: 'CSKLS 371 GENERAL ARITHMETIC',
                children: [
                    {
                        title: '1 Whole Numbers',
                        children: []
                    }, {
                        title: '2 Fractions',
                        children: []
                    }, {
                        title: '3 Decimals',
                        children: []
                    }, {
                        title: '4 Ratios & Proportions',
                        children: []
                    }, {
                        title: '5 Percents',
                        children: []
                    }, {
                        title: '6 Measurements',
                        children: []
                    }
                ]
            };

            return {
                getCourseData: function () {
                    return angular.copy(course);
                }
            };
        }
    ]);
