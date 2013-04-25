/*global angular, beforeEach, describe, expect, inject, it, jasmine, xit */

describe('<ms-row>', function () {
    var element,
        elScope;

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-expression expected="\\row{\\but{3}{F}}{\\but{0}{T}}{\\but{2}{F}}{\\but{7}{F}}" label="button"></ms-expression>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));
    
    afterEach(function(){
        jQuery('angular.element').remove;
    });

    it('should add four buttons to the DOM', function () {
        expect(jQuery(element).find('button').length).toBe(4);
    });

});
