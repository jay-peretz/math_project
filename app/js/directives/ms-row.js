'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('row', {
            directiveTemplate: '<ms-row expected={{expected}} label={{label}}></ms-row>'
        });
    }])
  .directive('msRow', [
    'parser',
    function (parser) {
        return {
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            controller: function ($scope, $element) {

               // Extract the args array.
                $scope.$watch('expected', function () {
                    if ($scope.expected){
                        $scope.rowArgs = parser.extractTag($scope.expected);

                    }
                });
            },
            template: '<table><tr><td ng-repeat="data in rowArgs.args"><ms-expression expected={{data}}></td></tr></table>'
        };
    }]);