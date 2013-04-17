/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-wholeplace>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-wholeplace expected="\\wholeplace{33333}{3}"></ms-wholeplace>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    describe('when ms-wholeplace tag element is added', function () {

        it('should be present on the page', inject(function ($rootScope) {
			var selector = $('wholeplace');
            expect(jQuery(element).find(selector)).not.toBeUndefined();
        }));
		
    });
});
