'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('graphnum', {
            argTemplates: [{
                name: 'graphtitle'
            },{
                name: 'graphdata'
            },{
                name: 'graphmaxy'
            },{
                name: 'graphvertical'
            }],
            directiveTemplate: '<ms-graph-numberline expected={{expected}}></ms-graph-numberline>'
        });
    }])
  .directive('msGraphNumberline', [
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
				$scope.graphtitle = [];
				$scope.graphTitleIn = "";
				$scope.graphdata = [];
				$scope.graphvertical = [];
				$scope.graphmaxy = [];
				$scope.graphverticalIn = "";
				
				var	graphdataIn = [],
					graphverticalIn = [],
					graphmaxyIn = [];
				
			 // Extract the value for $scope.graphlinesIn
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						parser.parse($scope.expected, { scope: $scope });
					}
				});
				
				$scope.$watch('graphtitle', function () {
					if (typeof $scope.graphtitle === "string") {
						$scope.graphTitleIn = $scope.graphtitle;
					}
				});
				
				$scope.$watch('graphdata', function () {
					if (typeof $scope.graphdata === "string") {
						graphdataIn = JSON.parse($scope.graphdata);
					}
				});
				
				$scope.$watch('graphmaxy', function () {
					if (typeof $scope.graphmaxy === "string") {
						graphmaxyIn = $scope.graphmaxy;
					}
				});
								
				$scope.$watch('graphvertical', function () {
					if (typeof $scope.graphvertical === "string") {
						$scope.graphverticalIn = $scope.graphvertical;
					}
					

					$.plot("#placeholder", [graphdataIn], {
						series: {
							lines: { show: true },
							points: { show: true }
							// bars: {
								// show: true,
								// barWidth: 0.4,
								// align: "center"
							// }
						},
						xaxis: {
							//mode: "categories",
							ticks: 10,
							min: -5,
							max: 5,
							tickDecimals: 0
						},
						 yaxis: {ticks: 0, min: -1, max: 1 },
						 
						 grid: {
							backgroundColor: { colors: [ "#fff", "#eee" ] },
							borderWidth: {
							top: 0,
							right: 0,
							bottom: 0,
							left: 0
							}
						},
					});
												
				});
			},
			templateUrl: 'partials/directives/ms-graph-numberline.html'
		};
	}]);