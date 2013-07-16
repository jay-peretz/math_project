/*global angular */
 
angular.module('mathSkills').service('data15_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '15.1 Change Fractions to Decimals',
    		path: '15.1-change-fractions-to-decimals',
            children: []
        },
        template = {
			main: {
                title: 'Change Fractions to Decimals',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\row{\\str{Change \xA0}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}{\\str{\xA0 to a decimal:}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{$fractionNum divided by $fractionDen equals $answer}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{Answer:  $answer}}{help-answer-text}}'
						}
                    }]
                }]
            },
			rounded: {
                title: 'Change Fractions to Decimals',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{\\row{\\str{Change \xA0}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}{\\str{\xA0 to a decimal;}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round to the hundredths place if necessary.}}}',
						answer: '\\input{$answer}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{$fractionNum divided by $fractionDen equals $unrounded}}'
							+'{\\str{$unrounded rounded to the hundredths place equals:}}'
							+'{\\str{$answer}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{Answer:  $answer}}{help-answer-text}}'
						 }
                    }]
                }]
            }
        },
        data = [
            { fractionNum: '3', fractionDen: '10', answer: '0.3', template: 'main' },
			{ fractionNum: '4', fractionDen: '8', answer: '0.5', template: 'main' },
			{ fractionNum: '6', fractionDen: '8', answer: '0.75', template: 'main' },
			{ fractionNum: '14', fractionDen: '22', unrounded: '0.633...', answer: '0.64', template: 'rounded' },
			{ fractionNum: '14', fractionDen: '24', unrounded: '0.583...', answer: '0.58', template: 'rounded' },
			{ fractionNum: '17', fractionDen: '34', answer: '0.5', template: 'main' },
			{ fractionNum: '10', fractionDen: '15', unrounded: '0.666...', answer: '0.67', template: 'rounded' },
			{ fractionNum: '12', fractionDen: '21', unrounded: '0.571...', answer: '0.57', template: 'rounded' },
			{ fractionNum: '28', fractionDen: '52', unrounded: '0.538...', answer: '0.54', template: 'rounded' },
			{ fractionNum: '3', fractionDen: '9', unrounded: '0.333...', answer: '0.33', template: 'rounded' }
       ];

    return dataUtils.build(desc, template, data);
}]);
