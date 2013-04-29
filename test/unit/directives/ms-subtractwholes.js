/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-subtractwholes>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($templateCache){
				$templateCache.put('partials/directives/ms-subtraction.html',
					"<span ng-hide='mathdisplay'>{{inenglish}}</span><span><table ng-show='mathdisplay' class='collapseTable large-font-size'><tr class='tr_height' ng-repeat='row in firstArray' ng-class='getClass2($index)'><td></td><td class='text_align_right' ng-repeat='col in row' ng-class='getClass3($index)'>{{col}}</td><td></td></tr><tr class='tr_height'><td><span class='whole-part-font-size padding_right_8px'>{{sign}}</span></td><td class='text_align_right' ng-repeat='col in secondArray'>{{col}}</td><td></td></tr><tr class='tr_height_plus'><td></td><td class='border-bottom-2px-black text_align_right' ng-repeat='columnEntry in thirdArray'>{{columnEntry}}</td><td></td></tr><tr class='tr_height'><td></td><!-- empty row for spacer --><td class='text_align_right' ng-repeat='columnEntry in thirdArray'></td><td></td></tr></table></span>");				
	}));

    describe('when ms-subtractwholes tag element is added', function () {
																	  
		beforeEach(inject(function ($rootScope, $compile) {
			var tagString ='\\subtractwholes{math}{complete}{110}{99}';
			var template = angular.element('<ms-subtractwholes expected='+tagString+'></ms-subtractwholes>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));

        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));
		
		it('number in 4th td of 2nd row of table of the display array should be 0', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(4)').text()).toBe('0')																				
		}));
		
		it('number in 4th td of 3rd row of table of the display array should be 1', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(3) td:nth-child(4)').text()).toBe('1')																				
		}));
		
		it('value in 1st td of 4th row of table of the display array should be -', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(4) td:nth-child(1)').text()).toBe('-')																				
		}));
		
		it('number in 4th td of 4th row of table of the display array should be 9', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(4) td:nth-child(4)').text()).toBe('9')																				
		}));
		
		it('number in 4th td of 5th row of table of the display array should be 1', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(5) td:nth-child(4)').text()).toBe('1')																				
		}));
		
    });
	
	describe('when ms-subtractwholes first tag element is english', function () {
																			  
		beforeEach(inject(function ($rootScope, $compile) {
			var tagString ='\\subtractwholes{english}{partial}{832}{86}';
			var template = angular.element('<ms-subtractwholes expected='+tagString+'></ms-subtractwholes>');
			elScope = $rootScope.$new();
			element = $compile(template)(elScope);
			$rootScope.$digest();
		}));
																			  
		it('should express the numbers as text', inject(function ($rootScope) {
			// two hyphens after the text string? - matched for now
			expect(jQuery(element).find('span').text()).toBe('832 minus 86--')							
		}));
		
    });
	
});
