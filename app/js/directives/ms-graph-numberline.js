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
						
				var d1 = [[-9, 0]];
				var d2 = [[6, 0]];
				var d3 = [[-3, 0]];
				var data = [
					{ data: d1, 
						points: { symbol: "circle"}, 
						color: "#CC0000"
						},
					{ data: d2, 
						points: { symbol: "circle" }, 
						color: "#CC0000"
						},
					{ data: d3, 
						points: { symbol: "circle" },
						color: "#CC0000"
						}				
				];	

					$.plot("#placeholder", data, {
					//$.plot("#placeholder", data, [graphdataIn], {
						series: {
							lines: { show: false },
							points: { 
								show: true,
								radius: 4
								}
						},
						xaxis: {
							color: null, // color of the axis
							tickColor: null,
							font: null,
							//tickLength: 10,	
							//alignTicksWithAxis: 1,
							ticks: function tickGenerator(axis) {
							    var res = [], i = axis.min;
							    do {
							        var v = i * axis.tickSize;
							        res.push(v);							        
							        if (i == 0)
							        	res.push(0);
							        ++i;
							    } while (v < axis.max);
							    return res;
							},					
							//ticks: 10,
							tickSize: 2,							
							min: -10,
							max: 10,
							tickDecimals: 0
						},
						 yaxis: {
						 	color: "#606060",
						 	ticks: 1, 
						 	min: -0.5, 
						 	max: 0.5 
						 	},
						 
						 grid: {
							show:
							 true,
							margin: { left: 20 },
							//color: "#000", // color of the grid lines specified in xaxis
							//backgroundColor: "#fff", 
							//markings: [ { xaxis: { from: 0, to: 0 }, color: "#bb0000" } ],
							markings: function (axes) {
							    var markings = [];
							    for (var x = axes.xaxis.min + 1; x < axes.xaxis.max; x++)
							        markings.push({ xaxis: { from: x, to: x }, color: "#A0A0A0", lineWidth: 1 });
							    return markings;
							},
							backgroundColor: { colors: [ "#fff", "#F0F0F0", "#fff" ] },
							hoverable: true,
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