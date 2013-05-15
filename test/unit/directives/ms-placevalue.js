/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-placevalue>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(module('partials/directives/ms-placevalue.html'))

    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-placevalue expected="\\placevalue{12345}{3}{showanswer}"></ms-placevalue>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    describe('when ms-placevalue tag element is added', function () {
		
		it('the display should have text reading "the 2 must stay the same"', inject(function ($rootScope) {
			expect(jQuery(element).find('table span').text()).toContain('the 2 must stay the same')																				
		}));
		
		// check that number display and round place pointer are working correctly
		it('should have a "2" in the 2nd td, 1st row of the first table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(1) td:nth-child(2)').text()).toContain('2')																				
		}));
		
		it('should have a "3" in the 3rd td, 1st row of the first table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(1) td:nth-child(3)').text()).toContain('3')																				
		}));
		
		// check that correct help text is appearing
		it('should have a carat character 2nd row of the first table of the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(2)').text()).toContain('^')																				
		}));
		
		it('should have a "2" in the 2nd td, 1st row of the last table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(1) td:nth-child(2)').text()).toContain('2')																				
		}));
		
		// check that rounding is happening correctly
		it('should have a "0" in the 3rd td, 1st row of the last table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(1) td:nth-child(3)').text()).toContain('0')																				
		}));
		
		it('should have a carat character 2nd row of the last table of the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(2)').text()).toContain('^')																				
		}));
		
    });
});
