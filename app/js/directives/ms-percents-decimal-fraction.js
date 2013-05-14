'use strict';
	
angular.module('mathSkills') 
	.config(['parserProvider', function (parserProvider) {
        parserProvider.register('percentsdecimalfrac', {
            directiveTemplate: '<ms-percents-decimal-fraction expected={{expected}}></ms-percents-decimal-fraction>'
        });
    }])
  .directive('msPercentsDecimalFraction', [
	'parser',
	function (parser) {
		return {
			restrict: 'E',
			scope: {
				expected: '@',
				label: '@'
			},
			controller: function ($scope, $element, $filter) {
				var tagParameters = [];
				
			 // Extract the tag values
				$scope.$watch('expected', function () { 
					if ($scope.expected) {
						tagParameters = parser.extractTag($scope.expected).args;
					}
					
					// set up help display
					$scope.helpInstructions1 = "Write the decimal place value as the denominator of the fraction:";
					$scope.firstText = $filter("percent-conversion")(tagParameters);
					console.log("JSON.stringify($scope.firstText) is: "+JSON.stringify($scope.firstText));
					$scope.afterFirstText = false;
			
					/*
					$scope.probDecimalString = $scope.problemObject.getDecimalNotPercent().toString().replace(/,/g, "");
					$scope.probDecimalDigitsRight = $scope.problemObject.getDecimalNotPercent().getDecimalPlaces();
					$scope.probDecimalHasDecimal = $scope.probDecimalString.indexOf(".")<0?0:1;
					$scope.probDecimalDigitsLeft = $scope.probDecimalString.length - ($scope.probDecimalHasDecimal + $scope.probDecimalDigitsRight);
					$scope.probDecimalRight = parseInt($scope.probDecimalString.substr($scope.probDecimalDigitsLeft+1), 10);
					$scope.fractionPercent = Fraction.create({numerator: $scope.probDecimalRight, denominator: Math.pow(10, $scope.probDecimalDigitsRight+$scope.probDecimalDigitsLeft-1)});
					
					// denominator not divisible by 10 and fraction not simplified, display fraction divisor divisible 10
					if (($scope.problemObject.getPercentAsFraction().getDenominator() % 10 != 0)&&($scope.problemObject.getPercentAsFraction().isSimplified() == true)) {
							$scope.secondEquals = true;
							$scope.secondFraction = true;
							$scope.numerator2 = $scope.fractionPercent.getGivenNumerator();
							$scope.denominator2 = $scope.fractionPercent.getGivenDenominator();
							if ($scope.problemObject.getPercentAsFraction().isImproper()) {
								$scope.whole2 = $scope.problemObject.getPercentAsFraction().mixed().getWhole();
							}
							if (problemNumber > 10) {
								$scope.afterSecondFraction = "%";
							}
					} 
					
					if ($scope.problemObject.getPercentAsFraction().isSimplified() == false) {
							$scope.secondEquals = true;
							$scope.secondFraction = true;
							$scope.numerator2 = $scope.problemObject.getPercentAsFraction().mixed().getNumerator();
							$scope.denominator2 = $scope.problemObject.getPercentAsFraction().mixed().getDenominator();
							if ($scope.problemObject.getPercentAsFraction().isImproper()) {
								$scope.whole2 = $scope.problemObject.getPercentAsFraction().mixed().getWhole();
							}
					}
			
					$scope.thirdEquals = true;
					$scope.thirdFraction = true;
					$scope.afterThirdFraction = false;
					$scope.numerator3 = $scope.problemObject.getPercentAsFraction().simplified().mixed().getNumerator();
					$scope.denominator3 = $scope.problemObject.getPercentAsFraction().simplified().mixed().getDenominator();
					if ($scope.problemObject.getPercentAsFraction().isImproper()) {
							$scope.whole3 = $scope.problemObject.getPercentAsFraction().simplified().mixed().getWhole();
					}
					
					if ((problemNumber > 10)&&(problemNumber < 14)) {
						$scope.afterFirstText = "%";
						$scope.afterThirdFraction = "%";
					}
					
					if (((problemNumber > 5)&&(problemNumber < 11))||(problemNumber > 13)) {
						// set up problem display
						$scope.templates = {
							mainProblem: 'partials/main-problem/main-problem-template-two.html'
						};
			
						if ((problemNumber > 5)&&(problemNumber < 11)) {
							$scope.instructionsMainTwo = 'Write the equivalent decimal value of this fraction:';
						}
						if (problemNumber > 13) {
							if ($scope.problemObject.getPercentAsFraction().isImproper() == false) {
								$scope.instructionsMainTwo = 'Express the fractional percent as a decimal percent:';
							} else {
								$scope.instructionsMainTwo = 'Express the mixed number percent as a decimal percent:';
							}
							$scope.afterFirstFractionMainTwo = "%";
							$scope.afterSign = "%";
							$scope.afterFourthText = "%";
						}
						$scope.firstFractionMainTwo = true;
						$scope.numeratorMainTwo1 = $scope.problemObject.getPercentAsFraction().simplified().mixed().getNumerator();
						$scope.denominatorMainTwo1 = $scope.problemObject.getPercentAsFraction().simplified().mixed().getDenominator();
						if ($scope.problemObject.getPercentAsFraction().isImproper()) {
							$scope.wholeMainTwo1 = $scope.problemObject.getPercentAsFraction().simplified().mixed().getWhole();
						}
						$scope.firstTextMainTwo = false;
						$scope.afterFirstTextMainTwo = false;
						Answer.singleValueDecimal($scope, $scope.problemObject.getDecimalNotPercent().getDecimal());
						
						//set up help display
						$scope.firstText = false;
						$scope.secondFraction = true;
						$scope.thirdFraction = false;
						$scope.thirdEquals = false;
						$scope.numerator2 = $scope.problemObject.getPercentAsFraction().simplified().mixed().getNumerator();
						$scope.denominator2 = $scope.problemObject.getPercentAsFraction().simplified().mixed().getDenominator();
						$scope.secondEquals = false;
						// displays improper first fraction instead of simple if getPercentAsFraction().isImproper()
						if ($scope.problemObject.getPercentAsFraction().isImproper()) {
							$scope.whole2 = $scope.problemObject.getPercentAsFraction().simplified().mixed().getWhole();
							$scope.thirdFraction = true;
							$scope.numerator3 = $scope.problemObject.getPercentAsFraction().simplified().getNumerator();
							$scope.denominator3 = $scope.problemObject.getPercentAsFraction().simplified().getDenominator();
							$scope.whole3 = "";
							if (problemNumber > 10) {
								$scope.afterThirdFraction = "%";
							}
						}	
			
						$scope.secondText = false;
						$scope.fourthEquals = true;
						$scope.thirdText = "\xA0 \xA0 means \xA0"+$scope.problemObject.getPercentAsFraction().simplified().getNumerator()+"\xA0 \xf7 \xA0"+$scope.problemObject.getPercentAsFraction().simplified().getDenominator();
						$scope.sixthEquals = true;
						$scope.fourthText = $scope.problemObject.getDecimalNotPercent().getDecimal();
					}*/
				});
			},
			templateUrl: 'partials/directives/ms-percents-display.html'

		};
	}]);