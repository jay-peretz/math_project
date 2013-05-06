/*global beforeEach, describe, expect, inject, it */

describe('add-decimals filter', function () {
    var addDecimalsFilter;

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($filter) {
        addDecimalsFilter = $filter('add-decimals');
    }));

    it('should return the sum of a decimal number and a whole number', function () {
        expect(addDecimalsFilter([1.1, 42])).toBe(43.1);
    });

    it('should return the sum of two decimal numbers', function () {
        expect(addDecimalsFilter([1.1, 42.32])).toBe(43.42);
    });
	
	it('should return the sum of three decimal numbers', function () {
        expect(addDecimalsFilter([22.11, 333.333, 1.1])).toBe(356.543);
    });
		
	it('should return the sum of four decimal numbers', function () {
        expect(addDecimalsFilter([9.9, 99.99, 999.999, 9999.9999])).toBe(11109.8889);
    });
	
	it('should return the sum of two decimal numbers with 8 decimal places', function () {
        expect(addDecimalsFilter([1.11111112, 2.88888889])).toBe(4.00000001);
    });

});
