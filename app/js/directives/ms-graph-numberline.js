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
                name: 'graphincrement'
            },{
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
				$scope.graphincrement = [];
				$scope.graphincrementIn = "";
				$scope.graphdatapoints = [];
				$scope.graphdatapointsIn = "";
				

				var	graphminIn = [],
					graphmaxIn = [],
					graphticksizeIn = [],
					graphincrementIn = [],
					graphdatapointsIn = [];
				
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

				$scope.$watch('graphincrement', function () {
					if (typeof $scope.graphincrement === "string") {
						graphincrementIn = $scope.graphincrement;
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
					var plot = $.plot(placeholder, data, {
					//var plot = $.plot('#'+ $scope.graphIdIn, data, {
					//$.plot("#placeholder", data, [graphdataIn], {
						series: {
							lines: { show: false },
							points: { 
								show: true,
								radius: 4
								}
						},
						xaxis: {
							show: true,
							position: "bottom",
							color: null, // color of the axis
							tickColor: null,
							font: {
							    size: 14,
							    lineHeight: 18,
							    weight: "bold",
							    family: "sans-serif",
							    color: "#545454"
							},
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
							tickSize: graphticksizeIn,
							//tickSize: 1,								
							min: graphminIn,
							max: graphmaxIn,
							tickDecimals: 0,
							autoscaleMargin: null,
							labelWidth: 20,
    						labelHeight: 10,
    						reserveSpace: true


						},
						 yaxis: {
						 	show: true,
						 	position: "left",
						 	color: "#606060",
						 	ticks: 1, 
						 	tickSize: 1,
						 	min: -0.5, 
						 	max: 0.5,
						 	tickDecimals: 0,
						 	autoscaleMargin: null,
						 	labelWidth: 20,
    						labelHeight: 10,
    						reserveSpace: true
						 	},
						 
						 grid: {
							show: true,
							margin: { left: 30 },
							labelMargin: 10,
							markings: function (axes) {
							    var markings = [];
							    var increment = graphincrementIn;
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
					
					// point offsets for X, Y, Z coordinates
					var o = plot.pointOffset({ x: graphdatapointsIn[0][0], y: graphdatapointsIn[0][1] + 1.5});
					// var to center the letter over the point
					var offset = o.left - 5; 
					// Append it to the placeholder that Flot already uses for positioning							
					placeholder.append("<div id='pointX' style='position:absolute;left:" + offset +  "px;top:" + o.top + "px;color:#666;font-size:larger'>X</div>");

					//placeholder.append("<div style='position:absolute;left: " + o.left + "px;top:" + o.top + "px;color:#666;font-size:larger'>X</div>");
			
					o = plot.pointOffset({ x: graphdatapointsIn[1][0], y: graphdatapointsIn[1][1] + 1.5});
					offset = o.left - 5;
					placeholder.append("<div style='position:absolute;left:" + offset + "px;top:" + o.top + "px;color:#666;font-size:larger'>Y</div>");
					
					o = plot.pointOffset({ x: graphdatapointsIn[2][0], y: graphdatapointsIn[2][1] + 1.5});
					offset = o.left - 5;
					placeholder.append("<div style='position:absolute;left:" + offset + "px;top:" + o.top + "px;color:#666;font-size:larger'>Z</div>");
					
					$("div #problem .tab-pane").each(function(ii,tabPanel) {
						if (ii !== 0) {
							
							var jj = ii + 1;
							$("#step-" + jj + " .flot-x-axis div.tickLabel").each(function(i,ele) {
								ele = $(ele);	
								ele.css("top", "50px"); 
							});
							
							$("#step-" + jj + " .flot-x-axis div").css("marginLeft", "-10px");
							
							$("#step-" + jj + " .flot-y-axis div.tickLabel").each(function(i,ele) {
								ele = $(ele);	
								ele.css("top", "16px"); 
								ele.css("left", "40px");
							});
						}
					});
					
				}, 0);
				});
			},
			templateUrl: 'partials/directives/ms-graph-numberline.html'
		};
	}]);