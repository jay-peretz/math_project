'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('size', {
            directiveTemplate: '<ms-size expected={{expected}} label=css></ms-size>'
        });
    }])
    .directive('msSize', [
        'parser',
        '$compile',
        'directiveUtils',
        function (parser, $compile, directiveUtils) {
            return {
                controller: function ($scope, $element) {
                    // Extract the args array.
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.myargs = parser.extractTag($scope.expected).args;
                            $scope.opclass = $scope.myargs.length > 1 ? $scope.myargs[1] : '';
                        }
                    });
                    directiveUtils.size($scope);
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<div class={{opclass}}><ms-expression expected={{myargs[0]}}></ms-expression></div>'
            };
        }
    ]);