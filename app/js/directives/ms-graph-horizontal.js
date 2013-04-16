'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('horgraph', {
            argTemplates: [{
                name: 'horgraphtitle'
            },{
                name: 'horgraphdata1'
            },{
                name: 'horgraphlabel1'
            },{
                name: 'horgraphdata2'
            },{
                name: 'horgraphlabel2'
            },{
                name: 'horgraphvertical'
            },{
                name: 'horgraphbottom'
            }],
            directiveTemplate: '<ms-horgraph expected={{expected}}></ms-horgraph>'
        });
    }])
  .directive('msHorgraph', [
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
				$scope.horgraphtitle = [];
				$scope.graphTitleIn = "";
				$scope.horgraphdata1 = [];
				$scope.horgraphlabel1 = [];
				$scope.horgraphdata2 = [];
				$scope.horgraphlabel2 = [];
				$scope.graphvertical = [];
				$scope.horgraphbottom = [];
				
				var	horgraphdata1In = [],
					horgraphdata2In = [],
					horgraphlabel1In = "",
					horgraphlabel2In = "";
				
			 // Extract the value for $scope.graphlinesIn
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						parser.parse($scope.expected, { scope: $scope });
					}
				});
				
				$scope.$watch('horgraphtitle', function () {
					if (typeof $scope.horgraphtitle === "string") {
						$scope.graphTitleIn = $scope.horgraphtitle;
					}
				});
				
				$scope.$watch('horgraphdata1', function () {
					if (typeof $scope.horgraphdata1 === "string") {
						horgraphdata1In = JSON.parse($scope.horgraphdata1);
					}
				});
				
				$scope.$watch('horgraphlabel1', function () {
					if (typeof $scope.horgraphlabel1 === "string") {
						horgraphlabel1In = $scope.horgraphlabel1;
					}
				});
				
				$scope.$watch('horgraphdata2', function () {
					if (typeof $scope.horgraphdata2 === "string") {
						horgraphdata2In = JSON.parse($scope.horgraphdata2);
					}
				});
				
				$scope.$watch('horgraphlabel2', function () {
					if (typeof $scope.horgraphlabel2 === "string") {
						horgraphlabel2In = $scope.horgraphlabel2;
					}
				});
				
				// vertical label on the y-axis of the graph
				$scope.$watch('horgraphvertical', function () {
					if (typeof $scope.horgraphvertical === "string") {
						$scope.graphverticalIn = $scope.horgraphvertical;
					}
				});
				
				// horizontal label on the x-axis of the graph, at the bottom
				$scope.$watch('horgraphbottom', function () {
					if (typeof $scope.horgraphbottom === "string") {
						$scope.graphBottomText = $scope.horgraphbottom;
					}
					
					var data1 = [],
						data2 = [];
						
					for (var ii = 0, len = horgraphdata1In.length; ii < len; ii += 1) {
						data1.push(horgraphdata1In[ii]);
					}
					
					for (var ii = 0, len = horgraphdata2In.length; ii < len; ii += 1) {
						data2.push(horgraphdata2In[ii]);
					}
					
					
					function plotByInputSet() {
						
						$.plot($("#placeholder"), [ {label: horgraphlabel1In, data: data1}, {label: horgraphlabel2In, data: data2 }], {
							legend: {position: "se"},
							series: { 
								lines: {
									lineWidth: 10,
									//fill: true,
									//fillColor: { colors: [ { opacity: 0.5}, { opacity: 0.1 } ] }
								},
								xaxis: {									
								},
								 yaxis: { 
									mode: "categories"
								 },
							 },
						});
					}
				
					plotByInputSet();

							
							
				});
			},
			templateUrl: 'partials/directives/ms-graph.html'
		};
	}]);