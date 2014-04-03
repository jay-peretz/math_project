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
                    var sign, cssClass;
                    $scope.$watch('expected', function () {
						sign = parser.extractTag($scope.expected).args[0];
						if (typeof parser.extractTag($scope.expected).args[1] !== 'undefined')
						{
							 cssClass = parser.extractTag($scope.expected).args[1];
							$scope.templateStr = "\\css{\\html{" + sign + "}}{" + cssClass + "}";
						} else {
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