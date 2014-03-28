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
                        if ($scope.expected){
                            sign = parser.extractTag($scope.expected).args[0];
							console.log("parser.extractTag($scope.expected).args[0]   ", parser.extractTag($scope.expected).args[0]);
							
                            $scope.templateStr = "\\css{\\html{" + sign + "}}{bigger}";
                        }
						if (parser.extractTag($scope.expected).args[1] != 'undefined')
						{
						 cssClass = parser.extractTag($scope.expected).args[1];
						$scope.templateStr = "\\css{\\html{" + sign + "}}{" + cssClass + "}";
						console.log("parser.extractTag($scope.expected).args[1]   ", parser.extractTag($scope.expected).args[1]);
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