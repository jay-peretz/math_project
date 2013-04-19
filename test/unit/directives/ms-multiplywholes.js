/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-multiplywholes>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($templateCache){
				$templateCache.put('partials/directives/ms-multiplication.html',
					"<span ng-hide='mathdisplay'>{{inenglish}}</span><span><table ng-show='mathdisplay' class='collapseTable td_padding large-font-size'><tr class='tr_height'><td></td><td class='text_align_right' ng-repeat='col in firstArray'>{{col}}</td><td></td></tr><tr class='tr_height_plus'><td><span>{{sign}}</span></td><td class='border-bottom-2px-black text_align_right' ng-repeat='col in secondArray'>{{col}}</td><td></td></tr><tr ng-repeat='row in thirdArray' class='tr_height'><td></td><td class='text_align_right' ng-repeat='col in row'>{{col}}</td><td></td></tr><tr><td></td><td class='text_align_right border-top-2px-black tr_height'  ng-repeat='col in fourthArray'>{{col}}</td><td></td></tr></table></span>");				
	}));
	
    beforeEach(inject(function ($rootScope, $compile) {
		var tagString ='\\multiplywholes{math}{complete}{839}{3}';
        var template = angular.element('<ms-multiplywholes expected='+tagString+'></ms-multiplywholes>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    describe('when ms-multiplywholes tag element is added', function () {
		
        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));
		
		it('number in 5th td of 1st row of table of the display array should be 9', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(1) td:nth-child(5)').text()).toBe('9')																				
		}));
		
		it('value in 1st td of 2nd row of table of the display array should be "\xD7"', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(1)').text()).toBe('\xD7')																				
		}));
		
		it('number in 5th td of 2nd row of table of the display array should be 3', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(5)').text()).toBe('3')																				
		}));
		
		it('number in 5th td of 3rd row of table of the display array should be 7', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(3) td:nth-child(5)').text()).toBe('7')																				
		}));
		
    });
});
