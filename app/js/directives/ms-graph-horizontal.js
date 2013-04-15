'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('horgraph', {
            argTemplates: [{
                name: 'horgraphtitle'
            },{
                name: 'horgraphdata'
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
				$scope.horgraphdata = [];
				$scope.graphvertical = [];
				$scope.horgraphbottom = [];
				
				var	horgraphdataIn = [];
				
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
				
				$scope.$watch('horgraphdata', function () {
					if (typeof $scope.horgraphdata === "string") {
						horgraphdataIn = JSON.parse($scope.horgraphdata);
					}
				});
					
				$scope.$watch('horgraphvertical', function () {
					if (typeof $scope.horgraphvertical === "string") {
						$scope.graphverticalIn = $scope.horgraphvertical;
					}
				});
				
				$scope.$watch('horgraphbottom', function () {
					if (typeof $scope.horgraphbottom === "string") {
						$scope.graphBottomText = $scope.horgraphbottom;
					}
									
					function plotAccordingToChoices() {
						var data = [];
						
						for (var ii = 0, len = horgraphdataIn.length; ii < len; ii += 1) {
							data.push(horgraphdataIn[ii]);
						}
						
						if (data.length > 0)
							$.plot($("#placeholder"), data, {
								lines: {
									lineWidth: 10,
									//fill: true,
      								//fillColor: { colors: [ { opacity: 0.5}, { opacity: 0.1 } ] }
								},
								xaxis: {
									xaxis: { tickDecimals: 5 },
									max: 50
								},
								 yaxis: { 
								 	mode: "categories"
								 }
							});
					}
				
					plotAccordingToChoices();

							
							
				});
			},
			templateUrl: 'partials/directives/ms-graph.html'
		};
	}]);