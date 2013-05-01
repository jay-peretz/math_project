/*global beforeEach, describe, expect, inject, it */

describe('subtract-wholes filter', function () {
    var subtractWholesFilter;

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($filter) {
        subtractWholesFilter = $filter('subtract-wholes');
    }));

    it('should return the difference of two whole numbers', function () {
        expect(subtractWholesFilter([430, 210])).toBe(220);
    });

});
