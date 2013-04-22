/*global beforeEach, describe, expect, inject, it, spyOn */

describe('hide-last', function () {
    beforeEach(module('mathSkills'));

    it('should return an array without the last element', inject(function ($filter) {
        var hidelastFilter = $filter('hideLast');
        expect(hidelastFilter([1,2,3,4,5,6], function() {return true;})).toEqual([1,2,3,4,5]);
    }));
	
	it('should return an array with no changes', inject(function ($filter) {
        var hidelastFilter = $filter('hideLast');
        expect(hidelastFilter([1,2,3,4,5,6])).toEqual([1,2,3,4,5,6]);
    }));
    
});
