/*global afterEach, angular, beforeEach, describe, expect, inject, it */

describe('<ms-feedback>', function () {
    var elem,
        scope;

    beforeEach(function () {
        this.addMatchers({
            toBeVisible: function () {
                return this.actual.is(':visible');
            },
            toHaveClass: function (expected) {
                return this.actual.hasClass(expected);
            }
        });
    });

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($templateCache) {
        $templateCache.put(
            'partials/directives/ms-feedback.html',
            '<span class="label label-{{feedback.labelClass}}" ng-show=feedback.show>' +
                '<i class="icon-{{feedback.icon}} icon-white"></i> {{feedback.message}}' +
            '</span>'
        );
    }));

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        elem = $compile(angular.element('<ms-feedback></ms-feedback>'))(scope);
        jQuery('body').append(elem);
        $rootScope.$digest();
    }));

    afterEach(function () {
        elem.remove();
    });

    it('should compile', function () {
        expect(jQuery(elem).find('*').length).toBeGreaterThan(1);
    });

    it('should be hidden by default', function () {
        expect(jQuery('ms-feedback > span')).not.toBeVisible();
    });

    it('should display correct feedback for a right answer', inject(function ($rootScope) {
        var span = jQuery('ms-feedback > span');

        scope.$new().$emit('answer', { result: 'correct' });
        $rootScope.$digest();

        expect(span).toBeVisible();
        expect(span).toHaveClass('label-success');
        expect(span.find('i')).toHaveClass('icon-ok');
        expect(span.text().length).toBeGreaterThan(1);
    }));

    it('should display incorrect feedback for a wrong answer', inject(function ($rootScope) {
        var span = jQuery('ms-feedback > span');

        scope.$new().$emit('answer', { result: 'incorrect' });
        $rootScope.$digest();

        expect(span).toBeVisible();
        expect(span).toHaveClass('label-important');
        expect(span.find('i')).toHaveClass('icon-remove');
        expect(span.text().length).toBeGreaterThan(1);
    }));

    it('should hide on checkHelp events', inject(function ($rootScope) {
        var span = jQuery('ms-feedback > span');

        scope.$new().$emit('answer', { result: 'correct' });
        $rootScope.$digest();

        expect(span).toBeVisible();

        $rootScope.$broadcast('checkHelp');
        $rootScope.$digest();

        expect(span).not.toBeVisible();
    }));
});
