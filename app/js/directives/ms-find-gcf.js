'use strict';
/*global angular */

// \findlcm{2}{12}

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('findgcf', {
            directiveTemplate: '<ms-find-gcf expected={{expected}} label={{label}}></ms-find-gcf>'
        });
    }])
    .directive('msFindGcf', ['numberUtils', 'panelGroupData', 'parser', '$timeout', function (numberUtils, panelGroupData, parser, $timeout) {
		
        var count = function (val, arr) {
                return arr.reduce(function (acc, cur) {
                    return val === cur ? acc + 1 : acc;
                }, 0);
            },
            flatten = function (arrs) {
                return arrs.reduce(function (acc, arr) {
                    return acc.concat(arr);
                }, []);
            },
            unique = function (arr) {
                return arr.sort().filter(function (el, i, a) {
                    return i === a.indexOf(el);
                });
            },
            repeat = function (val, times) {
                var ret = [];
                while (times > 0) {
                    ret.push(val);
                    times -= 1;
                }
                return ret;
            },
            modes = function (arrs) {
                var vals = unique(flatten(arrs));
                var ret = [];
                vals.forEach(function (val) {
                    var times = arrs.map(count.bind(null, val)).sort().pop();
                    ret = ret.concat(repeat(val, times));
                });
                return ret;
            };

        return {
            controller: ['$scope', function ($scope) {
				$scope.factorExpLabel = "";
				$scope.controllerId = Math.random().toString();
                var getFactorExp = function (dataLabel) {
						if (typeof dataLabel !== "undefined") {
                        	return '\\input{[' + $scope.numberObjects[dataLabel].primeFactors.join(',') + ']}';
						} else {
							return '\\input{[' + $scope.primeFactors.join(',') + ']}';
						}
                    },
                    getFactoredExp = function (dataLabel) {
						if (typeof dataLabel !== "undefined") {
							return '\\grp{\\input{' + $scope.numberObjects[dataLabel].numbers.join('}}{\\input{') + '}}';
						} else {
                        	return '\\grp{\\input{' + $scope.numbers.join('}}{\\input{') + '}}';
						}
                    },
                    extractArg = function (tag) {
                        return parser.extractTag(tag).args[0];
                    },
                    divideIfDivisible = function (divisor, dividend) {
                        return dividend % divisor === 0 ? dividend / divisor : dividend;
                    },
                    saveState = function (factor, dataLabel) {
						if (typeof dataLabel !== "undefined") {
							$scope.numberObjects[dataLabel].completed.push({
								factor: factor,
								numbers: angular.copy($scope.numberObjects[dataLabel].numbers)
							});
						} else {
							$scope.completed.push({
								factor: factor,
								numbers: angular.copy($scope.numbers)
							});
						}
                    },
					saveFinalState = function (dataLabel) {
						if (typeof dataLabel !== "undefined") {
							$scope.numberObjects[dataLabel].completed.push({
								factor: "",
								numbers: angular.copy($scope.numberObjects[dataLabel].numbers)
							});
						} else {
							$scope.completed.push({
								factor: "",
								numbers: angular.copy($scope.numbers)
							});
						}
                    },
                    setUpFactored = function (factor) {
						if (typeof dataLabel !== "undefined") {
                        	$scope.numberObjects[dataLabel].numbers = $scope.numberObjects[dataLabel].numbers.map(divideIfDivisible.bind(null, +factor));
						} else {
							$scope.numbers = $scope.numbers.map(divideIfDivisible.bind(null, +factor));
						}
                    },
                    remove = function (val, arr) {
                        var ii = arr.indexOf(val);
                        if (ii !== -1) {
                            arr.splice(ii, 1);
                        }
                    },
                    focus = function () {
                        $timeout(function () {
                            $scope.$broadcast('checkFocus');
                        }, 0);
                    };
					$scope.borderOrNot = function () {
						if ($scope.factorExpLabel === "lcm") {
							return ('noborder');
						} else {
							return ('');
						}
					};
					$scope.borderIndexed = function (index) {
						if (index === $scope.howManyPrimes) {
							return ('noborder');
						} else {
							return ('');
						}
					};

                $scope.numbers = null;
                $scope.completed = [];
                $scope.factorExp = '';
                $scope.factorStep = true;
                $scope.instructions = 'Factor each number down to 1.';
				$scope.done = false;
				$scope.numberObjects = {};
				$scope.numberObjectsArray = [];
				$scope.allDone = false;

                $scope.$watch('expected', function () {
					
                    if ($scope.expected) {
						$scope.allNumbers = parser.extractTag($scope.expected).args.map(Number);		
						$scope.allNumbersLength = $scope.allNumbers.length;
						$scope.allPrimeFactors = modes($scope.allNumbers.map(numberUtils.primeFactors));
						$scope.lcmNumber = $scope.allPrimeFactors.reduce(function (a, b) { return a * b; }, 1);
						for (var ii = 0, len = $scope.allNumbersLength; ii < len; ii += 1) {
								// Get the numbers we are factoring.
								$scope.numbers = [$scope.allNumbers[ii]];
								// Get the modes of the numbers' prime factors.
								$scope.primeFactors = modes($scope.numbers.map(numberUtils.primeFactors));
								$scope.howManyPrimes = $scope.primeFactors.length;
								// Setup our input expression.
								$scope.factorExp = getFactorExp();
								$scope.numberObjects['numbObj' + ii] = {
									numbers: $scope.numbers,
									primeFactors: $scope.primeFactors,
									howManyPrimes: $scope.howManyPrimes,
									factorExp: $scope.factorExp,
									completed: [],
									done: false
								};
								focus();
						}
                    }
                });

                $scope.$on('answer', function (e, data) {
					console.log("answer data is: ",JSON.stringify(data))
					
					$scope.allDone = true;
					for (var numObj in $scope.numberObjects) {
						if ($scope.numberObjects[numObj].done === false) {
							$scope.allDone = false;
						}
					}
					console.log("$scope.allDone is: ",$scope.allDone);
                    if ($scope.allDone === false) {
                        e.stopPropagation();
						
						if ($scope.numberObjects[data.label].primeFactors.indexOf(Number(parser.extractTag(data.answer).args[0])) !== -1){
								var factor = extractArg(data.answer);
								saveState(factor,data.label);
								setUpFactored(factor,data.label);
								if ($scope.numberObjects[data.label].primeFactors.length > 1) {
										remove(+factor, $scope.numberObjects[data.label].primeFactors);
										$scope.numberObjects[data.label].factorExp = getFactorExp(data.label);
										$scope.numberObjects[data.label].factoredExp = getFactoredExp(data.label);
										$scope.factorExpLabel = "";
								}/* else {
										$scope.numberObjects[data.label].factorExpLabel = "lcm";
										$scope.numberObjects[data.label].done = true;
										remove(+factor, $scope.numberObjects[data.label].primeFactors);
										saveFinalState(data.label);
										$scope.factorExp = '\\input{' + $scope.lcmNumber + '}';
										$scope.instructions = 'Now multiply the factors together to find the LCM.';
										console.log("2 JSON.stringify($scope.numberObjects["+data.label+"]) is: ",JSON.stringify($scope.numberObjects[data.label]));
								}*/
							focus();
						} 
                    } else {
						$scope.instructions = 'Now multiply the factors together to find the LCM.';
					}
					
                });
            }],
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            templateUrl: 'partials/directives/ms-find-gcf.html'
        };
    }]);