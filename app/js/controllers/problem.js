'use strict';
/*global angular */

angular.module('mathSkills')
    .controller('problem', [
        'courseData',
        '$location',
        '$routeParams',
        '$scope',
        function (courseData, $location, $routeParams, $scope) {
            $scope.problem = courseData.getProblemData(
                $routeParams.unit,
                $routeParams.problemSet,
                $routeParams.problemNumber
            );
            $scope.mainAnswer = $scope.problem.children[0];
            $scope.workbook = $scope.problem.children[1];

            $scope.$on('problemDone', function () {
                var newPath = $location.path().split('/').slice(0, -1).join('/');
                newPath += '/' + (+$routeParams.problemNumber + 1);
                $location.path(newPath);
            });
        }
    ]);
