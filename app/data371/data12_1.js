/*global angular */

angular.module('mathSkills').service('data12_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '12.1 Place Value Number System of Decimal Numbers',
			path: '12.1-place-value-number-system-of-decimal-numbers',
            children: []
        },
	        template = {
            main: {
                title: 'Place Value Number System of Decimal Numbers',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{\\row{\\str{Identify the place value of the indicated digit: }}}{\\row{\\placevalue{$problemNumber}{$placeNumber}}}',
						answer: '\\select{$placeValue}{["Millionths", "Hundred-thousandths", "Ten-thousandths", "Thousandths", "Hundredths", "Tenths", "Ones", "Tens", "Hundreds", "Thousands", "Ten Thousands", "Hundred Thousands", "Millions", "Ten Millions", "Hundred Millions", "Billions", "Ten Billions", "Hundred Billions"]}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\showplacedecimal{"$placeValue"}{$problemNumber}}}{\\row{\\str{\xA0}}}{\\row{css{\\str{answer:  $placeValue}}{label_like margin-left-small}}}}'
						}
                    }]
                }]
            }
        },
        data = [
            { problemNumber: '2.97551', placeNumber: '4', placeValue: 'Hundredths', template: 'main' },
			{ problemNumber: '37928.46101', placeNumber: '9', placeValue: 'Thousands', template: 'main' },
            { problemNumber: '0.1569', placeNumber: '2', placeValue: 'Thousandths', template: 'main' },
			{ problemNumber: '86.38456', placeNumber: '6', placeValue: 'Ones', template: 'main' },
            { problemNumber: '9956.52', placeNumber: '2', placeValue: 'Tenths', template: 'main' },
			{ problemNumber: '83.20524', placeNumber: '1', placeValue: 'Hundred-thousandths', template: 'main' },
            { problemNumber: '972.6571', placeNumber: '1', placeValue: 'Ten-thousandths', template: 'main' },
			{ problemNumber: '0.659', placeNumber: '4', placeValue: 'Ones', template: 'main' },
            { problemNumber: '2.78929', placeNumber: '3', placeValue: 'Thousandths', template: 'main' },
			{ problemNumber: '0.85237', placeNumber: '4', placeValue: 'Hundredths', template: 'main' }
        ];

    return dataUtils.build(desc, template, data);
}]);
