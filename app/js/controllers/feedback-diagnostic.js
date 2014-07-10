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
			var expectedTags,
				soloArgs,
				soloArgsTrueLabel,
				regString,
				numberIncorrect,
				tagIndex,
				tagString,
				feedbackSoloIndex;
				
			$scope.allCorrect = false;   // displays incorrect problems or all correct message
			
            // Data for the problem set we are displaying feedback for.
            $scope.problemSet = courseData.getProblemSetData($routeParams.unit, $routeParams.problemSet);
            $scope.feedback = feedbackData.getData($routeParams.unit, $routeParams.problemSet);
			
			// remove correct answers
			$scope.feedback = $scope.feedback.filter(function(arrayElement) {
				return (arrayElement.result === "incorrect");
			});
			numberIncorrect = $scope.feedback.length;
			
			if (numberIncorrect > 0) {
			
				for (var ii = 0; ii < numberIncorrect; ii += 1) {
					
					// get correct solobtn tag label
					regString = /solobtn{.?}{T}/;
					expectedTags = $scope.feedback[ii].expected.match(regString);
					regString = /{.?}/;
					soloArgs = JSON.stringify(expectedTags[0]).match(regString);
					soloArgs = JSON.stringify(soloArgs[0]).substring(2,JSON.stringify(soloArgs[0]).length - 2);
					$scope.feedback[ii].correctLabel = "\\solobtn{"+soloArgs+"}{T}{success}";
					
					// get incorrect solobtn tag label
					feedbackSoloIndex = JSON.stringify($scope.feedback[ii].answer).indexOf("solobtn");
					regString = /solobtn{.?}{F}/;
					expectedTags = $scope.feedback[ii].answer.match(regString);
					regString = /{.?}/;
					soloArgs = JSON.stringify(expectedTags[0]).match(regString);
					soloArgs = JSON.stringify(soloArgs[0]).substring(2,JSON.stringify(soloArgs[0]).length - 2);
					$scope.feedback[ii].answer = JSON.stringify($scope.feedback[ii].answer).substr(0,feedbackSoloIndex) + "solobtn{" + soloArgs + "}{F}{danger}}" + JSON.stringify($scope.feedback[ii].answer).substr((feedbackSoloIndex + 8 + soloArgs.length + 5));
					$scope.feedback[ii].answer = JSON.parse($scope.feedback[ii].answer);
					
							
					// A UI helper function to convert answer event data.result strings to
					// a corresponding bootstrap table row class.
					/*$scope.rowClass = function (result) {
						switch (result) {
							case 'correct': return 'success';
							case 'incorrect': return 'error';
							case 'helped': return 'warning';
							default: return '';
						}
					};*/
				}
			} else {
				$scope.allCorrect = true;
			}
        }
    ]);
