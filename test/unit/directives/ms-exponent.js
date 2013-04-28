/*global angular, beforeEach, describe, expect, inject, it, spyOn */

describe('<ms-exponent>', function () {
    var element;

    beforeEach(module('mathSkills'));
    
    beforeEach(inject(function ($compile, $rootScope) {
        var template = angular.element('<ms-exponent expected="\\exp{\\input{3}}{\\input{2}}"></ms-exponent>');
        element = $compile(template)($rootScope.$new());
        $rootScope.$digest();
    }));

    it('should compile', function () {
        expect(element).toBeDefined();
    });

    it('should call four directiveUtils methods.', inject(function (directiveUtils) {
        //spyOn(directiveUtils, 'aggregateChildAnswers');
        //spyOn(directiveUtils, 'compileExpected');
        // spyOn(directiveUtils, 'routeHelp');
        // spyOn(directiveUtils, 'routeFocus');
        
        //expect(directiveUtils.aggregateChildAnswers).toHaveBeenCalled();
        //expect(directiveUtils.compileExpected).toHaveBeenCalled();
        // expect(directiveUtils.routeHelp).toHaveBeenCalled();
        // expect(directiveUtils.routeFocus).toHaveBeenCalled();
    }));
});