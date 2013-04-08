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
            $scope.divide = function (ii) {
                return ii !== 0 && $scope.problemSets[ii].title.split('.')[0] !== $scope.problemSets[ii - 1].title.split('.')[0];
            };
        }
    ]);
