'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('choose', {
            directiveTemplate: '<ms-choose expected={{expected}} label={{label}}></ms-choose>'
        });
    }])
    .directive('msChoose', [
        'parser',
        '$compile',
        function (parser, $compile) {
            return {
                controller: function ($scope, $element) {
                    // Extract the args array.
                    $scope.$watch('expected', function () {
                        if ($scope.expected){
                            $scope.myargs = parser.extractTag($scope.expected).args;
                            var x = $scope.myargs[0];
                            x = x.replace(new RegExp('\\[', 'g'),'["');
                            x = x.replace(new RegExp('\\},', 'g'),'}","');
                            x = x.replace(new RegExp('\\\\(?!")', 'g'),'\\\\');
                            x = x.replace(new RegExp('\\]', 'g'),'"]');
                             
                            var stringArr = JSON.parse(x);
                            $scope.string = $scope.myargs[1] === "true" ? stringArr[0] : stringArr[1] ;
                            //console.log('$scope.myargs[0] array', $scope.myargs[0]);
                            //console.log('regexped string', x);
                            //console.log('json parsed array', stringArr);
                            //console.log('selected string', $scope.string);
                            //console.log('\n');
                        }
                    });
                },
                restrict: 'E',
                scope: {
                    expected: '@',
                    label: '@'
                },
                template: '<ms-expression expected={{string}}></ms-expression>'
            };
        }
    ]);