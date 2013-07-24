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
            { number: '1000', divisor: '10', answer: 'x', helpAnswer: 'x', decimalPlaces: '4', template: 'main' },
			{ number: '722', divisor: '10', answer: '7220', helpAnswer: '7,220', template: 'main' },
			{ number: '0.1', divisor: '1000', answer: '100', helpAnswer: '100', template: 'main' },
			{ number: '3.36', divisor: '1000', answer: '3360', helpAnswer: '3,360', template: 'main' },
			{ number: '82', divisor: '0.001', answer: '0.082', helpAnswer: '0.082', template: 'main' },
			{ number: '0.1', divisor: '0.001', answer: '0.0001', helpAnswer: '0.0001', template: 'main' },
			{ number: '38.5', divisor: '0.001', answer: '0.0385', helpAnswer: '0.0385', template: 'main' },
			{ number: '80.62', divisor: '0.00001', answer: '0.0008062', helpAnswer: '0.0008062', template: 'main' },
			{ number: '988', divisor: '1000', answer: '988000', helpAnswer: '988,000', template: 'main' },
			{ number: '7.6', divisor: '0.01', answer: '0.076', helpAnswer: '0.076', template: 'main' }       
       ];

    return dataUtils.build(desc, template, data);
}]);
