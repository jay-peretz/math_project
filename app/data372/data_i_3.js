/*global angular */

angular.module('mathSkills').service('data_i_3', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'I.3 Percents to Fractions | Fractions to Percents',
            path: 'I.3-percent-fraction',
            children: []
        },
        template = {
            ftp: {
                title: 'Change a Fraction to a Percent (directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the fraction to a percent (directly):}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}',
						answer: '\\grp{\\input{$answerPercent}}{\\str{%}}',	
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}'
							+'{\\css{\\html{&times;}}{bigger}}{\\str{\xA0 100}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$answerPercent}}{\\str{%}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\css{\\str{\xA0 Answer: \xA0 $answerPercent %}}{help-answer-text}}}'
						}
					}]
                }]
            },
	ptf: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the percent into a fraction (reduced to lowest terms):}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$decimalPercent}}{\\str{%}}}',
						answer: '\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',	
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{$decimalPercent}}{\\str{%}}'
							+'{\\sign{\xA0 = \xA0}}'							
							+'{\\frac{\\str{$helpNum}}{\\str{$helpDen}}}'
							+'{\\sign{\xA0 = \xA0}}'							
							+'{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{\\css{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}{help-answer-text-tight}}'

						}
					}]
                }]
            }
	},
        data = [
            { fractionWhole: '&nbsp;', fractionNum: '4', fractionDen: '5', answerPercent: '80', template: 'ftp' },
			{ fractionWhole: '&nbsp;', fractionNum: '1', fractionDen: '10', answerPercent: '10', template: 'ftp' },
			{ fractionWhole: '&nbsp;', fractionNum: '49', fractionDen: '50', answerPercent: '98', template: 'ftp' },
			{ fractionWhole: '&nbsp;', fractionNum: '9', fractionDen: '5', answerPercent: '180', template: 'ftp' },
			{ fractionWhole: '&nbsp;', fractionNum: '16', fractionDen: '10', answerPercent: '160', template: 'ftp' },
			{ decimalPercent: '38', answerNum: '19', answerDen: '50', helpNum: '38', helpDen: '100', template: 'ptf' },
            { decimalPercent: '44', answerNum: '11', answerDen: '25', helpNum: '44', helpDen: '100', template: 'ptf' },	
			{ decimalPercent: '68', answerNum: '34', answerDen: '50', helpNum: '68', helpDen: '100', template: 'ptf' },
            { decimalPercent: '45', answerNum: '9', answerDen: '20', helpNum: '45', helpDen: '100', template: 'ptf' },					
            { decimalPercent: '35', answerNum: '7', answerDen: '25', helpNum: '35', helpDen: '100', template: 'ptf' }
			         
        ];

    return dataUtils.build(desc, template, data);
}]);
