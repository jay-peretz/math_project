'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('prev', {
            directiveTemplate: '<ms-previous expected={{expected}} label={{label}}></ms-previous>'
        });
    }])
    .directive('msPrevious', ['feedbackData', 'parser', function (feedbackData, parser) {
        return {
            controller: ['$scope', function ($scope) {
                var watching = false;
                $scope.feedbackData = feedbackData;
                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        if (!watching) {
                            var args = parser.extractTag($scope.expected).args;
                            $scope.nested = args[1];
                            $scope.nestedTag = parser.extractTag($scope.nested).tag;
                            $scope.$watch(args[0], function (data) {
                                if (data && data.answer) {
                                    $scope.nested = $scope.nestedTag + '{' + data.answer + '}';
                                }
                            });
                            watching = true;
                        }
                    }
                });
            }],
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            template: '<ms-expression expected={{nested}} label={{label}}></ms-expression>'
        };
    }]);
