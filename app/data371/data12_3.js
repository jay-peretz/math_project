/*global angular */

angular.module('mathSkills').service('data12_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '12.3 Round Decimals',
			path: '12.3-round-decimals',
            children: []
        },
	        template = {
            main: {
                title: 'Round Decimals',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\str{Round this decimal number to the indicated place value:}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{$problemNumber}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{Nearest $placeValue place}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\placevalue{$problemNumber}{$placeNumber}{showanswer}'
						}
                    }]
                }]
            }
        },
        data = [
            { problemNumber: '0.96139', placeNumber: '4', placeValue: 'Hundredths', answer: '0.96', template: 'main' },
			{ problemNumber: '5.52887', placeNumber: '5', placeValue: 'Tenths', answer: '5.5', template: 'main' },
			{ problemNumber: '6.2412', placeNumber: '3', placeValue: 'Hundredths', answer: '6.24', template: 'main' },
			{ problemNumber: '1.96139', placeNumber: '2', placeValue: 'Ten-Thousandths', answer: '1.9614', template: 'main' },
			{ problemNumber: '1.68', placeNumber: '3', placeValue: 'Ones', answer: '2', template: 'main' },
			{ problemNumber: '7.19824', placeNumber: '5', placeValue: 'Tenths', answer: '7.2', template: 'main' },
			{ problemNumber: '10.9563', placeNumber: '4', placeValue: 'Tenths', answer: '11.0', template: 'main' },
			{ problemNumber: '49.1', placeNumber: '3', placeValue: 'Tens', answer: '50', template: 'main' },
			{ problemNumber: '7.7195', placeNumber: '2', placeValue: 'Thousandths', answer: '7.720', template: 'main' },
			{ problemNumber: '16.4118', placeNumber: '3', placeValue: 'Hundredths', answer: '16.41', template: 'main' }
        ];

    return dataUtils.build(desc, template, data);
}]);
              
