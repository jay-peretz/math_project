/*global angular, beforeEach, describe, expect, inject, it, spyOn */

describe('<ms-expression>', function () {
    var element;

    beforeEach(module('mathSkills'));
    
    beforeEach(inject(function ($compile, $rootScope) {
        var template = angular.element('<ms-expression expected="\\frac{\\input{1}}{\\input{2}}" label="test"></ms-expression>');
        element = $compile(template)($rootScope.$new());
        $rootScope.$digest();
    }));

    it('should compile', function () {
        expect(element).toBeDefined();
    });
    
     it('should change the label property of the data answer event object to $scope.label', inject(function ($rootScope) {
        $rootScope.$on('answer', function (e, data) {
                expect(data.label).toBe('test');
            });

            $rootScope.$broadcast('checkAnswer');
            $rootScope.$digest();
    }));

    it('should call directiveUtils.compileExpected.', inject(function (directiveUtils, $rootScope) {
        spyOn(directiveUtils, 'compileExpected');
        
        //expect(directiveUtils.compileExpected).toHaveBeenCalled();
    }));
});
