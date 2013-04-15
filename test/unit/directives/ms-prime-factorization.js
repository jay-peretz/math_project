/*global angular, beforeEach, describe, expect, inject, it, xit */

describe('<ms-prime-factorization>', function () {
    var elem, $elem;

    beforeEach(module('mathSkills'));

    // Load the template.
    beforeEach(inject(function ($templateCache) {
        $templateCache.put(
            'partials/directives/ms-prime-factorization.html',
            '<div>' +
                '<div class="alert alert-info">{{instructions}}</div>' +
                '<div ng-switch on=complete>' +
                    '<span ng-switch-when=true>' +
                        '<ms-expression expected={{finalAnswer}} label=finalAnswer></ms-expression>' +
                    '</span>' +
                '</div>' +
                '<table>' +
                    '<tr ng-repeat="row in completedRows">' +
                        '<td class=divisor>{{row.divisor}}</td>' +
                        '<td class=dividend>{{row.dividend}}</td>' +
                    '</tr>' +
                    '<tr ng-hide=complete>' +
                        '<td class=divisor ng-switch on=factorStep>' +
                            '<span ng-switch-when=true>' +
                                '<ms-input label=divisor></ms-input>' +
                            '</span>' +
                            '<span ng-switch-when=false>&nbsp;</span>' +
                        '</td>' +
                        '<td class=dividend ng-switch on=factorStep>' +
                            '<span ng-switch-when=true>' +
                                '{{factoring}}' +
                            '</span>' +
                            '<span ng-switch-when=false>' +
                                '<ms-input expected="{{factoring | wrap:\'input\'}}" label=dividend></ms-input>' +
                            '</span>' +
                        '</td>' +
                    '</tr>' +
                    '<tr class=complete ng-show=complete>' +
                        '<td>&nbsp;</td>' +
                        '<td class=dividend>1</td>' +
                    '</tr>' +
                '</table>' +
            '</div>'
        );
    }));

    beforeEach(inject(function ($compile, $rootScope) {
        var template = angular.element('<ms-prime-factorization expected=\\primefac{10}></ms-prime-factorization>');
        elem = $compile(template)($rootScope.$new());
        $elem = jQuery(elem);
        $rootScope.$digest();
    }));

    it('should initialize with the number to be factored and an input box', function () {
        expect($elem.find('tr:not(.complete) .dividend').text()).toBe('10');
        expect($elem.find('input').length).toBe(1);
    });

    xit('should present a UI that walks through the factoring process', inject(function ($rootScope) {
        // Attach the element to the DOM so that we can test element visibility.
        jQuery('body').append(elem);

        // Give first factor of 5.
        $elem.find('input').val('5');
        $elem.find('input').trigger('input');
        $rootScope.$broadcast('checkAnswer');
        $rootScope.$digest();

        // The row should have a dividend of 10 and a divisor of 5.
        expect($elem.find('tr:first .divisor').text()).toBe('5');
        expect($elem.find('tr:first .dividend').text()).toBe('10');
        // The second row should have an empty divisor and an input box for a dividend.
        expect($elem.find('tr:nth-of-type(2) .divisor').text().length).toBe(1);
        expect($elem.find('tr:nth-of-type(2) .dividend input').length).toBe(1);

        // Give incorrect dividend of 3.
        $elem.find('input').val('3');
        $elem.find('input').trigger('input');
        $rootScope.$broadcast('checkAnswer');
        $rootScope.$digest();

        // All the data should be the same as after we gave it the factor of 5.
        expect($elem.find('tr:first .divisor').text()).toBe('5');
        expect($elem.find('tr:first .dividend').text()).toBe('10');
        expect($elem.find('tr:nth-of-type(2) .divisor').text().length).toBe(1);
        expect($elem.find('tr:nth-of-type(2) .dividend input').length).toBe(1);

        // Give new dividend of 2.
        $elem.find('input').val('2');
        $elem.find('input').trigger('input');
        $rootScope.$broadcast('checkAnswer');
        $rootScope.$digest();

        // The row should have a dividend of 10 and a divisor of 5.
        expect($elem.find('tr:first .divisor').text()).toBe('5');
        expect($elem.find('tr:first .dividend').text()).toBe('10');
        // The second row should have an input for a divisor and dividend of 2.
        expect($elem.find('tr:nth-of-type(2) .divisor input').length).toBe(1);
        expect($elem.find('tr:nth-of-type(2) .dividend').text()).toBe('2');

        // Give incorrect factor of 3.
        $elem.find('input').val('3');
        $elem.find('input').trigger('input');
        $rootScope.$broadcast('checkAnswer');
        $rootScope.$digest();

        // All the data should be the same as after we gave it the dividend of 2.
        expect($elem.find('tr:first .divisor').text()).toBe('5');
        expect($elem.find('tr:first .dividend').text()).toBe('10');
        expect($elem.find('tr:nth-of-type(2) .divisor input').length).toBe(1);
        expect($elem.find('tr:nth-of-type(2) .dividend').text()).toBe('2');

        // Give second factor of 2.
        $elem.find('input').val('2');
        $elem.find('input').trigger('input');
        $rootScope.$broadcast('checkAnswer');
        $rootScope.$digest();

        // The row should have a dividend of 10 and a divisor of 5.
        expect($elem.find('tr:first .divisor').text()).toBe('5');
        expect($elem.find('tr:first .dividend').text()).toBe('10');
        // The second row should have a divisor of 2 and a dividend of 2.
        expect($elem.find('tr:nth-of-type(2) .divisor').text()).toBe('2');
        expect($elem.find('tr:nth-of-type(2) .dividend').text()).toBe('2');
        // The complete row should be visible.
        expect($elem.find('tr.complete:visible').length).toBe(1);
        // There should be three visible rows.
        expect($elem.find('tr:visible').length).toBe(3);

        // Remove the element from the DOM.
        jQuery(elem).remove();
    }));
});
