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
        'feedbackData',
        function (parser, $compile, panelGroupData, feedbackData) {
            return {
                controller: function ($scope, $element) {
                    var  twoAndOut = 0,
                         instruction;
                    
                    // Extract the args array.
                    $scope.$watch('expected', function () {
 
                        if ($scope.expected){
                            $scope.expectedArgs = parser.extractTag($scope.expected).args;
                            branch();
                        }
                    });
                    
                    $scope.$on('switch', function () {
                        branch();
                    });
                    
                    function branch () { 
                        if ($scope.expectedArgs[1][0] === '[') {
                            if (feedbackData.getPreviousResult()){
                                $scope.instructions1 = JSON.parse($scope.expectedArgs[1])[1]; 
                            }else {
                                $scope.instructions1 = JSON.parse($scope.expectedArgs[1])[0];  
                            }       
                        } else{
                            $scope.instructions1 = $scope.expectedArgs[1];                           
                        }
                        $scope.instructions1 = parseString ($scope.instructions1, ["@","#"]);

                        $scope.view = false;   
                        if ($scope.expectedArgs.length > 2){
                            if ($scope.expectedArgs[2][0] === '[') {
                                if (feedbackData.getPrevious()){
                                    $scope.instructions2  = JSON.parse($scope.expectedArgs[2])[1]; 
                                }else {
                                    $scope.instructions2 = JSON.parse($scope.expectedArgs[2])[0];  
                                }
                                if($scope.instructions2 === "false"){
                                    $scope.view = true;    
                                }
                            } else{
                                $scope.instructions2 = $scope.expectedArgs[2];      
                            } 
                            $scope.instructions2 = parseString ($scope.instructions2, ["@","#"]);
                        }else{
                            $scope.view = true;
                        }
                    }
                    
                    function parseString (string, mark){
                        
                        var arr = [],
                            arg = '';
                        
                        for(var i = 0; i < string.length; i += 1){
                                                       
                            if (string[i] === mark[0]){
                                arg = '';
                            }else{
                                if (string[i] === mark[1]) {
                                    arr.push(arg);
                                }
                                arg += string[i]; 
                            }  
                        }

                        if (arr.length > 1){ 
                            var reg1 = new RegExp(mark[0] + arr[0] + mark[1] ,"gi");
                            var reg2 = new RegExp(mark[0] + arr[1] + mark[1] ,"gi");
                            
                            if (panelGroupData.getFlipIndex() === 1){
                                string = string.replace(reg1, arr[1]);
                                string = string.replace(reg2, arr[0]);
                            }else{
                                string = string.replace(reg1, arr[0]);
                                string = string.replace(reg2, arr[1]);
                            }
                        }
                        

                        return string;
                    }
                    
                    $scope.$on('answer', function (e, data) {
                        data.noHelpPrompt = true;
                        if (data.result === 'incorrect') {
                            twoAndOut += 1;
                            if (twoAndOut > 1){
                                twoAndOut = 0;
                                $scope.$emit('panelDone');
                            }
                        }
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