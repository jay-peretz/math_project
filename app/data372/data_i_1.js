/*global angular */

angular.module('mathSkills').service('data_i_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'I.1 Fractions to Decimals | Decimals to Fractions',
            path: 'I.1-fractions-decimals',
            children: []
        },
        template = {
            ftd: {
				title: 'Change Fractions to Decimals',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '\\rowgrp{\\row{\\str{Change \xA0}}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{\\str{\xA0 to a decimal;}}}{\\row{\\str{\xA0}}}{\\row{\\str{Round to the hundredths place if necessary.}}}',
						answer: '\\input{$dec}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\str{$n1}}{\\str{\xA0 divided by \xA0}}{\\str{$d1}}{\\str{\xA0 equals \xA0}}{\\str{$udec ...}}}{\\row{\\str{$udec ...}}{\\str{ rounded to the hundredths place  }}{\\str{\xA0 equals \xA0}}{\\str{$dec}}}{\\row{\\str{\xA0}}}{\\css{\\row{\\str{Answer:  $dec}}}{help-answer-text help-answer-margin-right}}}}'
		
						}
            }]
        }]
    },
	dtf: {
        title: 'Change Decimals to Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\rowgrp{\\row{\\str{What is the fraction of this decimal (reduced to lowest terms)?}}}{\\row{\\str{$udec}}}',
                answer: '\\frac{\\input{$n1}}{\\input{$d1}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\rowgrp{\\row{\\str{Write the place value name as a fraction;}}}{\\row{\\str{reduce if necessary.}}}{\\row{\\str{\xA0}}}{\\row{\\frac{\\fracstr{$un1}}{\\fracstr{$ud1}}}{\\str{ \xA0 \xA0 = \xA0 \xA0 }}{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\frac{\\fracstr{$n1}}{\\fracstr{$d1}}}{help-answer-text-tight}}}'
                }
            }]
        }]
    }
	},
        data = [
            { n1: 6, d1: 9, dec: .67, udec: .666, template: 'ftd'},
			{ n1: 3, d1: 9, dec: .33, udec: .333, template: 'ftd'},
            { n1: 1, d1: 5, dec: .2, udec: .2, template: 'ftd'},
			{ n1: 1, d1: 8, dec: .13, udec: .125, template: 'ftd'},
			{ n1: 5, d1: 12, dec: .42, udec: .41666, template: 'ftd'},
			{ n1: 17, d1: 25,  udec: .68, un1: 68, ud1: 100, template: 'dtf'},
			{ n1: 23, d1: 50,  udec: .455, un1: 46, ud1: 100, template: 'dtf'},
			{ n1: 37, d1: 100,  udec: .37, un1: 37, ud1: 100, template: 'dtf'},
			{ n1: 12, d1: 50,  udec: .236, un1: 24, ud1: 100, template: 'dtf'},
			{ n1: 4, d1: 5,  udec: .796, un1: 80, ud1: 100, template: 'dtf'}
			         
        ];

    return dataUtils.build(desc, template, data);
}]);
