'use strict';
/*global angular */

angular.module('mathSkills')
    .directive('msEventLabel', [
        'directiveUtils',
        'parser',
        '$compile',
        function (directiveUtils, parser, $compile) {
            return {
                controller: function ($scope, $element) {
                    // Add our label to any answer events passing through our scope.
                    $scope.$on('answer', function (e, data) {
                        data.label = $scope.label;
                    });
                    
                    $scope.$on('size', function (e, data) {
                        if (!data.label){
                            data.label = $scope.label;
                        }
                    });

                    // Let the parser determine our template.
                    directiveUtils.compileExpected($scope, $element, true);
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<div></div>'
            };
        }
    ]);
