/*global angular, beforeEach, describe, expect, inject, it, jasmine */

describe('<ms-checkboxlabel>', function () {
    var element;

    beforeEach(module('mathSkills'));

    describe('when value should be unchecked', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-checkboxlabel expected="\\chk{Test Label}{F}" label="checkbox"></ms-checkboxlabel>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));
        
        it('should display the checkbox unchecked', function () {        
            expect(jQuery(element).find('input').is(':checked')).toBe(false);
        });
    });
    
    describe('when value should be checked', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-checkboxlabel expected="\\chk{Test Label}{T}" label="checkbox"></ms-checkboxlabel>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));
        
        it('should display the checkbox checked', function () {
            expect(jQuery(element).find('input').is(':checked')).toBe(true);
        }); 
    });
    
    describe('when exspected id undefined', function () {
        
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-checkboxlabel label="checkbox"></ms-checkboxlabel>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));
        
        it('should compile without an expected attribute', function () {
            expect(element).toBeDefined();
        });
        
    });
});