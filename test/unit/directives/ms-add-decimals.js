/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-add-decimals>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('partials/directives/ms-addition.html'))

    beforeEach(module('mathSkills'));
	
    beforeEach(inject(function ($rootScope, $compile) {
		var tagString ='\\adddecimals{math}{complete}{[47.2,59.6]}';
        var template = angular.element('<ms-add-decimals expected='+tagString+'></ms-add-decimals>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    describe('when ms-add-decimals tag element is added', function () {

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

    describe('when <ms-add-decimals> first tag element is english', function () {
        describe('when there are two numbers', function () {
            beforeEach(inject(function ($rootScope, $compile) {
                var tagString ='\\adddecimals{english}{partial}{[47.2,59.6]}';
                var template = angular.element('<ms-add-decimals expected='+tagString+'></ms-add-decimals>');
                elScope = $rootScope.$new();
                element = $compile(template)(elScope);
                $rootScope.$digest();
            }));
    
            it('it should display two numbers in text.', inject(function ($rootScope) {
                expect(jQuery(element).find('span').text()).toContain('47.2 and 59.6');																		
            }));
        });

        describe('when there are three numbers', function () {
            beforeEach(inject(function ($rootScope, $compile) {
                var tagString ='\\adddecimals{english}{partial}{[301.1,815.2,419.3]}';
                var template = angular.element('<ms-add-decimals expected='+tagString+'></ms-add-decimals>');
                elScope = $rootScope.$new();
                element = $compile(template)(elScope);
                $rootScope.$digest();
            }));
    
            xit('it should display three numbers in text.', inject(function ($rootScope) {
                expect(jQuery(element).find('span').text()).toContain('301.1, 815.2, and 419.3');																		
            }));
        });
		
    });
		
});
