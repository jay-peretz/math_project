/*global angular, beforeEach, describe, expect, inject, it, jasmine */

describe('<ms-controls>', function () {
    var element,
        $rootScope;

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($templateCache) {
        $templateCache.put(
            'partials/directives/ms-controls.html',
            '<div class=well>' +
                '<button ' +
                    'class="btn btn-primary btn-block" ' +
                    'ng-click=checkAnswer() ' +
                    'ng-show=hasCheckAnswer ' +
                '>' +
                    '<i class="icon-ok icon-white"></i>' +
                    '{{answerButtonText}}' +
                '</button>' +
                '<button ' +
                    'class="btn btn-warning btn-block" ' +
                    'ng-click=help() ' +
                    'ng-show=hasHelp ' +
                '>' +
                    '<i class="icon-question-sign icon-white"></i>' +
                    'Help' +
                '</button>' +
                '<button ' +
                    'class="btn btn-primary btn-block" ' +
                    'ng-click=showNextProblem() ' +
                    'ng-show=hasNextProblem ' +
                '>' +
                    '<i class="icon-arrow-right icon-white"></i>' +
                    'Next Problem' +
                '</button>' +
            '</div>'
        );
    }));

    beforeEach(inject(function ($compile, _$rootScope_) {
        $rootScope = _$rootScope_;
        element = $compile(angular.element('<ms-controls data=\'{ "checkAnswer": true, "help": true }\'></ms-controls>'))($rootScope.$new());
        jQuery('body').append(element);
        $rootScope.$digest();
    }));

    it('should display a "Check Answer" button', function () {
        expect(jQuery(element).find('.btn-primary:visible').text()).toBe('Check Answer');
    });

    it('should display a "Help" button', function () {
        expect(jQuery(element).find('.btn-warning:visible').text()).toBe('Help');
    });

    it('should $emit triggerCheckAnswer when the Check Answer button is clicked', function () {
        var triggerCheckAnswerHandler = jasmine.createSpy('$rootScope triggerCheckAnswer handler');
        $rootScope.$on('triggerCheckAnswer', triggerCheckAnswerHandler);
        jQuery(element).find('.btn-primary:visible').click();
        expect(triggerCheckAnswerHandler).toHaveBeenCalled();
    });

    it('should $emit triggerCheckHelp and change the Check Answer button text to Next Problem when the Help button is clicked', function () {
        var triggerCheckHelpHandler = jasmine.createSpy('$rootScope triggerCheckHelp handler');
        $rootScope.$on('triggerCheckHelp', triggerCheckHelpHandler);
        jQuery(element).find('.btn-warning:visible').click();
        expect(triggerCheckHelpHandler).toHaveBeenCalled();
        expect(jQuery(element).find('.btn-primary:visible').text()).toBe('Next Problem');
    });

    describe('when it has a Next Problem button', function () {
        beforeEach(inject(function ($compile, _$rootScope_) {
            element = $compile(angular.element('<ms-controls data=\'{ "nextProblem": true }\'></ms-controls>'))($rootScope.$new());
            jQuery('body').append(element);
            $rootScope.$digest();
        }));

        it('should display a Next Problem button', function () {
            expect(jQuery(element).find('.btn-primary:visible').text()).toBe('Next Problem');
        });

        it('should $emit panelDone and triggerCheckAnswer when the Next Problem button is clicked', function () {
            var panelDoneHandler = jasmine.createSpy('$rootScope panelDone handler'),
                triggerCheckAnswerHandler = jasmine.createSpy('$rootScope triggerCheckAnswer handler');
            $rootScope.$on('panelDone', panelDoneHandler);
            $rootScope.$on('triggerCheckAnswer', triggerCheckAnswerHandler);

            jQuery(element).find('.btn-primary:visible').click();

            expect(panelDoneHandler).toHaveBeenCalled();
            expect(triggerCheckAnswerHandler).toHaveBeenCalled();
        });
    });

    describe('when it has a help panel expression', function () {
        beforeEach(inject(function ($compile, _$rootScope_) {
            element = $compile(angular.element('<ms-controls data=\'{ "help": "\\\\str{Testing}" }\'></ms-controls>'))($rootScope.$new());
            jQuery('body').append(element);
            $rootScope.$digest();
        }));

        it('should display a Help button', function() {
            expect(jQuery(element).find('.btn-warning:visible').text()).toBe('Help');
        });

        it('should $emit showHelpPanel with the help expression data when the Help button is clicked', function () {
            $rootScope.$on('showHelpPanel', function (e, data) {
                expect(data.expression).toBe('\\str{Testing}');
            });
            jQuery(element).find('.btn-warning:visible').click();
        });
    });
});
