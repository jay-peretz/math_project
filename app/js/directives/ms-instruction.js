'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('ins', {
            directiveTemplate: '<ms-instruction expected={{expected}} label="label"></ms-instruction>'
        });
    }])
    .directive('msInstruction', [
        'parser',
        '$compile',
        'panelGroupData',
        function (parser, $compile, panelGroupData) {
            return {
                controller: function ($scope, $element) {
                    var expectedArgs,
                        info;
                    
                    // Extract the args array.
                    $scope.$watch('expected', function () {
 
                        if ($scope.expected){
                            expectedArgs = parser.extractTag($scope.expected).args;
                            $scope.myExpected =  expectedArgs[0];
                            info = JSON.parse(expectedArgs[1]);
                            $scope.instructions = info[0];
                        }
                    });
                    
                   
                     
                    // if ( ){
                    //     $scope.instructions = info[0]; 
                    // }else {
                    //     $scope.instructions = info[1];  
                    // }    
                  

                    $scope.$on('answer', function (e, data) {
                 
                        //panelGroupData.setResult(data.result);
                        
                        //data.expected = $scope.expected;
                        //data.answer = '\\flip{' + data.answer +'}{' + $scope.myargs[1] + '}';
                    });
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                templateUrl: 'partials/directives/ms-instruction.html'
            };
        }
    ]);