'use strict';
/*global angular, jQuery */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('canele', {
            directiveTemplate: '<ms-cancel-element expected={{expected}} label={{label}}></ms-cancel-element>'
        });
    }])
  .directive('msCancelElement', [
        function () {
            return {
                controller: [
                    'directiveUtils', 'problemData', 'parser', '$scope', '$element', '$compile',
                    function (directiveUtils, problemData, parser, $scope, $element, $compile) {

                        $scope.tag = 'canele';

                        var build = function (obj) {
                                if (obj.type === 'btn') {
                                    $scope.childElements = ['\\canbtn{' + obj.arr[0] + '}{' + $scope.args[0] + '}'];
                                } else if (obj.type === 'str') {
                                    $scope.childElements = ['\\html{' + obj.arr[0] + '}'];
                                } else {
                                    
                                    $scope.childElements = ['\\input{[' + directiveUtils.preProcess(problemData.getData($scope.args[0]).answer) + ']}'];
                                    console.log('this is it... ', $scope.childElements);
                                } 
                                if (obj.arr.length > 1) {
                                    for(var i = 1; i < obj.arr.length; ++i){
                                        $scope.childElements.push('\\str{' + obj.arr[i] + '}');
                                    }
                                }
                                if ($scope.args[0][0] === 'd') {
                                    $scope.childElements = $scope.childElements.reverse();
                                }
                                $scope.children = $scope.childElements.map(function (val, ii) {
                                    return ii.toString();
                                });
                            };

                        $scope.$watch('expected', function () {
                            if ($scope.expected) {
                                $scope.args = parser.extractTag($scope.expected).args; //console.log('this', $scope.args);
                                build(problemData.getData($scope.args[0]));  
                                $scope.anim = true;
                            }
                        });

                        $scope.$on('rx', function (e, data) { 
                            
                        });

                        directiveUtils.aggregateChildAnswers($scope);
                        directiveUtils.routeFocus($scope);
                        directiveUtils.routeHelp($scope);
                        //directiveUtils.size($scope);
                    }
                ],
                scope: {
                    fadeShown: '@',
                    expected: '@',
                    label: '@'
                },
                restrict: 'E',
            template: '<div ng-show="anim" ng-animate="{"animate-enter"}"><table><tr ng-repeat="child in childElements"><td><ms-expression expected={{child}} label={{$index}}></td></tr></table></div>'
        };
    }]);