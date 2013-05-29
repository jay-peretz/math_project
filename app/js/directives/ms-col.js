'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('col', {
            directiveTemplate: '<ms-col expected={{expected}} label={{label}}></ms-col>'
        });
    }])
  .directive('msCol', [
        function () {
            return {
                controller: [
                    'parser',
                    '$scope',
                    function (parser, $scope) {
                        $scope.$watch('expected', function () {
                            if ($scope.expected) {
                                $scope.rows = parser.extractTag($scope.expected).args;
                            }
                        });
                    }
                ],
                scope: {
                    expected: '@',
                    label: '@'
                },
                restrict: 'E',
            template: '<table><tr ng-repeat="row in rows"><td><ms-expression expected={{row}}></td></tr></table>'
        };
    }]);