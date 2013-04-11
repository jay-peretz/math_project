'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('showplace', {
            argTemplates: [{
                name: 'answercorrect'
            },{
                name: 'numberforplace'
            }],
            directiveTemplate: '<ms-showplace expected={{expected}} label={{label}}></ms-select>'
        });
    }])
  .directive('msShowplace', [
	'parser',
	function (parser) {
		return {
			restrict: 'E',
			scope: {
				expected: '@',
				label: '@'
			},
			controller: function ($scope, $element) {
				$scope.answercorrect = [];
				$scope.numberforplace = [];
				
				$scope.answercorrectIn = 0;
				$scope.numberforplaceIn = "";
				$scope.numbArray = [];
				$scope.randomPlaceArray = [];
				$scope.placeNameArray = ["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"];
				
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
				
			 // Extract the value/s for $scope.answercorrect & $scope.optionsarray
				$scope.$watch('expected', function () {
					if ($scope.expected) {
						parser.parse($scope.expected, { scope: $scope });
					}
				});
				
				$scope.$watch('answercorrect', function () {
					if (typeof $scope.answercorrect === "string") {
						$scope.answercorrectIn = JSON.parse($scope.answercorrect);
					}
				});
				
				$scope.$watch('numberforplace', function () {
					if (typeof $scope.numberforplace === "string") {
						$scope.numberforplaceIn = JSON.parse($scope.numberforplace);
					}
					
					$scope.problemObjLen = $scope.numberforplaceIn.toString().length;
					$scope.randomPlace = $scope.problemObjLen - $scope.placeNameArray.indexOf($scope.answercorrectIn);
					console.log("$scope.randomPlace is: "+$scope.randomPlace);
					$scope.numbStringCommas = getNumberStringCommas($scope.numberforplaceIn.toString());
					
					for (var ii = 0, len = $scope.numbStringCommas.length; ii<len; ii++) {	
								$scope.numbArray[ii] = $scope.numbStringCommas.substring(ii,ii+1);				
					}

					//build an array the same length as $scope.numbArray with blank spaces and a carat for the indicated digit
					for (var ii = 0, jj = 1, len1 = $scope.numbStringCommas.length; ii < len1; ii++){
						if ($scope.numbArray[ii] != ',') {
							if (jj == $scope.randomPlace) {
								$scope.randomPlaceArray[ii] = "^";
							} else {
								$scope.randomPlaceArray[ii] = " ";
							}
							jj++;
						} else {
							$scope.randomPlaceArray[ii] = " ";
						}
					}
					
					// set up help display
					// set up and populate a double array to provide a table column and a table row for each digit
					$scope.chartPlaceArray = new Array($scope.numbStringCommas.length+1);
					for (var ii = 0; ii<$scope.numbStringCommas.length+1; ii++){			
						$scope.chartPlaceArray[ii] = new Array($scope.numbStringCommas.length+1);
						for (var jj = 0; jj<$scope.numbStringCommas.length+1; jj++){
							$scope.chartPlaceArray[ii][jj] = "";
						}
					}
			
					$scope.verticalTD = "| ";
					$scope.turnTD = "|_";
					$scope.horizontalTD = "__";
					
					// fill in the double array with symbols for lines and ending each row with $scope.placeNameArray value
					for (var ii = 0, len1 = $scope.numbStringCommas.length, jj = len1-1, gg=0; ii < len1; ii++, jj--){
			
						if ($scope.numbArray[len1-ii-1]!=',') {
							for (var kk = 0; kk<len1; kk++) {
								if ($scope.numbArray[kk] == ',') {
									$scope.chartPlaceArray[ii][kk] = " ";
								}
								if (($scope.numbArray[kk] == ',')&&((ii%3)==0)) {
									$scope.chartPlaceArray[ii][kk] = '\xA0';
								}
								if ((kk<len1)&&($scope.numbArray[kk] != ',')) {
									if (kk<jj) {
										$scope.chartPlaceArray[ii][kk] = $scope.verticalTD;
									} else if (kk==jj){
										$scope.chartPlaceArray[ii][kk] = $scope.turnTD;					
									} else if (kk>jj){
										$scope.chartPlaceArray[ii][kk] = $scope.horizontalTD;			
									}
								} else if ((kk<len1)&&($scope.numbArray[kk] == ',')&&(kk>jj)) {
									$scope.chartPlaceArray[ii][kk] = $scope.horizontalTD;
								}
								if (kk == len1-1) {
									$scope.chartPlaceArray[ii][len1] = $scope.placeNameArray[gg];
									gg++;
								}
							}
							
						}
						
					}
					
					// even the number of elements in the arrays with the number in $scope.chartPlaceArray[ii]
					$scope.numbArray.push(" ");
					$scope.randomPlaceArray.push(" ");

					// set up help
					$scope.firstArray = [];
					$scope.secondArray = [];
					$scope.thirdArray = [];
					$scope.firstArray = $scope.numbArray.slice();
					$scope.secondArray = $scope.randomPlaceArray.slice();
					$scope.thirdArray = $scope.chartPlaceArray.slice();
		
				});
	
			},
			templateUrl: 'partials/directives/ms-showplace.html'
		};
	}]);