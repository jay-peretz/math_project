'use strict';
/*global angular */

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('reducefrac', {
            directiveTemplate: '<ms-reduce-fraction expected={{expected}}></ms-reduce-fraction>'
        });
    }])
    .directive('msReduceFraction', ['parser', 'panelGroupData', function (parser, panelGroupData) {
        return {
            controller: ['$scope', function ($scope) {
                var yes = '\\butgrp{\\row{\\but{Yes}{T}}{\\but{No}{F}}}',
                    no = '\\butgrp{\\row{\\but{Yes}{F}}{\\but{No}{T}}}',
					factorsUsed = [],
                    simplify = function(num, den) {
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
					},
					currentFraction = function(skipFirstFactor){
						return '\\frac{\\str{'+reduceFraction(skipFirstFactor||false).numerator+'}}{\\str{'+reduceFraction(skipFirstFactor||false).denominator+'}}';
					};
					
				$scope.controllerId = Math.random().toString();

                $scope.$watch('expected', function() {
                    if ($scope.expected) {	
						$scope.mixedArg = "";
						if (parser.extractTag(parser.extractTag($scope.expected).args[0]).tag === "mixed") {
							$scope.mixedArg = parser.extractTag(parser.extractTag(parser.extractTag($scope.expected).args[0]).args[0]).args[0];							
							$scope.args = parser.extractTag(parser.extractTag(parser.extractTag($scope.expected).args[0]).args[1]).args.map(function (tag) {
								return parser.extractTag(tag).args[0];
							});
						// case below is fraction, not mixed	
						} else {
							$scope.args = parser.extractTag(parser.extractTag($scope.expected).args[0]).args.map(function (tag) {
								return parser.extractTag(tag).args[0];
							});
						}
						$scope.instructions = "\\row{\\str{Can \xA0 "+$scope.mixedArg+"}}{"+currentFraction()+"}{\\str{ \xA0 be simplified?}}";
						$scope.answerexp = simplified($scope.args[0], $scope.args[1]) ? no : yes;
						$scope.answerlbl = "simplified";
                    }
                });

                $scope.$on('answer', function(e, data) {
					if (data.controllerId !== $scope.controllerId) {
                        console.log(data);
						e.stopPropagation();
						switch (data.label) {
							case "simplified":
								if (data.result === "correct") {
									console.log(" data is: ",data);
									if (parser.extractTag(data.expected).args[0] !== 'No') {
										$scope.instructions = "\\row{\\str{What is a common factor of the numerator and denominator of \xA0}}{"+currentFraction()+"}{\\str{\xA0 ?}}";
										$scope.answerexp = '\\input{["' + commonFactors(reduceFraction(false).numerator, reduceFraction(false).denominator).join('","') + '"]}';
										$scope.answerlbl = "factor";
									} else {
										var eventData = {
											result: "correct",
											expected: currentFraction(),
											label: $scope.label,
											answer: currentFraction(),
											controllerId: $scope.controllerId
										}
										$scope.$emit("answer", eventData);										
									}
								} else {
									$scope.$broadcast('checkFocus');
								}
								break;
							case "factor":
								if (data.result === "correct") {
									panelGroupData.resetIndex();
									factorsUsed.push(parser.extractTag(data.answer).args[0]);
									$scope.instructions = "\\row{\\str{Factor a "+factorsUsed[factorsUsed.length - 1]+" out of \xA0}}{"+currentFraction(true)+"}{\\str{\xA0 :}}";
									$scope.answerexp = '\\row{\\frac{\\str{'+reduceFraction(true).numerator+' \xF7 '+factorsUsed[factorsUsed.length - 1]+'}}{\\str{'+reduceFraction(true).denominator+' \xF7 '+factorsUsed[factorsUsed.length - 1]+'}}}{\\str{\xA0 = \xA0}}{\\frac{\\input{'+reduceFraction(false).numerator+'}}{\\input{'+reduceFraction(false).denominator+'}}}';
									$scope.answerlbl = "reduce";
								} else {
									$scope.$broadcast('checkFocus');
								}
								break;
							case "reduce":
								if (data.result === "correct" && data.answer.indexOf('str') === -1) {
									 $scope.instructions = "\\row{\\str{Can \xA0"+$scope.mixedArg+"}}{"+currentFraction()+"}{\\str{ \xA0 be simplified?}}";
									$scope.answerexp = simplified(reduceFraction(false).numerator, reduceFraction(false).denominator) ? no : yes;
									$scope.answerlbl = "simplified";                                
								} else {
									$scope.$broadcast('checkFocus');
								}
								break;
						}
					}
                });
            }],
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            templateUrl: 'partials/directives/ms-reduce-fraction.html'
        };
    }]);
