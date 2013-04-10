/*global beforeEach, describe, expect, inject, it, jasmine */

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
});
