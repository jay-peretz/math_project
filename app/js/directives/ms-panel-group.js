'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msPanelGroup', [
        function () {
            return {
                controller: [
                    '$scope',
                    function ($scope) {
                        $scope.currentPanel = 0;
                        $scope.navVisibility = 'visible';
                        $scope.isActive = function (ii) {
                            return $scope.currentPanel === ii;
                        };
                        $scope.$watch('panelgroup', function () {
                            if ($scope.panelgroup) {
                                $scope.title = JSON.parse($scope.panelgroup).title;
                                $scope.panels = JSON.parse($scope.panelgroup).children;
                                if ($scope.panels.length < 2) {
                                    $scope.navVisibility = 'hidden';
                                }
                            }
                        });
                        $scope.updateCurrent = function (ii) {
                            $scope.currentPanel = ii;
                        };

                        // Listen for panelDone events.
                        $scope.$on('panelDone', function () {
                            // If we have more panels to show, show the next.
                            if ($scope.currentPanel < $scope.panels.length - 1) {
                                $scope.currentPanel += 1;
                            // Otherwise $emit panelGroupDone
                            } else {
                                $scope.$emit('panelGroupDone', {
                                    title: $scope.title
                                });
                            }
                        });
                    }
                ],
                restrict: 'E',
                scope: {
                    panelgroup: '@'
                },
                templateUrl: 'partials/directives/ms-panel-group.html'
            };
        }
    ]);
