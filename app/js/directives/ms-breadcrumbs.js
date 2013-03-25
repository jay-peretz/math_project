'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msBreadcrumbs', [
        function () {
            return {
                controller: [
                    'courseData',
                    '$location',
                    '$rootScope',
                    '$scope',
                    function (courseData, $location, $rootScope, $scope) {
                        var getBreadcrumbTitle = function (path) {
                                var pathParts = path.split('/').slice(1);
                                switch (pathParts.length) {
                                    case 1 : return 'Units';
                                    case 2 : return courseData.getUnitData(pathParts[1]).title;
                                    case 3 : return courseData.getProblemSetData(pathParts[1], pathParts[2]).title;
                                }
                            },
                            updateBreadcrumbs = function () {
                                var basePath = 'index.html#',
                                    pathParts = $location.path().split('/').slice(1, 4);
                                $scope.breadcrumbs = [{
                                    title: 'Home',
                                    path: basePath + '/'
                                }];
                                pathParts.forEach(function (path) {
                                    basePath += '/' + path;
                                    $scope.breadcrumbs.push({
                                        title: getBreadcrumbTitle(basePath),
                                        path: basePath
                                    });
                                });
                            };
                        $rootScope.$on('$routeChangeSuccess', updateBreadcrumbs);
                        updateBreadcrumbs();
                    }
                ],
                restrict: 'E',
                scope: true,
                templateUrl: 'partials/directives/ms-breadcrumbs.html'
            };
        }
    ]);
