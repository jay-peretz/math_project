'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('btn', {
            directiveTemplate: '<ms-btn expected={{expected}} label={{label}}></ms-btn>'
        });
    }])
    .directive('msBtn', [
        'parser',
        function (parser) {
            return {
                controller: function ($scope, $element) {
                    $scope.controllerId = Math.random().toString();
                    $scope.clicked = false;

                    // Extract the args array.
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.args = parser.extractTag($scope.expected).args;
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
                                }
                                data.clicked = true;
                            }else{
                                data.result = 'correct';
                                $scope.class = '';
                            }
                            data.controllerId = $scope.controllerId;
                            $scope.clicked = false;
                            $scope.$emit('answer', data);
                        }
                    });
                    
                    $scope.$on('checkFocus', function (e) { 
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check focus event for parent scope.
                            // set focus on button element, fire a focused event.
                            $element.find('.btn').focus();  console.log('ran check focus', $scope.args[0]);
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
                                $scope.clicked = false;
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
                        $scope.clicked = true;
                        $scope.$apply($scope.$emit('triggerCheckAnswer'));
                    });
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template:   '<style>'+
                                '.marg{'+
                                    'margin-bottom: 4px;'+
                                '}'+
                            '</style>'+
                            '<button class="btn btn-{{class}} {{opclass}}" type=button>{{args[0] | changeSigns}}</button>'
            };
        }
    ]);