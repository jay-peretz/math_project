'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msHelpPrompt', [
        function () {
            return {
                controller: [
                    '$scope',
                    function ($scope) {
                        // Keep track of incorrect answers.
                        var incorrectAnswers = 0;

                        // Start off with help prompt hidden.
                        $scope.helpPrompt = {
                            show: false,
                            helpButton: true
                        };

                        $scope.$watch('controls', function () {
                            if ($scope.controls) {
                                $scope.helpPrompt.helpButton = !!JSON.parse($scope.controls).help;
                            }
                        });
                        // Show help prompt after two incorrect answers.
                        $scope.$on('answer', function (e, data) {
                            if (data.result === 'incorrect' && data.noHelpPrompt === undefined) {
                                incorrectAnswers += 1;
                                if (incorrectAnswers === 2) {
                                    $scope.helpPrompt.show = true;
                                }
                            }
                        });

                        // Hide the prompt when the user asks for help.
                        $scope.$on('checkHelp', function () {
                            $scope.helpPrompt.show = false;
                        });
                    }
                ],
                restrict: 'E',
                scope: false,
                templateUrl: 'partials/directives/ms-help-prompt.html'
            };
        }
    ]);
