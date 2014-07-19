'use strict';
/*global angular */

angular.module('mathSkills')
    /**
     * Displays feedback information for a problem set.
	 * feedbackDiagnostic presumes either 4 solobtn tags (T/F) or 2 (>/<) in answer sec.
	 * feedbackDiagnostic also presumes 2 solobtn problems with more than one grp
	 * have a problem display in the last grp
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
				feedbackSoloIndex,
				greaterLesser,
				regexp,
				regexpMatches = [];
				
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
					greaterLesser = false;
					
					if ($scope.feedback[ii].problem === "") {
						$scope.feedback[ii].problem =$scope.feedback[ii].answer;
					}
					// Find the correct answer amongst the contained buttons.
					parser.find($scope.feedback[ii].expected, 'solobtn').forEach(function (button) {
						if (button.args[1] === 'T') {
							$scope.correctAnswer = button.args[0];
							console.log("$scope.correctAnswer is: ",$scope.correctAnswer);
							$scope.correctLabel = button.args[2];
							if ($scope.correctAnswer === ">" || $scope.correctAnswer === "<") {
								greaterLesser = true;
							}
						}
					});
					$scope.answerSelected = parser.find($scope.feedback[ii].answer, 'solobtn')[0].args[0];
					$scope.answerSelectedLabel = parser.find($scope.feedback[ii].answer, 'solobtn')[0].args[2];
					console.log("$scope.correctLabel is: ",$scope.correctLabel," $scope.answerSelectedLabel is: ",$scope.answerSelectedLabel);
					
					//compose selected answer 
					$scope.feedback[ii].answer = '\\grp{\\solobtn{'+ $scope.answerSelected +'}{}{}{danger}}{'+ $scope.answerSelectedLabel +'}';								
					
					//compose correct answer 
					$scope.feedback[ii].correctAnswer = '\\grp{\\solobtn{'+ $scope.correctAnswer +'}{}{}{success}}{'+ $scope.correctLabel +'}';	
					
					console.log("$scope.feedback[ii].problem.match('grp') is: ",$scope.feedback[ii].problem.match(/grp/g)); 
					// replace buttons in problem section
					if (greaterLesser === true) {
						// get the number of \\grp tags in the problem
						regexp = /grp/g;
						while (regexp.test($scope.feedback[ii].problem) === true) {
							if (typeof regexp.lastIndex !== "undefined") {
						  		regexpMatches.push(+regexp.lastIndex);
							} else {
								regexpMatches.push[0]
							}
						}
						console.log("regexpMatches is: ",regexpMatches," JSON.parse($scope.correctLabel)[0] is: ",JSON.parse($scope.correctLabel)[0]); 
						if (regexpMatches.length < 2) {
			 				$scope.feedback[ii].problem = '\\grp{\\str{' + JSON.parse($scope.correctLabel)[0] + '}}{\\solobtn{>}{}{}}{\\solobtn{<}{}{}}{\\str{' + JSON.parse($scope.correctLabel)[1] +'}}';
						} else {
							$scope.feedback[ii].problem = '\\rowgrp{\\grp{\\str{' + JSON.parse($scope.correctLabel)[0] + '}}{\\solobtn{>}{}{}}{\\solobtn{<}{}{}}{\\str{' + JSON.parse($scope.correctLabel)[1] +'}}}' + $scope.feedback[ii].problem.substr(regexpMatches[regexpMatches.length - 1] - 5)
							console.log("in else, $scope.feedback[ii].problem is: ",$scope.feedback[ii].problem);
						}
					}
					
					console.log("$scope.feedback[ii].problem is: ",$scope.feedback[ii].problem);
					console.log("$scope.feedback[ii].answer is: ",$scope.feedback[ii].answer);
					console.log("$scope.feedback[ii].correctAnswer is: ",$scope.feedback[ii].correctAnswer);
					
					
					
				}
			} else {
				$scope.allCorrect = true;
			}
        }
    ]);
