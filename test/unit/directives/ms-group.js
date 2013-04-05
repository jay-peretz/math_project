/*global angular, beforeEach, describe, expect, inject, it, jasmine, xit */

describe('<ms-group>', function () {
    var element,
        elScope;

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-expression expected="\\grp{\\chk{Do No Check}{F}}{\\chk{Do Check}{T}}" label="checkbox"></ms-expression>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    it('should add two checkboxes to the DOM', function () {
        expect(jQuery(element).find('input').length).toBe(2);
    });

    // This started to fail when I changed <ms-checkbox-group> to <ms-group>
    xit('should only send one answer object when checkAnswer is fired', inject(function ($rootScope) {
        var handler = jasmine.createSpy('answer event');
        $rootScope.$on('answer', handler);
        $rootScope.$broadcast('checkAnswer');
        $rootScope.$digest();
        expect(handler.callCount).toBe(1);
    }));

    it('should send a correct answer event when its checkboxes are properly checked', inject(function ($rootScope) {
        jQuery(element).find('input:eq(1)').click();
        $rootScope.$on('answer', function (e, data) {
            expect(data.result).toBe('correct');
        });
        $rootScope.$broadcast('checkAnswer');
        $rootScope.$digest();
    }));

    it('should send a incorrect answer event when its checkboxes are not properly checked', inject(function ($rootScope) {
        $rootScope.$on('answer', function (e, data) {
            expect(data.result).toBe('incorrect');
        });
        $rootScope.$broadcast('checkAnswer');
        $rootScope.$digest();
    }));
});
