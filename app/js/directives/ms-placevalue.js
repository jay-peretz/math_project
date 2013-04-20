'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('placevalue', {
            argTemplates: [{
                name: 'numberdigits'
            },{
                name: 'numberdigitsplace'
            }],
            directiveTemplate: '<ms-placevalue expected={{expected}}></ms-placevalue>'
        });
    }])
  .directive('msPlacevalue', [
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
				$scope.numberdigits = [];
				$scope.numberdigitsplace = [];
				$scope.numbarray = [];
				$scope.randomplacearray = [];
				$scope.numbStringCommas = "";
				
			 // Extract the value/s for $scope.numberdigits & $scope.numberdigitsplace
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						parser.parse($scope.expected, { scope: $scope });
					}
				});
				$scope.$watch('numberdigits', function () {
					if (typeof $scope.numberdigits === "string") {
						if ($scope.numberdigits.indexOf('.') < 0) {
							$scope.numbStringCommas = getNumberStringCommas($scope.numberdigits);
							for (var ii = 0, len = $scope.numbStringCommas.length; ii < len; ii += 1) {
									$scope.numbarray[ii] = $scope.numbStringCommas.substr(ii, 1);
							}
						} else {
							for (var ii = 0, len = $scope.numberdigits.length; ii < len; ii += 1) {
									$scope.numbarray[ii] = $scope.numberdigits.substr(ii, 1);
							}
						}
					}
				});
				
				$scope.$watch('numberdigitsplace', function () {
					if (typeof $scope.numberdigitsplace === "string") {
						// check for numberdigitsplace value > the number of places in numberdigits
						if ( parseInt($scope.numberdigitsplace, 10) > $scope.numbarray.toString().length) {
							console.log("place value greater than value of given number");
						}
						$scope.numberdigitsplace = $scope.numberdigits.toString().length - parseInt($scope.numberdigitsplace, 10);
						//build an array the same length as $scope.numbarray with blank spaces and a carat for the indicated digit
						for (var ii = 0, jj = 1, len1 = $scope.numbarray.toString().length; ii < len1; ii++){
							if (($scope.numbarray[ii] != ',')&&($scope.numbarray[ii] != '.')) {
								if (jj == parseInt($scope.numberdigitsplace,10)) {
									$scope.randomplacearray[ii] = "^";
								} else {
									$scope.randomplacearray[ii] = " ";
								}
								jj++;
							} else {
								$scope.randomplacearray[ii] = " ";
							}
						}
					}
				});

				// receives string representation of number without commas, returns an array with commas
				function getNumberStringCommas(givenWhole) {
					var needsCommas = givenWhole,
						buildCommas = [],
						thisManyCommas = Math.floor((needsCommas.length-1)/3),
						numberWithCommas = '';
					
					for (var i=0; i<thisManyCommas+1; i+=1){
							if (i<thisManyCommas){
								buildCommas[i] =  needsCommas.substr(needsCommas.length-(3*(i+1)), 3);
							} else {
								buildCommas[i] =  needsCommas.substr(0, needsCommas.length-(3*i));
							}					
					}
					numberWithCommas = buildCommas.reverse();
					numberWithCommas = numberWithCommas.join();
					return numberWithCommas;				
				}
				
			},
			template: '<div class="control-group {{class}}"><label><span>{{label}}</span><table class="margin-left-small"><tr><td ng-repeat="number in numbarray">{{number}}</td></tr><tr><td ng-repeat="place in randomplacearray">{{place}}</td></tr></table></label></div>'
		};
	}]);