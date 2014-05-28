/*global angular */

angular.module('mathSkills').service('data_i_2', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'I.2 Conversions Between Percents and Decimals',
            path: 'i.2-conversions-between-percents-and-decimals',
            children: []
        },
        template = {
            main: {
                title: 'Change a Decimal to a Percent',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}}',
						answer: '\\grp{\\input{$answer}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\percentarrows{$startNumber}{100}{decimal}{percent}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\str{Answer:  $answer}}{\\str{%}}}{help-answer-text help-answer-margin-right}}'
						}
                    }]
                }]
            },
	twoStepNoReduce: {
                title: 'Change a Decimal to a Percent',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}}',
						answer: '\\grp{\\input{$answer}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\percentarrows{$startNumber}{100}{decimal}{percent}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\str{Answer:  $answer}}{\\str{%}}}{help-answer-text help-answer-margin-right}}'
						}
                    },
					{
                         problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\html{$answer}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\str{Now change the decimal percent into a fraction or mixed number percent:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\mixed{\\input{$finalWhole}}{\\frac{\\input{$finalNum}}{\\input{$finalDen}}}}{\\str{%}}}'						
						+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\css{\\str{Write the decimal place value as the denominator of the fraction:}}{label_like}}'
							+'{\\grp{\\html{$answer}}{\\str{%}}'
							+'{\\sign{\xA0 \xA0 = \xA0 \xA0}}'
							+'{\\mixed{\\str{$finalWhole}}{\\frac{\\fracstr{$finalNum}}{\\fracstr{$finalDen}}}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\grp{\\str{Answer: \xA0 \xA0}}{\\mixed{\\str{$finalWhole}}{\\frac{\\fracstr{$finalNum}}{\\fracstr{$finalDen}}}}{\\str{%}}}{help-answer-text}}'
						}
                    }]
                }]
            },
			twoStepReduce: {
                title: 'Change a Decimal to a Percent',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}}',
						answer: '\\grp{\\input{$answer}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\percentarrows{$startNumber}{100}{decimal}{percent}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\grp{\\str{Answer:  $answer}}{\\str{%}}}{help-answer-text help-answer-margin-right}}'
						}
                    },
					{
                         problem: '\\rowgrp{\\row{\\str{Change this decimal into a percent:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}}',
						answer: '\\css{\\rowgrp'
						+'{\\grp{\\html{$answer}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\css{\\str{Now change the decimal percent into a fraction or mixed number percent:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\mixed{\\input{$finalWhole}}{\\frac{\\input{$finalNum}}{\\input{$finalDen}}}}{\\str{%}}}'						
						+'}{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\css{\\str{Write the decimal place value as the denominator of the fraction:}}{label_like}}'
							+'{\\grp{\\html{$answer}}{\\str{%}}'
							+'{\\sign{\xA0 \xA0 = \xA0 \xA0}}'
							+'{\\mixed{\\str{$finalWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\grp{\\str{Answer: \xA0 \xA0}}{\\mixed{\\str{$finalWhole}}{\\frac{\\fracstr{$finalNum}}{\\fracstr{$finalDen}}}}{\\str{%}}}{help-answer-text}}'
						}
                    }]
                }]
            },
			percentToDecimal: {
                title: 'Change a Percent to a Decimal',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Change this percent to a decimal:}}}{\\row{\\str{\xA0}}}{\\row{\\str{$startNumber}}{\\str{%}}',
						answer: '\\grp{\\input{$decimalPercent}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\percentarrows{$startNumber}{0.01}{percent}{decimal}}{\\css{\\str{Answer:  $decimalPercent}}{help-answer-text help-answer-margin-right}}}'
						}
                    }]
                }]
            },
			percentToFraction: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\str{Change this percent into a decimal:}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\str{$decimalPercent}}{\\str{%}}}',
						answer: '\\grp{\\input{$decimal}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\percentarrows{$decimalPercent}{0.01}{percent}{decimal}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{Answer:  $decimal}}{help-answer-text}}'
						}
					}, {
						problem: '\\rowgrp'
						+'{\\grp{\\str{Change this percent into a decimal:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$decimalPercent}}{\\str{%}}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\str{$decimalPercent}}{\\str{%}}{\\sign{=}}{\\str{$decimal}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Change the decimal into a fraction:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\str{The decimal $decimal is converted by stating the decimal number out loud.  Use the appropriate place value:}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\str{$decimal}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\str{"$outLoud"}}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\str{or: \xA0}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{Reduce whenever possible.}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\grp{\\str{Answer: \xA0 \xA0}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}{help-answer-text}}'
						}
					}]
                }]
            }
	},
        data = [
            // problem 1
            { startNumber: '0.87', answer: '87', template: 'main'  },
			// problem 2
			{ startNumber: '0.075', answer: '7.5', template: 'main'  },
			// problem 3
			{ startNumber: '0.0082', answer: '0.82', template: 'main'  },
			// problem 4
			{ startNumber: '1.4', answer: '140', template: 'main'  },
			// problem 5
			{ startNumber: '3', answer: '300', template: 'main'  },
			// problem 6
			{ startNumber: '0.357  ', answer: '35.7', finalWhole: '35', finalNum: '7', finalDen: '10', template: 'twoStepNoReduce'  },
			// problem 7
			{ startNumber: '0.1425', answer: '14.25', finalWhole: '14', finalNum: '1', finalDen: '4', helpNum: '25', helpDen: '100', template: 'twoStepReduce'  },
			// problem 8
			{ startNumber: '60', decimalPercent: '0.6', template: 'percentToDecimal'  },
			// problem 9
			{ startNumber: '15.7', decimalPercent: '0.157', template: 'percentToDecimal'  },
			// problem 10
			{ startNumber: '3.5', decimalPercent: '0.035', template: 'percentToDecimal'  },
			// problem 11
			{ startNumber: '165', decimalPercent: '1.65', template: 'percentToDecimal'  },
			// problem 12
			{ startNumber: '100', decimalPercent: '1', template: 'percentToDecimal'  },
			// problem 13
            { decimalPercent: '12.5', decimal: '0.125', answerNum: '1', answerDen: '8', helpNum: '125', helpDen: '1000', outLoud: 'one hundred twenty-five thousandths', template: 'percentToFraction' },
			// problem 14
            { decimalPercent: '4.8', decimal: '0.048', answerNum: '6', answerDen: '125', helpNum: '48', helpDen: '1000', outLoud: 'forty-eight thousandths', template: 'percentToFraction' },
			         
        ];

    return dataUtils.build(desc, template, data);
}]);
