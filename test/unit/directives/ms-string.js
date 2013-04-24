/*global angular, beforeEach, describe, expect, inject, it, jasmine */

describe('<ms-string>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));
    
    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-string expected="\\str{TestString}" label="string"></ms-string>');
        element = $compile(template)($rootScope.$new());
        $rootScope.$digest();
    }));
    
    describe('when exspected is undefined', function () {
        
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-string label="string"></ms-string>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));
        
    });
    
    it('should display the passed in label', function () {
        
        expect(element.find('span').text()).toBe('TestString');
    });
    
    
    it('should respond to checkAnswer with proper data object', inject(function ($rootScope) {
        $rootScope.$on('answer', function (e, data) {
                expect(data.result).toBe('correct');
                expect(data.answer).toBe('\\str{TestString}');
                expect(data.label).toBe('string');
                expect(data.expected).toBe('\\str{TestString}');
            });

            $rootScope.$broadcast('checkAnswer');
            $rootScope.$digest();
    }));
    
    describe('when responding to checkFocus events', function () {
        
        it('should respond with notFocused', inject(function ($rootScope) {
            var notFocusedHandler = jasmine.createSpy('rootScoped notFocused handler');
            
            $rootScope.$on('notFocused', notFocusedHandler);
            $rootScope.$broadcast('checkFocus');
            
            expect(notFocusedHandler).toHaveBeenCalled();
        }));
        
        it('should ignore already cancelled checkFocus events', inject(function ($rootScope) {
            var notFocusedHandler = jasmine.createSpy('rootScoped notFocusedHandler handler');
         
            $rootScope.$on('checkFocus', function(e) {
                e.preventDefault();
            });   
            
            $rootScope.$on('notFocused', notFocusedHandler);
            $rootScope.$broadcast('checkFocus');
            expect(notFocusedHandler).not.toHaveBeenCalled();
        }));
        
    });
    
    describe('when responding to checkHelp events', function () {
        
        it('should respond with notHelped', inject(function ($rootScope) {
            var notHelped = jasmine.createSpy('rootScoped notHelped handler');
            
            $rootScope.$on('notHelped', notHelped);
            $rootScope.$broadcast('checkHelp');
            
            expect(notHelped).toHaveBeenCalled();
        }));
        
        it('should respond with notHelped', inject(function ($rootScope) {
            var notHelped = jasmine.createSpy('rootScoped notHelped handler');
         
            $rootScope.$on('checkHelp', function(e) {
                e.preventDefault();
            });   
            
            $rootScope.$on('notHelped', notHelped);
            $rootScope.$broadcast('checkHelp');
            
            expect(notHelped).not.toHaveBeenCalled();
        }));
        
    });
   
    
});