/*global angular, beforeEach, describe, expect, inject, it */

describe('<ms-mixed-number>', function () {
    var element;

    beforeEach(module('mathSkills'));
	
	describe('when ms-mixed-number tag element is added', function () {
	
		beforeEach(inject(function ($compile, $rootScope) {
			var template = angular.element('<ms-mixed-number expected="\\mixed{\\input{1}}{\\frac{\\input{2}}{\\input{3}}}"></ms-mixed-number>');
			element = $compile(template)($rootScope.$new());
			$rootScope.$digest();
		}));
	
		it('should compile', function () {
			expect(element).toBeDefined();
		});
	
		it('should render its template', function () {
			// This example should contain three input boxes.
			expect(jQuery(element).find('input').length).toBe(3);
		});
		
	});
	
	describe('when ms-mixed-number tag element is added for display with the mixed portion string = "\xA0"', function () {
	
		beforeEach(inject(function ($compile, $rootScope) {
			var tagString ='\\mixed{\\str{"\xA0"}}{\\frac{\\fracstr{2}}{\\fracstr{3}}}';
        	var template = angular.element('<ms-mixed-number expected='+tagString+'></ms-mixed-number expected>');
			element = $compile(template)($rootScope.$new());
			$rootScope.$digest();
		}));
	
		it('should compile', function () {
			expect(element).toBeDefined();
		});
	
		it('should render its template', function () {
			// This example should contain three input boxes.
			expect(jQuery(element).find('table').html()).toContain("\str{&quot;&nbsp;&quot;}");
		});
		
	});
	
});
