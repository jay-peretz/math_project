'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msProblemPager', [
        function () {
            return {
                controller: [
                    'courseData',
                    '$routeParams',
                    '$scope',
                    function (courseData, $routeParams, $scope) {
                        $scope.unitPath = $routeParams.unit;
                        $scope.problemSetPath = $routeParams.problemSet;
                        $scope.problemSet = courseData.getProblemSetData($routeParams.unit, $routeParams.problemSet).children;
                        $scope.isActive = function (ii) {
                            return +$routeParams.problemNumber === ii + 1;
                        };
                    }
                ],
                restrict: 'E',
                scope: true,
                templateUrl: 'partials/directives/ms-problem-pager.html'
            };
        }
    ]);
