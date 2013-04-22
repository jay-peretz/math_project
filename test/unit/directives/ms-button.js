/*global angular, beforeEach, describe, expect, inject, it, jasmine */

describe('<ms-button>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));

    describe('when clicked is incorrect', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-button expected="\\but{Test Label}{F}" label="button"></ms-button>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));

        it('should respond properly to click events when clicked and incorrect', inject(function ($rootScope) {
            $rootScope.$on('answer', function (e, data) {
                expect(data.expected).toBe('\\but{Test Label}{F}');
                expect(data.answer).toBe('\\but{Test Label}{F}');
                expect(data.label).toBe('button');
                expect(data.result).toBe('incorrect');
            });
            jQuery(element).find('input').click();
            $rootScope.$digest();
        }));
    });

    describe('when clicked is correct', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-button expected="\\but{Test Label}{T}" label="button"></ms-button>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));
        
        it('should respond properly to click events when clicked and correct', inject(function ($rootScope) {
            $rootScope.$on('answer', function (e, data) {
                expect(data.expected).toBe('\\but{Test Label}{T}');
                expect(data.answer).toBe('\\but{Test Label}{T}');
                expect(data.label).toBe('button');
                expect(data.result).toBe('correct');
            });
            jQuery(element).find('input').click();
            $rootScope.$digest();
        }));
    });
    
});
