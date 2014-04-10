'use strict';

angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('numberline', {
            argTemplates: [{
            	name: 'minval'
            },{
            	name: 'maxval'
            },{
            	name: 'stepval'
            },{
                name: 'plotX'
            },{
                name: 'plotY'
            },{
                 name: 'plotZ'
            }],
            directiveTemplate: '<ms-numberline expected={{expected}}></ms-numberline>'
        });
    }])
  .directive('msNumberline', [
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
				$scope.num = {
                        valA:'', 
                        valB:'',  
                        valC:''
                    };
               	
                    $scope.numArray = [];
                    $scope.tickArray = [];
                    
					$scope.$watch('expected', function () {
						if ($scope.expected) {
							parser.parse($scope.expected, { scope: $scope });
						}
					});	
					$scope.$watch('minval', function () {
						if (typeof $scope.minval === "string") {
							$scope.min = parseInt($scope.minval);
						}
					});
					 $scope.$watch('maxval', function () {
		                  if (typeof $scope.maxval === "string") {
		                	  $scope.max = parseInt($scope.maxval);
		                 }
		              });
	                  $scope.$watch('stepval', function () {
		                  if (typeof $scope.stepval === "string") {
		                	  $scope.step = parseFloat($scope.stepval);
		                }
		              });
	                  $scope.$watch('plotX', function () {
		                  if (typeof $scope.plotX === "string") {
		                	  $scope.plotX = parseFloat($scope.plotX);
		                	  //console.log("$scope.plotX from inside watch: " + $scope.plotX);
		                  }
		              });
	                  $scope.$watch('plotY', function () {
		                  if (typeof $scope.plotY === "string") {
		                	  $scope.plotY = parseFloat($scope.plotY);
		                	  //console.log("$scope.plotY from inside watch: " + $scope.plotY);
		                  }
		              });
	                  $scope.$watch('plotZ', function () {
		                  if (typeof $scope.plotZ === "string") {
		                	  $scope.plotZ = parseFloat($scope.plotZ);
		                	  //console.log("$scope.plotZ from inside watch: " + $scope.plotZ);
		                  }
		              });

					$timeout(function(){
                    $('.numberline').slider({
                        min: $scope.min,
                        max: $scope.max,
                        step:$scope.step,
                        animate:true,
                        values: [$scope.min,0,$scope.max],
                        change: function( event, ui ) {
                            $scope.num.valA = ui.values[0];
                            $scope.num.valB = ui.values[1];
                            $scope.num.valC = ui.values[2];
                           //$scope.$apply();
                            //console.log("scope.num.valA "+ $scope.num.valA + " scope.num.valB  " + $scope.num.valB + " scope.num.valC  " + $scope.num.valC);
                        }
                    }) //end of slider method
                
                    .each(function() {
                    	// Get the options for this slider
                        var opt = $(this).data().uiSlider.options;

                        var numOfSections = opt.max - opt.min;
                        var numOfSmallUnits = 0;
                        var ticks=0;
                        var j = opt.min;
                        
                        if(opt.step>0 && opt.step<1)
                        {
                            ticks = 1/$scope.step;
                            numOfSmallUnits=numOfSections*ticks;

                            for (var i = 0; i <= numOfSections; i++)
                            {
                                 if(j < 0)
                                        $scope.numArray.push({val:j,
                                            leftPosition:i/numOfSections*100,
                                            className:'negativeNumMarginLeft'});
                                    else
                                        $scope.numArray.push({val:j,
                                            leftPosition:i/numOfSections*100,
                                            className:'positiveNumMarginLeft'});

                                    j = j+1;
                            }

                            for(var m = 0; m <= numOfSmallUnits; m++)
                            {
                                $scope.tickArray.push({
                                    leftPosition:m/numOfSmallUnits*100
                                });
                            }
                        }
                        else if(opt.step >= 1)
                        {	
                        	numOfSections = numOfSections/$scope.step;
                            for (var i = 0; i <= numOfSections; i++)
                            {
                            		if(j < 0)
                                        $scope.numArray.push({val:j,
                                            leftPosition:i/numOfSections*100,
                                            className:'negativeNumMarginLeft'});
                                    else
                                        $scope.numArray.push({val:j,
                                            leftPosition:i/numOfSections*100,
                                            className:'positiveNumMarginLeft'});

                                $scope.tickArray.push({
                                    leftPosition:i/numOfSections*100
                                });
                                j = j+$scope.step;
                            }
                        }

                    });//end of each method
                    
                    $scope.$on('checkAnswer', function () {
                        /*$scope.$emit('answer', {
                            result: 'correct',
                            expected: $scope.expected,
                            answer: $scope.expected,
                            label: $scope.label
                        });*/
                    	if($scope.num.valA !== plotX )
      						$scope.errorclassX="error";
      					
      					if($scope.num.valB !== plotY )
      						$scope.errorclassY="error";
      				
      					if($scope.num.valC !== plotZ )
      						$scope.errorclassZ="error";
                    });
    
                   
    
                    $scope.$on('checkHelp', function (e) {
                       /* // If this event has not been marked as ignored.
                        if (e.defaultPrevented === false) {
                            // handle check help event for parent scope.
                            // comparewholesgraph does not use help, fire a notHelped event.
                            $scope.$emit('notHelped', {
                                controllerId: $scope.controllerId
                            }); 
                        }*/
                    	$(".numberline").slider('values',0, $scope.plotX);
            			$(".numberline").slider('values',1, $scope.plotY);
            			$(".numberline").slider('values',2, $scope.plotZ);
                    });
                    
					}, 0);//end of timeout 
                }, // end of controller
                
                templateUrl : 'partials/directives/ms-numberline.html' 
            }; // end return
        }]);


