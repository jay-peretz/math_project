'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('pan', {
            directiveTemplate: '<ms-pan expected={{expected}} label=css></ms-pan>'
        });
    }])
    .directive('msPan', [
        'parser',
        '$compile',
        function (parser, $compile) {
            return {
                controller: function ($scope, $element) {
                    // Extract the args array.
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.myargs = parser.extractTag($scope.expected).args;
                            $scope.opclass = $scope.myargs.length > 3 ? $scope.myargs[3] : '';
                            $scope.$emit('panelsize', $scope.myargs[0], $scope.myargs[1]);
                        }
                    });
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<div class={{opclass}}><ms-expression expected={{myargs[2]}}></ms-expression></div>'
            };
        }
    ]);