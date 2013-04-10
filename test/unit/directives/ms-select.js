/*global angular, beforeEach, describe, expect, inject, it, jasmine */

describe('<ms-select>', function () {
    var element,
        elScope;

    beforeEach(module('mathSkills'));
    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-select expected="\\select{3}{[3,4]}" label=test></ms-select>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    describe('when responding to checkAnswer events', function () {
        it('should fire an answer event', inject(function ($rootScope) {
            var answerHandler = jasmine.createSpy('answer handler');
            $rootScope.$on('answer', answerHandler);
            $rootScope.$broadcast('checkAnswer');
            expect(answerHandler).toHaveBeenCalled();
        }));

        it('should pass the correct data object with an empty answer', inject(function ($rootScope) {
            $rootScope.$on('answer', function (e, data) {
                expect(data.result).toBe('incorrect');
                expect(data.answer).toBe('\\select{}{[3,4]}');
                expect(data.expected).toBe('\\select{3}{[3,4]}');
                expect(data.label).toBe('test');
            });
            $rootScope.$broadcast('checkAnswer');
        }));

        it('should pass the correct data object with a correct answer', inject(function ($rootScope) {
            jQuery(element).find('select').val(0);
            expect(jQuery(element).find('select option:selected').text()).toBe('3');
            jQuery(element).find('select').trigger('change');
            expect(element.find('select').val()).toBe('0');

            $rootScope.$on('answer', function (e, data) {
                expect(data.result).toBe('correct');
                expect(data.answer).toBe('\\select{3}{[3,4]}');
                expect(data.expected).toBe('\\select{3}{[3,4]}');
                expect(data.label).toBe('test');
            });
            $rootScope.$broadcast('checkAnswer');
        }));

        it('should pass the correct data object with an incorrect answer', inject(function ($rootScope) {
            jQuery(element).find('select').val(1);
            expect(jQuery(element).find('select option:selected').text()).toBe('4');
            jQuery(element).find('select').trigger('change');
            expect(element.find('select').val()).toBe('1');

            $rootScope.$on('answer', function (e, data) {
                expect(data.result).toBe('incorrect');
                expect(data.answer).toBe('\\select{4}{[3,4]}');
                expect(data.expected).toBe('\\select{3}{[3,4]}');
                expect(data.label).toBe('test');
            });
            $rootScope.$broadcast('checkAnswer');
        }));
    });
});
