'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msFeedback', [
        function () {
            return {
                controller: [
                    '$scope',
                    function ($scope) {
                        // Sayings arrays.
                        var correctSayings = [
                                'Great Job!',
                                'Groovy',
                                'You\'re on a roll',
                                'That\'s right!'
                            ],
                            incorrectSayings = [
                                'Try again.',
                                'Sorry',
                                'That\'s incorrect.'
                            ];

                        // Place scope properties in one top level object,
                        // since <ms-feedback> does not have isolate scope.
                        // This prevents it from clobering over anything
                        // placed on the scope by <ms-panel>.
                        $scope.feedback = {
                            message: 'Try again',
                            labelClass: 'important',
                            icon: 'remove',
                            show: false
                        };

                        $scope.$on('answer', function (e, data) {
                            
                            if(data.noFeedback !== true){
                                // Show the feedback label.
                                $scope.feedback.show = true;
                            }

                            // Set the feedback label content.
                            if (data.result === 'correct') {
                                $scope.feedback.message = correctSayings[Math.floor(correctSayings.length * Math.random())];
                                $scope.feedback.labelClass = 'success';
                                $scope.feedback.icon = 'ok';
                            } else {
                                $scope.feedback.message = incorrectSayings[Math.floor(incorrectSayings.length * Math.random())];
                                $scope.feedback.labelClass = 'important';
                                $scope.feedback.icon = 'remove';
                            }
                        });

                        // Hide the feedback label when the user clicks help.
                        $scope.$on('checkHelp', function () {
                            $scope.feedback.show = false;
                        });
                    }
                ],
                restrict: 'E',
                scope: false,
                templateUrl: 'partials/directives/ms-feedback.html'
            };
        }
    ]);
