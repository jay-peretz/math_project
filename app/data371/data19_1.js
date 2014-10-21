 
/*global angular */

angular.module('mathSkills').service('data19_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '19.1 Change a Fraction to a Percent (directly)',
			path: '19.1-change-a-percent-to-a-decimal',
            children: []
        },
        template = {
			main: {
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
							+'{\\css{\\html{&bull;}}{bigger}}{\\str{\xA0 100}}'
							+'{\\sign{\xA0 = \xA0}}'
							+'{\\str{$answerPercent}}{\\str{%}}}'
							+'{\\row{\\html{&nbsp;}}}'
							+'{\\row{\\css{\\str{\xA0 Answer: \xA0 $answerPercent %}}{help-answer-text}}}'
						}
					}]
                }]
            },
			second: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the fraction to a mixed number percentage:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}',
						answer: '\\grp{\\mixed{\\input{$answerFractionWhole}}{\\frac{\\input{$answerFractionNum}}{\\input{$answerFractionDen}}}}{\\str{%}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
							+'{\\html{ \xA0 &bull; \xA0 }}'
							+'{\\frac{\\fracstr{100}}{\\fracstr{1}}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
						
					}]
                }]
            },
			third: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the fraction to a mixed number percentage:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}',
						answer: '\\grp{\\mixed{\\input{$answerFractionWhole}}{\\frac{\\input{$answerFractionNum}}{\\input{$answerFractionDen}}}}'
						+'{\\str{%}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
							+'{\\html{ \xA0 &bull; \xA0 }}'
							+'{\\frac{\\fracstr{100}}{\\fracstr{1}}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
						
					}, {
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change the fraction to a mixed number percentage:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\html{&nbsp;}}'
						+'{\\mixed{\\str{$answerFractionWhole}}{\\frac{\\str{$answerFractionNum}}{\\str{$answerFractionDen}}}}'
						+'{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Change the mixed number percentage to a decimal percentage (round the decimal to the tenths place):}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\input{$percentDecimal}}{\\str{%}}}}{well}',
						
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}'
							+'{\\html{ \xA0 &bull; \xA0 }}'
							+'{\\frac{\\fracstr{100}}{\\fracstr{1}}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\row{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\str{$percentDecimal}}{\\str{% (rounded to the nearest tenth)}}}'
							+'{\\html{&nbsp}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\str{$percentDecimal}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
					}]
                }]
            }
        },
        data = [
			// problem 1
            { fractionWhole: '&nbsp;', fractionNum: '4', fractionDen: '5', answerPercent: '80', template: 'main' },
			// problem 2
			{ fractionWhole: '&nbsp;', fractionNum: '1', fractionDen: '10', answerPercent: '10', template: 'main' },
			// problem 3
			{ fractionWhole: '&nbsp;', fractionNum: '49', fractionDen: '50', answerPercent: '98', template: 'main' },
			// problem 4
			{ fractionWhole: '&nbsp;', fractionNum: '9', fractionDen: '5', answerPercent: '180', template: 'main' },
			// problem 5
			{ fractionWhole: '&nbsp;', fractionNum: '16', fractionDen: '10', answerPercent: '160', template: 'main' },
			// problem 6
			{ fractionWhole: '&nbsp;', fractionNum: '6', fractionDen: '7', answerFractionWhole: '85', answerFractionNum: '5', answerFractionDen: '7', template: 'second' },
			// problem 7
			{ fractionWhole: '&nbsp;', fractionNum: '3', fractionDen: '11', answerFractionWhole: '27', answerFractionNum: '3', answerFractionDen: '11', template: 'second' },
			// problem 8
			{ fractionWhole: '&nbsp;', fractionNum: '2', fractionDen: '3', answerFractionWhole: '66', answerFractionNum: '2', answerFractionDen: '3', percentDecimal: '66.7', template: 'third' },
			// problem 9
			{ fractionWhole: '&nbsp;', fractionNum: '1', fractionDen: '12', answerFractionWhole: '8', answerFractionNum: '1', answerFractionDen: '3', percentDecimal: '8.3', template: 'third' },
			// problem 10	
			{ fractionWhole: '', fractionNum: '5', fractionDen: '9', answerFractionWhole: '55', answerFractionNum: '5', answerFractionDen: '9', percentDecimal: '55.6', template: 'third' },
        ];


    return dataUtils.build(desc, template, data);
}]);
