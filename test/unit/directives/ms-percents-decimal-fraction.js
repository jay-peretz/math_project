/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-percents-decimal-fraction>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));

    describe('when ms-percents-decimal-fraction tag element is added for percent to mixed number', function () {
																  
		beforeEach(inject(function ($rootScope, $compile) {
			var template = angular.element('<ms-percents-decimal-fraction expected={{"\\percentsdecimalfrac{0.75}{decimalNotPercent}{percentAsFraction}"}}></ms-percents-decimal-fraction>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		it('should have a table on the page for fractions', inject(function ($rootScope) {
			expect(jQuery(element).find('table').length).not.toBe('0');																				
		}));
		
		it('should have the number 75 on the page', inject(function ($rootScope) {
        	expect(jQuery(element).text()).toContain('75');	
    	}));
		
		it('should have the number 100 on the page', inject(function ($rootScope) {
        	expect(jQuery(element).text()).toContain('100');	
    	}));
		
		it('should have the number 3 on the page', inject(function ($rootScope) {
        	expect(jQuery(element).text()).toContain('75');	
    	}));
		
		it('should have the number 4 on the page', inject(function ($rootScope) {
        	expect(jQuery(element).text()).toContain('100');	
    	}));

		
    });

	
});
