/*global angular, beforeEach, describe, expect, inject, it */

describe('<ms-fraction>', function () {
    var element;

    beforeEach(module('mathSkills'));
    beforeEach(inject(function ($compile, $rootScope) {
        var template = angular.element('<ms-fraction expected="\\frac{\\input{1}}{\\input{2}}"></ms-fraction>');
        element = $compile(template)($rootScope.$new());
        $rootScope.$digest();
    }));

    it('should compile', function () {
        expect(element).toBeDefined();
    });

    it('should properly construct its template', function () {
        // For this example it should contain two input elements.
        expect(jQuery(element).find('input').length).toBe(2);
    });
});
