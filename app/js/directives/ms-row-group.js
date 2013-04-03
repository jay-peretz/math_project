'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('rowgrp', {
            directiveTemplate: '<ms-row-group expected={{expected}} label={{label}}></ms-row-group>'
        });
    }])
  .directive('msRowGroup', [
    'parser',
    function (parser) {
        return {
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            controller: function ($scope) {

               // Extract the args array.
                $scope.$watch('expected', function () {
                    if ($scope.expected){
                        $scope.rows = parser.extractTag($scope.expected).args;
                    }
                });
            },
            template: '<table><tr ng-repeat="row in rows"><td><ms-expression expected={{row}}></td></tr></table>'
        };
    }]);