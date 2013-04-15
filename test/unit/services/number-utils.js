/*global beforeEach, describe, expect, inject, it */

describe('numberUtils', function () {
    var numberUtils;

    beforeEach(module('mathSkills.services'));

    beforeEach(inject(function (_numberUtils_) {
        numberUtils = _numberUtils_;
    }));

    describe('divisibleBy', function () {
        it('should return an array of divisors', function () {
            expect(numberUtils.divisibleBy(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 5, 10]);
        });

        it('should return an empty array if none of the divisors divide evenly', function () {
            expect(numberUtils.divisibleBy(7, [2, 3, 4, 5, 6, 8, 9])).toEqual([]);
        });
    });

    describe('integerArray', function () {
        it('should return an array of integers within a range', function () {
            expect(numberUtils.integerArray(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
    });

    describe('isPrime', function () {
        it('should correctly identify prime numbers', function () {
            expect(numberUtils.isPrime(3)).toBe(true);
            expect(numberUtils.isPrime(7)).toBe(true);
            expect(numberUtils.isPrime(13)).toBe(true);
            expect(numberUtils.isPrime(17)).toBe(true);
            expect(numberUtils.isPrime(41)).toBe(true);
        });

        it('should correctly identify non-prime numbers', function () {
            expect(numberUtils.isPrime(1)).toBe(false);
            expect(numberUtils.isPrime(25)).toBe(false);
            expect(numberUtils.isPrime(9)).toBe(false);
            expect(numberUtils.isPrime(39)).toBe(false);
            expect(numberUtils.isPrime(77)).toBe(false);
        });
    });

    describe('primeFactors', function () {
        it('should return all the prime factors for a number', function () {
            expect(numberUtils.primeFactors(10)).toEqual([2, 5]);
            expect(numberUtils.primeFactors(12)).toEqual([2, 2, 3]);
            expect(numberUtils.primeFactors(25)).toEqual([5, 5]);
            expect(numberUtils.primeFactors(18)).toEqual([2, 3, 3]);
            expect(numberUtils.primeFactors(17)).toEqual([17]);
        });
    });
});
