/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-multiply-decimals>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('partials/directives/ms-multiplication.html'))

    beforeEach(module('mathSkills'));
	
    describe('when ms-multiply-decimals tag element is added', function () {
																	  
		beforeEach(inject(function ($rootScope, $compile) {
			var tagString ='\\multiplydecimals{math}{complete}{8.4}{6.7}';
			var template = angular.element('<ms-multiply-decimals expected='+tagString+'></ms-multiply-decimals>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		it('number in 5th td of 1st row of table of the display array should be 4', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(1) td:nth-child(5)').text()).toContain('4')																				
		}));
		
		it('value in 5th td of 2nd row of table of the display array should be 7', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(5)').text()).toContain('7')																				
		}));
		
		it('number in 5th td of 3rd row of table of the display array should be 8', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(3) td:nth-child(5)').text()).toContain('8')																				
		}));
		
		it('number in 5th td of 4th row of table of the display array should be 4', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(4) td:nth-child(5)').text()).toContain('4')																				
		}));
		
		it('number in 5th td of 5th row of table of the display array should be 2', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(5) td:nth-child(5)').text()).toContain('2')																				
		}));
		
    });
	
	describe('when ms-multiply-decimals first tag element is english', function () {
		// this is not actually working- leaving as a stub- ng-hide not working in test, always on page
		
		beforeEach(inject(function ($rootScope, $compile) {
			var tagString ='\\multiplydecimals{english}{complete}{8.4}{6.7}';
			var template = angular.element('<ms-multiply-decimals expected='+tagString+'></ms-multiply-decimals>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		it('should express the numbers as text', inject(function ($rootScope) {
			expect(jQuery(element).find('span').text()).toContain('\xD7')																				
		}));

    });
	
});
