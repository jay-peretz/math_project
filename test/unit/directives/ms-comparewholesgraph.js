/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-comparewholesgraph>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($templateCache){
				$templateCache.put('partials/directives/ms-comparewholesgraph.html',
					"<span><table class=border-top-2px-black><tr ng-repeat='row in numberLineArray' ng-style=\"{true: {fontWeight: 'bold'}, false: {}}[$index==0]\"><td ng-repeat='col in row' class=td_padding><span>{{col}}</span></td></tr></table></span>"   
				);				
	}));
		
	beforeEach(inject(function ($rootScope, $compile) {
		var tagString ='\\comparewholesgraph{25}{33}{20}{35}';
        var template = angular.element('<ms-comparewholesgraph expected='+tagString+'></ms-comparewholesgraph>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));
	
    describe('when ms-comparewholegraph tag element is added', function () {

        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));		
    });
	
});

