/*global angular, beforeEach, browserTrigger, describe, expect, inject, it */

describe('<ms-input>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-input expected="\\input{3}"></ms-input>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    it('should respond properly to empty answers', inject(function ($rootScope) {
        $rootScope.$on('answer', function (e, data) {
            expect(data.result).toBe('incorrect');
            expect(data.answer).toBe('\\input{}');
            expect(data.label).toBeUndefined();
            expect(data.expected).toBe('\\input{3}');
        });

        $rootScope.$broadcast('checkAnswer');
        $rootScope.$digest();
    }));

    it('should respond properly to correct answers', inject(function ($rootScope) {
        element.find('input').val('3');
        expect(element.find('input').val()).toBe('3');

        // This is the magic to get the answer ng-model to update.
        jQuery(element).find('input').trigger('input');

        $rootScope.$on('answer', function (e, data) {
            expect(data.result).toBe('correct');
            expect(data.answer).toBe('\\input{3}');
            expect(data.label).toBeUndefined();
            expect(data.expected).toBe('\\input{3}');
        });

        $rootScope.$broadcast('checkAnswer');
        $rootScope.$digest();
    }));

    it('should respond properly to incorrect answers', inject(function ($rootScope) {
        element.find('input').val('4');
        expect(element.find('input').val()).toBe('4');

        // This is the magic to get the answer ng-model to update.
        jQuery(element).find('input').trigger('input');

        $rootScope.$on('answer', function (e, data) {
            expect(data.result).toBe('incorrect');
            expect(data.answer).toBe('\\input{4}');
            expect(data.label).toBeUndefined();
            expect(data.expected).toBe('\\input{3}');
        });

        $rootScope.$broadcast('checkAnswer');
        $rootScope.$digest();
    }));
});
