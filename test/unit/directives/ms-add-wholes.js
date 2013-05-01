/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-add-wholes>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('partials/directives/ms-addition.html'))

    beforeEach(module('mathSkills'));
	
    beforeEach(inject(function ($rootScope, $compile) {
		var tagString ='\\addwholes{math}{complete}{[47,59]}';
        var template = angular.element('<ms-add-wholes expected='+tagString+'></ms-add-wholes>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    describe('when ms-add-wholes tag element is added', function () {

        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));
		
		it('number in 2nd td of 1st row of table of the display array should be 1', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(1) td:nth-child(2)').text()).toContain('1')																				
		}));
		
		it('number in 3rd td of 2st row of table of the display array should be 4', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(2) td:nth-child(3)').text()).toContain('4')																				
		}));
		
		it('value in 1st td of 3rd row of table of the display array should be +', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(3) td:nth-child(1)').text()).toContain('+')																				
		}));
		
		it('number in 4th td of 3rd row of table of the display array should be 9', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(3) td:nth-child(4)').text()).toContain('9')																				
		}));
		
		it('number in 2nd td of 4th row of table of the display array should be 1', inject(function ($rootScope) {
			expect(jQuery(element).find('table tr:nth-child(4) td:nth-child(2)').text()).toContain('1')																				
		}));
		
    });

    describe('when <ms-add-wholes> first tag element is english', function () {
        describe('when there are two numbers', function () {
            beforeEach(inject(function ($rootScope, $compile) {
                var tagString ='\\addwholes{english}{partial}{[301,815]}';
                var template = angular.element('<ms-add-wholes expected='+tagString+'></ms-add-wholes>');
                elScope = $rootScope.$new();
                element = $compile(template)(elScope);
                $rootScope.$digest();
            }));
    
            it('it should display two numbers in text.', inject(function ($rootScope) {
                expect(jQuery(element).find('span').text()).toContain('301 and 815');																		
            }));
        });

        describe('when there are three numbers', function () {
            beforeEach(inject(function ($rootScope, $compile) {
                var tagString ='\\addwholes{english}{partial}{[301,815,419]}';
                var template = angular.element('<ms-add-wholes expected='+tagString+'></ms-add-wholes>');
                elScope = $rootScope.$new();
                element = $compile(template)(elScope);
                $rootScope.$digest();
            }));
    
            it('it should display three numbers in text.', inject(function ($rootScope) {
                expect(jQuery(element).find('span').text()).toContain('301, 815, and 419');																		
            }));
        });
		
    });
		
});
