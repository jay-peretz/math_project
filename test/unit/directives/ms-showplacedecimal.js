/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-showplacedecimal>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($templateCache){
				$templateCache.put('partials/directives/ms-showplace.html',
					"<table><tr><td ng-repeat='columnEntry in firstArray'>{{columnEntry}}</td><td></td></tr><tr><td ng-repeat='columnEntry in secondArray'>{{columnEntry}}</td><td></td></tr><tr ng-repeat='row in thirdArray'><td ng-repeat='col in row'>{{col}}</td><td></td></tr></table>"		   
				);				
	}));
	
    beforeEach(inject(function ($rootScope, $compile) {
		var tagString ='\\showplacedecimal{"Tenths"}{2.97551}';
        var template = angular.element('<ms-showplacedecimal expected='+tagString+'></ms-showplacedecimal>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    describe('when ms-showplacedecimal tag element is added', function () {

        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));
		
		it('should have a carat character in 3rd td of 2nd row of 1st table of the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:nth-child(1) tr:nth-child(2) td:nth-child(3)').text()).toBe('^')																				
		}));
		
    });
});
