/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-addwholes>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($templateCache){
				$templateCache.put('partials/directives/ms-addition.html',
					"<table><tr><td></td><td ng-repeat='columnEntry in firstArray'>{{columnEntry}}</td><td></td></tr><tr ng-repeat='row in secondArray'><td><span ng-show=$last>{{sign}}</span></td><td ng-repeat='col in row'>{{col}}</td><td></td></tr><tr><td></td><td ng-repeat='columnEntry in thirdArray'>{{columnEntry}}</td><td></td></tr><tr><td></td><td ng-repeat='columnEntry in thirdArray'></td><td></td></tr></table>"		   
				);				
	}));
	
	/*beforeEach(inject(function ($templateCache, $http){
		$http.get('partials/directives/ms-addition.html', {
                cache: $templateCache
            }).then(function(result) {
				cacheHTML = result.data;
                alert('cacheHTML is:  ' + cacheHTML);
            });
	}));*/

    beforeEach(inject(function ($rootScope, $compile) {
		var tagString ='\\addwholes{math}{complete}{[47,59]}';
        var template = angular.element('<ms-addwholes expected='+tagString+'></ms-addwholes>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    describe('when ms-addplace tag element is added', function () {

        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));
		
		it('number in 2nd td of 1st row of table of the display array should be 1', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(1) td:nth-child(2)').text()).toBe('1')																				
		}));
		
		it('number in 3rd td of 2st row of table of the display array should be 4', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(3)').text()).toBe('4')																				
		}));
		
		it('value in 1st td of 3rd row of table of the display array should be +', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(3) td:nth-child(1)').text()).toBe('+')																				
		}));
		
		it('number in 4th td of 3rd row of table of the display array should be 9', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(3) td:nth-child(4)').text()).toBe('9')																				
		}));
		
		it('number in 2nd td of 4th row of table of the display array should be 1', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(4) td:nth-child(2)').text()).toBe('1')																				
		}));
		
    });
});
