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
                        $scope.isNotCurrent = function (ii) {
                            return $scope.currentPanel !== ii;
                        };
                        $scope.$watch('panelgroup', function () {
                            $scope.panels = JSON.parse($scope.panelgroup).children;
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
