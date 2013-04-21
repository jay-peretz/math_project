'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('showplacedecimal', {
            argTemplates: [{
                name: 'answercorrect'
            },{
                name: 'numberforplace'
            }],
            directiveTemplate: '<ms-showplacedecimal expected={{expected}} label={{label}}></ms-showplacedecimal>'
        });
    }])
  .directive('msShowplacedecimal', [
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
				$scope.numbarray = [];
				$scope.randomPlace = 0;
				$scope.randomPlaceArray = [];
				$scope.placeNameArray = ["Millionths", "Hundred-thousandths", "Ten-thousandths","Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"];
				
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
						$scope.numberforplaceIn = $scope.numberforplace;
						$scope.problemObjLen = $scope.numberforplaceIn.length;
						$scope.decimalAt = $scope.numberforplaceIn.indexOf(".");
						$scope.decimalPlaces = ($scope.problemObjLen - 1) - $scope.decimalAt;
						$scope.randomIndex = $scope.placeNameArray.indexOf($scope.answercorrectIn);
						$scope.randomPlace = ($scope.problemObjLen)-($scope.randomIndex)+(5-$scope.decimalPlaces);
						for (var ii = 0, len = $scope.problemObjLen; ii < len; ii++) {
								$scope.numbarray[ii] = $scope.numberforplaceIn.substr(ii, 1);
						}

		
						//build an array the same length as $scope.numbarray with blank spaces and a carat for the indicated digit
						for (var ii = 0, jj = 1; ii < $scope.problemObjLen; ii++){
							if ($scope.numbarray[ii] != '.') {
								if (jj == $scope.randomPlace) {
									$scope.randomPlaceArray[ii] = "^";
									$scope.numberAtPlace = $scope.numbarray[ii];
								} else {
									$scope.randomPlaceArray[ii] = " ";
								}
								jj++;
							} else {
								$scope.randomPlaceArray[ii] = " ";
							}
						}
										
						// set up and populate a double array to provide a table column and a table row for each digit
						$scope.chartPlaceArray = new Array($scope.problemObjLen);
						for (var ii = 0; ii<$scope.problemObjLen; ii++){			
							$scope.chartPlaceArray[ii] = new Array($scope.problemObjLen);
							for (var jj = 0; jj<$scope.problemObjLen; jj++){
								$scope.chartPlaceArray[ii][jj] = "";
							}
						}
				
						$scope.verticalTD = "| ";
						$scope.turnTD = "|_";
						$scope.horizontalTD = "__";
						
						// fill in the double array with symbols for lines and ending each row with $scope.placeNameArray value
						for (var ii = 0, len1 = $scope.problemObjLen, jj = len1-1, gg=0; ii < len1; ii++, jj--){
				
							if ($scope.numbarray[len1-ii-1]!='.') {
								for (var kk = 0; kk<len1; kk++) {
									if ($scope.numbarray[kk] == '.') {
										$scope.chartPlaceArray[ii][kk] = " ";
									}
									if ((kk<len1)&&($scope.numbarray[kk] != '.')) {
										if (kk<jj) {
											$scope.chartPlaceArray[ii][kk] = $scope.verticalTD;
										} else if (kk==jj){
											$scope.chartPlaceArray[ii][kk] = $scope.turnTD;					
										} else if ((kk>jj)&&($scope.numbarray[kk] != '.')){
											$scope.chartPlaceArray[ii][kk] = $scope.horizontalTD;			
										}
									} else if ((kk<len1)&&($scope.numbarray[kk] == '.')&&(kk>jj)) {
										$scope.chartPlaceArray[ii][kk] = $scope.horizontalTD;
									}
									if ((kk == len1-1)&&($scope.numbarray[kk] != '.')) {
										$scope.chartPlaceArray[ii][len1] = $scope.placeNameArray[gg+(6-$scope.decimalPlaces)];
										gg++;
									}
								}
								
							}
							
						}
					}
					
					// even the number of elements in the arrays with the number in $scope.chartPlaceArray[ii]
					$scope.numbarray.push(" ");
					$scope.randomPlaceArray.push(" ");

					// set up help
					$scope.firstArray = [];
					$scope.secondArray = [];
					$scope.thirdArray = [];
					$scope.firstArray = $scope.numbarray.slice();
					$scope.secondArray = $scope.randomPlaceArray.slice();
					$scope.thirdArray = $scope.chartPlaceArray.slice();
		
				});
	
			},
			templateUrl: 'partials/directives/ms-showplace.html'
		};
	}]);