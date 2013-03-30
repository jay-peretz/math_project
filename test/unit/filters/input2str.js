/*global angular, beforeEach, browserTrigger, describe, expect, inject, it */

describe('Filter: input2str', function () {
    var input2str;

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($filter) {
        input2str = $filter('input2str');
    }));

    it('should convert a single tag', function () {
        expect(input2str('\\input{80}')).toBe('\\str{80}');
    });

    it('should convert all nested tags', function () {
        expect(input2str('\\frac{\\input{80}}{\\input{70}}')).toBe('\\frac{\\str{80}}{\\str{70}}');
        expect(input2str('\\mixed{\\input{30}}{\\frac{\\input{80}}{\\input{70}}}')).toBe('\\mixed{\\str{30}}{\\frac{\\str{80}}{\\str{70}}}');
    });
});
