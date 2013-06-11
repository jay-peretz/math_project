/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-commas-number>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));

    describe('when ms-commas-number tag element is added with a number less than three digits', function () {
																	  
		beforeEach(inject(function ($rootScope, $compile, $filter) {
			commasFilter = $filter('commas');
			var numberString = commasFilter(123);
			var template = angular.element('<ms-commas-number expected="\\commasnumber{'+numberString+'}" label={{label}}></ms-commas-number>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		it('the display should have one span only', inject(function ($rootScope, $filter) {
			expect(jQuery(element).find('span').length).toBe(1)																				
		}));
		
    });
	
	 describe('when ms-commas-number tag element is added with a number of more than six digits', function () {
																  
		beforeEach(inject(function ($rootScope, $compile, $filter) {
			commasFilter = $filter('commas');
			var numberString = commasFilter(1234567);
			var template = angular.element('<ms-commas-number expected="\\commasnumber{'+numberString+'}" label={{label}}></ms-commas-number>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		it('the display should have 5 spans', inject(function ($rootScope, $filter) {
			expect(jQuery(element).find('span').length).toBe(5)																					
		}));
		
		it("the display should have html that reads <span>1</span><span class=\'comma-size\'>,</span><span>234</span><span class=\'comma-size\'>,</span><span>567</span>", inject(function ($rootScope, $filter) {
			expect(jQuery(element).html()).toBe('<span>1</span><span class=\"comma-size\">,</span><span>234</span><span class=\"comma-size\">,</span><span>567</span>');																				
		}));
		
    });
	
});
