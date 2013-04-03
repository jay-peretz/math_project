/*global angular, beforeEach, describe, expect, inject, it */

describe('<ms-checkbox>', function () {
    var element;

    beforeEach(module('mathSkills'));

    describe('when value should be unchecked', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-checkbox expected="\\chk{Test Label}{F}" label="checkbox"></ms-checkbox>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));

        // TODO: move to own describe block.
        it('should display the passed in label', function () {
            expect(element.find('label').text()).toBe(' Test Label');
        });

        it('should respond properly to checkAnswer events when unchecked', inject(function ($rootScope) {
            $rootScope.$on('answer', function (e, data) {
                expect(data.expected).toBe('\\chk{Test Label}{F}');
                expect(data.answer).toBe('\\chk{Test Label}{F}');
                expect(data.label).toBe('checkbox');
                expect(data.result).toBe('correct');
            });
            $rootScope.$broadcast('checkAnswer');
            $rootScope.$digest();
        }));

        it('should respond properly to checkAnswer events when checked', inject(function ($rootScope) {
            jQuery(element).find('input').click();
            $rootScope.$on('answer', function (e, data) {
                expect(data.expected).toBe('\\chk{Test Label}{F}');
                expect(data.answer).toBe('\\chk{Test Label}{T}');
                expect(data.label).toBe('checkbox');
                expect(data.result).toBe('incorrect');
            });
            $rootScope.$broadcast('checkAnswer');
            $rootScope.$digest();
        }));
    });

    describe('when value should be checked', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-checkbox expected="\\chk{Test Label}{T}" label="checkbox"></ms-checkbox>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));

        it('should respond properly to checkAnswer events when unchecked', inject(function ($rootScope) {
            $rootScope.$on('answer', function (e, data) {
                expect(data.expected).toBe('\\chk{Test Label}{T}');
                expect(data.answer).toBe('\\chk{Test Label}{F}');
                expect(data.label).toBe('checkbox');
                expect(data.result).toBe('incorrect');
            });
            $rootScope.$broadcast('checkAnswer');
            $rootScope.$digest();
        }));

        it('should respond properly to checkAnswer events when checked', inject(function ($rootScope) {
            jQuery(element).find('input').click();
            $rootScope.$on('answer', function (e, data) {
                expect(data.expected).toBe('\\chk{Test Label}{T}');
                expect(data.answer).toBe('\\chk{Test Label}{T}');
                expect(data.label).toBe('checkbox');
                expect(data.result).toBe('correct');
            });
            $rootScope.$broadcast('checkAnswer');
            $rootScope.$digest();
        }));
    });
});
