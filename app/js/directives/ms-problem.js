'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msProblem', [
        function () {
            return {
                controller: [
                    '$scope',
                    function ($scope) {
                        $scope.currentTab = 'problem';

                        $scope.isCurrent = function (tab) {
                            return tab === $scope.currentTab;
                        };

                        // Listen for panelGroupDone events.
                        $scope.$on('panelGroupDone', function (e, data) {
                            // $emit problemDone in response.
                            $scope.$emit('problemDone');
                        });

                        $scope.$on('showWorkbook', function (e) {
                            e.stopPropagation();
                            $scope.updateTab('wb');
                        });

                        $scope.updateTab = function (tab) {
                            $scope.currentTab = tab;
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
