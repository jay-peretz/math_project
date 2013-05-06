/*global beforeEach, describe, expect, inject, it */

describe('multiply-decimals filter', function () {
    var multiplyDecimalsFilter;

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($filter) {
        multiplyDecimalsFilter = $filter('multiply-decimals');
    }));

    it('should return the product of a decimal and a whole number', function() {
        expect(multiplyDecimalsFilter([1.1, 2])).toBe(2.2);
    });

    it('should return the product of two decimal numbers', function () {
        expect(multiplyDecimalsFilter([1.1, 42.32])).toBe(46.552);
    });
	
	it('should return the product of three decimal numbers', function () {
        expect(multiplyDecimalsFilter([22.11, 333.333, 1.1])).toBe(8106.991893);
    });
		
	it('should return the product of four decimal numbers', function () {
        expect(multiplyDecimalsFilter([9.9, 99.99, 999.999, 999.999])).toBe(989899020.198989901);
    });
	
	it('should fail to return the accurate product of two decimal numbers with 8 decimal places', function () {
        expect(multiplyDecimalsFilter([1.11111112, 2.88888889])).not.toBe(3.2098765701234568);
    });

});
