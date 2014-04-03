'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('numberline', {
            argTemplates: [{
                name: 'min'
            },{
                name: 'max'
            },{
                name: 'step'
            },{
                name: 'increment'
            }]
           // directiveTemplate: '<ms-numberline expected={{expected}}></ms-numberline>'
        });
    }])
    .controller('numberController',function($scope){
		$scope.num = {
		valA:'',
		valB:'',
		valC:'',
		};
		
		$scope.numArray = [];
		$scope.tickArray = [];
		$scope.handles=[]; 
		
		/*------- Change values here to reflect diffrent values in numberline ------ */
		$scope.min=-3;
		$scope.max=3;
		$scope.step=.5;
		$scope.increment=1;
	})
    .directive('msNumberline', [
        'parser',
      
        function (parser,$timeout) {
            return {
                restrict: 'A',
               
                link: function (scope, element, attrs) {
                	
                    $(element).slider({
                        min: scope.min,
                        max:scope.max,
                        step:scope.step,
                        animate:true,
                        //disabled:true,
                        values: [scope.min,0,scope.max],
                        change: function( event, ui ) {
                            scope.num.valA = ui.values[0];
                            scope.num.valB = ui.values[1];
                            scope.num.valC = ui.values[2];
                            scope.$apply();
                            console.log("scope.num.valA "+ scope.num.valA + " scope.num.valB  " + scope.num.valB + " scope.num.valC  " + scope.num.valC);

                        }
                    })

                        .each(function() {

                            var increment=scope.increment;

                            // Get the options for this slider
                            var opt = $(this).data().uiSlider.options;

                            var numOfSections = opt.max - opt.min;
                            var numOfSmallUnits = ticks=0;
                            var j = k = opt.min;

                            if(opt.step>0 && opt.step<1)
                            {
                                if(opt.step === .5)
                                    ticks=2;
                                else if(opt.step === .25)
                                    ticks=4;
                                else if(opt.step === .2)
                                    ticks=5;
                                else if(opt.step === .1)
                                    ticks=10;

                                numOfSmallUnits=numOfSections*ticks;

                                for (var i = 0; i <= numOfSections; i++)
                                {
                                    if(j === k)
                                    {
                                        if(j < 0)
                                            scope.numArray.push({val:j,
                                                leftPosition:i/numOfSections*100,
                                                className:'negativeNumMarginLeft'});
                                        else
                                            scope.numArray.push({val:j,
                                                leftPosition:i/numOfSections*100,
                                                className:'positiveNumMarginLeft'});

                                        k = k+increment;
                                        j = j+1;
                                    }
                                }

                                for(var m = 0; m <= numOfSmallUnits; m++)
                                {
                                    scope.tickArray.push({
                                        leftPosition:m/numOfSmallUnits*100
                                    });
                                }
                            }
                            else if(opt.step >= 1)
                            {
                                for (var i = 0; i <= numOfSections; i++)
                                {
                                    if(j === k)
                                    {
                                        if(j < 0)
                                            scope.numArray.push({val:j,
                                                leftPosition:i/numOfSections*100,
                                                className:'negativeNumMarginLeft'});
                                        else
                                            scope.numArray.push({val:j,
                                                leftPosition:i/numOfSections*100,
                                                className:'positiveNumMarginLeft'});

                                        k = k+increment;
                                    }
                                    scope.tickArray.push({
                                        leftPosition:i/numOfSections*100
                                    });
                                    j = j+1;
                                }
                            }

                        })
             
                },

                templateUrl: 'partials/directives/ms-numberline.html'
            };
        }])



/*'use strict';
global angular 
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('numberline', {
            argTemplates: [{
                name: 'firstnumber'
            },{
                name: 'secondnumber'
            },{
                name: 'graphminimum'
            },{
                name: 'graphmaximum'
            }],
            directiveTemplate: '<ms-numberline expected={{expected}}></ms-numberline>'
        });
    }])
  .directive('msNumberline', [
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
				numberLineArray[2] = [];
					

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
										numberLineArray[2][jj] = "\xA0"+"x"+"\xA0";
										numberLineArray[1][jj] = "\xA0"+ii+"\xA0";
										numberLineArray[0][jj] = "\xA0"+"\xA0"+"|";
									} else if (ii == numberSecond) {
										numberLineArray[2][jj] = "\xA0"+"x"+"\xA0";
										numberLineArray[1][jj] = "\xA0"+ii+"\xA0";
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
	}]);*/