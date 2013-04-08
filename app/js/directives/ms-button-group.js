'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('butgrp', {
            directiveTemplate: '<ms-button-group expected={{expected}} label={{label}}></ms-button-group>'
        });
    }])
  .directive('msButtonGroup', [
    'parser',
    function (parser) {
        return {
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            controller: function ($scope) {
                $scope.correctAnswer = '';
                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        $scope.containedTag = parser.extractTag($scope.expected).args[0];

                        // Find the correct answer amongst the contained buttons.
                        parser.find($scope.expected, 'but').forEach(function (button) {
                            if (button.args[1] === 'T') {
                                $scope.correctAnswer = button.args[0];
                            }
                        });
                    }
                });
                $scope.$on('answer', function (e, data) {
                    data.expected = '\\but{' + $scope.correctAnswer + '}{T}';
                });
            },
            template: '<ms-expression expected={{containedTag}}></ms-expression>'
        };
    }]);
