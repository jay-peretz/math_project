/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-placevalue>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(module('partials/directives/ms-placevalue.html'))

    describe('when ms-placevalue tag element is added with whole number', function () {
																  
		beforeEach(inject(function ($rootScope, $compile) {
			var template = angular.element('<ms-placevalue expected="\\placevalue{12345}{3}{showanswer}"></ms-placevalue>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		/*//code below shows the html on the page in the karma error msg, for debugging purposes
		it('show complete html', inject(function ($rootScope) {
			expect(jQuery(element).find('span ').html()).toBe('1')																				
		}));*/
		
		it('the display should have text reading "The whole number digits to the right of the rounded value become zeros."', inject(function ($rootScope) {
			expect(jQuery(element).find('table span').text()).toContain('The whole number digits to the right of the rounded value become zeros.')																				
		}));
		
		// check that number display is working correctly
		it('should have a "2" in the 2nd td, 1st row of the first table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(1) td:nth-child(2)').text()).toContain('2')																				
		}));
		
		// check that number display includes commas where applicable
		it('should have a "," in the 3rd td, 1st row of the first table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(1) td:nth-child(3)').text()).toContain(',')																				
		}));
		
		// check that number display is working correctly
		it('should have a "3" in the 4th td, 1st row of the first table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(1) td:nth-child(4)').text()).toContain('3')																				
		}));
		
		// check that the round place pointer is working correctly
		it('should have a carat character 2nd row of the first table of the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(2)').text()).toContain('^')																				
		}));
		
		// check that rounding is happening correctly
		it('should have a "0" in the 4th td, 1st row of the last table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(1) td:nth-child(4)').text()).toContain('0')																				
		}));
		
		it('should have a carat character 2nd row of the last table of the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(2)').text()).toContain('^')																				
		}));
		
    });
	
	describe('when ms-placevalue tag element is added with decimal number', function () {
																  
		beforeEach(inject(function ($rootScope, $compile) {
			var template = angular.element('<ms-placevalue expected="\\placevalue{12345.678}{4}{showanswer}"></ms-placevalue>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		/*//code below shows the html on the page in the karma error msg, for debugging purposes
		it('show complete html', inject(function ($rootScope) {
			expect(jQuery(element).find('span ').html()).toBe('1')																				
		}));*/
		
		it('the display should have text reading "The digits after the decimal point to the right of the rounded value are dropped."', inject(function ($rootScope) {
			expect(jQuery(element).find('table:nth-child(3) tr:nth-child(1) td:nth-child(1)').text()).toContain('The digits after the decimal point to the right of the rounded value are dropped.')																				
		}));
		
		// check that number display and round place pointer are working correctly
		it('should have a "2" in the 2nd td, 1st row of the first table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(1) td:nth-child(2)').text()).toContain('2')																				
		}));
		
		it('should have a carat character 2nd row of the first table of the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(2)').text()).toContain('^')																				
		}));
		
		it('should have a "6" in the 5th td, 1st row of the last table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(1) td:nth-child(5)').text()).toContain('6')																				
		}));
		
		// check that rounding is happening correctly
		it('should have a "" in the 7th td, 1st row of the last table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(1) td:nth-child(7)').text()).toContain('')																				
		}));
		
		it('should have a carat character 2nd row of the last table of the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(2)').text()).toContain('^')																				
		}));
		
    });
	
	describe('when ms-placevalue tag element is added and the place to round has a 9 and rounds up ', function () {
																  
		beforeEach(inject(function ($rootScope, $compile) {
			var template = angular.element('<ms-placevalue expected="\\placevalue{12395}{1}{showanswer}"></ms-placevalue>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		/* code below shows the html on the page in the karma error msg, for debugging purposes
		it('show complete html', inject(function ($rootScope) {
			expect(jQuery(element).find('span ').html()).toBe('1')																				
		}));*/
		
		it('the display should have text reading "if necessary, continue to carry and add"', inject(function ($rootScope) {
			expect(jQuery(element).find('table span').text()).toContain('if necessary, continue to carry and add')																				
		}));
		
		// check that number display and round place pointer are working correctly
		it('should have a "9" in the 5th td, 1st row of the first table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(1) td:nth-child(5)').text()).toContain('9')																				
		}));
		
		// check that rounding is happening correctly
		it('should have a "0" in the 5th td, 1st row of the last table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(1) td:nth-child(5)').text()).toContain('0')																				
		}));
		
		// check that rounding is happening correctly
		it('should have a "4" in the 4th td, 1st row of the last table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(1) td:nth-child(4)').text()).toContain('4')																				
		}));
		
		it('should have a carat character 2nd row of the last table of the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(2)').text()).toContain('^')																				
		}));
		
    });

	describe('when ms-placevalue tag element is added with decimal number less than one', function () {
																  
		beforeEach(inject(function ($rootScope, $compile) {
			var template = angular.element('<ms-placevalue expected="\\placevalue{0.678}{2}{showanswer}"></ms-placevalue>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		/*// code below shows the html on the page in the karma error msg, for debugging purposes
		it('show complete html', inject(function ($rootScope) {
			expect(jQuery(element).find('span ').html()).toBe('1')																				
		}));*/
		
		// check that number display is working correctly
		it('should have a "0" in the 1st td, 1st row of the first table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(1) td:nth-child(1)').text()).toContain('0')																				
		}));
		
		it('should have a "." in the 2nd td, 1st row of the first table in the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:first tr:nth-child(1) td:nth-child(2)').text()).toContain('.')																				
		}));

    });
	
	describe('when ms-placevalue tag element is added and rounding is expected after the decimal point at a place that rounds to zero', function () {
																  
		beforeEach(inject(function ($rootScope, $compile) {
			var template = angular.element('<ms-placevalue expected="\\placevalue{7.7195}{2}{showanswer}"></ms-placevalue>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		// check that number display is working correctly
		it('"0" should show in the display array at the place where rounding', inject(function ($rootScope) {
			expect(jQuery(element).find('table:last tr:nth-child(1) td:nth-child(5)').text()).toContain('0')																				
		}));

    });
	
});
