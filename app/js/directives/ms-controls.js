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
                                    (data === false) ? $scope.hasCheckAnswer = false : ckeckAnswerBtn();
                                } else { 
                                    if (data === 'noAnswer'){
                                        $scope.hasCheckAnswer = false;
                                    } else {
                                        if (data === 'noAnswerN' || data === 'noAnswerC'){ //console.log('data running', data); 
                                            $scope.answerButtonText = (data === 'noAnswerN') ? 'Next Problem': 'Next Step';
                                            $scope.hasCheckAnswer = true;
                                            
                                        } else {
                                            $scope.answerButtonText = data;
                                        }
                                    }
                                }
                            },
                            ckeckAnswerBtn = function () {
                                (problemData.getData('answerBtn') === undefined) ? $scope.answerButtonText = 'Check Answer' : anwserbtn(problemData.getData('answerBtn'));
                            };

                        $scope.$watch('data', function () {
//console.log('answerBtn', problemData.getData('answerBtn')); 
                            ckeckAnswerBtn();

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
//$scope.answerButtonText = 'Next Problem';
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

                                if ($scope.hasCheckAnswer) {
                                    $scope.checkAnswer = function () {
                                        $scope.$emit('triggerCheckAnswer');
                                    };
                                }

                                $scope.hasNextProblem = $scope.data.nextProblem;
                                if ($scope.hasNextProblem === true) {
                                    $scope.showNextProblem = function () {
                                        $scope.$emit('panelDone');
                                        $scope.$emit('triggerCheckAnswer');
                                    };
                                }
                            }
                        });

                        $scope.$on('setAnswerBtn', function (e, data, flag) {
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
