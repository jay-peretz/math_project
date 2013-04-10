/*global beforeEach, describe, expect, inject, it */

describe('feedbackData', function () {
    // Setup mock $routeParams object.
    beforeEach(module(function ($provide) {
        $provide.value('$routeParams', {
            unit: 'one',
            problemSet: 'set-two'
        });
    }));
    // Load the services.
    beforeEach(module('mathSkills.services'));
    // Load the rest of the app.
    beforeEach(module('mathSkills'));

    describe('getData', function () {
        var data = {
                result: 'correct',
                answer: '\\input{3}',
                expected: '\\input{3}',
                label: 'label'
            },
            data2 = {
                result: 'incorrect',
                answer: '\\input{4}',
                expected: '\\input{5}',
                label: 'label'
            };

        it('should return a single recorded answer event', inject(function (feedbackData, $rootScope) {
            $rootScope.$emit('answer', data);
            expect(feedbackData.getData('one', 'set-two')).toEqual([data]);
        }));

        it('should return a multiple recorded answer events in the order they were fired', inject(function (feedbackData, $rootScope) {
            // $emit another answer event.
            $rootScope.$emit('answer', data2);
            // Both data objects should be returned (they are not reset between tests.)
            expect(feedbackData.getData('one', 'set-two')).toEqual([data, data2]);
        }));
    });
});
