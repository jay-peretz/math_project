/*global angular, beforeEach, describe, expect, inject, it, jasmine */

describe('<ms-button>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));
    
    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-button expected="\\but{Test Label}{F}" label="button"></ms-button>');
        element = $compile(template)($rootScope.$new());
        $rootScope.$digest();
    }));
    
    describe('when exspected id undefined', function () {
        
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-button label="button"></ms-button>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));
        
    });
    
    describe('when clicked is incorrect', function () {
         
        it('should respond properly to click events when clicked and incorrect', inject(function ($rootScope) {
            $rootScope.$on('answer', function (e, data) {
                expect(data.expected).toBe('\\but{Test Label}{F}');
                expect(data.answer).toBe('\\but{Test Label}{F}');
                expect(data.label).toBe('button');
                expect(data.result).toBe('incorrect');
            });
            jQuery(element).find('button').click();
            jQuery(element).find('button').trigger('click');
            $rootScope.$digest();
            expect(jQuery(element).find('button').hasClass('btn-danger')).toBe(true);
        }));
        
        it('should respond to checkHelp with notHelped', inject(function ($rootScope) {
            var notHelped = jasmine.createSpy('rootScoped notHelped handler');
      
            $rootScope.$on('notHelped', notHelped);
            $rootScope.$broadcast('checkHelp');
            
            expect(notHelped).toHaveBeenCalled();
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
            
            jQuery(element).find('button').click();
            jQuery(element).find('button').trigger('click');
            $rootScope.$digest();
            
            expect(jQuery(element).find('button').hasClass('btn-success')).toBe(true);
        }));
        
        it('should respond to checkHelp with helped', inject(function ($rootScope) {
            var helped = jasmine.createSpy('rootScoped helped handler');
      
            $rootScope.$on('notHelped', helped);
            
            $rootScope.$broadcast('checkHelp');
            $rootScope.$digest();
            
            expect(helped).toHaveBeenCalled();
            expect(jQuery(element).find('button').hasClass('btn-success')).toBe(true);
        }));
    });
  
    describe('when responding to checkFocus events', function () {
        
        it('should respond with focused and set focus on itself', inject(function ($rootScope) {
            var focusedHandler = jasmine.createSpy('rootScoped focused handler');
            // The element has be added to the DOM in order for it to gain focus.
            jQuery('body').append(element);
            
            $rootScope.$on('focused', focusedHandler);
            $rootScope.$broadcast('checkFocus');
            
            expect(focusedHandler).toHaveBeenCalled();
            expect(document.activeElement.tagName).not.toBe('INPUT');
            // Remove the element from the DOM.
            jQuery(element).remove();
        }));
        
        it('should ignore already cancelled checkFocus events', inject(function ($rootScope) {
            var focusedHandler = jasmine.createSpy('rootScoped focused handler');
         
            $rootScope.$on('checkFocus', function(e) {
                e.preventDefault();
            });   
            
            $rootScope.$on('focused', focusedHandler);
            $rootScope.$broadcast('checkFocus');
            expect(focusedHandler).not.toHaveBeenCalled();
        }));
        
    });    
    
    describe('when responding to checkAnswer events', function () {
         
        it('should respond with correct', inject(function ($rootScope) {
            
            $rootScope.$on('answer', function (e, data) {
                expect(data.result).toBe('correct');
            });
    
            $rootScope.$broadcast('checkAnswer');
            $rootScope.$digest();
        }));
        
        it('should ignore already cancelled checkAnswer events', inject(function ($rootScope) {
            var answerHandler = jasmine.createSpy('rootScoped answer handler');
         
            $rootScope.$on('checkAnswer', function(e) {
                e.preventDefault();
            });   
            
            $rootScope.$on('answer', answerHandler);
            $rootScope.$broadcast('checkAnswer');
            expect(answerHandler).not.toHaveBeenCalled();
        }));
    });
    
    it('should ignore already cancelled checkHelp events', inject(function ($rootScope) {
            var helpedHandler = jasmine.createSpy('rootScoped helped handler');
            var notHelpedHandler = jasmine.createSpy('rootScoped notHelped handler');
         
            $rootScope.$on('checkHelp', function(e) {
                e.preventDefault();
            });   
            
            $rootScope.$on('helped', helpedHandler);
            $rootScope.$on('notHelped', notHelpedHandler);
            $rootScope.$broadcast('checkHelp');
            expect(helpedHandler).not.toHaveBeenCalled();
            expect(notHelpedHandler).not.toHaveBeenCalled();
        }));
     
});
