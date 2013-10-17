/*global angular, beforeEach, describe, expect, inject, it, jasmine */

describe('<ms-checkbox>', function () {
    var element;

    beforeEach(module('mathSkills'));

    /*describe('when it is placed on the page', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-checkbox expected="\\chk{Test Label}{F}" label="checkbox"></ms-checkbox>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));

        it('should display the passed in label', function () {
            expect(element.find('label').text()).toBe(' Test Label');
        });
    });

    describe('when value should be unchecked', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-checkbox expected="\\chk{Test Label}{F}" label="checkbox"></ms-checkbox>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));

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

        it('should $emit notHelped to a checkHelp event and checkbox should be unchecked.', inject(function ($rootScope) {
            var notHelped = jasmine.createSpy('rootScoped notHelped handler');

            $rootScope.$on('notHelped', notHelped);
            $rootScope.$broadcast('checkHelp');

            $rootScope.$digest();
            expect(notHelped).toHaveBeenCalled(); 
            expect(jQuery(element).find('input').is(':checked')).toBe(false);
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

        it('should $emit notHelped to a checkHelp event and check the box.', inject(function ($rootScope) {
            var notHelped = jasmine.createSpy('rootScoped notHelped handler');

            $rootScope.$on('notHelped', notHelped);
            $rootScope.$broadcast('checkHelp');

            $rootScope.$digest();
            expect(notHelped).toHaveBeenCalled(); 
            expect(jQuery(element).find('input').is(':checked')).toBe(true);
        }));

         it('should ignore already cancelled checkHelp events', inject(function ($rootScope) {
            var notHelpedHandler = jasmine.createSpy('rootScoped notHelped handler');

            $rootScope.$on('checkHelp', function(e) {
                e.preventDefault();
            });

            $rootScope.$on('notHelped', notHelpedHandler);
            $rootScope.$broadcast('checkHelp');
            expect(notHelpedHandler).not.toHaveBeenCalled();
        }));
    }); */
});