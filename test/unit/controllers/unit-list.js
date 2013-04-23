/*global beforeEach, describe, expect, inject, it */

describe('unitList', function () {
    var scope,
        unitList;

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        unitList = $controller('unitList', {
            courseData: {
                getCourseData: function () {
                    return {
                        title: 'Test Title',
                        children: ['Test Children']
                    };
                }
            },
            $scope: scope
        });
    }));

    it('should place the course and title on scope', function () {
        expect(scope.course).toBe('Test Title');
        expect(scope.units).toEqual(['Test Children']);
    });
});
