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
                    var count = 0;
                        
                    // Extract the args array.
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.myargs = parser.extractTag($scope.expected).args;
                            $scope.myclass = $scope.myargs.length > 1 ? $scope.myargs[1]: "wbclass"; 
                            $scope.step = $scope.myargs.length > 2 ? $scope.myargs[2]: "defalt";
                        }
                    });

                    $scope.$on('answer', function (e, data) { 
                         
                        switch($scope.step){
                            case 'defalt':
                                data.noHelpPrompt = true;
                                if (data.result === 'incorrect') {
                                    count += 1;
                                    
                                    if (count > 1){
                                        count = 0;
                                        $scope.$emit('panelDone');
                                    }else{
                                        data.noRecompile = true;
                                    }
                                }
                            break;
                            case 'end':
                                data.noHelpPrompt = true;
                                if (data.result === 'incorrect') {
                                    count += 1;
                                    
                                    if (count > 1){
                                        count = 0;
                                        $scope.$emit('panelDone');
                                    }else{
                                        data.noRecompile = true;
                                    }
                                }else{
                                    $scope.$emit('panelGroupDone');
                                }
                            break;
                        }
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