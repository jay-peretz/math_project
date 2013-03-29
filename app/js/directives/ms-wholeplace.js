'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('wholeplace', {
            argTemplates: [{
                name: 'wholenumber'
            },{
                name: 'wholenumberplace'
            }],
            directiveTemplate: '<ms-wholeplace expected={{expected}}></ms-wholeplace>'
        });
    }])
  .directive('msWholeplace', [
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
				$scope.wholenumber = [];
				$scope.wholenumberplace = [];
				$scope.numbarray = [];
				$scope.randomplacearray = [];
				$scope.numbStringCommas = "";
				
			 // Extract the value/s for $scope.wholenumber & $scope.wholenumberplace
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						parser.parse($scope.expected, { scope: $scope });
					}
				});
				$scope.$watch('wholenumber', function () {
					if (typeof $scope.wholenumber === "string") {
						$scope.numbarray = getNumberStringCommas($scope.wholenumber).slice();
					}
				});
				
				$scope.$watch('wholenumberplace', function () {
					if (typeof $scope.wholenumberplace === "string") {
						// check for wholenumberplace value > the number of places in wholenumber
						if ( parseInt($scope.wholenumberplace, 10) > $scope.numbarray.toString().length) {
							console.log("place value greater than value of given number");
						}
						//build an array the same length as $scope.numbarray with blank spaces and a carat for the indicated digit
						for (var ii = 0, jj = 1, len1 = $scope.numbarray.toString().length; ii < len1; ii++){
							if ($scope.numbarray[ii] != ',') {
								if (jj == parseInt($scope.wholenumberplace,10)) {
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
					return numberWithCommas;				
				}
				
			},
			template: '<div class="control-group {{class}}"><label><span>{{label}}</span><table class="margin-left-small"><tr><td ng-repeat="number in numbarray">{{number}}</td></tr><tr><td ng-repeat="place in randomplacearray">{{place}}</td></tr></table></label></div>'
		};
	}]);