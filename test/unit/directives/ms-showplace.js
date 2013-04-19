/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-showplace>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($templateCache){
				$templateCache.put('partials/directives/ms-showplace.html',
					"<table><tr><td ng-repeat='columnEntry in firstArray'>{{columnEntry}}</td><td></td></tr><tr><td ng-repeat='columnEntry in secondArray'>{{columnEntry}}</td><td></td></tr><tr ng-repeat='row in thirdArray'><td ng-repeat='col in row'>{{col}}</td><td></td></tr></table>"		   
				);				
	}));
	
	/*beforeEach(inject(function ($templateCache, $http){
		$http.get('partials/directives/ms-showplace.html', {
                cache: $templateCache
            }).then(function(result) {
				cacheHTML = result.data;
                alert('cacheHTML is:  ' + cacheHTML);
            });
	}));*/

    beforeEach(inject(function ($rootScope, $compile) {
		var tagString ='\\showplace{"Thousands"}{12345}';
        var template = angular.element('<ms-showplace expected='+tagString+'></ms-showplace>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    describe('when ms-showplace tag element is added', function () {

        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));
		
		it('should have a carat character in 2nd td of 2nd row of 1st table of the display array', inject(function ($rootScope) {
			expect(jQuery(element).find('table:nth-child(1) tr:nth-child(2) td:nth-child(2)').text()).toBe('^')																				
		}));
		
    });
});
