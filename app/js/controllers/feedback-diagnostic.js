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
			$scope.allCorrect = false;   // displays incorrect problems or all correct message
			
            // Data for the problem set we are displaying feedback for.
            $scope.problemSet = courseData.getProblemSetData($routeParams.unit, $routeParams.problemSet);
            $scope.feedback = feedbackData.getData($routeParams.unit, $routeParams.problemSet);
			
			// remove correct answers
			$scope.feedback = $scope.feedback.filter(function(arrayElement) {
				return (arrayElement.result === "incorrect");
			});
			console.log("JSON.stringify($scope.feedback) is: ",JSON.stringify($scope.feedback));
			if ($scope.feedback.length > 0) {
			
				for (var ii = 0, len = $scope.feedback.length; ii < len; ii += 1) {
					if ($scope.feedback[ii].problem === '') {
						$scope.feedback[ii].problem = $scope.feedback[ii].answer;
					}
					$scope.tagIndex = $scope.feedback[ii].answer.indexOf("solobtn");
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
			} else {
				$scope.allCorrect = true;
			}
        }
    ]);
