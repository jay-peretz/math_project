'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('graphnum', {
            argTemplates: [{
            	name: 'graphmin'
            },{
            	name: 'graphmax'
            },{
            	name: 'graphticksize'
            },{
            //     name: 'graphdata'
            // },{
                name: 'graphdatapoints'
            },{
                name: 'graphId'
            }],
            directiveTemplate: '<ms-graph-numberline expected={{expected}}></ms-graph-numberline>'
        });
    }])
  .directive('msGraphNumberline', [
	'parser',
	'$timeout',
	function (parser, $timeout) {
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
				$scope.graphmin = [];
				$scope.graphminIn = "";
				$scope.graphmax = [];
				$scope.graphmaxIn = "";
				$scope.graphticksize = [];
				$scope.graphticksizeIn = "";
				$scope.graphdatapoints = [];
				$scope.graphdatapointsIn = "";
				// $scope.graphdata = [];
				// $scope.graphdataIn = [];
				
				//var	graphdataIn = [],
				var	graphminIn = [],
					graphmaxIn = [],
					graphticksizeIn = [],
					graphdatapointsIn = [];
					//graphmaxyIn = [];
				
			 // Extract the value for $scope.graphlinesIn
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						parser.parse($scope.expected, { scope: $scope });
					}
				});
				

				$scope.$watch('graphmin', function () {
					if (typeof $scope.graphmin === "string") {
						graphminIn = $scope.graphmin;
					}
				});

				$scope.$watch('graphmax', function () {
					if (typeof $scope.graphmax === "string") {
						graphmaxIn = $scope.graphmax;
					}
				});

				$scope.$watch('graphticksize', function () {
					if (typeof $scope.graphticksize === "string") {
						graphticksizeIn = $scope.graphticksize;
					}
				});
				
				// $scope.$watch('graphdata', function () {
				// 	if (typeof $scope.graphdata === "string") {
				// 		graphdataIn = JSON.parse($scope.graphdata);
				// 	}
				// });

				$scope.$watch('graphdatapoints', function () {
					if (typeof $scope.graphdatapoints === "string") {
						graphdatapointsIn = JSON.parse($scope.graphdatapoints);
					}
				});


			
					
				$scope.$watch('graphId', function () {
					if (typeof $scope.graphId === "string") {
						$scope.graphIdIn = $scope.graphId;
					}
					
				//	console.log("$scope.graphIdIn is: ",$scope.graphIdIn);
						
				//var p = { "name": "P", x: -5, y: 0};
				//console.log(p);

				// var d1 = [-9, 0];
				// var d2 = [6, 0];
				// var d3 = [-3, 0];
				// var dataPoints = [[-9, 0], [6, 0], [-3, 0]];
				// coordinates for the data points
				var dataPoints = graphdatapointsIn;
				var data = [
					{ data: dataPoints, 
					//{ data: [d1, d2, d3], 
						points: { symbol: "circle"}, 
						color: "#CC0000"
						}				
				];

				$timeout(function () {	
					var placeholder = $('#'+ $scope.graphIdIn);
					var plot = $.plot('#'+ $scope.graphIdIn, data, {
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
							//tickSize: graphticksizeIn,
							tickSize: 1,								
							min: graphminIn,
							max: graphmaxIn,
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
							// markings: function (axes) {
							//     var markings = [];
							//     for (var x = axes.xaxis.min + 1; x < axes.xaxis.max; x++)
							//         markings.push({ xaxis: { from: x, to: x }, color: "#A0A0A0", lineWidth: 1 });
							//     return markings;
							// },

							markings: function (axes) {
							    var markings = [];
							    var increment = 2;
							    for (var x = axes.xaxis.min * increment + 1; x < axes.xaxis.max * increment; x++)
							        markings.push({ xaxis: { from: x/increment, to: x/increment }, color: "#A0A0A0", lineWidth: 1 });
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
					
					

					var o = plot.pointOffset({ x: -9.2, y: 1.5});

					// Append it to the placeholder that Flot already uses for positioning			
					placeholder.append("<div style='position:absolute;left:" + o.left + "px;top:" + o.top + "px;color:#666;font-size:larger'>A</div>");
			
					o = plot.pointOffset({ x: -3.2, y: 1.5});
					placeholder.append("<div style='position:absolute;left:" + o.left + "px;top:" + o.top + "px;color:#666;font-size:larger'>B</div>");
					
					o = plot.pointOffset({ x: 5.8, y: 1.5});
					placeholder.append("<div style='position:absolute;left:" + o.left + "px;top:" + o.top + "px;color:#666;font-size:larger'>C</div>");		
					
				}, 0);
				});
			},
			templateUrl: 'partials/directives/ms-graph-numberline.html'
		};
	}]);