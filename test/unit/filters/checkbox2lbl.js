/*global beforeEach, describe, expect, inject, it */

describe('checkbox2lbl', function () {
    var checkbox2lblFilter;

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($filter) {
        checkbox2lblFilter = $filter('checkbox2lbl');
    }));

    it('should replace a single checkbox', function () {
        expect(checkbox2lblFilter('\\chk{Check This}{T}')).toBe('\\chklbl{Check This}{T}');
    });

    it('should replace a nested checkbox', function () {
        expect(checkbox2lblFilter('\\row{\\chk{Check This}{T}}')).toBe('\\row{\\chklbl{Check This}{T}}');
    });

    it('should replace multiple, nested checkboxes', function () {
        expect(checkbox2lblFilter('\\row{\\chk{Check This}{T}}{\\chk{Dont Check This}{F}}')).toBe('\\row{\\chklbl{Check This}{T}}{\\chklbl{Dont Check This}{F}}');
    });
});
