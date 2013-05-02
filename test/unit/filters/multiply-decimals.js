/*global beforeEach, describe, expect, inject, it */

describe('multiply-decimals filter', function () {
    var multiplyDecimalsFilter;

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($filter) {
        multiplyDecimalsFilter = $filter('multiply-decimals');
    }));

    it('should return the product of two decimal numbers', function () {
        expect(multiplyDecimalsFilter([1.1, 42.32])).toBe(46.552);
    });
	
	it('should return the product of three decimal numbers', function () {
        expect(multiplyDecimalsFilter([22.11, 333.333, 1.1])).toBe(8106.991893);
    });
		
	it('should return the product of four decimal numbers', function () {
        expect(multiplyDecimalsFilter([9.9, 99.99, 999.999, 1.1])).toBe(1088890.0111089);
    });
	
	it('should return the product of two decimal numbers with 8 decimal places', function () {
        expect(multiplyDecimalsFilter([1.11111112, 2.88888889])).toBe(3.2098765701234568);
    });
	
	it('will return an inaccurate answer for certain large decimal multiplications', function () {
        expect(multiplyDecimalsFilter([9.9, 99.99, 999.999, 999.999])).not.toBe(989899020.198989901);
    });

});
