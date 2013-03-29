'use strict';
/*global angular */

angular.module('mathSkills')
    .controller('feedback', [
        'courseData',
        'feedbackData',
        '$routeParams',
        '$scope',
        function (courseData, feedbackData, $routeParams, $scope) {
            $scope.problemSet = courseData.getProblemSetData($routeParams.unit, $routeParams.problemSet);
            $scope.feedback = feedbackData.getData($routeParams.unit, $routeParams.problemSet);
        }
    ]);
