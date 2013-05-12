'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('flip', {
            directiveTemplate: '<ms-flip expected={{expected}} label="flip"></ms-flip>'
        });
    }])
    .directive('msFlip', [
        'parser',
        '$compile',
        'panelGroupData',
        function (parser, $compile, panelGroupData) {
            return {
                controller: function ($scope, $element) {
                    var expectedArgs,
                        flipArgs;
                    // Extract the args array.
                    $scope.$watch('expected', function () {
 
                        if ($scope.expected){
                            expectedArgs = parser.extractTag($scope.expected).args,
                            flipArgs = parser.extractTag(expectedArgs[0]).args;

                            $scope.flipExpected = expectedArgs[0];
                            
                        }
                    });
                    
                    $scope.$on('flip', function (e, index){
                        var flip = JSON.parse(expectedArgs[1]).some(function (a) {
                            return a === index;
                        });

                        if (flip){
                            $scope.flipExpected = expectedArgs[0].replace(flipArgs[flipArgs.length - 1],flipArgs[0]);
                            $scope.flipExpected = $scope.flipExpected.replace(flipArgs[0],flipArgs[flipArgs.length - 1]);
                        }else {
                            $scope.flipExpected = expectedArgs[0];
                        }    
                    });

                    $scope.$on('answer', function (e, data) {
                 
                        //panelGroupData.setResult(data.result);
                        
                        data.expected = $scope.expected;
                        data.answer = '\\flip{' + data.answer +'}{' + $scope.myargs[1] + '}';
                    });
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<ms-expression expected={{flipExpected}}></ms-expression>'
            };
        }
    ]);