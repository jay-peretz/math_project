'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('equiv', {
            directiveTemplate: '<ms-equivalent expected={{expected}} label={{label}}></ms-equivalent>'
        });
    }])
  .directive('msEquivalent', [
        function () {
            return {
                controller: [
                    'directiveUtils',
                    'parser',
                    '$scope',
                    function (directiveUtils, parser, $scope) {
                        
                        $scope.$watch('expected', function () {
                            if ($scope.expected) {
                                
                                $scope.args = parser.extractTag($scope.expected).args;
                            }
                        });

                        $scope.tag = 'equiv';
                        $scope.children = ['leftNum', 'leftDen','sign', 'rightNum', 'rightDen'];
                        $scope.routePath = [0,3,2,1,4];

                        directiveUtils.aggregateChildAnswers($scope);
                        directiveUtils.routeFocus($scope);
                        directiveUtils.routeHelp($scope);
                        directiveUtils.size($scope);
                    }
                ],
                scope: {
                    expected: '@',
                    label: '@'
                },
                restrict: 'E',
                template:   '<table>'+
                                '<tr>'+
                                    '<td><ms-expression expected={{args[0]}} label=leftNum></ms-event-label></td>'+
                                    '<td></td>'+
                                    '<td><ms-expression expected={{args[3]}} label=leftDen></ms-event-label></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td><hr></td>'+
                                    '<td><ms-expression expected={{args[2]}} label=sign></ms-event-label></td>'+
                                    '<td><hr></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td><ms-expression expected={{args[1]}} label=rightNum></ms-event-label></td>'+
                                    '<td></td>'+
                                    '<td><ms-expression expected={{args[4]}} label=rightDen></ms-event-label></td>'+
                                '</tr>'+
                            '</table>'
        };
    }]);
    
    
    