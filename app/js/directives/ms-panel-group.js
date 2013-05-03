'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msPanelGroup', [
        'panelGroupData',
        function (panelGroupData) {
            return {
                controller: [
                    '$scope',
                    '$timeout',
                    function ($scope, $timeout) {
                        $scope.currentPanel = 0;
                        $scope.panelScopes = [];
                        $scope.navVisibility = 'visible';
                        $scope.isActive = function (ii) {
                            return $scope.currentPanel === ii;
                        };
                        $scope.$watch('panelgroup', function () {
                            if ($scope.panelgroup) {
                                $scope.panelScopes = [];
                                $scope.title = JSON.parse($scope.panelgroup).title;
                                $scope.panels = JSON.parse($scope.panelgroup).children;
                                if ($scope.panels.length < 2) {
                                    $scope.navVisibility = 'hidden';
                                }
                                // Build up an array of child <ms-panel> scopes.
                                $timeout(function () {
                                    var childScope = $scope.$$childHead;
                                    while (childScope) {
                                        if (childScope.panel) {
                                            $scope.panelScopes.push(childScope);
                                        }
                                        childScope = childScope.$$nextSibling;
                                    }
                                }, 0);

                                // Reset the answer index in panelGroupData.
                                panelGroupData.resetIndex();
                            }
                        });
                        $scope.updateCurrent = function (ii) {
                            $scope.currentPanel = ii;
                            $scope.panelScopes[$scope.currentPanel].$broadcast('checkFocus');

                            // Reset the panelGroupData.
                            panelGroupData.resetIndex();
                        };

                        // Listen for panelDone events.
                        $scope.$on('panelDone', function () {
                            // If we have more panels to show, show the next.
                            if ($scope.currentPanel < $scope.panels.length - 1) {
                                $scope.currentPanel += 1;
                                $scope.panelScopes[$scope.currentPanel].$broadcast('checkFocus');

                                // Reset the panelGroupData.
                                panelGroupData.resetIndex();
                            // Otherwise $emit panelGroupDone
                            } else {
                                $scope.$emit('panelGroupDone', {
                                    title: $scope.title
                                });
                            }
                        });

                        $scope.$on('checkFocus', function (e, data) {
                            if (e.defaultPrevented === false) {
                                e.preventDefault();
                                $scope.panelScopes[$scope.currentPanel].$broadcast('checkFocus');
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
