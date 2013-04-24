/*global beforeEach, describe, expect, inject, it */

describe('home', function () {
    var scope;

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('home', { $scope: scope });
    }));

    it('should place the course property on scope', function () {
        expect(scope.course).toBe('GENERAL ARITHMETIC');
    });
});
