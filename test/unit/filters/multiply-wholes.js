/*global beforeEach, describe, expect, inject, it */

describe('multiply-wholes filter', function () {
    var multiplyWholesFilter;

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($filter) {
        multiplyWholesFilter = $filter('multiply-wholes');
    }));

    it('should return the product of two whole numbers', function () {
        expect(multiplyWholesFilter([41, 22])).toBe(902);
    });

});
