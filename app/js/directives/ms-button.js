'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('but', {
            argTemplates: [{
                name: 'buttonLabel'
            }, {
                name: 'correct'
            }],
            directiveTemplate: '<ms-button expected={{expected}} label=button></ms-button>'
        });
    }])
    .directive('msButton', [
        'parser',
        '$compile',
        function (parser, $compile) {
            return {
                controller: function ($scope, $element) {
                    $scope.controllerId = Math.random().toString();
                    
                    // Extract the value/s.
                    $scope.$watch('expected', function () {
                        if($scope.expected){
                            parser.parse($scope.expected, { scope: $scope });
                        }
                    });

// check answer might need to be an option.
                    // handle check answer event for parent scope "always correct".
                    $scope.$on ('checkAnswer', function () {
                        var data = {};
                        data.result = 'correct';
                        $scope.$emit('answer', data);
                    });

// focus needs work to work with button.
                    $scope.$on('checkFocus', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check focus event for parent scope.
                            // button cannot have focus/tab, fire a notFocused event.
                            $scope.$emit('notFocused', {
                                controllerId: $scope.controllerId
                            });
                        }
                    });

                    $scope.$on('checkHelp', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check help event for parent scope.
                            // button does not use help, fire a notHelped event.
                            $scope.$emit('notHelped', {
                                controllerId: $scope.controllerId
                            });
                        }
                    });

                    $element.on('click', 'button', function (event) {
                        var data = {
                        expected: $scope.expected,
                        answer: '\\but{' + $scope.buttonLabel + '}{T}',
                        label: $scope.label
                        };

                        if ($scope.correct === "T") {
                            data.result = 'correct';
                            $scope.class = 'success';
                        } else {
                            data.result = 'incorrect';
                            $scope.class = 'danger';
                        }
                        $scope.$emit('answer', data);
                        $scope.$apply();

                    });
// tab might need to be set on "button" not input
                    $element.on('keydown', 'input', function (event) {
                        if (event.keyCode === 9) {
                            event.preventDefault();
                            $scope.$emit('tabKey');
                        }
                    });

                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<button class="btn btn-{{class}}" type=button>{{buttonLabel}}</button>'
            };
        }
    ]);