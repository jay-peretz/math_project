describe('<ms-graph>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('partials/directives/ms-graph.html'))

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function (){
			$ = jQuery;
	}));
    
    describe('when ms-graph tag element is added', function () {

    	beforeEach(inject(function ($rootScope, $compile) {
    		var tagString ='\\graph{Deer Survey in Sonoma County}{[ ["January", 220], ["April", 370], ["July", 445], ["October", 300]]}{500}{Number of Deer Counted}';
            var template = angular.element('<ms-graph expected='+tagString+'></ms-graph>');
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
    	
    	it('should find text "Deer" in table title', inject(function ($rootScope) {
    		 expect(jQuery(element).find('table th span').text()).toContain("Deer");
        }));
        
    });
    		
});
