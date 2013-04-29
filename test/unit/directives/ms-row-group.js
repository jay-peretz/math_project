/*global afterEach, angular, beforeEach, describe, expect, inject, it */

describe('<ms-row-group>', function () {
    var elem;

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($compile, $rootScope) {
        var template = angular.element('<ms-row-group expected="\\rowgrp{\\row{\\str{Row 1}}}{\\row{\\str{Row 2}}}{\\row{\\str{Row 3}}}"></ms-row-group>');
        elem = $compile(template)($rootScope);
        jQuery('body').append(elem);
        $rootScope.$digest();
    }));

    afterEach(function () {
        elem.remove();
    });

    it('should place all the passed in rows on the page.', function () {
        expect(jQuery('ms-row-group > table > tbody > tr').length).toBe(3);
    });

    it('should compile without an expected value', inject(function ($compile, $rootScope) {
        elem = $compile('<ms-row-group></ms-row-group>')($rootScope);
        $rootScope.$digest();
        expect(elem.find('table').length).toBe(1);
    }));
});
