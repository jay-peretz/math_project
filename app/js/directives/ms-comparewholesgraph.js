'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('comparewholesgraph', {
            argTemplates: [{
                name: 'firstnumber'
            },{
                name: 'secondnumber'
            },{
                name: 'graphminimum'
            },{
                name: 'graphmaximum'
            }],
            directiveTemplate: '<ms-comparewholesgraph expected={{expected}}></ms-comparewholesgraph>'
        });
    }])
  .directive('msComparewholesgraph', [
	'parser',
	function (parser) {
		return {
			restrict: 'E',
			scope: {
				expected: '@',
				label: '@'
			},
			controller: function ($scope, $element) {
				$scope.answer = '';
				$scope.numberLineArray = [];
                $scope.controllerId = Math.random().toString();
				var numberFirst = [],
					numberSecond = [],
					graphminimum = [],
					graphmaximum = [],
					minimumGraph = [],
					maximumGraph = [],
					numberLineArray = [],
					numberFirst = 0,
					numberSecond = 1;
					
				numberLineArray[0] = [];
				numberLineArray[1] = [];
					

			 // Extract the value/s for $scope.firstnumber & $scope.secondnumber
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						parser.parse($scope.expected, { scope: $scope });
					}
				});
				
				$scope.$watch('firstnumber', function () {
					if (typeof $scope.firstnumber === "string") {
						numberFirst = $scope.firstnumber;
					}
				});
				
				$scope.$watch('secondnumber', function () {
					if (typeof $scope.secondnumber === "string") {
						numberSecond = $scope.secondnumber;
					}
				});
								
				$scope.$watch('graphminimum', function () {
					if (typeof $scope.graphminimum === "string") {
						minimumGraph = $scope.graphminimum;
					}
				});
				
				$scope.$watch('graphmaximum', function () {
					if (typeof $scope.graphmaximum === "string") {
						maximumGraph = $scope.graphmaximum;
						
						
						// below number line display 
						for (var ii = minimumGraph, jj = 0; ii <= maximumGraph; ii++) {
								if ((ii != numberFirst)&&(ii != numberSecond)) {
									numberLineArray[1][jj] = "\xA0"+ii+"\xA0";
									numberLineArray[0][jj] = "\xA0"+"\xA0"+"|";
								} else {
									if (ii == numberFirst) {
										numberLineArray[1][jj] = "\xA0"+"X"+"\xA0";
										numberLineArray[0][jj] = "\xA0"+"\xA0"+"|";
									} else if (ii == numberSecond) {
										numberLineArray[1][jj] = "\xA0"+"Y"+"\xA0";
										numberLineArray[0][jj] = "\xA0"+"\xA0"+"|";
									}
								}
								jj++;
						}
							
						$scope.numberLineArray = numberLineArray.slice();	
					}
				});
			},
			templateUrl: 'partials/directives/ms-comparewholesgraph.html'
		};
	}]);