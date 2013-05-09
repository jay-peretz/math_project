/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-multiply-decimals-power-ten>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('partials/directives/ms-multiply-decimals-power-ten.html'))

    beforeEach(module('mathSkills'));
	
    describe('when ms-multiply-decimals-power-ten tag element is added', function () {
																	  
		beforeEach(inject(function ($rootScope, $compile) {
			var tagString ='\\multiplydecpowten{7.6}{0.01}';
			var template = angular.element('<ms-multiply-decimals-power-ten expected='+tagString+'></ms-multiply-decimals-power-ten>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));
		
		it('number in 1st td of 1st row of table of the display array should be 0', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(1) td:nth-child(1)').text()).toContain('0')																				
		}));
		
		it('value in 2nd td of 1st row of table of the display array should be .', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(1) td:nth-child(2)').text()).toContain('.')																				
		}));
		
		it('number in 5th td of 1st row of table of the display array should be 6', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(1) td:nth-child(5)').text()).toContain('6')																				
		}));
		
		it('character in 2th td of 2nd row of table of the display array should be ^', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(2)').text()).toContain('^')																		
		}));
		
		it('4th td of 3rd row of table of the display array should be dynamically styled with arrowheadRight', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(3) td:nth-child(4) span').attr('class')).toBe('arrowheadLeft')																				
		}));
		
    });
	
});
