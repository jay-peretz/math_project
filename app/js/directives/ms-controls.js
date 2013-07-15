'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msControls', [
        function () {
            return {
                controller: [
                    '$scope',
                    function ($scope) {
                        $scope.answerButtonText = 'Check Answer';

                        $scope.$watch('data', function () {
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
                                        $scope.answerButtonText = 'Next Problem';
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
