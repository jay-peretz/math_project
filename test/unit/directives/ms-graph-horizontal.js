/*global describe, it */

/*describe('<ms-graph-horizontal>', function () {
    it('should pass the right data to flot');
    it('should properly display the graph labels');
});*/

describe('<ms-graph-horizontal>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('partials/directives/ms-graph.html'))

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function (){
			$ = jQuery;
	}));

    describe('when ms-graph-horizontal tag element is added', function () {

    	beforeEach(inject(function ($rootScope, $compile) {
    		var tagString ='\\horgraph{Country A:  Food Production and Population}{[[0, "1965"], [2, "1965"], null, [0, "1985"], [3, "1985"], null, [0, "2005"], [11, "2005"], null, [0, "2025"],[22, "2025"]]}{Population of Country A}{[[0, "1962"], [3, "1962"], null, [0, "1982"], [5, "1982"], null, [0, "2002"], [9, "2002"], null, [0, "2022"],[18, "2022"]]}{Population Country A can Feed}{Years}{Number (in millions)}';
            var template = angular.element('<ms-graph-horizontal expected='+tagString+'></ms-graph-horizontal>');
            elScope = $rootScope.$new();
            element = $compile(template)(elScope);
            $rootScope.$digest();
        }));
    
        it('should find div with id #placeholder present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('#placeholder').length).toBe(1);
        }));
    	
    	it('should find div with class rotateCounterClock90', inject(function ($rootScope) {
            expect(jQuery(element).find('.rotateCounterClock90').length).toBe(1);
        }));
    	
    	it('should find text "Country" in table title', inject(function ($rootScope) {
    		 expect(jQuery(element).find('table th span').text()).toContain("Country");
        }));
	
    });
    
});
