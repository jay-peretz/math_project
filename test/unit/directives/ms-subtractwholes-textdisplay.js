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
	
    beforeEach(inject(function ($rootScope, $compile) {
		var tagString ='\\subtractwholes{english}{partial}{832}{86}';
        var template = angular.element('<ms-subtractwholes expected='+tagString+'></ms-subtractwholes>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

	
	    describe('when ms-subtractwholes first tag element is english', function () {
			it('has a number display which is textual', inject(function ($rootScope) {
				// two hyphens after the text string? - matched for now
				expect(jQuery(element).find('span').text()).toBe('832 minus 86--')							
			}));
		
    });
	
});
