'use strict';
/*global angular */

angular.module('mathSkills')
    /**
     * Displays feedback information for a problem set.
     */
    .controller('feedback', [
        'courseData',
        'feedbackData',
        '$routeParams',
        '$scope',
        function (courseData, feedbackData, $routeParams, $scope) {
            // Data for the problem set we are displaying feedback for.
            $scope.problemSet = courseData.getProblemSetData($routeParams.unit, $routeParams.problemSet);

            // The answer event data objects.
            $scope.feedback = feedbackData.getData($routeParams.unit, $routeParams.problemSet);

            // A UI helper function to convert answer event data.result strings to
            // a corresponding bootstrap table row class.
            $scope.rowClass = function (result) {
                switch (result) {
                    case 'correct': return 'success';
                    case 'incorrect': return 'error';
                    default: return '';
                }
            };
        }
    ]);
