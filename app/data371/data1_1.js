/*global angular */
//Math project on Github
angular.module('mathSkills').service('data1_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '1.1 Place Value Number System of Whole Numbers',
			path: '1.1-place-value-number-system-of-whole-numbers',
            children: []
        },
	        template = {
            main: {
                title: 'Whole Number Place Value',
                children: [{
                    title: 'Main Answer',
                    children: [{
						 problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{$problemNumber}{$placeNumber}}}',
						answer: '\\select{$placeValue}{["Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\showplace{"$placeValue"}{$problemNumber}}'
							+'{\\str{\xA0}}'
							+'{css{\\str{answer:  $placeValue}}{help-answer-text}}'
						}
                    }]
                }]
            }
        },
        data = [
            { problemNumber: '34816', placeNumber: '3', placeValue: 'Thousands', template: 'main' },
			{ problemNumber: '38059', placeNumber: '2', placeValue: 'Hundreds', template: 'main' },
            { problemNumber: '3888708', placeNumber: '6', placeValue: 'Millions', template: 'main' },
			{ problemNumber: '7016486', placeNumber: '1', placeValue: 'Tens', template: 'main' },
            { problemNumber: '4927857', placeNumber: '5', placeValue: 'Hundred Thousands', template: 'main' },
			{ problemNumber: '9049152', placeNumber: '5', placeValue: 'Hundred Thousands', template: 'main' },
            { problemNumber: '4555517', placeNumber: '3', placeValue: 'Thousands', template: 'main' },
			{ problemNumber: '5174344', placeNumber: '0', placeValue: 'Ones', template: 'main' },
            { problemNumber: '1924837', placeNumber: '6', placeValue: 'Millions', template: 'main' },
			{ problemNumber: '295082', placeNumber: '2', placeValue: 'Hundreds', template: 'main' }
        ];

    return dataUtils.build(desc, template, data);
}]);


