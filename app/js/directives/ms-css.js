'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('css', {
            directiveTemplate: '<ms-css expected={{expected}} label=css></ms-css>'
        });
    }])
    .directive('msCss', [
        'parser',
        '$compile',
        function (parser, $compile) {
            return {
                controller: function ($scope, $element) {
                    // Extract the args array.
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.myargs = parser.extractTag($scope.expected).args;
                        }
                    });

                    $scope.$on('answer', function (e, data) {
                        data.expected = $scope.expected;
                        data.answer = '\\css{' + data.answer +'}{' + $scope.myargs[1] + '}';
                    });
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<div class={{myargs[1]}}><ms-expression expected={{myargs[0]}}></ms-expression></div>'
            };
        }
    ]);