'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msProblem', [
        function () {
            return {
                controller: [
                    '$scope',
                    function ($scope) {
                        // Listen for panelGroupDone events.
                        $scope.$on('panelGroupDone', function (e, data) {
                            // $emit problemDone in response.
                            $scope.$emit('problemDone');
                        });
                        $scope.updateTab = function (tab) {
                            switch (tab) {
                                case 'problem':
                                    $scope.$$childHead.$broadcast('checkFocus');
                                    break;
                                case 'wb':
                                    $scope.$$childHead.$$nextSibling.$broadcast('checkFocus');
                                    break;
                            }
                        };
                    }
                ],
                restrict: 'E',
                scope: {
                    mainanswer: '@',
                    workbook: '@'
                },
                templateUrl: 'partials/directives/ms-problem.html'
            };
        }
    ]);
