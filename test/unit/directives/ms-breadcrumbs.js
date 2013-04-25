/*global angular, beforeEach, describe, expect, inject, it, spyOn */

describe('<ms-breadcrumbs>', function () {
    var element = {},
        elScope = {},
        path = '/';

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($templateCache) {
        $templateCache.put(
            'partials/directives/ms-breadcrumbs.html',
            '<ul class=breadcrumb>' +
                '<li ng-repeat="crumb in breadcrumbs" ng-class="{ active: $last }">' +
                    '<ng-switch on=$last>' +
                        '<span ng-switch-when=false>' +
                            '<a href="{{crumb.path}}">{{crumb.title}}</a>' +
                            '<span class=divider>/&nbsp;</span>' +
                        '</span>' +
                        '<span ng-switch-when=true>' +
                            '{{crumb.title}}' +
                        '</span>' +
                    '</ng-switch>' +
                '</li>' +
            '</ul>'
        );
    }));

    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-breadcrumbs></ms-breadcrumbs>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));

    it('should display a breadcrumb with only a home title on the root page', function () {
        expect(jQuery(element).find('li').length).toBe(1);
        expect(jQuery(element).find('li').text()).toBe('Home');
    });

    it('should show a home, units, unit, and problem set breadcrumb if all are present', inject(function (courseData, $location, $rootScope) {
        path = '/units/unit/problem-set';
        spyOn(courseData, 'getUnitData').andReturn({ title: 'Unit Title' });
        spyOn(courseData, 'getProblemSetData').andReturn({ title: 'Problem Set Title' });
        spyOn($location, 'path').andReturn(path);

        $rootScope.$emit('$routeChangeSuccess');
        $rootScope.$digest();

        expect(jQuery(element).find('li').length).toBe(4);
        expect(jQuery(element).find('li').text().replace(/\s*/g, '')).toBe('Home/Units/UnitTitle/ProblemSetTitle');
    }));
});
