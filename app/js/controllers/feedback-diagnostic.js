'use strict';
/*global angular */

angular.module('mathSkills')
    /**
     * Displays feedback information for a problem set.
     */
    .controller('feedbackDiagnostic', [
        'courseData',
        'feedbackData',
        '$routeParams',
        '$scope',
		'parser',
        function (courseData, feedbackData, $routeParams, $scope, parser) {
			
            // Data for the problem set we are displaying feedback for.
            $scope.problemSet = courseData.getProblemSetData($routeParams.unit, $routeParams.problemSet);
            $scope.feedback = feedbackData.getData($routeParams.unit, $routeParams.problemSet);
			
			for (var ii = 0, len = $scope.feedback.length; ii < len; ii += 1) {
				$scope.tagIndex = $scope.feedback[ii].answer.indexOf("solobtn") + 19;
				$scope.tagString = $scope.feedback[ii].answer.substr($scope.tagIndex).match(/{(.*?)}/);
				$scope.feedback[ii].answer = '\\str{' + $scope.tagString[1] + '}';
				
				// A UI helper function to convert answer event data.result strings to
				// a corresponding bootstrap table row class.
				$scope.rowClass = function (result) {
					switch (result) {
						case 'correct': return 'success';
						case 'incorrect': return 'error';
						case 'helped': return 'warning';
						default: return '';
					}
				};
			}
        }
    ]);
