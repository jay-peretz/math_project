/*global beforeEach, describe, expect, inject, it */

describe('add-decimals filter', function () {
    var subtractDecimalsFilter;

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($filter) {
        subtractDecimalsFilter = $filter('subtract-decimals');
    }));

    it('should return the difference of two decimal numbers', function () {
        expect(subtractDecimalsFilter([42.32, 1.1])).toBe(41.22);
    });
	
	it('should return the difference of three decimal numbers', function () {
        expect(subtractDecimalsFilter([333.333, 22.11, 1.1])).toBe(310.123);
    });
		
	it('should return the difference of four decimal numbers', function () {
        expect(subtractDecimalsFilter([9999.9999, 999.999, 99.99, 9.9])).toBe(8890.1109);
    });
	
	it('should return the difference of two decimal numbers with 8 decimal places', function () {
        expect(subtractDecimalsFilter([2.11111112, 1.89999999])).toBe(0.21111113);
    });

});
