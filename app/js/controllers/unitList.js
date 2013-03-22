'use strict';
/*global angular */

angular.module('mathSkills')
    .controller('unitList', [
        'courseData',
        '$scope',
        function (courseData, $scope) {
            var data = courseData.getCourseData();
            $scope.course = data.title;
            $scope.units = data.children;
        }
    ]);
