'use strict';
/*global angular */

// \findgcf{x}{2}{12} where x is the correct gcf for all subsequent parameters (numbers) 

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
						var finalString;
						switch (true) {
							// to begin, the first gcf table display has an input
							case (typeof dataLabel !== "undefined" && dataLabel === "active"):
								if ($scope.primeFactors.length > 1) {
									finalString = '\\input{[' + $scope.primeFactors.join(',') + ']}';
								} else {
									finalString = '\\input{' + $scope.primeFactors + '}';
								}
								break;
							case (typeof dataLabel !== "undefined" && dataLabel !== "active"):
								if ($scope.numberObjects[dataLabel].primeFactors.length > 1) {
									finalString = '\\input{[' + $scope.numberObjects[dataLabel].primeFactors.join(',') + ']}';
								} else {
									finalString = '\\input{' + $scope.numberObjects[dataLabel].primeFactors + '}';
								}
								break;
							// to begin, only the first gcf table display has an input
							case (typeof dataLabel === "undefined"):
								finalString = '\\html{&nbsp;}';
								break;
						}
						return finalString;
                    },
                    getFactoredExp = function (dataLabel) {
						var getFinalString;
						if (typeof dataLabel !== "undefined") {
							getFinalString = '\\grp{\\input{' + $scope.numberObjects[dataLabel].numbers.join('}}{\\input{') + '}}';
						} else {
                        	getFinalString = '\\grp{\\input{' + $scope.numbers.join('}}{\\input{') + '}}';
						};
						return getFinalString;
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
                    setUpFactored = function (factor, dataLabel) {
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
					$scope.borderOrNot = function (dataLabel) {
						if ($scope.numberObjects[dataLabel].factorExpLabel === "gcf") {
							return ('noborder');
						} else {
							return ('');
						}
					};
					$scope.borderIndexed = function (index, dataLabel) {
						if (index === $scope.numberObjects[dataLabel].howManyPrimes) {
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
						$scope.answerNumber = $scope.allNumbers.shift();
						$scope.allNumbersLength = $scope.allNumbers.length;
						$scope.allPrimeFactors = modes($scope.allNumbers.map(numberUtils.primeFactors));
						$scope.gcfNumber = $scope.allPrimeFactors.pop();
						for (var ii = 0, len = $scope.allNumbersLength; ii < len; ii += 1) {
								// Get the numbers we are factoring.
								$scope.numbers = [$scope.allNumbers[ii]];
								// Get the modes of the numbers' prime factors.
								$scope.primeFactors = modes($scope.numbers.map(numberUtils.primeFactors));
								$scope.howManyPrimes = $scope.primeFactors.length;
								// Setup our input expression.
								if (ii === 0) {
									$scope.factorExp = getFactorExp('active');
								} else {
									$scope.factorExp = getFactorExp();
								}
								// set up an object property of $scope.numberObjects for each number submitted in the tag
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
					//console.log("answer data is: ",JSON.stringify(data))
					// numbObjPlusOne is element of $scope.numberObjects that's next
					var numbObjNumber = data.label.substr(-1),
						numbObjPlusOne = 'numbObj' + (+numbObjNumber + 1);
					
					if (data.label !== "finalGcf") {
						e.stopPropagation();
					}
					
                    if ($scope.allDone === false) {
						console.log("parser.extractTag(data.answer) is: ",Number(parser.extractTag(data.answer).args[0]));
						if ($scope.numberObjects[data.label].primeFactors.indexOf(Number(parser.extractTag(data.answer).args[0])) !== -1){
							var factor = extractArg(data.answer);
							saveState(factor,data.label);
							setUpFactored(factor,data.label);
							if ($scope.numberObjects[data.label].primeFactors.length > 1) {
									remove(+factor, $scope.numberObjects[data.label].primeFactors);
									$scope.numberObjects[data.label].factorExp = getFactorExp(data.label);
									$scope.numberObjects[data.label].factoredExp = getFactoredExp(data.label);
									$scope.factorExpLabel = "";
							} else {
									$scope.numberObjects[data.label].factorExpLabel = "gcf";
									$scope.numberObjects[data.label].done = true;
									
									remove(+factor, $scope.numberObjects[data.label].primeFactors);
									saveFinalState(data.label);
									$scope.numberObjects[data.label].factorExp = "\\html{&nbsp;}"; 
									//set up input for next GCF number, if one exists
									if (typeof $scope.numberObjects[numbObjPlusOne] !== "undefined") {		
										if ($scope.numberObjects[numbObjPlusOne].primeFactors.length > 1) {
											$scope.numberObjects[numbObjPlusOne].factorExp =  '\\input{[' + $scope.primeFactors.join(',') + ']}';
										} else {
											$scope.numberObjects[numbObjPlusOne].factorExp =  '\\input{' + $scope.primeFactors + '}';
										}
									}
									$scope.numberObjects[data.label].numbers = ""; 
							}
							focus();
						} 
												
						$scope.allDone = true;
						for (var numObj in $scope.numberObjects) {
							if ($scope.numberObjects[numObj].done === false) {
								$scope.allDone = false;
							}
						}
						if ($scope.allDone === true) {
							$scope.doneExp = '\\input{' + $scope.answerNumber + '}';
							$scope.instructions = 'Now enter the greatest common factor:';
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