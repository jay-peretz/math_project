/*global angular, beforeEach, describe, expect, inject, it, jasmine */

describe('<ms-select>', function () {
    var element,
        elScope;

    beforeEach(module('mathSkills'));

    describe('when it has a single correct answer', function() {
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-select expected="\\select{3}{[3,4]}" label=test></ms-select>');
            elScope = $rootScope.$new();
            element = $compile(template)(elScope);
            $rootScope.$digest();
        }));
    
        describe('when given a string correct answer', function () {
            it('should compile', inject(function ($rootScope, $compile) {
                var template = angular.element('<ms-select expected="\\select{\"Tens\"}{[\"Ones\",\"Tens\"]}" label=test></ms-select>');
                elScope = $rootScope.$new();
                element = $compile(template)(elScope);
                $rootScope.$digest();
                expect(element).toBeDefined();
                expect(element.find('select').length).toBe(1);
            }));
        });
    
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
    
        describe('when responding to checkHelp events', function () {
            it('should respond with helped and select correct option when it is empty', inject(function ($rootScope) {
                var helpedListener = jasmine.createSpy('helped listener'),
                    notHelpedListener = jasmine.createSpy('notHelped listener');
                $rootScope.$on('helped', helpedListener);
                $rootScope.$on('notHelped', notHelpedListener);
                $rootScope.$broadcast('checkHelp');
                expect(helpedListener).toHaveBeenCalled();
                expect(notHelpedListener).not.toHaveBeenCalled();
    
                $rootScope.$digest();
                expect(jQuery(element).find('select option:selected').text()).toBe('3');
            }));
    
            it('should respond with notHelped when it has the right answer', inject(function ($rootScope) {
                var helpedListener = jasmine.createSpy('helped listener'),
                    notHelpedListener = jasmine.createSpy('notHelped listener');
                $rootScope.$on('helped', helpedListener);
                $rootScope.$on('notHelped', notHelpedListener);
    
                jQuery(element).find('select').val(0);
                jQuery(element).find('select').trigger('change');
    
                $rootScope.$broadcast('checkHelp');
                expect(helpedListener).not.toHaveBeenCalled();
                expect(notHelpedListener).toHaveBeenCalled();
            }));
    
            it('should respond with helped and set the correct answer when it has the wrong answer', inject(function ($rootScope) {
                var helpedListener = jasmine.createSpy('helped listener'),
                    notHelpedListener = jasmine.createSpy('notHelped listener');
                $rootScope.$on('helped', helpedListener);
                $rootScope.$on('notHelped', notHelpedListener);
    
                jQuery(element).find('select').val(1);
                jQuery(element).find('select').trigger('change');
    
                $rootScope.$broadcast('checkHelp');
                expect(helpedListener).toHaveBeenCalled();
                expect(notHelpedListener).not.toHaveBeenCalled();
    
                $rootScope.$digest();
                expect(jQuery(element).find('select option:selected').text()).toBe('3');
            }));
    
            it('should ignore checkHelped events marked by preventDefault', inject(function ($rootScope) {
                var helpedListener = jasmine.createSpy('helped listener'),
                    notHelpedListener = jasmine.createSpy('notHelped listener');
                $rootScope.$on('helped', helpedListener);
                $rootScope.$on('notHelped', notHelpedListener);
    
                // Mark the event we're about to fire as preventDefault.
                $rootScope.$on('checkHelp', function (e) {
                    e.preventDefault();
                });
                $rootScope.$broadcast('checkHelp');
                expect(helpedListener).not.toHaveBeenCalled();
                expect(notHelpedListener).not.toHaveBeenCalled();
            }));
        });
    
        describe('when responding to checkFocus events', function () {
            it('should respond with focused if it does not have an answer', inject(function ($rootScope) {
                var focusedListener = jasmine.createSpy('focused listener'),
                    notFocusedListener = jasmine.createSpy('notFocused listener');
                $rootScope.$on('focused', focusedListener);
                $rootScope.$on('notFocused', notFocusedListener);
    
                $rootScope.$broadcast('checkFocus');
                expect(focusedListener).toHaveBeenCalled();
                expect(notFocusedListener).not.toHaveBeenCalled();
            }));
    
            it('should focus on the select element if it does not have an answer', inject(function ($rootScope) {
                // The element has be added to the DOM in order for it to gain focus.
                jQuery('body').append(element);
                expect(document.activeElement.tagName).not.toBe('SELECT');
                $rootScope.$broadcast('checkFocus');
                expect(document.activeElement.tagName).toBe('SELECT');
                // Remove the element from the DOM.
                jQuery(element).remove();
            }));
    
            it('should respond with notFocused if it has an answer', inject(function ($rootScope) {
                var focusedListener = jasmine.createSpy('focused listener'),
                    notFocusedListener = jasmine.createSpy('notFocused listener');
                $rootScope.$on('focused', focusedListener);
                $rootScope.$on('notFocused', notFocusedListener);
    
                jQuery(element).find('select').val(0);
                jQuery(element).find('select').trigger('change');
    
                $rootScope.$broadcast('checkFocus');
                expect(focusedListener).not.toHaveBeenCalled();
                expect(notFocusedListener).toHaveBeenCalled();
            }));
    
            it('should ignore checkFocus events marked by preventDefault', inject(function ($rootScope) {
                var focusedListener = jasmine.createSpy('focused listener'),
                    notFocusedListener = jasmine.createSpy('notFocused listener');
                $rootScope.$on('focused', focusedListener);
                $rootScope.$on('notFocused', notFocusedListener);
    
                // Mark the event we're about to fire as preventDefault.
                $rootScope.$on('checkFocus', function (e) {
                    e.preventDefault();
                });
                $rootScope.$broadcast('checkFocus');
                expect(focusedListener).not.toHaveBeenCalled();
                expect(notFocusedListener).not.toHaveBeenCalled();
            }));
        });
    
        describe('when receiving certain keyboard input', function () {
            describe('when there is an enter key keyup event', function () {
                var e, triggerCheckAnswerHandler;
    
                beforeEach(inject(function ($rootScope) {
                    e = jQuery.Event('keyup');
                    triggerCheckAnswerHandler = jasmine.createSpy('triggerCheckAnswer event handler');
                    $rootScope.$on('triggerCheckAnswer', triggerCheckAnswerHandler);
                }));
    
                it('should $emit a triggerCheckAnswer event if the keyCode is 13', inject(function ($rootScope) {
                    e.which = 13;
                    e.keyCode = 13;
    
                    jQuery(element).find('select').trigger(e);
                    expect(triggerCheckAnswerHandler).toHaveBeenCalled();
                }));
    
                it('should $emit a triggerCheckAnswer event if the keyCode is 10', inject(function ($rootScope) {
                    e.which = 10;
                    e.keyCode = 10;
    
                    jQuery(element).find('select').trigger(e);
                    expect(triggerCheckAnswerHandler).toHaveBeenCalled();
                }));
    
                it('should not $emit anything if keyCode is not 10 or 13', inject(function ($rootScope) {
                    e.which = 1;
                    e.keyCode = 1;
    
                    jQuery(element).find('select').trigger(e);
                    expect(triggerCheckAnswerHandler).not.toHaveBeenCalled();
                }));
            });
    
            describe('when there is a tab key keydown event', function () {
                it('should $emit a triggerCheckFocus event', inject(function ($rootScope) {
                    // Create the triggerCheckFocus event handler
                    var triggerCheckFocusHandler = jasmine.createSpy('triggerCheckFocus event handler');
                    $rootScope.$on('triggerCheckFocus', triggerCheckFocusHandler);
    
                    // Create and fire the tab keydown event.
                    var e = jQuery.Event('keydown');
                    e.which = 9;
                    e.keyCode = 9;
                    jQuery(element).find('select').trigger(e);
    
                    expect(triggerCheckFocusHandler).toHaveBeenCalled();
                }));
    
                it('should not $emit a triggerCheckFocus event if it was not the tab key', inject(function ($rootScope) {
                    // Create the triggerCheckFocus event handler
                    var triggerCheckFocusHandler = jasmine.createSpy('triggerCheckFocus event handler');
                    $rootScope.$on('triggerCheckFocus', triggerCheckFocusHandler);
    
                    // Create and fire the tab keydown event.
                    var e = jQuery.Event('keydown');
                    e.which = 8;
                    e.keyCode = 8;
                    jQuery(element).find('select').trigger(e);
    
                    expect(triggerCheckFocusHandler).not.toHaveBeenCalled();
                }));
            });
        });
    });

    describe('when it has multiple possible answers', function() {
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-select expected=\'\\select{[\"oak trees\", \"elm trees\"]}{[\"oak trees\", \"elm trees\", \"parks\"]}\' label=test></ms-select>');
            elScope = $rootScope.$new();
            element = $compile(template)(elScope);
            $rootScope.$digest();
        }));

        describe('when responding to checkAnswer', function () {
            it('should give correct feedback if the answer is correct', inject(function ($rootScope) {
                jQuery(element).find('select').val(0);
                expect(jQuery(element).find('select option:selected').text()).toBe('oak trees');
                jQuery(element).find('select').trigger('change');
                expect(element.find('select').val()).toBe('0');
    
                $rootScope.$on('answer', function (e, data) {
                    expect(data.result).toBe('correct');
                    expect(data.answer).toBe('\\select{"oak trees"}{[\"oak trees\",\"elm trees\",\"parks\"]}');
                    expect(data.expected).toBe('\\select{"oak trees"}{[\"oak trees\",\"elm trees\",\"parks\"]}');
                    expect(data.label).toBe('test');
                });
                $rootScope.$broadcast('checkAnswer');
            }));

            it('should give incorrect feedback if the answer is not a possible answer', inject(function ($rootScope, $timeout) {
                jQuery(element).find('select').val(2);
                expect(jQuery(element).find('select option:selected').text()).toBe('parks');
                jQuery(element).find('select').trigger('change');
                expect(element.find('select').val()).toBe('2');
    
                $rootScope.$on('answer', function (e, data) {
                    expect(data.result).toBe('incorrect');
                    expect(data.answer).toBe('\\select{"parks"}{[\"oak trees\",\"elm trees\",\"parks\"]}');
                    expect(data.expected).toBe('\\select{"oak trees"}{[\"oak trees\",\"elm trees\",\"parks\"]}');
                    expect(data.label).toBe('test');
                });
                $rootScope.$broadcast('checkAnswer');
                $timeout.flush();
            }));
            
            it('should give incorrect feedback if the answer does not match the already chosen index', inject(function ($rootScope, $timeout, panelGroupData) {
                jQuery(element).find('select').val(0);
                expect(jQuery(element).find('select option:selected').text()).toBe('oak trees');
                panelGroupData.index(1);
                jQuery(element).find('select').trigger('change');
                expect(element.find('select').val()).toBe('0');
    
                $rootScope.$on('answer', function (e, data) {
                    expect(data.result).toBe('incorrect');
                    expect(data.answer).toBe('\\select{"oak trees"}{[\"oak trees\",\"elm trees\",\"parks\"]}');
                    expect(data.expected).toBe('\\select{"elm trees"}{[\"oak trees\",\"elm trees\",\"parks\"]}');
                    expect(data.label).toBe('test');
                });
                $rootScope.$broadcast('checkAnswer');
            }));
        });
        
        describe('when responding to checkHelp events', function () {
            it('it should fill in the select box with the first possible answer if there is no answer index', inject(function ($rootScope, $timeout){
                
                $rootScope.$broadcast("checkHelp");
                $rootScope.$digest();
                $timeout.flush();
                expect(element.find('select').val()).toBe('0');
            }));

            it('should fill in the correct possible answer if there is an answer index', inject(function (panelGroupData, $rootScope, $timeout) {
                panelGroupData.index(1);
                $rootScope.$broadcast("checkHelp");
                $rootScope.$digest();
                $timeout.flush();
                jQuery(element).find('select').trigger('change');
                expect(jQuery(element).find('select option:selected').text()).toBe('elm trees');
                expect(element.find('select').val()).toBe('1');
            }));
        });
        
    });
});
