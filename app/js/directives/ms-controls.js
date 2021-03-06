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
									 // stepwiseNextProblem present, answerBtn not
									 if ($scope.stepwiseNextProblem === true) {
										$scope.answerButtonText = 'Next Problem';
									 } else {
                                     	$scope.answerButtonText = 'Check Answer';
									 }
                                     $scope.hasCheckAnswer = true;
                                 } else {
									 // stepwiseNextProblem and answerBtn present
									 if ($scope.stepwiseNextProblem === 'Check Answer') {										
										 $scope.answerButtonText = 'Check Answer';
									 } else {
                                         anwserbtn(problemData.getData('answerBtn'));
									 }
                                 }
                            };
						
						// variable to say whether help panel is displayed or not
						$scope.$watch('helpshow', function (showOrNo) {
								if (showOrNo) {
									$scope.hasHelpData = true;
								}
						});

                        $scope.$watch('data', function () {

                            ckeckAnswerBtn();
							var controlsFix;

                            // If we haven't parsed $scope.data into an object.
                            if (typeof $scope.data === 'string') {

                                // Parse it.
                                $scope.data = JSON.parse($scope.data); 
								
								// fixHelpControls property in controls adds class
								if (typeof $scope.data.fixHelpControls === "undefined") {
									$scope.fixHelpClass = "span3";
								} else {
									$scope.fixHelpClass = "fixHelpControls span2";
								}

								
								// $scope.hasHelpData is true if showHelpPanel is true
								if ($scope.hasHelpData === true) {
									// changes help button label to "Next Problem"
									$scope.data = {nextProblem: true};
								}

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
								if (typeof $scope.data.stepwiseNextProblem !== "undefined" && ($scope.data.stepwiseNextProblem === true || $scope.data.stepwiseNextProblem === 'Check Answer')) {
									// add stepwiseNextProblem to problemData to pass to ms-feedback.js
									problemData.addData($scope.data.stepwiseNextProblem, 'stepwiseNextProblem');
									$scope.stepwiseNextProblem = $scope.data.stepwiseNextProblem;
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
										if (typeof $scope.data.modalClass !== "undefined") {
											$scope.$emit('showModalText', {
												modalText: $scope.data.modalText,
												modalClass: $scope.data.modalClass
											});
										} else {
											$scope.$emit('showModalText', {
												modalText: $scope.data.modalText
											});
										}
									};
								
								} else {
									$scope.hasModal = false;
								}
								
								$scope.fixBottomRight = function () {
									switch (true) {
										case (typeof $scope.data.fixBottomRight !== "undefined" && $scope.data.fixBottomRight === true):
											var wt = $(window).scrollTop();
											var wb = wt + $(window).height();
											window.scrollTo(0, wb);
											return "fixBottomRight span2";
											break;
										case (typeof $scope.data.fixBottomRight !== "undefined" && $scope.data.fixBottomRight === "hidden"):
											return "hiddenSpace span3";
											break;
										default:
											return "";
											break;
									}
								}

                            }
                        });

                        $scope.$on('setAnswerBtn', function (e, data, flag) {
							if ($scope.stepwiseNextProblem === true) {
                                     data = 'Next Problem';
							} else if ($scope.stepwiseNextProblem === "Check Answer") {
								 	 data = 'Check Answer';
							}
                            anwserbtn(data);
                            /*if(flag !== false) {
                                $scope.$apply();
                            }*/
                        });
                    }
                ],
                restrict: 'E',
                scope: {
                    data: '@',
					helpshow: '@'
                },
                templateUrl: 'partials/directives/ms-controls.html'
            };
        }
    ]);
