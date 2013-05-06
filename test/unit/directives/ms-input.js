/*global angular, beforeEach, describe, expect, inject, it, jasmine */

describe('<ms-input>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));

    describe('when it has a single answer', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-input expected="\\input{3}"></ms-input>');
            elScope = $rootScope.$new();
            element = $compile(template)(elScope);
            $rootScope.$digest();
        }));

        describe('when responding to checkAnswer events', function () {
            describe('when it has a known answer', function () {
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
        });

        describe('when responding to checkFocus events', function () {
            var focusedHandler, notFocusedHanlder;

            beforeEach(inject(function ($rootScope) {
                // Setup our focus event handler spies.
                focusedHandler = jasmine.createSpy('focused event handler');
                notFocusedHanlder = jasmine.createSpy('notFocused event handler');
                // Add them to $rootScope.
                $rootScope.$on('focused', focusedHandler);
                $rootScope.$on('notFocused', notFocusedHanlder);
            }));

            it('should respond with a focused event if the input is empty', inject(function ($rootScope, $timeout) {
                $rootScope.$broadcast('checkFocus');
                $timeout.flush();
                expect(focusedHandler).toHaveBeenCalled();
                expect(notFocusedHanlder).not.toHaveBeenCalled();
            }));

            it('should focus on its input element if the input is empty', inject(function ($rootScope, $timeout) {
                // The element has be added to the DOM in order for it to gain focus.
                jQuery('body').append(element);
                expect(document.activeElement.tagName).not.toBe('INPUT');
                $rootScope.$broadcast('checkFocus');
                $timeout.flush();
                expect(document.activeElement.tagName).toBe('INPUT');
                // Remove the element from the DOM.
                jQuery(element).remove();
            }));

            it('should respond with a notFocused event if the input is not empty', inject(function ($rootScope) {
                // Give the input a value.
                element.find('input').val('3');
                jQuery(element).find('input').trigger('input');

                $rootScope.$broadcast('checkFocus');
                expect(focusedHandler).not.toHaveBeenCalled();
                expect(notFocusedHanlder).toHaveBeenCalled();
            }));

            it('should ignore checkFocus events marked by preventDefault', inject(function ($rootScope) {
                // Mark the event we're about to fire as preventDefault.
                $rootScope.$on('checkFocus', function (e) {
                    e.preventDefault();
                });
                $rootScope.$broadcast('checkFocus');
                expect(focusedHandler).not.toHaveBeenCalled();
                expect(notFocusedHanlder).not.toHaveBeenCalled();
            }));
        });

        describe('when responding to checkHelp events', function () {
            var helpedHandler, notHelpedHanlder;

            beforeEach(inject(function ($rootScope) {
                // Setup our help event handler spies.
                helpedHandler = jasmine.createSpy('helped event handler');
                notHelpedHanlder = jasmine.createSpy('notHelped event handler');
                // Add them to $rootScope.
                $rootScope.$on('helped', helpedHandler);
                $rootScope.$on('notHelped', notHelpedHanlder);
            }));

            it('should respond with a helped event if the input is empty', inject(function ($rootScope) {
                $rootScope.$broadcast('checkHelp');
                expect(helpedHandler).toHaveBeenCalled();
                expect(notHelpedHanlder).not.toHaveBeenCalled();
            }));

            it('should fill in the correct answer if its input element is empty', inject(function ($rootScope) {
                $rootScope.$broadcast('checkHelp');
                $rootScope.$digest();
                expect(element.find('input').val()).toBe('3');
            }));

            it('should focus on its input element if it is empty', inject(function ($rootScope) {
                // The element has be added to the DOM in order for it to gain focus.
                jQuery('body').append(element);
                expect(document.activeElement.tagName).not.toBe('INPUT');
                $rootScope.$broadcast('checkHelp');
                expect(document.activeElement.tagName).toBe('INPUT');
                // Remove the element from the DOM again.
                jQuery(element).remove();
            }));

            it('should respond with a notHelped event if the input is not empty', inject(function ($rootScope) {
                // Give the input a value.
                element.find('input').val('3');
                jQuery(element).find('input').trigger('input');

                $rootScope.$broadcast('checkHelp');
                expect(helpedHandler).not.toHaveBeenCalled();
                expect(notHelpedHanlder).toHaveBeenCalled();
            }));

            it('should ignore checkHelp events marked by preventDefault', inject(function ($rootScope) {
                // Mark the event we're about to fire as preventDefault.
                $rootScope.$on('checkHelp', function (e) {
                    e.preventDefault();
                });
                $rootScope.$broadcast('checkHelp');
                expect(helpedHandler).not.toHaveBeenCalled();
                expect(notHelpedHanlder).not.toHaveBeenCalled();
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

                    jQuery(element).find('input').trigger(e);
                    expect(triggerCheckAnswerHandler).toHaveBeenCalled();
                }));

                it('should $emit a triggerCheckAnswer event if the keyCode is 10', inject(function ($rootScope) {
                    e.which = 10;
                    e.keyCode = 10;

                    jQuery(element).find('input').trigger(e);
                    expect(triggerCheckAnswerHandler).toHaveBeenCalled();
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
                    jQuery(element).find('input').trigger(e);

                    expect(triggerCheckFocusHandler).toHaveBeenCalled();
                }));
            });
        });
    });

    describe('when it has multiple answers', function () {
        beforeEach(inject(function ($compile, $rootScope) {
            var template = angular.element('<ms-input expected=\\input{["1","2","3"]}></ms-input>');
            element = $compile(template)($rootScope);
            $rootScope.$digest();
        }));

        describe('when the answer is a possible answer', function () {
            it('should give correct feedback if it is correct.', inject(function ($rootScope, $timeout) {
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

            it('should give incorrect feedback if it is not correct', inject(function (panelGroupData, $rootScope, $timeout) {
                panelGroupData.index(1);
                element.find('input').val('3');
                expect(element.find('input').val()).toBe('3');

                // This is the magic to get the answer ng-model to update.
                jQuery(element).find('input').trigger('input');

                $rootScope.$on('answer', function (e, data) {
                    expect(data.result).toBe('incorrect');
                    expect(data.answer).toBe('\\input{3}');
                    expect(data.label).toBeUndefined();
                    expect(data.expected).toBe('\\input{2}');
                });

                $rootScope.$broadcast('checkAnswer');
                $rootScope.$digest();
            }));
        });

        describe('when the answer is not a possible answer', function () {
            it('should give incorrect feedback.', inject(function ($rootScope, $timeout) {
                element.find('input').val('4');
                expect(element.find('input').val()).toBe('4');

                // This is the magic to get the answer ng-model to update.
                jQuery(element).find('input').trigger('input');

                $rootScope.$on('answer', function (e, data) {
                    expect(data.result).toBe('incorrect');
                    expect(data.answer).toBe('\\input{4}');
                    expect(data.label).toBeUndefined();
                    expect(data.expected).toBe('\\input{1}');
                });

                $rootScope.$broadcast('checkAnswer');
                $rootScope.$digest();
                $timeout.flush();
            }));
        });
        
        describe('when responding to checkHelp events', function () {
            it('it should fill in the input with the first possible answer if there is no answer index', inject(function ($rootScope, $timeout){
                
                $rootScope.$broadcast("checkHelp");
                $rootScope.$digest();
                $timeout.flush();
                expect(element.find('input').val()).toBe('1');
                
            }));

            it('should fill in the correct possiblle answer if there is an answer index', inject(function (panelGroupData, $rootScope, $timeout) {
                panelGroupData.index(2);
                $rootScope.$broadcast("checkHelp");
                $rootScope.$digest();
                $timeout.flush();
                expect(element.find('input').val()).toBe('3');
            }));
        });
    });
});
