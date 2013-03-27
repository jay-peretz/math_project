'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msControls', [
        function () {
            return {
                controller: [
                    '$scope',
                    function ($scope) {
                        $scope.$watch('data', function () {
                            // If we haven't parsed $scope.data into an object.
                            if (typeof $scope.data === 'string') {

                                // Parse it.
                                $scope.data = JSON.parse($scope.data);

                                // Setup the hasHelp variable which shows/hides the help button.
                                $scope.hasHelp = $scope.data.help;

                                // If we do have help, set up the actual help function.
                                if ($scope.hasHelp) {
                                    $scope.help = function () {
                                        $scope.$parent.$broadcast('checkHelp');
                                    };
                                }

                                // Setup the hasCheckAnswer flag to show/hide the Check Answer button.
                                $scope.hasCheckAnswer = $scope.data.checkAnswer;

                                if ($scope.hasCheckAnswer) {
                                    $scope.checkAnswer = function () {
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
