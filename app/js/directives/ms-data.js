'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('data', {
            directiveTemplate: '<ms-data expected={{expected}} label=lable></ms-data>'
        });
    }])
    .directive('msData', [
        'parser',
        '$compile',
        'problemData',
        function (parser, $compile, problemData) {
            return {
                controller: function ($scope, $element) {
                    // Extract the args array.
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.myargs = parser.extractTag($scope.expected).args;
                        }
                    });

                    $scope.$on('livedata', function (e, data) {
                        switch($scope.myargs[1]){
                            case 'defalt':
                                
                            break;
                            case 'flip': console.log('fliping');
                                console.log('val ', data.val, ' arg2 ', $scope.myargs[2]);
                                if (data.val === $scope.myargs[2]){
                                    problemData.index($scope.myargs[3]);
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
                template: '<div><ms-expression expected={{myargs[0]}}></ms-expression></div>'
            };
        }
    ]);