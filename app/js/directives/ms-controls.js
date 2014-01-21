'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msControls', [
        function () {
            return {
                controller: [
                    '$scope',
                    'problemData',
                    function ($scope, problemData) {

                        var anwserbtn = function (data) { //console.log('data', data); 
                                if (typeof data === 'boolean') { 
                                    if (data === false) {
                                        $scope.hasCheckAnswer = false; 
                                        problemData.addData(false, 'answerBtn');
                                    } else {
                                        ckeckAnswerBtn();
                                    }
                                } else { 
                                    if (data === 'noAnswer'){
                                        $scope.hasCheckAnswer = false;
                                        problemData.addData('noAnswer', 'answerBtn');
                                    } else {
                                        if (data === 'noAnswerN' || data === 'noAnswerC'){ //console.log('data running', data); 
                                            $scope.answerButtonText = (data === 'noAnswerN') ? 'Next Problem': 'Next Step';
                                            problemData.addData('noAnswer', 'answerBtn');
                                            $scope.hasCheckAnswer = true;
                                            
                                        } else {
                                            $scope.answerButtonText = data;
                                            problemData.addData(data,'answerBtn');
                                            $scope.hasCheckAnswer = true;
                                        }
                                    }
                                }
                            },
                            ckeckAnswerBtn = function () {
                                 if (problemData.getData('answerBtn') === undefined) {
									 if ($scope.stepwiseNextProblem === true) {
										$scope.answerButtonText = 'Next Problem';
									 } else {
                                     	$scope.answerButtonText = 'Check Answer';
									 }
                                     $scope.hasCheckAnswer = true;
                                 } else {
                                     anwserbtn(problemData.getData('answerBtn'));
                                 }
                            };

                        $scope.$watch('data', function () {

                            ckeckAnswerBtn();
							var controlsFix;

                            // If we haven't parsed $scope.data into an object.
                            if (typeof $scope.data === 'string') {

                                // Parse it.
                                $scope.data = JSON.parse($scope.data); 

                                // Setup the hasHelp variable which shows/hides the help button.
                                $scope.hasHelp = $scope.data.help;

                                // If we do have help, set up the actual help function.
                                if ($scope.hasHelp === true) {
                                    $scope.help = function () {
                                        // Change 'Check Answer' button text to 'Next Problem'.

                                        //if (problemData.getData('answerBtn') === 'noAnswer') { 
                                            $scope.answerButtonText = 'Check Answer';
                                            $scope.hasCheckAnswer = true;
                                        //}
                                        $scope.$emit('triggerCheckHelp');
                                    };
                                } else {
                                    $scope.help = function () {
                                        $scope.$emit('showHelpPanel', { 
                                            expression: $scope.data.help
                                        });
                                    };
                                }
							
                                // Setup the hasWorkbook variable which shows/hides the workbook button.
                                $scope.hasWorkbook = $scope.data.workbook;

                                // If we do have help, set up the actual help function.
                                if ($scope.hasWorkbook === true) {
                                    $scope.openWorkbook = function () {
                                        $scope.$emit('showWorkbook');
                                    };
                                }

                                // Setup the hasCheckAnswer flag to show/hide the Check Answer button.
                                $scope.hasCheckAnswer = $scope.data.checkAnswer;

                                //if ($scope.hasCheckAnswer) { 
                                    $scope.checkAnswer = function () {
                                        $scope.$emit('triggerCheckAnswer');
                                    };
                                //}

                                $scope.hasNextProblem = $scope.data.nextProblem;
                                if ($scope.hasNextProblem === true) {
                                    $scope.showNextProblem = function () {
                                        $scope.$emit('panelDone');
                                        $scope.$emit('triggerCheckAnswer');
                                    };
                                }
								
								// $scope.stepwiseNextProblem === true, "Next Problem" text on button.
								if (typeof $scope.data.stepwiseNextProblem !== "undefined" && $scope.data.stepwiseNextProblem === true) {
                                	$scope.stepwiseNextProblem = true;
									// add stepwiseNextProblem to problemData to pass to ms-feedback.js
									problemData.addData(true, 'stepwiseNextProblem');
								} else {
									$scope.stepwiseNextProblem = false;
								}

								// "hasModal" field in data, turn on modal button
								if (typeof $scope.data.modalButton !== "undefined" && typeof $scope.data.modalText !== "undefined") {
									$scope.modalButton = $scope.data.modalButton;
                                	$scope.hasModal = true;
									// add hasModal to problemData to pass to ms-feedback.js
									problemData.addData(true, 'modalButton');
									problemData.addData(true, 'modalText');
									
									$scope.openModal = function () {
										$scope.$emit('showModalText', {
                                            modalText: $scope.data.modalText
                                        });
									};
								
								} else {
									$scope.hasModal = false;
								}
								
								$scope.fixBottomRight = function () {
									if (typeof $scope.data.fixBottomRight !== "undefined" && $scope.data.fixBottomRight === true) {
										return "fixBottomRight span2";
									} else {
										return "";
									}
								}

                            }
                        });

                        $scope.$on('setAnswerBtn', function (e, data, flag) {
							if ($scope.stepwiseNextProblem === true) {
                                     data = 'Next Problem';
							}
                            anwserbtn(data);
                            if(flag !== false) {
                                $scope.$apply();
                            }
                        });
                    }
                ],
                restrict: 'E',
                scope: {
                    data: '@'
                },
                templateUrl: 'partials/directives/ms-controls.html'
            };
        }
    ]);
