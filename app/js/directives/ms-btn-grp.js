'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('btngrp', {
            directiveTemplate: '<ms-btn-grp expected={{expected}} label={{label}}></ms-btn-grp>'
        });
    }])
  .directive('msBtnGrp', [
    'parser',
    function (parser) {
        return {
            controller: [
                'directiveUtils',
                '$scope',
                '$element',
                function (directiveUtils, $scope, $element) {
                    $scope.controllerId = Math.random().toString();
                    $scope.correctAnswer = '';
                    
                    $scope.$watch('expected', function () {
                        if ($scope.expected) {
                            
                            $scope.childElements = parser.extractTag($scope.expected).args;
                            $scope.children = $scope.childElements.map(function (val, ii) {
                                return ii.toString();
                            });
    
                            // Find the correct answer amongst the contained buttons.
                            parser.find($scope.expected, 'but').forEach(function (button) {
                                if (button.args[1] === 'T') {
                                    $scope.correctAnswer = button.args[0];
                                }
                            });
                        }
                    });
    
                    $scope.$on('answer', function (e, data) { //console.log("button answer obj", data);
						var buttonMarkedSuccess = $('button').hasClass('btn-success');
                        // If this event was not fired by us.
                        if (data.controllerId !== $scope.controllerId) {
                            // Stop this event from going up the scope chain.
                            e.stopPropagation();
    							
                            if (data.clicked === true || buttonMarkedSuccess){
                                data.expected = '\\but{' + $scope.correctAnswer + '}{T}'; 
                                data.controllerId = $scope.controllerId;
                                $scope.$emit('answer', data);
                            }
                        }
                    });
                    
                    directiveUtils.routeFocus($scope);
                    directiveUtils.routeHelp($scope);
                }
            ],
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            template: '<div><table><tr><td ng-repeat="child in childElements"><ms-expression expected={{child}} label={{$index}}></ms-expression></td></tr></table></div>'    
        };
    }]);
