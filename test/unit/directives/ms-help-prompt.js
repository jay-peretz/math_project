/*global angular, beforeEach, browserTrigger, describe, expect, inject, it */

describe('<ms-help-prompt>', function () {
    var element = {},
        server;

    beforeEach(module('mathSkills'));

    // templateUrl
    // Currently the actual template needs to be kept synced with this template string.
    beforeEach(inject(function ($httpBackend) {
        server = $httpBackend;
        $httpBackend
            .when('GET', 'partials/directives/ms-help-prompt.html')
            .respond(
                '<div class=alert ng-show=helpPrompt.show>' +
                    '<button type=button class=close data-dismiss=alert>&times;</button>' +
                    '<strong>Stuck?</strong> Click help to be given the correct answer.' +
                '</div>'
            );
    }));

    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-help-prompt></ms-help-prompt>');
        element = $compile(template)($rootScope);
        server.flush();
        $rootScope.$digest();
    }));

    it('should be hidden by default', function () {
        expect(element.find('div').css('display')).toBe('none');
    });

    it('should be hidden after one incorrect answer', inject(function ($rootScope) {
        $rootScope.$new().$emit('answer', { result: 'incorrect' });
        $rootScope.$digest();
        expect(element.find('div').css('display')).toBe('none');
    }));

    it('should display after two incorrect answers', inject(function ($rootScope) {
        var childScope = $rootScope.$new();
        childScope.$emit('answer', { result: 'incorrect' });
        childScope.$emit('answer', { result: 'incorrect' });
        $rootScope.$digest();

        expect(element.find('div').css('display')).toBe('');
    }));

    it('should be hidden after two correct answers', inject(function ($rootScope) {
        var childScope = $rootScope.$new();
        childScope.$emit('answer', { result: 'correct' });
        childScope.$emit('answer', { result: 'correct' });
        $rootScope.$digest();

        expect(element.find('div').css('display')).toBe('none');
    }));

    describe('when there is a help button', function () {
        it('should display certain help text.');
    });

    describe('when there is not a help button', function () {
        it('should display different help text.');
    });

    it('should hide when checkHelp fires');
});
