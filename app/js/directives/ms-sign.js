'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('sign', {
            directiveTemplate: '<ms-sign expected={{expected}} label="sign"></ms-sign>'
        });
    }])
    .directive('msSign', [
        'parser',
        function (parser) {
            return {
                controller: function ($scope, $element) {
                    var sign;
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            sign = parser.extractTag($scope.expected).args;
                            $scope.templateStr = "\\css{\\html{" + sign + "}}{bigger}";
                        }
                    });
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<ms-expression expected={{templateStr}} label={{label}}> </ms-expression>'
            };
        }
    ]);