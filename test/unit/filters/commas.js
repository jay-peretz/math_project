/*global beforeEach, describe, expect, inject, it */

describe('commas filter', function () {

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($filter) {
        commasFilter = $filter('commas');
    }));
	
	it('should return a given whole number with commas', function () {
		expect(commasFilter(1234567890)).toBe('1,234,567,890');
	});
	
	it('should return a given whole number as a string', function () {
		expect(typeof commasFilter(1234567890)).toBe('string');
	});
	
	it('should return a given whole number less than 1000 without commas', function () {
		expect(commasFilter(890)).toBe('890');
	});
	
	it('should return a given decimal number as a string with the same digits and with no commas added', function () {
		expect(commasFilter(1234567890.1)).toBe('1234567890.1');
	});
		
	it('should return a given decimal number as a string', function () {
		expect(typeof commasFilter(1234567890.1)).toBe('string');
	});
	
	it('should return a non-number as submitted', function () {
		expect(commasFilter('this is a string')).toBe('this is a string');
	});

});
