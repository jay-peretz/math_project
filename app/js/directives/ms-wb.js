'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('wb', {
            directiveTemplate: '<ms-wb expected={{expected}} label={{label}}></ms-wb>'
        });
    }])
    .directive('msWb', [
        'parser',
        '$compile',
        function (parser, $compile) {
            return {
                controller: function ($scope, $element) {
                    var  twoAndOut = 0;
                    
                    // Extract the args array.
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.myargs = parser.extractTag($scope.expected).args;
                            $scope.myclass = $scope.myargs.length > 1 ? $scope.myargs[1]: "wbclass";
                        }
                    });

                    $scope.$on('answer', function (e, data) {
                        data.noHelpPrompt = true;
                        if (data.result === 'incorrect') {
                            twoAndOut += 1;
                            if (twoAndOut > 1){
                                twoAndOut = 0;
                                $scope.$emit('panelDone');
                            }
                        }
                        //data.expected = $scope.expected;
                        //data.answer = '\\wb{' + data.answer +'}{' + $scope.myargs[1] + '}';
                    });
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<div class={{myclass}}><ms-expression expected={{myargs[0]}}></ms-expression></div>'
            };
        }
    ]);