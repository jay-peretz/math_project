'use strict';
/*global angular */

angular.module('mathSkills')
    /**
     * Displays feedback information for a problem set.
	 * feedbackDiagnostic presumes either 4 solobtn tags (T/F) or 2 (>/<) in answer sec.
	 * feedbackDiagnostic also presumes that for any 2 solobtn problems with more than 
	 * one grp, the last group contains the directive that displays the problem
     */
    .controller('feedbackDiagnostic', [
        'courseData',
        'feedbackData',
        '$routeParams',
        '$scope',
		'parser',
        function (courseData, feedbackData, $routeParams, $scope, parser) {
			var expectedTags,
				numberIncorrect,
				problemGroups = [],
				greaterLesser,
				correctAnswer,
				correctLabel,
				answerSelected,
				answerSelectedLabel,
				regexp,
				regexpMatches = [];
				
			$scope.allCorrect = false; // display incorrect problems or "all correct" msg
			
            // Data for the problem set we are displaying feedback for
            $scope.feedback = feedbackData.getData($routeParams.unit, $routeParams.problemSet);
			
			// remove correct answers from $scope.feedback
			$scope.feedback = $scope.feedback.filter(function(arrayElement) {
				return (arrayElement.result === "incorrect");
			});
			numberIncorrect = $scope.feedback.length;
			
			if (numberIncorrect > 0) {
			
				for (var ii = 0; ii < numberIncorrect; ii += 1) {
					greaterLesser = false;
					
					// if problem section is "", copy the answer section for the problem
					if ($scope.feedback[ii].problem === "") {
						$scope.feedback[ii].problem =$scope.feedback[ii].answer;
					}
					
					// collect all the problem-section grp tags for this problem
					problemGroups = []
					parser.find($scope.feedback[ii].problem, 'grp').forEach(function (group) {														   									  						problemGroups.push(group.args);
					});
					
					// Find the correct answer solobtn amongst the submitted buttons.
					parser.find($scope.feedback[ii].expected, 'solobtn').forEach(function (button) {
						if (button.args[1] === 'T') {
							correctAnswer = button.args[0];
							correctLabel = button.args[2];
							// set indicator if this is a 2 button problem
							if (correctAnswer === ">" || correctAnswer === "<") {
								greaterLesser = true;
							}
						}
					});
					
					// Find the selected solobtn amongst the submitted buttons.
					answerSelected = parser.find($scope.feedback[ii].answer, 'solobtn')[0].args[0];
					answerSelectedLabel = parser.find($scope.feedback[ii].answer, 'solobtn')[0].args[2];
					
					//for four-button probs, add description after the button
					if (greaterLesser === false) {
						//compose selected answer 
						$scope.feedback[ii].answer = '\\grp{\\solobtn{'+ answerSelected +'}{}{}{danger}}{'+ answerSelectedLabel +'}';	
						//compose correct answer 
						$scope.feedback[ii].correctAnswer = '\\grp{\\solobtn{'+ correctAnswer +'}{}{}{success}}{'+ correctLabel +'}';
						
					//for two-button probs, no description after the button
					} else {
						//compose selected answer  
						$scope.feedback[ii].answer = '\\grp{\\solobtn{'+ answerSelected +'}{}{}{danger}}';		
						//compose correct answer
						$scope.feedback[ii].correctAnswer = '\\grp{\\solobtn{'+ correctAnswer +'}{}{}{success}}';	
					}
					
					// compose the problem section for two-button, ">" or "<" problems
					// add the buttons, then if there is more than one \\grp in problem,
					// add the last \\grp because that should contain a display tag
					if (greaterLesser === true) {
						if (problemGroups.length < 2) {
			 				$scope.feedback[ii].problem = '\\grp{\\str{' + JSON.parse(correctLabel)[0] + '}}{\\solobtn{>}{}{}}{\\solobtn{<}{}{}}{\\str{' + JSON.parse(correctLabel)[1] +'}}';
						// otherwise
						} else {
							$scope.feedback[ii].problem = '\\rowgrp{\\grp{\\str{' + JSON.parse(correctLabel)[0] + '}}{\\solobtn{>}{}{}}{\\solobtn{<}{}{}}{\\str{' + JSON.parse(correctLabel)[1] +'}}}{\\grp{' + problemGroups[problemGroups.length - 1] + '}';
						}
					}
					
					//console.log("$scope.feedback[ii].problem is: ",$scope.feedback[ii].problem);
					//console.log("$scope.feedback[ii].answer is: ",$scope.feedback[ii].answer);
					//console.log("$scope.feedback[ii].correctAnswer is: ",$scope.feedback[ii].correctAnswer);
					
				}
			} else {
				$scope.allCorrect = true;
			}
        }
    ]);
