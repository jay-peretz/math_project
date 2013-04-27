describe('<ms-graph>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function (){
			$ = jQuery;
	}));


	beforeEach(inject(function ($templateCache){
		$templateCache.put('partials/directives/ms-graph.html', 
            '<style type="text/css">.rotateCounterClock90{-moz-transform: rotate(-90deg);-webkit-transform: rotate(-90deg);-o-transform: rotate(-90deg);transform: rotate(-90deg);}.placeholderDimensions{width: 350px;height: 300px;}.align_center{text-align:center;}.font_weight_bold{font-weight:bold;}.margin_left_small{margin-left: 80px;}</style><table><th colspan=2 class="align_center font_weight_bold"><span class="margin_left_small">{{graphTitleIn}}</span></th><tr><td><span class="rotateCounterClock90 font_weight_bold">{{graphverticalIn}}</span></td><td><div id="placeholder" class=placeholderDimensions></div></td></tr><tr><td colspan=2 class="align_center"><span class="margin_left_small font_weight_bold">{{graphBottomText}}</span></td></tr></table>'
			);
	}));

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
