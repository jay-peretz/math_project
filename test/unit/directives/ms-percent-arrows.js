/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-percent-arrows>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('partials/directives/ms-multiply-decimals-power-ten.html'))

    beforeEach(module('mathSkills'));

    describe('when ms-percent-arrows tag element is added for decimal 0.016', function () {
																  
		beforeEach(inject(function ($rootScope, $compile, $filter) {
			var tagString ='\\percentarrows{0.016}{100}{decimal}{percent}';
			var template = angular.element('<ms-percent-arrows expected='+tagString+'></ms-percent-arrows>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		it('should have a table on the page for fractions', inject(function ($rootScope) {
			expect(jQuery(element).find('table').length).not.toBe('0');																				
		}));
		
		//check that zero has been correctly added back into the display after the javascript multiplication 
		it('number in 1st td of 1st row of table of the display array should be 0', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(1) td:nth-child(1)').text()).toContain('0')																				
		}));
		
		//check that the carat that represents the new decimal position is three places over
		it('character in 3rd td of 2nd row of table of the display array should be ^', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(3)').text()).toContain('^')																				
		}));
		
    });

	
});
