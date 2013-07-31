/*global angular */
 
angular.module('mathSkills').service('data15_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '15.3 Divide by Powers of Ten',
			path: '15.3-divide-by-powers-of-ten',
            children: []
        },
        template = {
			main: {
                title: 'Divide by Powers of Ten',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\str{Determine the quotient of:}}'
						+'{\\str{\xA0}}'
						+'{\\html{$number <span class=bigger>&divide;</span> $divisor}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\dividedecpowten{$number}{$divisor}{$decimalPlaces}}{\\css{\\str{Answer:  $helpAnswer}}{help-answer-text help-answer-margin-right}}}'
						}
                    }]
                }]
            }
        },
        data = [
            { number: '10', divisor: '1000', answer: '0.01', helpAnswer: '0.01', template: 'main' },
			{ number: '0.1', divisor: '0.001', answer: '100', helpAnswer: '100', template: 'main' },
			{ number: '0.001', divisor: '0.1', answer: '0.01', helpAnswer: '0.01', template: 'main' },
			{ number: '0.01', divisor: '10', answer: '0.001', helpAnswer: '0.001', template: 'main' },
			{ number: '0.1', divisor: '100', answer: '0.001', helpAnswer: '0.001', template: 'main' },
			{ number: '10', divisor: '0.01', answer: '1000', helpAnswer: '1,000', template: 'main' },
			{ number: '10', divisor: '10', answer: '1.0', helpAnswer: '1.0', template: 'main' },
			{ number: '10', divisor: '100', answer: '0.1', helpAnswer: '0.1', template: 'main' },
			{ number: '100', divisor: '10', answer: '10.0', helpAnswer: '10', template: 'main' },
			{ number: '10', divisor: '1000', answer: '0.01', helpAnswer: '0.01', template: 'main' },  
			{ number: '1000', divisor: '.01', answer: '100000', helpAnswer: '100,000', template: 'main' },
			{ number: '1000', divisor: '10', answer: '100', helpAnswer: '100', template: 'main' } 
       ];

    return dataUtils.build(desc, template, data);
}]);
