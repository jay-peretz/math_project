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
                    }
				
			 // Extract the tag values- tagParameters[0] will be transformed from tagParameters[1] form to tagParameters[2] form
				$scope.$watch('expected', function () { 
					if ($scope.expected) {
						tagParameters = parser.extractTag($scope.expected).args;
					}
					
					// transform the percent form by using "percent-conversion" filter
					filterResult = $filter("percent-conversion")(tagParameters);
					
					// make the transformation into a fraction form (in our language)
					if (tagParameters[2] == "percentAsFraction" || tagParameters[2] == "fractionPercentAsFraction" || tagParameters[2] == "decimalAsFractionPercent" ) {
						console.log("in fraction section, filterResult is: "+filterResult);
						switch (true) {
							case (filterResult.numerator > filterResult.denominator):
								wholePart = Math.floor(filterResult.numerator / filterResult.denominator);
								filterResultSimple = simplify(filterResult.numerator%filterResult.denominator, filterResult.denominator);
								$scope.languageExpression = '\\grp{\\row{\\mixed{\\str{'+wholePart+'}}{\\frac{\\fracstr{'+filterResult.numerator%filterResult.denominator+'}}{\\fracstr{'+filterResult.denominator+'}}}}{\\row{\\str{ = }}}}{\\row{\\mixed{\\str{'+wholePart+'}}{\\frac{\\fracstr{'+filterResultSimple.numerator+'}}{\\fracstr{'+filterResultSimple.denominator+'}}}}';
								break;
							case (simplified(filterResult.numerator, filterResult.denominator)):
								$scope.languageExpression = '\\frac{\\fracstr{'+filterResult.numerator+'}}{\\fracstr{'+filterResult.denominator+'}';
								break;
							case (!simplified(filterResult.numerator, filterResult.denominator)):
								filterResultSimple = simplify(filterResult.numerator, filterResult.denominator);
								$scope.languageExpression = '\\grp{\\row{\\frac{\\fracstr{'+filterResult.numerator+'}}{\\fracstr{'+filterResult.denominator+'}}}{\\row{\\str{ = }}}}{\\row{\\frac{\\fracstr{'+filterResultSimple.numerator+'}}{\\fracstr{'+filterResultSimple.denominator+'}}}';
								break;
							
						}
					} else {
						$scope.languageExpression = '\\str{'+filterResult+'}';
					}
			
				});
			},
			template: '<span><ms-expression expected={{languageExpression}} label=languageExpression></ms-expression></span>'

		};
	}]);