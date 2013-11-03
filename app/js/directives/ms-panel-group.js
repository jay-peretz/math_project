'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msPanelGroup', [
        
        function () {
            return {
                controller: [
                    '$scope',
                    '$timeout',
                    '$rootScope',
                    'problemData',
                    function ($scope, $timeout, $rootScope, problemData) {
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
                            }
                        });
                        $scope.updateCurrent = function (ii) {
                            $scope.currentPanel = ii;
//($scope.currentPanel === $scope.panels.length - 1) ? $scope.$broadcast('answerBtn', 'Check Answer', false) :  $scope.$broadcast('answerBtn', true, false); // set Answer Button Text
                            $scope.$broadcast('answerBtn', true, false); // set Answer Button Text
                            $scope.panelScopes[$scope.currentPanel].$broadcast('checkFocus');
                        };

                        // Listen for panelDone events.
                        $scope.$on('panelDone', function () { 
                            // If we have more panels to show, show the next.
                            if ($scope.currentPanel < $scope.panels.length - 1) {
                                // After a 1 second delay.
                                $timeout(function () {
                                    $scope.currentPanel += 1;
//if ($scope.currentPanel === $scope.panels.length - 1) {$scope.$broadcast('answerBtn', 'Next Problem'); } // set Answer Button Text
                                    $scope.panelScopes[$scope.currentPanel].$broadcast('checkFocus');
                                }, 200);
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

                        $scope.$on('triggerCheckHelp', function (e, data) {
                            if (problemData.getData('answerBtn') === 'noAnswer') {
                                ($scope.currentPanel === $scope.panels.length - 1) ? $scope.$broadcast('answerBtn', 'noAnswerN', false) :  $scope.$broadcast('answerBtn', 'noAnswerC', false);  // set Answer Button Text
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
