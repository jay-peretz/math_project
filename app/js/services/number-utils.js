'use strict';
/*global angular */

angular.module('mathSkills.services')
    .service('numberUtils', [
        'parser',
        function (parser) {
            var numberUtils = {
                /**
                 * Sub namespace for Fraction utilities.
                 */
                frac: {
                    /**
                     * equiv :: [String] -> Boolean
                     *
                     * Determines whether two fractions or more are equivalent.
                     *
                     * @param [String] fracTags An array of frac tags to compare.
                     *
                     * @return Boolean Whether the fractions are equivalent.
                     */
                    equiv: function (fracTags) {
                        return fracTags.map(numberUtils.frac.simplify)
                            .reduce(function (result, cur) {
                                return result === cur ? cur : false;
                            });
                    },
                    /**
                     * multiply :: [String] -> String
                     *
                     * Multiplies two or more frac tags together.  Returns a frac
                     * tag with inputs expecting the product of the fractions.
                     *
                     * @param [String] fracTags An array of two or more \frac tags.
                     * @param String   wrapTag  The tag used to wrap the numerator
                     *                          and denominator in the return string.
                     *
                     * @return String A new \frac tag with \input numerator and
                     *   denominator.  Its \inputs expect the product of fracTags.
                     */
                    multiply: function (fracTags, wrapTag) {
                        wrapTag = wrapTag || 'input';
                        return fracTags.map(function (tag) {
                                return parser.extractTag(tag).args.map(function (tag) {
                                    return +parser.extractTag(tag).args[0];
                                });
                            }).reduce(function (total, cur) {
                                total[0] *= cur[0];
                                total[1] *= cur[1];
                                return total;
                            }, [1, 1]).reduce(function (tagString, piece) {
                                return tagString + '{\\' + wrapTag + '{' + piece + '}}';
                            }, '\\frac');
                    },
                    /**
                     * simplify :: String -> String
                     *
                     * Simplifies a fraction.
                     *
                     * @param String fracTag The \frac tag to simplify.
                     *
                     * @return String The simplified \frac tag (numerator and
                     *   denominator will be expressed as \strs).
                     */
                    simplify: function (fracTag) {
                        var args = parser.extractTag(fracTag).args,
                            num = +parser.extractTag(args[0]).args[0],
                            den = +parser.extractTag(args[1]).args[0],
                            leastPart = num > den ? den : num,
                            ii;

                        for (ii = 2; ii <= leastPart; ii += 1) {
                            while (num % ii === 0 && den % ii === 0) {
                                num = num / ii;
                                den = den / ii;
                                leastPart = leastPart / ii;
                            }
                        }

                        return '\\frac{\\str{' + [num, den].join('}}{\\str{') + '}}';
                    },
                    /**
                     * toFrac :: [Numbers] -> String
                     *
                     * Turns a fraction tuple (a two-length array) into a \frac tag.
                     *
                     * @param [Number] pieces    The fraction tuple
                     * @param Number   pieces[0] Numerator
                     * @param Number   pieces[1] Denominator
                     *
                     * @return String The \frac tag string.
                     */
                    toFrac: function (pieces) {
                        return '\\frac{\\str{' + pieces.join('}}{\\str{') + '}}';
                    }
                },
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
                },
 
// Justin's cancel fraction metods............................

                getFactors : function (num) {
                    var arr = [];
                    for (var i = 2; i <= num; ++i) {
                        if (num % i === 0) {
                            arr.push(i.toString());
                        }
                    }
                    return arr;
                },

                getCommonFactors : function (arr1, arr2) {
                    var arr = arr1.filter(function (val){
                        return (arr2.indexOf(val) !== -1);
                    });
                    return arr;
                },

                divFactors : function (num, arr) {
                    var divArr = arr.map(function (i){
                        return (num / i).toString();
                    });
                    return divArr;
                },

                getFactoredInput : function (num1, num2) {
                    var arr = this.getCommonFactors(this.getFactors(num1), this.getFactors(num2));
                    return [this.divFactors(num1, arr), this.divFactors(num2, arr)];
                },

                uniqueArr : function (arr) {
                    var unique=arr.filter(function(itm,i,a){
                        return i==a.indexOf(itm);
                    });
                    return unique;
                }
				
            };

            return numberUtils;
        }
    ]);
