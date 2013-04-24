describe('<ms-breadcrumbs>', function () {
    var element = {},
        elScope = {},
		cacheHTML = {};
	beforeEach(module('mathSkills'));
	
	beforeEach(inject(function ($templateCache){
				$templateCache.put('partials/directives/ms-breadcrumbs.html',
					"<ulclass=breadcrumb><ling-repeat='crumbinbreadcrumbs'ng-class='{active:$last}'><ng-switchon=$last><spanng-switch-when=false><ahref='{{crumb.path}}'{{crumb.title}}</a><spanclass=divider>/&nbsp;</span></span><spanng-switch-when=true>{{crumb.title}}</span></ng-switch></li></ul>");				
	}));
	
	beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-breadcrumbs></ms-breadcrumbs>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));
	
	


});