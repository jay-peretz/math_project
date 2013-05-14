/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-placevalue>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-placevalue expected="\\placevalue{12345}{3}"></ms-placevalue>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    describe('when ms-placevalue tag element is added', function () {

        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(2);
        }));
		
		it('the display should have text reading "the 2 must stay the same"', inject(function ($rootScope) {
			expect(jQuery(element).find('table span').text()).toContain('the 2 must stay the same')																				
		}));
		
		it('should have a "2" in the 2nd td, 1st row of the last table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(1) td:nth-child(2)').text()).toContain('2')																				
		}));
		
		it('should have a carat character 2nd row of the last table of the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(2)').text()).toContain('^')																				
		}));
		
    });
});
