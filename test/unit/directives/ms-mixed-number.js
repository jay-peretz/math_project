/*global angular, beforeEach, describe, expect, inject, it */

describe('<ms-mixed-number>', function () {
    var element;

    beforeEach(module('mathSkills'));
    beforeEach(inject(function ($compile, $rootScope) {
        var template = angular.element('<ms-mixed-number expected="\\mixed{\\input{1}}{\\frac{\\input{2}}{\\input{3}}}"></ms-mixed-number>');
        element = $compile(template)($rootScope.$new());
        $rootScope.$digest();
    }));

    it('should compile', function () {
        expect(element).toBeDefined();
    });

    it('should render its template', function () {
        // This example should contain three input boxes.
        expect(jQuery(element).find('input').length).toBe(3);
    });
});
