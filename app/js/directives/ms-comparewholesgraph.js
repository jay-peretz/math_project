'use strict';
/*global angular */
	
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
                $scope.controllerId = Math.random().toString();
				$scope.answer = '';
				$scope.numberLineArray = [];
                $scope.controllerId = Math.random().toString();
				var numberFirst = [],
					numberSecond = [],
					//graphminimum = [], -unused
					//graphmaximum = [], -unused
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
                
                // handle check answer event for parent scope "always correct".
                    $scope.$on('checkAnswer', function () {
                        $scope.$emit('answer', {
                            result: 'correct',
                            expected: $scope.expected,
                            answer: $scope.expected,
                            label: $scope.label
                        });
                    });
    
                    $scope.$on('checkFocus', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check focus event for parent scope.
                            // comparewholesgraph cannot have focus/tab, fire a notFocused event.
                            $scope.$emit('notFocused', {
                                controllerId: $scope.controllerId
                            });
                        }
                    });
    
                    $scope.$on('checkHelp', function (e) {
                        // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check help event for parent scope.
                            // comparewholesgraph does not use help, fire a notHelped event.
                            $scope.$emit('notHelped', {
                                controllerId: $scope.controllerId
                            }); 
                        }
                    });
                    
			},
			templateUrl: 'partials/directives/ms-comparewholesgraph.html'
		};
	}]);