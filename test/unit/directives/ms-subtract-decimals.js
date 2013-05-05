/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-subtract-decimals>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('partials/directives/ms-subtraction.html'))

    beforeEach(module('mathSkills'));

    describe('when ms-subtract-decimals tag element is added with values 27.15 and 2.75', function () {
																	  
		beforeEach(inject(function ($rootScope, $compile) {
			var tagString ='\\subtractdecimals{math}{complete}{27.15}{2.75}';
			var template = angular.element('<ms-subtract-decimals expected='+tagString+'></ms-subtract-decimals>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
		
		beforeEach(function() {
		  this.addMatchers({
			toHaveClass: function(className) {
			  return this.actual.hasClass(className);
			}
		  });
		});

        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));
		
		it('number in 4th td of 1st row of table of the display array should be 6', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(1) td:nth-child(4)').text()).toContain('6')																				
		}));
		
		it('number in 4th td of 2nd row of table of the display array should be 7', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(4)').text()).toContain('7')																				
		}));
		
		it('number in 4th td of 2nd row of table of the display array should be dynamically styled with line-through', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(4)')).toHaveClass('line_through_dimmed')																				
		}));
		
		it('value in 1st td of 3rd row of table of the display array should be -', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(3) td:nth-child(1)').text()).toContain('-')																				
		}));
		
		it('number in 10th td of 4th row of table of the display array should be 0', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(4) td:nth-child(10)').text()).toContain('0')																				
		}));
		
		it('number in 7th td of 2nd row of table of the display array should be 1', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(7)').text()).toContain('1')																				
		}));
		
		it('number in 7th td of 2nd row of table of the display array should be dynamically styled with borrowSubtract', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(7)')).toHaveClass('borrowSubtract')																			
		}));
		
    });
	
	// tests for case when first digit of minuend is 1 and is borrowed- line through, no zero above
	describe('when ms-subtract-decimals tag element is added with values 17.3 and 8.22', function () {
																	  
			beforeEach(inject(function ($rootScope, $compile) {
				var tagString ='\\subtractdecimals{math}{complete}{17.3}{8.22}';
				var template = angular.element('<ms-subtract-decimals expected='+tagString+'></ms-subtract-decimals>');
				elScope = $rootScope.$new();
				element = $compile(template)(elScope);
				$rootScope.$digest();
			}));
			
			beforeEach(function() {
			  this.addMatchers({
				toHaveClass: function(className) {
				  return this.actual.hasClass(className);
				}
			  });
			});
			
			it('character in 2nd td of 1st row of table of the display array should be \xA0', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(1) td:nth-child(2)').text()).toContain('\xA0')																				
		}));
		
		it('number in 2nd td of 2nd row of table of the display array should be dynamically styled with line-through', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(2)')).toHaveClass('line_through_dimmed')																				
		}));
			
	});
	
	describe('when ms-subtract-decimals first tag element is english', function () {
																			  
		beforeEach(inject(function ($rootScope, $compile) {
			var tagString ='\\subtractdecimals{english}{partial}{832}{86}';
			var template = angular.element('<ms-subtract-decimals expected='+tagString+'></ms-subtract-decimals>');
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
