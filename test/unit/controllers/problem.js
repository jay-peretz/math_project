/*global beforeEach, describe, expect, inject, it, jasmine */

describe('problem', function () {
    var scope,
        locationPath,
        $timeout,
        routeParams = {
            unit: 'test-unit',
            problemSet: 'test-problemSet',
            problemNumber: 6
        },
        dummyProblemData = {
            title: 'dummy problem',
            children: [{
                title: 'Main Answer'
            }, {
                title: 'Workbook'
            }]
        };

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($controller, $rootScope, _$timeout_) {
        scope = $rootScope.$new();
        locationPath = jasmine.createSpy('$location.path').andReturn('/test-unit/test-problemSet/6');
        $timeout = _$timeout_;
        $controller('problem', {
            courseData: {
                getNumberOfProblems: function (unit, problemSet) {
                    if (unit === 'test-unit' && problemSet === 'test-problemSet') {
                        return 7;
                    }
                },
                getProblemData: function (unit, problemSet, problemNumber) {
                    if (unit === 'test-unit' && problemSet === 'test-problemSet' && problemNumber === 6) {
                        return dummyProblemData;
                    }
                }
            },
            $location: {
                path: locationPath
            },
            $routeParams: routeParams,
            $scope: scope,
            $timeout: $timeout
        });
    }));

    it('should add the problem detail properties to the scope', function () {
        expect(scope.problem).toEqual(dummyProblemData);
        expect(scope.mainAnswer).toEqual(dummyProblemData.children[0]);
        expect(scope.workbook).toEqual(dummyProblemData.children[1]);
    });

    it('should decorate answer event data objects with a problem number property', inject(function ($rootScope) {
        $rootScope.$on('answer', function (e, data) {
            expect(data.problemNumber).toBe(6);
        });
        scope.$new().$emit('answer', {});
    }));

    it('should respond to problemDone events by going to the next problem in the set', function () {
        scope.$new().$emit('problemDone');
        $timeout.flush();
        expect(locationPath).toHaveBeenCalledWith('/test-unit/test-problemSet/7');
    });

    it('should respond to problemDone events by going to the feedback page if there are no more problems', function () {
        routeParams.problemNumber = 7;
        scope.$new().$emit('problemDone');
        $timeout.flush();
        expect(locationPath).toHaveBeenCalledWith('/test-unit/test-problemSet/all/feedback');
        routeParams.problemNumber = 6;
    });
});