/*'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('numberline', {
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
            directiveTemplate: '<ms-numberline expected={{expected}}></ms-numberline>'
        });
    }])
  .directive('msNumberline', [
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
				
					$scope.num = {
						valA:'',
						valB:'',
						valC:'',
					};
						/*------- Change values here to reflect diffrent values in numberline ------ 
						$scope.min=-3;
						$scope.max=3;
						$scope.step=.2;
						$scope.increment=1;
				
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

				$timeout(function () {	
					
					$("#container").slider({
							min: $scope.min,
							max:$scope.max,
							step:$scope.step,
							animate:true,
							//disabled:true,
							values: [$scope.min,0,$scope.max],
							change: function( event, ui ) {
								$scope.num.valA = ui.values[0];
								$scope.num.valB = ui.values[1];
								$scope.num.valC = ui.values[2];
								$scope.$apply();
								console.log("first $scope.num.valA "+ $scope.num.valA + " $scope.num.valB  " + $scope.num.valB + " $scope.num.valC  " + $scope.num.valC);
								$("#valA").html("A -: "+$scope.num.valA);
								$("#valB").html("B -: "+$scope.num.valB);
								$("#valC").html("C -: "+$scope.num.valC);
							},
						 })
							
					   .each(function() {
						   
						  var increment=$scope.increment;
						  
						  // Get the options for this slider
						  var opt = $(this).data().uiSlider.options;
						  console.log("opt is: ",opt);
						  
						  var numOfSections = opt.max - opt.min;
						  var smallUnits = 0;
						  var ticks = 0;
						  var j = opt.min;
						  var k = opt.min;
						  var el1, el2;
						 
						  if(opt.step<1)
						  {
							   if(opt.step === .5)
									ticks=2;
							   else if(opt.step === .25)
									ticks=4;
							   else if(opt.step === .2)
									ticks=5;
			
							   smallUnits=numOfSections*ticks;
							   
							   for (var i = 0; i <= numOfSections; i++) 
								  {
									  if(j === k){
										  /*------- Displays numbers below numberline ------ 
										  if(j<0)
											el1 = $('<label>'+j+'</label>').css('left', i/numOfSections*100+'%').addClass('negativeNumMarginLeft');
										  else
											el1 = $('<label>'+j+'</label>').css('left', i/numOfSections*100+'%').addClass('positiveNumMarginLeft'); 
										$( this ).append(el1);
										k = k+increment;
										j = j+1;
									  }
								  }
								  //--------- Displays tickmark or linemark over numberline------  
								  for(var m = 0; m <= smallUnits; m++){
									  el2 = $('<span>'+'|'+'</span>').css('left', m/smallUnits*100+'%');
									  $( this ).append(el2); 
								  }	  
							}	
						  else if(opt.step >= 1)
							  { 
								  for (var i = 0; i <= numOfSections; i++) 
								  {
									  if(j === k){
										  //-------- Displays numbers below numberline---------  
										  if(j<0)
											el1 = $('<label>'+j+'</label>').css('left', i/numOfSections*100+'%').addClass('negativeNumMarginLeft');
										  else
											el1 = $('<label>'+j+'</label>').css('left', i/numOfSections*100+'%').addClass('positiveNumMarginLeft'); 
										$( this ).append(el1);
										k = k+increment;
									  }
									  // Displays tickmark or linemark over numberline  
									  el2 = $('<span>'+'|'+'</span>').css('left', i/numOfSections*100+'%');
									  $( this ).append(el2); 
									  j = j+1;
								  }
							  }
						  // Displays tooltip over the handles by adding bootstrap classes to each handle  
						  $('.ui-slider-handle:first').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + 'A' + '</div></div>');
						  $('.ui-slider-handle:nth-child(2)').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + 'B' + '</div></div>');
						  $('.ui-slider-handle:last').html('<div class="tooltip top slider-tip"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + 'C' + '</div></div>');      
						});
						
					}, 0);
				});
			},
			templateUrl: 'partials/directives/ms-numberline.html'
		};
	}]);

/*'use strict';*/
/*global angular */

/*angular.module('mathSkills')
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
		$scope.handles=[]; */
		
		/*------- Change values here to reflect diffrent values in numberline ------ */
		/*$scope.min=-3;
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
        }])*/



