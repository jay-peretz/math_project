'use strict';
/*global angular */

angular.module('mathSkills')
    .controller('problem', [
        'courseData',
        '$location',
        '$routeParams',
        '$scope',
        '$timeout',
        'problemData',
        function (courseData, $location, $routeParams, $scope, $timeout, problemData) {
            $scope.problem = courseData.getProblemData(
                $routeParams.unit,
                $routeParams.problemSet,
                $routeParams.problemNumber
            );
            /* add problem data object (from course-data.js "data") to problem-data.js service
             *
            */
            problemData.setObject($scope.problem.data || {});

            $scope.mainAnswer = $scope.problem.children[0];
            $scope.workbook = $scope.problem.children[1];

            $scope.$on('problemDone', function () {
                var numberOfProblems = courseData.getNumberOfProblems($routeParams.unit, $routeParams.problemSet),
                    newPath = $location.path().split('/').slice(0, -1).join('/');
                if (+$routeParams.problemNumber + 1 <= numberOfProblems) {
                    newPath += '/' + (+$routeParams.problemNumber + 1);
                } else {
					switch (true) {
						case(JSON.stringify($scope.problem.children[0]).search('"provideFeedback":true') !== -1):
							newPath += '/all/feedback';
							break;
						case(JSON.stringify($scope.problem.children[0]).search('"provideFeedback":"diagnostic"') !== -1):
							newPath += '/all/feedback-diagnostic';
							break;
						default:
							newPath = $location.path().split('/').slice(0, -2).join('/');
							break;
					}
                }

                // Change the path after a short delay.
                $timeout(function () {
                    $location.path(newPath);
                }, 1000);
            });

            $scope.$on('answer', function (e, data) {
                data.problemNumber = $routeParams.problemNumber;
            });
        }
    ]);
