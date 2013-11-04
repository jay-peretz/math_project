'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('chkbtn', {
            directiveTemplate: '<ms-chkbtn expected={{expected}} label={{label}}></ms-chkbtn>'
        });
    }])
    .directive('msChkbtn', [
        'parser',
        '$timeout',
        function (parser, $timeout) {
            return {
                controller: function ($scope, $element) {
                    $scope.controllerId = Math.random().toString();
                    $scope.clicked = false;
                    $scope.addclass = '';
                    var checkChar = '<i class="icon-ok">',
                        unchekChar = '';
                        
                    // Extract the args array.
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.args = parser.extractTag($scope.expected).args;
                            if ($scope.args[0].length === 0){
                                $scope.args[0] = unchekChar;
                                $scope.addclass = 'smbut';
                            }
                            $scope.opclass = $scope.args.length > 2 ? $scope.args[2] : '';
                        }
                    });

                    // handle check answer event for parent scope.
                    $scope.$on ('checkAnswer', function (e){
                        if (e.defaultPrevented === false){
                            var data = {
                                expected: $scope.expected,
                                answer: '\\but{' + $scope.args[0] + '}{' + $scope.args[1] + '}',
                                label: $scope.label
                            };
                            if ($scope.clicked === true){
                                if ($scope.args[1] === "T") {
                                    data.result = 'correct';
                                    $scope.class = 'success';
                                } else {
                                    data.result = 'incorrect';
                                    $scope.class = 'danger';
                                    $scope.clicked = false;
                                    if ($scope.args[0] === checkChar){
                                        $scope.args[0] = unchekChar; 
                                    }
                                    $timeout(function () {
                                        $scope.class = '';
                                    }, 1000);
                                }
                            }else{
                                if ($scope.args[1] === "T") {
                                    data.result = 'incorrect';
                                    $scope.class = '';
                                } else {
                                    data.result = 'correct';
                                    $scope.class = '';
                                }
                            }
                            data.controllerId = $scope.controllerId;
                            $scope.$emit('answer', data);
                        }
                    });
                    
                    $scope.$on('checkFocus', function (e) { 
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check focus event for parent scope.
                            // set focus on button element, fire a focused event.
                            $element.find('.btn').focus();
                            $scope.$emit('focused', {
                                controllerId: $scope.controllerId
                            });
                        }
                    });

                    $scope.$on('checkHelp', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check help event for parent scope.
                            // button does not use help, fire a notHelped event.

                            if ($scope.args[1] === "T") {
                                $scope.class = 'success';
                                $scope.clicked = true;
                                if ($scope.args[0] === unchekChar){
                                    $scope.args[0] = checkChar ; 
                                }
                                $scope.$emit('notHelped', {
                                    controllerId: $scope.controllerId
                                });

                            } else {
                                $scope.class = '';
                                $scope.clicked = false;
                                $scope.$emit('notHelped', {
                                    controllerId: $scope.controllerId
                                });
                            }
                        }
                    });

                    $element.on('click', 'button', function (event) {
                        if ($scope.clicked === true){
                            if ($scope.args[0] === checkChar){
                                $scope.args[0] = unchekChar;
                            }
                            $scope.clicked = false;
                            $scope.$apply($scope.class = '');
                        }else{
                            if ($scope.args[0] === unchekChar){
                                $scope.args[0] = checkChar ;
                            }
                            $scope.clicked = true;
                            $scope.$apply($scope.class = 'info');
                        }
                    });

                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template:   '<style>'+
                                '.smbut{'+
                                    'font-size: 1.8em;'+
                                    'width: 29px;'+
                                    'height: 29px;'+
                                    
                                '}'+
                                '.marg{'+
                                    'margin-bottom: 4px;'+
                                '}'+
                                '.btn .icon-ok{'+
                                    'position: relative;'+
                                    'left: -7px;'+
                                '}'+
                            '</style>'+
                            '<button class="btn btn-{{class}} {{addclass}} {{opclass}}" type=button ng-bind-html-unsafe="args[0] | changeSigns"></button>'
            };
        }
    ]);