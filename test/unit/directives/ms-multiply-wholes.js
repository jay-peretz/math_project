/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-multiply-wholes>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('partials/directives/ms-multiplication.html'))

    beforeEach(module('mathSkills'));
	
    describe('when ms-multiply-wholes tag element is added', function () {
																	  
		beforeEach(inject(function ($rootScope, $compile) {
			var tagString ='\\multiplywholes{math}{complete}{839}{3}';
			var template = angular.element('<ms-multiply-wholes expected='+tagString+'></ms-multiply-wholes>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));

		
        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));
		
		it('number in 5th td of 1st row of table of the display array should be 9', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(1) td:nth-child(5)').text()).toContain('9')																				
		}));
		
		it('value in 1st td of 2nd row of table of the display array should be "\xD7"', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(1)').text()).toContain('\xD7')																				
		}));
		
		it('number in 5th td of 2nd row of table of the display array should be 3', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(5)').text()).toContain('3')																				
		}));
		
		it('number in 5th td of 3rd row of table of the display array should be 7', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(3) td:nth-child(5)').text()).toContain('7')																				
		}));
		
    });
	
	describe('when ms-multiply-wholes first tag element is english', function () {
		// only matching first number in english display but should be sufficient
		
		beforeEach(inject(function ($rootScope, $compile) {
			var tagString ='\\multiplywholes{english}{partial}{839}{3}';
			var template = angular.element('<ms-multiply-wholes expected='+tagString+'></ms-multiply-wholes>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		it('should express the numbers as text', inject(function ($rootScope) {
			expect(jQuery(element).find('span').text()).toContain('839')																				
		}));

    });
	
});
