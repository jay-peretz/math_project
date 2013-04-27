/*global angular, beforeEach, describe, expect, inject, it, jasmine */

describe('ms-button-group>', function () {
    var element = {},
        elScope = {};

    beforeEach(module('mathSkills'));

    beforeEach(inject(function ($rootScope, $compile) {
        var template = angular.element('<ms-button-group expected="\\butgrp{\\but{NO}{F}}{\\but{YES}{T}}{\\but{NO}{F}}"  label="butgrp"></ms-button-group>');
        elScope = $rootScope.$new();
        element = $compile(template)(elScope);
        $rootScope.$digest();
    }));
    
    describe('when responding to checkAnswer events', function () {
        
        it('should stop checkAnswer events coming down and $emit answer events with a proper data object', inject(function ($rootScope) {
            $rootScope.$on('answer', function (e, data) {
                expect(data.result).toBe('correct');
                expect(data.answer).toBe('\\but{YES}{T}');
                expect(data.label).toBeUndefined('butgrp');
                expect(data.expected).toBe('\\but{YES}{T}');
            });

            $rootScope.$broadcast('checkAnswer');
            $rootScope.$digest();
        }));
        
    });
     
    describe('when exspected is undefined', function () {
        
        beforeEach(inject(function ($rootScope, $compile) {
            var template = angular.element('<ms-button-group label="butgrp"></ms-button-group>');
            element = $compile(template)($rootScope.$new());
            $rootScope.$digest();
        }));
        
        it('should compile without an expected attribute', function () {
            expect(element).toBeDefined();
        });
        
    });

});
