/*global angular, beforeEach, browserTrigger, describe, expect, inject, it, jasmine, xit */

describe('<ms-chart>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};

    beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($templateCache){
				$templateCache.put('partials/directives/ms-chart.html', 
								   '<span><table class="collapseTable td_padding text_align_center large-font-size"><tr ng-show="chartTitleIn"><th colspan="{{chartColumnsIn}}"><span class="fontWeightBold">{{chartTitleIn}}</span></th></tr><tr ng-repeat="row in chartArrayOut" ng-style="{true: {borderBottom: \'2px solid black\'}, false: {}}[$first]"><td ng-repeat="col in row" class="chartTable"><span>{{col}}</span></td></tr></table></span>'
				);				
	}));
		
	beforeEach(inject(function ($rootScope, $compile) {
		var tagString ='\\chart{Time (in seconds) to Run 220 Meters}{6}{5}{["Athlete","Race #1","Race #2","Race #3","Race #4","Runner A","27","29","29","29","Runner B","30","28","28","26","Runner C","26","30","27","24","Runner D","24","28","30","28","Runner E","27","24","28","24"]}';
        var template = angular.element('<ms-chart expected='+tagString+'></ms-chart>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));
	
    describe('when ms-comparewholegraph tag element is added', function () {

        it('should be present on the page', inject(function ($rootScope) {
            expect(jQuery(element).find('table').length).toBe(1);
        }));		
    });
	
});

