/*global angular, beforeEach, describe, expect, inject, it, jasmine, spyOn */

describe('directiveUtils', function () {
    var du;

    beforeEach(module('mathSkills.services'));
    beforeEach(module('mathSkills'));
    beforeEach(inject(function (directiveUtils) {
        du = directiveUtils;
    }));

    describe('aggregateChildAnswers', function () {
        it('should place a random controllerId on the passed in scope', inject(function ($rootScope) {
            var scope = $rootScope.$new();
            du.aggregateChildAnswers(scope);
            expect(scope.controllerId).toMatch(/^[0-9\.]+$/);
        }));

        it('should only let one answer event come up through it', inject(function ($rootScope) {
            var scope = $rootScope.$new(),
                answerHandler = jasmine.createSpy('$rootScope answer event handler');

            scope.children = ['child1', 'child2'];
            scope.tag = 'agg';

            $rootScope.$on('answer', answerHandler);
            du.aggregateChildAnswers(scope);
            scope.$new().$emit('answer', {
                answer: '\\input{1}',
                result: 'correct',
                expected: '\\input{1}',
                label: 'child1'
            });
            // The first answer event should be stopped by the aggregating tag.
            expect(answerHandler).not.toHaveBeenCalled();

            scope.$new().$emit('answer', {
                answer: '\\input{2}',
                result: 'correct',
                expected: '\\input{2}',
                label: 'child2'
            });
            // Now that the second answer event has come through, the $rootScope
            // event should have fired.
            expect(answerHandler).toHaveBeenCalled();
        }));
    });

    describe('compileExpected', function () {
        it('should place empty string values on the scope for each item in scope.children', inject(function ($rootScope) {
            var scope = $rootScope.$new();
            du.compileExpected(scope);
            expect(scope.child1).toBeUndefined();
            expect(scope.child2).toBeUndefined();
            scope.children = ['child1', 'child2'];
            $rootScope.$digest();
            expect(scope.child1).toBe('');
            expect(scope.child2).toBe('');
        }));

        it('should compile scope.expected using the parser service and attach the returned template to the element', inject(function (parser, $rootScope) {
            var scope = $rootScope.$new(),
                elem = angular.element('<div></div>');
            scope.expected = 'Test expected value';
            spyOn(parser, 'parse').andReturn('<div class=testing></div>');
            du.compileExpected(scope, elem);
            $rootScope.$digest();
            expect(parser.parse).toHaveBeenCalledWith('Test expected value', { scope: scope });
            expect(jQuery(elem).find('.testing').length).toBe(1);
        }));
    });

    describe('routeFocus', function () {
        it('should call preventDefault on all checkFocus events.', inject(function ($rootScope) {
            var scope = $rootScope.$new();
            du.routeFocus(scope);
            scope.$on('checkFocus', function (e) {
                expect(e.defaultPrevented).toBe(true);
            });
            $rootScope.$broadcast('checkFocus');
        }));

        it('should refire checkFocus events on the first child scope.', inject(function ($rootScope) {
            var scope = $rootScope.$new(),
                childScope = scope.$new(),
                childCheckFocusHander = jasmine.createSpy('child scope checkFocus handler');
            du.routeFocus(scope);
            childScope.$on('checkFocus', childCheckFocusHander);
            $rootScope.$broadcast('checkFocus');
            expect(childCheckFocusHander.calls.length).toBe(2);
            // The first call is the routed call.
            expect(childCheckFocusHander.calls[0].args[0].defaultPrevented).toBe(false);
            // The second call is the cancelled call from $rootScope.
            expect(childCheckFocusHander.calls[1].args[0].defaultPrevented).toBe(true);
        }));

        it('should route checkFocus to children one at a time if previous children cannot receive focus', inject(function ($rootScope) {
            var scope = $rootScope.$new(),
                children = [scope.$new(), scope.$new(), scope.$new()],
                childCalls = [0, 0, 0],
                focusedHandler = jasmine.createSpy('$rootScope focused handler'),
                notFocusedHandler = jasmine.createSpy('$rootScope notFocused handler');

            scope.children = [1, 2, 3];
            children[0].$on('checkFocus', function (e) {
                if (e.defaultPrevented === false) {
                    children[0].$emit('notFocused', { controllerId: 'child1' });
                    childCalls[0] += 1;
                }
            });
            children[1].$on('checkFocus', function (e) {
                if (e.defaultPrevented === false) {
                    children[1].$emit('focused', { controllerId: 'child2' });
                    childCalls[1] += 1;
                }
            });
            children[2].$on('checkFocus', function (e) {
                if (e.defaultPrevented === false) {
                    childCalls[2] += 1;
                }
            });
            $rootScope.$on('focused', focusedHandler);
            $rootScope.$on('notFocused', notFocusedHandler);
            du.routeFocus(scope);

            $rootScope.$broadcast('checkFocus');
            expect(focusedHandler.calls.length).toBe(1);
            expect(notFocusedHandler.calls.length).toBe(0);
            expect(childCalls).toEqual([1, 1, 0]);
        }));

        it('should $emit notFocused if none of its children can receive focus', inject(function ($rootScope) {
            var scope = $rootScope.$new(),
                children = [scope.$new(), scope.$new()],
                focusedHandler = jasmine.createSpy('$rootScope focused handler'),
                notFocusedHandler = jasmine.createSpy('$rootScope notFocused handler');

            scope.children = [1, 2];
            children.forEach(function (child, childNumber) {
                child.$on('checkFocus', function (e, data) {
                    if (e.defaultPrevented === false) {
                        child.$emit('notFocused', { controllerId: childNumber });
                    }
                });
            });
            du.routeFocus(scope);
            $rootScope.$on('focused', focusedHandler);
            $rootScope.$on('notFocused', notFocusedHandler);

            $rootScope.$broadcast('checkFocus');
            expect(focusedHandler).not.toHaveBeenCalled();
            expect(notFocusedHandler).toHaveBeenCalled();
        }));

        it('should ignore already cancelled checkFocus events', inject(function ($rootScope) {
            var scope = $rootScope.$new(),
                childScope = scope.$new(),
                childListener = jasmine.createSpy('childScope checkFocus listener');

            $rootScope.$on('checkFocus', function (e) {
                e.preventDefault();
            });
            childScope.$on('checkFocus', childListener);
            du.routeFocus(scope);

            $rootScope.$broadcast('checkFocus');
            expect(childListener.calls.length).toBe(1);
        }));
    });
});
