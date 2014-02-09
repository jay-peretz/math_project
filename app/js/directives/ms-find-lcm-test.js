'use strict';
/*global angular */

// \findlcm{2}{12}

angular.module('mathSkills')
    .config(['parserProvider', function (parserProvider) {
        parserProvider.register('findlcmtest', {
            directiveTemplate: '<ms-find-lcm-test expected={{expected}} label={{label}}></ms-find-lcm-test>'
        });
    }])
    .directive('msFindLcmTest', ['numberUtils', 'panelGroupData', 'parser', '$timeout', function (numberUtils, panelGroupData, parser, $timeout) {
																								  		console.log("test");
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

                $scope.numbers = null;
                $scope.completed = [];
                $scope.factorExp = '';
                $scope.factorStep = true;
                $scope.instructions = 'Factor each number down to 1.';

                $scope.$watch('expected', function () {
                    if ($scope.expected) {
                        // Get the numbers we are factoring.
                        $scope.numbers = parser.extractTag($scope.expected).args.map(Number);

                        // Get the modes of the numbers' prime factors.
                        $scope.primeFactors = modes($scope.numbers.map(numberUtils.primeFactors));

                        // Setup our input expression.
                        $scope.factorExp = getFactorExp();

                        // Compute the LCM.
                        $scope.lcm = '\\input{' + $scope.primeFactors.reduce(function (a, b) { return a * b; }, 1) + '}';
						console.log("$scope.primeFactors is: ",$scope.primeFactors," $scope.factorExp is: ",$scope.factorExp," $scope.lcm is: ",$scope.lcm);
                        focus();
                    }
                });

                $scope.$on('answer', function (e, data) {
					console.log("data is: ",data);
                    if (data.label !== 'lcm') {
                        e.stopPropagation();
						console.log("Number(parser.extractTag(data.answer).args[0]) is: ",Number(parser.extractTag(data.answer).args[0]),"$scope.primeFactors.indexOf(Number(parser.extractTag(data.answer).args[0])) is: ",$scope.primeFactors.indexOf(Number(parser.extractTag(data.answer).args[0])));
						if ($scope.primeFactors.indexOf(Number(parser.extractTag(data.answer).args[0])) !== -1){
							e.preventDefault();
								console.log("$scope.primeFactors.length is: ",$scope.primeFactors.length);
								if ($scope.primeFactors.length !== 0) {
										var factor = extractArg(data.answer);
										saveState(factor);
										setUpFactored(factor);
										remove(+factor, $scope.primeFactors);
										$scope.factorExp = getFactorExp();
										$scope.factoredExp = getFactoredExp();
										console.log("$scope.factorExp is: ",$scope.factorExp," $scope.factoredExp is: ",$scope.factoredExp);
								} else {
										$scope.done = true;
										$scope.instructions = 'Now multiply the factors together to find the LCM.';   
								}
				
							focus();
						}
                    }
					e.stopPropagation();
                });
            }],
            restrict: 'E',
            scope: {
                expected: '@',
                label: '@'
            },
            templateUrl: 'partials/directives/ms-find-lcm-test.html'
        };
    }]);
