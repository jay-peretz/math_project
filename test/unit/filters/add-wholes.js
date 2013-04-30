/*global beforeEach, describe, expect, inject, it */

describe('add-wholes filter', function () {
    var addWholesFilter;

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($filter) {
        addWholesFilter = $filter('add-wholes');
    }));

    it('should return the sum of two whole numbers', function () {
        expect(addWholesFilter([210, 420])).toBe(630);
    });
	
	it('should return the sum of three whole numbers', function () {
        expect(addWholesFilter([210, 422, 644])).toBe(1276);
    });
		
	it('should return the sum of four whole numbers', function () {
        expect(addWholesFilter([210, 422, 644, 753])).toBe(2029);
    });

});
