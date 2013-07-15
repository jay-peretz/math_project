/*global angular */
 
angular.module('mathSkills').service('data14_2', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '14.2 Multiply by Powers of Ten',
			path: '14.2-multiply-by-powers-of-ten',
            children: []
        },
        template = {
			main: {
                title: 'Multiply by Powers of Ten',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{\\row{\\str{Determine the product of:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$number \($multiplier\)}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\multiplydecpowten{$number}{$multiplier}}{\\css{\\str{Answer:  $helpAnswer}}{help-answer-text help-answer-margin-right}}}'
						}
                    }]
                }]
            }
        },
        data = [
            { number: '833', multiplier: '100', answer: '83300', helpAnswer: '83,300', template: 'main' },
			{ number: '722', multiplier: '10', answer: '7220', helpAnswer: '7,220', template: 'main' },
			{ number: '0.1', multiplier: '1000', answer: '100', helpAnswer: '100', template: 'main' },
			{ number: '3.36', multiplier: '1000', answer: '3360', helpAnswer: '3,360', template: 'main' },
			{ number: '82', multiplier: '0.001', answer: '0.082', helpAnswer: '0.082', template: 'main' },
			{ number: '0.1', multiplier: '0.001', answer: '0.0001', helpAnswer: '0.0001', template: 'main' },
			{ number: '38.5', multiplier: '0.001', answer: '0.0385', helpAnswer: '0.0385', template: 'main' },
			{ number: '80.62', multiplier: '0.00001', answer: '0.0008062', helpAnswer: '0.0008062', template: 'main' },
			{ number: '988', multiplier: '1000', answer: '988000', helpAnswer: '988,000', template: 'main' },
			{ number: '7.6', multiplier: '0.01', answer: '0.076', helpAnswer: '0.076', template: 'main' }       
       ];

    return dataUtils.build(desc, template, data);
}]);
