/*global beforeEach, describe, expect, inject, it */

describe('problemSetList', function () {
    var scope,
        testCourseData = {
            children: [{
                title: '1.1'
            }, {
                title: '1.2'
            }, {
                title: '1.3'
            }, {
                title: '2.1'
            }, {
                title: '2.2'
            }]
        };

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('problemSetList', {
            courseData: {
                getUnitData: function (unit) {
                    if (unit === 'test-unit') {
                        return testCourseData;
                    }
                }
            },
            $scope: scope,
            $routeParams: {
                unit: 'test-unit'
            }
        });
    }));

    it('should place the unit and problemSets on scope', function () {
        expect(scope.unit).toEqual(testCourseData);
        expect(scope.problemSets).toEqual(testCourseData.children);
    });

    it('should provide a function to properly divide the different problem set groups', function () {
        expect(scope.divide(0)).toBe(false); // 1.1
        expect(scope.divide(1)).toBe(false); // 1.2
        expect(scope.divide(3)).toBe(true);  // 2.1
        expect(scope.divide(4)).toBe(false); // 2.2
    });
});
