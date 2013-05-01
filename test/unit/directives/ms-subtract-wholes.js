/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-subtract-wholes>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('partials/directives/ms-subtraction.html'))

    beforeEach(module('mathSkills'));

    describe('when ms-subtract-wholes tag element is added', function () {
																	  
		beforeEach(inject(function ($rootScope, $compile) {
			var tagString ='\\subtractwholes{math}{complete}{110}{99}';
			var template = angular.element('<ms-subtract-wholes expected='+tagString+'></ms-subtract-wholes>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));

        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));
		
		it('number in 4th td of 2nd row of table of the display array should be 0', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(4)').text()).toContain('0')																				
		}));
		
		it('number in 4th td of 3rd row of table of the display array should be 1', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(3) td:nth-child(4)').text()).toContain('1')																				
		}));
		
		it('value in 1st td of 4th row of table of the display array should be -', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(4) td:nth-child(1)').text()).toContain('-')																				
		}));
		
		it('number in 4th td of 4th row of table of the display array should be 9', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(4) td:nth-child(4)').text()).toContain('9')																				
		}));
		
		it('number in 4th td of 5th row of table of the display array should be 1', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(5) td:nth-child(4)').text()).toContain('1')																				
		}));
		
    });
	
	describe('when ms-subtract-wholes first tag element is english', function () {
																			  
		beforeEach(inject(function ($rootScope, $compile) {
			var tagString ='\\subtractwholes{english}{partial}{832}{86}';
			var template = angular.element('<ms-subtract-wholes expected='+tagString+'></ms-subtract-wholes>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
																			  
	    it('should express the numbers as text', inject(function ($rootScope) {
			// two hyphens after the text string? - matched for now
			expect(jQuery(element).find('span').text()).toContain('832 minus 86')							
		}));
		
    });
	
});
