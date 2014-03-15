'use strict';
/*global angular */

// \findlcm{2}{12}

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('findlcm', {
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
                var getFactorExp = function () {
                        return '\\input{[' + $scope.primeFactors.join(',') + ']}';
                    },
                    getFactoredExp = function () {
                        return '\\grp{\\input{' + $scope.numbers.join('}}{\\input{') + '}}';
                    },
                    extractArg = function (tag) {
                        return parser.extractTag(tag).args[0];
                    },
                    divideIfDivisible = function (divisor, dividend) {
                        return dividend % divisor === 0 ? dividend / divisor : dividend;
                    },
                    saveState = function (factor) {
                        $scope.completed.push({
                            factor: factor,
                            numbers: angular.copy($scope.numbers)
                        });
                    },
					saveFinalState = function () {
                        $scope.completed.push({
                            factor: "",
                            numbers: angular.copy($scope.numbers)
                        });
                    },
                    setUpFactored = function (factor) {
                        $scope.numbers = $scope.numbers.map(divideIfDivisible.bind(null, +factor));
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
								$scope.numberObjects['numbObj' + ii] = {};
								$scope.numberObjects['numbObj' + ii].numbers = $scope.numbers;
								$scope.numberObjects['numbObj' + ii].primeFactors = $scope.primeFactors;
								$scope.numberObjects['numbObj' + ii].howManyPrimes = $scope.howManyPrimes;
								$scope.numberObjects['numbObj' + ii].factorExp = $scope.factorExp;
								$scope.numberObjects['numbObj' + ii].completed = [];
								$scope.numberObjects['numbObj' + ii].done = false;
								
								focus();
						}
                    }
					for (var ii = 0, len = $scope.allNumbers.length; ii < len; ii += 1) {
						console.log("JSON.stringify($scope.numberObjects) is: ",JSON.stringify($scope.numberObjects));
					}
                });

                $scope.$on('answer', function (e, data) {
					console.log("answer data is: ",JSON.stringify(data))
					console.log(" $scope.numberObjects[data.label].primeFactors.indexOf(Number(parser.extractTag(data.answer).args[0])) is: ",$scope.numberObjects[data.label].primeFactors.indexOf(Number(parser.extractTag(data.answer).args[0])));
                    if ($scope.allDone === false) {
                        e.stopPropagation();
						
						if ($scope.primeFactors.indexOf(Number(parser.extractTag(data.answer).args[0])) !== -1){
								var factor = extractArg(data.answer);
								saveState(factor);
								setUpFactored(factor);
								if ($scope.primeFactors.length > 1) {
										remove(+factor, $scope.primeFactors);
										$scope.factorExp = getFactorExp();
										$scope.factoredExp = getFactoredExp();
										$scope.factorExpLabel = "";
								} else {
										$scope.factorExpLabel = "lcm";
										$scope.done = true;
										remove(+factor, $scope.primeFactors);
										saveFinalState();
										$scope.factorExp = '\\input{' + $scope.lcmNumber + '}';
										$scope.instructions = 'Now multiply the factors together to find the LCM.';  
								}
							focus();
						}
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