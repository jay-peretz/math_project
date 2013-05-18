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
				var tagParameters = [],
					filterResult,
					filterResultSimple,
					wholePart;
					
				var simplify = function(num, den) {
                        var leastPart = num > den ? den : num,
                            ii;

                        for (ii = 2; ii <= leastPart; ii += 1) {
                            while (num % ii === 0 && den % ii === 0) {
                                num = num / ii;
                                den = den / ii;
                                leastPart = leastPart / ii;
                            }
                        }

                        return {
                            numerator: num,
                            denominator: den
                        };
                    },
          			simplified = function(num, den) {
                        var simplified = simplify(num, den);
                        return num === simplified.numerator && den === simplified.denominator;
                    },
             		commonFactors = function(num, den) {
                        var factors = [];
                        var leastPart = num > den ? den : num,
                            ii;

                        for (ii = 2; ii <= leastPart; ii += 1) {
                            if (num % ii === 0 && den % ii === 0) {
                                factors.push(ii.toString());
                            }
                        }
                        return factors;
                    },
			 		reduceFraction = function(skipFirstFactor) {
						var currentFactors,
							productFactors;
						if (skipFirstFactor) {
							currentFactors = factorsUsed.slice(0, -1);
						} else {
							currentFactors = factorsUsed.slice();
						}
						productFactors = currentFactors.reduce(function(a, b) {
								return a * b;										
						}, 1);
						return {
							numerator: $scope.args[0]/productFactors,
							denominator: $scope.args[1]/productFactors
							}
					}
				
			 // Extract the tag values- tagParameters[0] will be transformed from tagParameters[1] form to tagParameters[2] form
			 // if tagParameters[3] === "help" style the expression with "label_like" to color it blue
				$scope.$watch('expected', function () { 
					if ($scope.expected) {
						tagParameters = parser.extractTag($scope.expected).args;
					}

					if (typeof tagParameters[3] !== "undefined" && tagParameters[3] === "help") {
						$scope.addClass = "label_like";
					} else {
						$scope.addClass = "";
					}
					
					// transform the percent form by using "percent-conversion" filter
					filterResult = $filter("percent-conversion")(tagParameters);
					
					// make the transformation into a fraction form (in our language)
					if (tagParameters[2] == "percentAsFraction" || tagParameters[2] == "fractionPercentAsFraction" || tagParameters[2] == "decimalAsFractionPercent" ) {
						
						switch (true) {
							case (filterResult.numerator > filterResult.denominator):
								wholePart = Math.floor(filterResult.numerator / filterResult.denominator);
								$scope.languageExpression = '\\mixed{\\str{'+wholePart+'}}{\\frac{\\str{'+filterResult.numerator%filterResult.denominator+'}}{\\str{'+filterResult.denominator+'}}}';
								break;
							case (simplified(filterResult.numerator, filterResult.denominator)):
								$scope.languageExpression = '\\frac{\\str{'+filterResult.numerator+'}}{\\str{'+filterResult.denominator+'}';
								break;
							case (!simplified(filterResult.numerator, filterResult.denominator)):
								filterResultSimple = simplify(filterResult.numerator, filterResult.denominator);
								$scope.languageExpression = '\\frac{\\str{'+filterResultSimple.numerator+'}}{\\str{'+filterResultSimple.denominator+'}';
								break;
							
						}
					} else {
						$scope.languageExpression = '\\str{'+filterResult+'}';
					}
			
				});
			},
			template: '<span class={{addClass}}><ms-expression expected={{languageExpression}} label=languageExpression></ms-expression></span>'

		};
	}]);