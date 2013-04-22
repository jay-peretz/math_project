/*global beforeEach, describe, expect, inject, it, spyOn */

describe('wrap', function () {
    beforeEach(module('mathSkills'));

    it('should wrap when passed a tag', inject(function ($filter) {
        var wrapFilter = $filter('wrap');
        expect(wrapFilter(3, 'str')).toBe('\\str{3}');
    }));
    
    it('should wrap when not passed a tag', inject(function ($filter) {
        var wrapFilter = $filter('wrap');
        expect(wrapFilter(3)).toBe(3);
    }));
});
