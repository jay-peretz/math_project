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
				closeValueIndex;
				
			$scope.allCorrect = false;   // displays incorrect problems or all correct message
			
            // Data for the problem set we are displaying feedback for.
            $scope.problemSet = courseData.getProblemSetData($routeParams.unit, $routeParams.problemSet);
            $scope.feedback = feedbackData.getData($routeParams.unit, $routeParams.problemSet);
			
			// remove correct answers
			$scope.feedback = $scope.feedback.filter(function(arrayElement) {
				return (arrayElement.result === "incorrect");
			});
			numberIncorrect = $scope.feedback.length;
			//console.log("JSON.stringify($scope.feedback) is: ",JSON.stringify($scope.feedback)," numberIncorrect is: ",numberIncorrect);
			
			if (numberIncorrect > 0) {
			
				for (var ii = 0; ii < numberIncorrect; ii += 1) {
					if ($scope.feedback[ii].problem === '') {
						$scope.feedback[ii].problem = $scope.feedback[ii].answer;
					}
					
					// get correct solobtn tag label
					regString = /solobtn{.?}{T}/;
					expectedTags = $scope.feedback[ii].expected.match(regString);
					regString = /{.?}/;
					soloArgs = JSON.stringify(expectedTags[0]).match(regString);
					soloArgs = JSON.stringify(soloArgs[0]).substring(2,JSON.stringify(soloArgs[0]).length - 2);
					$scope.feedback[ii].correctLabel = "\\solobtn{"+soloArgs+"}{T}{}";
					// get answer solobtn
					/*tagIndex = $scope.feedback[ii].answer.indexOf("solobtn");
					$scope.tagString = $scope.feedback[ii].answer.substr(tagIndex).match(/{(.*?)}/);	
					$scope.closeValueIndex = tagIndex + 7 + $scope.tagString[1].length + 1;
					$scope.feedback[ii].answer = '\\solobtn{' + $scope.tagString[1] + '}{F}{warning}';*/
					
							
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
