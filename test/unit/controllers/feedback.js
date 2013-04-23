/*global beforeEach, describe, expect, inject, it */

describe('feedback', function () {
    var scope,
        testFeedbackData = [{
            result: 'correct'
        }, {
            result: 'incorrect'
        }],
        testProblemSetData = [{
            title: 'problem 1'
        }, {
            title: 'problem 2'
        }];

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('feedback', {
            courseData: {
                getProblemSetData: function (unit, problemSet) {
                    if (unit === 'test-unit' && problemSet === 'test-problemSet') {
                        return testProblemSetData;
                    }
                }
            },
            feedbackData: {
                getData: function (unit, problemSet) {
                    if (unit === 'test-unit' && problemSet === 'test-problemSet') {
                        return testFeedbackData;
                    }
                }
            },
            $routeParams: {
                unit: 'test-unit',
                problemSet: 'test-problemSet'
            },
            $scope: scope
        });
    }));

    it('should place feedback and problemSet data on the scope', function () {
        expect(scope.problemSet).toEqual(testProblemSetData);
        expect(scope.feedback).toEqual(testFeedbackData);
    });

    it('should provide a function that converts answer results to bootstrap classes', function () {
        expect(scope.rowClass('correct')).toBe('success');
        expect(scope.rowClass('incorrect')).toBe('error');
        expect(scope.rowClass('helped')).toBe('warning');
        expect(scope.rowClass('')).toBe('');
        expect(scope.rowClass('bad-result')).toBe('');
    });
});
