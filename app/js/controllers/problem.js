'use strict';
/*global angular */

angular.module('mathSkills')
    .controller('problem', [
        'courseData',
        '$routeParams',
        '$scope',
        function (courseData, $routeParams, $scope) {
            $scope.problem = courseData.getProblemData(
                $routeParams.unit,
                $routeParams.problemSet,
                $routeParams.problemNumber
            );
        }
    ]);
