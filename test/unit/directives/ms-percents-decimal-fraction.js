/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-percents-decimal-fraction>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));

    describe('when ms-percents-decimal-fraction tag element is added for 4.8 decimal to mixed number', function () {
																  
		beforeEach(inject(function ($rootScope, $compile, $filter) {
			var tagString ='\\percentsdecimalfrac{\\str{4.8}}{decimalNotPercent}{percentAsFraction}';
			var template = angular.element('<ms-percents-decimal-fraction expected='+tagString+'></ms-percents-decimal-fraction>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		it('should have a table on the page for fractions', inject(function ($rootScope) {
			expect(jQuery(element).find('table').length).not.toBe('0');																				
		}));
		
		it('should have the number 8 on the page', inject(function ($rootScope) {
        	expect(jQuery(element).html()).toContain('8');	
    	}));
		
		it('should have the number 10 on the page', inject(function ($rootScope) {
        	expect(jQuery(element).text()).toContain('10');	
    	}));
		
		it('should have the number 4 on the page', inject(function ($rootScope) {
        	expect(jQuery(element).text()).toContain('4');	
    	}));
		
		it('should have the number 5 on the page', inject(function ($rootScope) {
        	expect(jQuery(element).text()).toContain('5');	
    	}));

		
    });

	
});
