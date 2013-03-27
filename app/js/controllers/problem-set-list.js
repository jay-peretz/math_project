'use strict';
/*global angular */

angular.module('mathSkills')
    .controller('problemSetList', [
        'courseData',
        '$routeParams',
        '$scope',
        function (courseData, $routeParams, $scope) {
            $scope.unit = courseData.getUnitData($routeParams.unit);
            $scope.problemSets = $scope.unit.children;
        }
    ]);
