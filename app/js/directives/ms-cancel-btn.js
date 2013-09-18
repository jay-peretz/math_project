'use strict';
/*global angular $*/

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('canbtn', {
            directiveTemplate: '<ms-cancel-btn expected={{expected}} label={{label}}></ms-ms-cancel-btn>'
        });
    }])
    .directive('msCancelBtn', [
        'parser',
        '$timeout',
        'problemData',
        'numberUtils',
        function (parser, $timeout, problemData, numberUtils) {
            return {
                controller: function ($scope, $element) {
                    $scope.controllerId = Math.random().toString();
                    //$scope.clicked = false;
                    $scope.addclass = '';

                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.args = parser.extractTag($scope.expected).args;

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

                            data.result = 'correct';

                            data.controllerId = $scope.controllerId;
                            $scope.$emit('answer', data);
                        }
                    });
                    
                    $scope.$on('checkFocus', function (e) { 
                        // If this event has not been marked as ignored.
                       
                            
                            if (e.defaultPrevented === false) {
                                // handle check focus event for parent scope.
                                // set focus on button element, fire a focused event.
                                 if (problemData.getData('stage') === 'input') {
                                    $scope.$emit('notFocused', {
                                        controllerId: $scope.controllerId
                                    });
                                } else {
                                    //$element.find('button .btn').focus(); 
                                    //console.log('not input');
                                    $timeout(function () {
                                        $($element).find('.btn').focus();
                                    }, 0);
                                    
                                    $scope.$emit('focused', {
                                        controllerId: $scope.controllerId
                                    });
                                }
                            }
                    });

                    var helpCount = 0,
                        checkHelped = function () {
                            if (helpCount === 1){
                                
                                helpCount = 0;
                            } else {
                                
                                helpCount += 1;
                            }
                        };
                        
                    $scope.$on('checkHelp', function (e) { //console.log('helped');
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check help event for parent scope.
                            // button does not use help, fire a notHelped event.

                            if (problemData.getData('stage') === 'btn') { // button stage true
                            
                                $scope.$emit('clearClicks');

                                var helped = function () {
                                    $scope.class = 'info';

                                    if (helpCount === 1){
                                        helpCount = 0;
                                        $scope.$emit('helped', {
                                            controllerId: $scope.controllerId
                                        });
                                    } else {
                                        helpCount += 1;
                                        $scope.$emit('notHelped', {
                                            controllerId: $scope.controllerId
                                        });
                                    }
                                    
                                    $timeout(function () {
                                        $scope.class = '';
                                        jQuery($element).find('button').trigger('click');
                                        //$scope.$digest();
                                    }, 0);
                                };
                                
                                //console.log('input', $scope.args[0], '   x= ', numberUtils.getFactors($scope.args[0])[0]);
                                
                                if (
                                    $scope.args[1][0] === 'n'
                                    && problemData.getData('nLock') === false
                                    && numberUtils.getFactors($scope.args[0]).length > 0
                                    && numberUtils.getFactors($scope.args[0]).indexOf(problemData.getData('comFac')[0]) !== -1
                                ){
                                    problemData.addData(true, 'nLock');
                                    helped(); //console.log('num', $scope.args[0]);
                                } else if (
                                    $scope.args[1][0] === 'd'
                                    && problemData.getData('dLock') === false
                                    && numberUtils.getFactors($scope.args[0]).length > 0
                                    && numberUtils.getFactors($scope.args[0]).indexOf(problemData.getData('comFac')[0]) !== -1
                                ){
                                    problemData.addData(true, 'dLock');
                                    helped(); //console.log('den', $scope.args[0]);
                                } else {
                                    $scope.$emit('notHelped', {
                                        controllerId: $scope.controllerId
                                    });
                                }

console.log('i am ', $scope.args[0]);
console.log('stage', problemData.getData('stage'));
console.log('nLock', problemData.getData('nLock'));
console.log('factors', numberUtils.getFactors($scope.args[0]));
console.log('comFac', problemData.getData('comFac'), '\n');

                            } else {  // not btn stage - notHelped
                                $scope.$emit('notHelped', {
                                    controllerId: $scope.controllerId
                                });
                            }
                        }
                    });

                    $element.on('click', 'button', function (event) { //console.log('clicked');
                        
                        if (problemData.getData('stage') === 'btn'){
                            $scope.$apply($scope.class = 'info');
                            var data = {
                                    label: $scope.args[1], 
                                    arr: problemData.getData($scope.args[1]).arr
                                }; 
                            $scope.$emit('tx', data);
                        } else {
                            $scope.$apply($scope.class = 'danger');
                            $timeout(function () {
                                $scope.$apply($scope.class = '');
                                $scope.$emit('triggerCheckFocus');
                            }, 1000);
                        }
                    });

                    $scope.$on('clear', function (e, newVal) { //console.log('clear ', newVal);
                       if (newVal !== $scope.args[1]){
                           $scope.$apply($scope.class = '');
                       }
                    });

                    $scope.$on('noComm', function (e, num, den) { //console.log('noComm ', num, den);
                       if (num === $scope.args[1] || den === $scope.args[1]){
                            $scope.$apply($scope.class = 'danger');
                            $timeout(function () {
                                $scope.$apply($scope.class = '');
                            }, 900);
                       }
                    });

                    $scope.$on('correct', function (e, num, den) { //console.log('correct ', num, den);
                       if (num === $scope.args[1] || den === $scope.args[1]){
                           $scope.$apply($scope.class = 'success');
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
                                    'border:2px solid black;'+
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