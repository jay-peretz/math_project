/*global angular */

angular.module('mathSkills').service('data9_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '9.3 Build an Equivalent Fraction',
			path: '9.3-build-an-equivalent-fraction',
            children: []
        },
	        template = {
            main: {
                title: 'Build an Equivalent Fraction',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\str{Start with the fraction:}}'
						+'{\\html{&nbsp;}}'
						+'{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{ and build an equivalent fraction that has a denominator of $newDen.}}',
						answer: '\\grp{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}'
						+'{\\sign{= \xA0}}'
						+'{\\frac{\\input{$answer}}{\\fracstr{$newDen}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}{\\sign{\xA0 = \xA0}}{\\frac{\\str{?}}{\\fracstr{$newDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\str{$problemDen \xA0 times \xA0 ?}}{\\sign{\xA0 = \xA0}}{\\str{ $newDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{Multiply numerator and denominator by the number whose product with $problemDen is $newDen:}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}'
							+'{\\sign{&dot;}}'
							+'{\\frac{\\fracstr{$multiplier}}{\\fracstr{$multiplier}}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\frac{\\str{$answer}}{\\str{$newDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{\xA0 Answer: \xA0 $answer}}{help-answer-text}}'
						}
                    }]
                }]
			}
		},
        data = [
            { problemNum: '3', problemDen: '5', newDen: '20', multiplier: '4', answer: '12', template: 'main' },
			{ problemNum: '7', problemDen: '6', newDen: '18', multiplier: '3', answer: '21', template: 'main' },
			{ problemNum: '3', problemDen: '4', newDen: '12', multiplier: '3', answer: '9', template: 'main' },
			{ problemNum: '2', problemDen: '5', newDen: '10', multiplier: '2', answer: '4', template: 'main' },
			{ problemNum: '3', problemDen: '8', newDen: '32', multiplier: '4', answer: '12', template: 'main' },
			{ problemNum: '1', problemDen: '2', newDen: '8', multiplier: '4', answer: '4', template: 'main' },
			{ problemNum: '5', problemDen: '6', newDen: '12', multiplier: '2', answer: '10', template: 'main' },
			{ problemNum: '1', problemDen: '12', newDen: '60', multiplier: '5', answer: '5', template: 'main' },
			{ problemNum: '4', problemDen: '9', newDen: '36', multiplier: '4', answer: '16', template: 'main' },
			{ problemNum: '9', problemDen: '10', newDen: '100', multiplier: '10', answer: '90', template: 'main' }			
        ];

    return dataUtils.build(desc, template, data);
}]);




