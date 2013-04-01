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
                            show: false
                        };

                        // Show help prompt after two incorrect answers.
                        $scope.$on('answer', function (e, data) {
                            if (data.result === 'incorrect') {
                                incorrectAnswers += 1;
                                if (incorrectAnswers === 2) {
                                    $scope.helpPrompt.show = true;
                                }
                            }
                        });
                    }
                ],
                restrict: 'E',
                scope: false,
                templateUrl: 'partials/directives/ms-help-prompt.html'
            };
        }
    ]);
