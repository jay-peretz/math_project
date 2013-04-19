/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-multiplywholes>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($templateCache){
				$templateCache.put('partials/directives/ms-multiplication.html',
					"<span ng-hide='mathdisplay'>{{inenglish}}</span><span><table ng-show='mathdisplay' class='collapseTable td_padding large-font-size'><tr class='tr_height'><td></td><td class='text_align_right' ng-repeat='col in firstArray'>{{col}}</td><td></td></tr><tr class='tr_height_plus'><td><span>{{sign}}</span></td><td class='border-bottom-2px-black text_align_right' ng-repeat='col in secondArray'>{{col}}</td><td></td></tr><tr ng-repeat='row in thirdArray' class='tr_height'><td></td><td class='text_align_right' ng-repeat='col in row'>{{col}}</td><td></td></tr><tr><td></td><td class='text_align_right border-top-2px-black tr_height'  ng-repeat='col in fourthArray'>{{col}}</td><td></td></tr></table></span>"   
				);				
	}));
		
	beforeEach(inject(function ($rootScope, $compile) {
		var tagString ='\\multiplywholes{english}{partial}{6453}{4}';
        var template = angular.element('<ms-multiplywholes expected='+tagString+'></ms-multiplywholes>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));
	
	    describe('when ms-multiplywholes first tag element is english', function () {
		// only matching first number in english display but should be sufficient
		it('has a number display which is textual', inject(function ($rootScope) {
			expect(jQuery(element).find('span').text().substr(0, 4)).toBe('6453')																				
		}));
		
    });
	
});

