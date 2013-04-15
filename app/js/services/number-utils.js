'use strict';
/*global angular */

angular.module('mathSkills.services')
    .service('numberUtils', [
        function () {
            var numberUtils = {
                divisibleBy: function (num, divisors) {
                    return divisors.filter(function (divisor) {
                        return num % divisor === 0;
                    });
                },
                integerArray: function (from, to) {
                    var ret = [];
                    for (; from <= to; from += 1) {
                        ret.push(from);
                    }
                    return ret;
                },
                isPrime: function (num) {
                    var ii;

                    // If it's even, positive, and not 2, it's not prime.
                    if (num % 2 === 0 && num > 2) {
                        return false;
                    }

                    // Check the odd numbers starting at 3.
                    for (ii = 3; ii < num - 1; ii += 2) {
                        if (num % ii === 0) {
                            return false;
                        }
                    }

                    return num > 1;
                },
                primeFactors: function (num) {
                    var factored = num;
                    return numberUtils
                        .divisibleBy(num, numberUtils.integerArray(1, num))
                        .filter(numberUtils.isPrime)
                        .reduce(function (factors, factor) {
                            while (factored % factor === 0) {
                                factors.push(factor);
                                factored /= factor;
                            }
                            return factors;
                        }, []);
                }
            };

            return numberUtils;
        }
    ]);
