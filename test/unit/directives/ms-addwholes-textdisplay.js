/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-addwholes>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($templateCache){
				$templateCache.put('partials/directives/ms-addition.html',
					"<span ng-hide='mathdisplay'>{{inenglish}}</span><table ng-show='mathdisplay'><tr><td></td><td ng-repeat='columnEntry in firstArray'>{{columnEntry}}</td><td></td></tr><tr ng-repeat='row in secondArray'><td><span ng-show=$last>{{sign}}</span></td><td ng-repeat='col in row'>{{col}}</td><td></td></tr><tr><td></td><td ng-repeat='columnEntry in thirdArray'>{{columnEntry}}</td><td></td></tr><tr><td></td><td ng-repeat='columnEntry in thirdArray'></td><td></td></tr></table>"		   
				);				
	}));
		
	beforeEach(inject(function ($rootScope, $compile) {
		var tagString ='\\addwholes{english}{partial}{[301,815]}';
        var template = angular.element('<ms-addwholes expected='+tagString+'></ms-addwholes>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));
	
	    describe('when ms-addplace first tag element is english', function () {
		
		it('has a number display which is textual', inject(function ($rootScope) {
			expect(jQuery(element).find('span').text()).toBe('301 and 815')																				
		}));
		
    });
	
});
