'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('chart', {
            argTemplates: [{
                name: 'charttitle'
            },{
                name: 'chartrows'
            },{
                name: 'chartcolumns'
            },{
                name: 'chartarray'
            }],
            directiveTemplate: '<ms-chart expected={{expected}}></ms-chart>'
        });
    }])
  .directive('msChart', [
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
                $scope.controllerId = Math.random().toString();
				$scope.answercorrect = "";
				$scope.charttitle = [];
				$scope.chartTitleIn = "";
				$scope.chartrows = [];
				$scope.chartcolumns = [];
				$scope.chartColumnsIn = 1;
				$scope.chartarray = [];
				$scope.chartArrayOut = [];
				
				var	chartRowsIn = "",
					chartArrayTemp = "",
					chartArrayIn = [];
					
				
			 // Extract the value for $scope.chartArrayIn
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						parser.parse($scope.expected, { scope: $scope });
					}
				});
				
				$scope.$watch('charttitle', function () {
					if (typeof $scope.charttitle === "string") {
						$scope.chartTitleIn = $scope.charttitle;
					}
				});
				
				$scope.$watch('chartrows', function () {
					if (typeof $scope.chartrows === "string") {
						chartRowsIn = $scope.chartrows;
						console.log("chartRowsIn: "+chartRowsIn);
					}
				});
								
				$scope.$watch('chartcolumns', function () {
					if (typeof $scope.chartcolumns === "string") {
						$scope.chartColumnsIn = $scope.chartcolumns;
						console.log("$scope.chartColumnsIn: "+$scope.chartColumnsIn);
					}
				});
				
				$scope.$watch('chartarray', function () {
					if (typeof $scope.chartarray === "string") {
						chartArrayIn = JSON.parse($scope.chartarray);
					}
					
					for (var ii = 0; ii < chartRowsIn; ii += 1) {
						$scope.chartArrayOut[ii] = [];
						for (var kk = 0; kk < $scope.chartColumnsIn; kk += 1) {													
								$scope.chartArrayOut[ii][kk] = "\xA0"+chartArrayIn[(ii * $scope.chartColumnsIn) + kk]+"\xA0";
						}
					}
												
				});
			},
			templateUrl: 'partials/directives/ms-chart.html'
		};
	}]);