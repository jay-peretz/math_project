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
            },{
                name: 'numberlineId'
           	},{
                name: 'helpSwitch'
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
	                  $scope.$watch('numberlineId', function () {
		                  if (typeof $scope.numberlineId === "string") {
		                	  $scope.numberlineId = $scope.numberlineId;
		                	 }
		              });
					  $scope.$watch('helpSwitch', function () {
		                  if (typeof $scope.helpSwitch === "string") {
		                	  $scope.helpSwitchIn = $scope.helpSwitch;
		                  } else {
							  $scope.helpSwitchIn = false;
						  }
		              });
					  
					$timeout(function(){
						
						$('#'+ $scope.numberlineId).slider({
							min: $scope.min,
							max: $scope.max,
							step:$scope.step,
							animate:true,
							//disabled:true,
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
					}, 0);//end of timeout 
					
                     $scope.$on('answer', function (e, data) {
						
						if($scope.num.valA === $scope.plotX && $scope.num.valB === $scope.plotY && $scope.num.valC === $scope.plotZ ){
							data.result = "correct";
          					$scope.errorclassX="success";
          					$scope.errorclassY="success";
          					$scope.errorclassZ="success";	
								
						} else {
						
                            e.preventDefault();
							
							if($scope.num.valA !== $scope.plotX ) {
          						$scope.errorclassX="error";
							} else {
								$scope.errorclassX="success";
							}
          					
          					if($scope.num.valB !== $scope.plotY ) {
          						$scope.errorclassY="error";
							} else {
								$scope.errorclassY="success";
							}	
          				
          					if($scope.num.valC !== $scope.plotZ ) {
          						$scope.errorclassZ="error";
							} else {
								$scope.errorclassZ="success";
							}
								
						}
						$timeout(function(){
							$scope.errorclassX="";
							$scope.errorclassY="";
							$scope.errorclassZ="";
						},1000);
						
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
                   	
						$('#'+ $scope.numberlineId).slider('values',0, $scope.plotX);
						$('#'+ $scope.numberlineId).slider('values',1, $scope.plotY);
						$('#'+ $scope.numberlineId).slider('values',2, $scope.plotZ);
						
                    });
                    
                }, // end of controller
                
                templateUrl : 'partials/directives/ms-numberline.html' 
            }; // end return
        }]);