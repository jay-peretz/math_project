/*global angular, beforeEach, browserTrigger, describe, expect, inject, it */

describe('<ms-input>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-input expected="\\input{3}"></ms-input>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

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
});
