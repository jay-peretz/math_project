/*global afterEach, angular, beforeEach, describe, expect, inject, it */

describe('<ms-css>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));
    
    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-css expected="\\css{\\str{stringTest}}{classTest}" label=css></ms-css>');
        element = $compile(template)($rootScope.$new());
		jQuery("body").append(element);
        $rootScope.$digest();
    }));

	afterEach(function() {
		jQuery(element).remove();
	});
    
    describe('when ms-css tag element is present', function () {
        it('should be add a class to the wrapper', inject(function ($rootScope) {
            expect(jQuery("ms-css > div").hasClass('classTest')).toBe(true);
        }));
		
		it('it should contain only one ms-string', inject(function ($rootScope) {
			expect(jQuery("ms-css ms-string").length).toBeGreaterThan(0);																			
		}));
		
		it('it should decorate answer events coming up the scope chain', inject(function ($rootScope) {
			$rootScope.$on('answer', function (e, data) {
				expect(data.expected).toBe("\\css{\\str{stringTest}}{classTest}");
				expect(data.answer).toBe("\\css{testanswer}{classTest}");
			});
			$rootScope.$$childHead.$$childHead.$emit('answer', { answer: 'testanswer' });
		}));
    });
});