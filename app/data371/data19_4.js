/*global angular */

angular.module('mathSkills').service('data19_4', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '19.4 Change a Percent to a Decimal, then to a Fraction',
			path: '19.4-change-a-percent-to-a-decimal-then-to-a-fraction',
            children: []
        },
        template = {
			main: {
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
            },
			second: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Convert the percent in fractional form into a percent in decimal form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}}',
						answer: '\\grp{\\input{$decimalPercent}}{\\str{%}}',			
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\str{$decimalPercent}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\str{$decimalPercent}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
					}, {
						problem: '\\rowgrp'
						+'{\\grp{\\str{Convert the percent in fractional form into a percent in decimal form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}{\\sign{=}}{\\str{$decimalPercent}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Convert the percent in decimal form into a decimal:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\input{$decimal}}}}{well}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}{\\sign{=}}{\\str{$decimalPercent}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{\\percentarrows{$decimalPercent}{0.01}{percent}{decimal}}'
							+'{\\html{&nbsp;}}'
							+'{\\css{\\str{Answer:  $decimal}}{help-answer-text}}'
						}
					}, {
						problem: '\\rowgrp'
						+'{\\grp{\\str{Convert the percent in fractional form into a percent in decimal form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}{\\sign{=}}{\\str{$decimalPercent}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{\\str{Convert the percent in decimal form into a decimal:}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\str{$decimalPercent}}{\\str{%}}{\\sign{=}}{\\str{$decimal}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Convert the decimal to a fraction:}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}}{well}',
						controls: {
							"checkAnswer": true,							
							"help": '\\rowgrp'
							+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}{\\sign{=}}{\\str{$decimalPercent}}{\\str{%}}{\\sign{=}}{\\str{$decimal}}}'
							+'{\\html{&nbsp;}}'
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
            { decimalPercent: '38', decimal: '0.38', answerNum: '19', answerDen: '50', helpNum: '38', helpDen: '100', outLoud: 'thirty-eight hundredths', template: 'main' },
			// problem 2
            { decimalPercent: '82', decimal: '0.82', answerNum: '41', answerDen: '50', helpNum: '82', helpDen: '100', outLoud: 'eighty-two hundredths', template: 'main' },
			// problem 3
            { decimalPercent: '6.7', decimal: '0.067', answerNum: '67', answerDen: '1000', helpNum: '67', helpDen: '1000', outLoud: 'sixty-seven thousandths', template: 'main' },
			// problem 4
            { decimalPercent: '3.5', decimal: '0.035', answerNum: '7', answerDen: '200', helpNum: '35', helpDen: '1000', outLoud: 'thirty-five thousandths', template: 'main' },
			// problem 5
            { decimalPercent: '4.73', decimal: '0.0473', answerNum: '473', answerDen: '10000', helpNum: '473', helpDen: '10000', outLoud: 'four hundred seventy-three ten-thousandths', template: 'main' },
			// problem 6
			{ problemWhole: '1', problemNum: '4', problemDen: '5', decimalPercent: '1.8', decimal: '0.018',  answerNum: '9', answerDen: '500', helpNum: '18', helpDen: '1000', outLoud: 'eighteen thousandths', template: 'second' },
			// problem 7
			{ problemWhole: '12', problemNum: '1', problemDen: '2', decimalPercent: '12.5', decimal: '0.125',  answerNum: '1', answerDen: '8', helpNum: '125', helpDen: '1000', outLoud: 'one hundred twenty-five thousandths', template: 'second' },
			// problem 8
			{ problemWhole: '&nbsp;', problemNum: '7', problemDen: '8', decimalPercent: '0.875', decimal: '0.00875',  answerNum: '7', answerDen: '800', helpNum: '875', helpDen: '100000', outLoud: 'eight hundred seventy-five hundred-thousandths', template: 'second' },
			// problem 9
			{ problemWhole: '&nbsp;', problemNum: '2', problemDen: '5', decimalPercent: '0.4', decimal: '0.004',  answerNum: '1', answerDen: '250', helpNum: '4', helpDen: '1000', outLoud: 'four thousandths', template: 'second' },
			// problem 10
			{ problemWhole: '&nbsp;', problemNum: '3', problemDen: '4', decimalPercent: '0.75', decimal: '0.0075',  answerNum: '3', answerDen: '400', helpNum: '75', helpDen: '10000', outLoud: 'seventy-five ten-thousandths', template: 'second' }
        ];


    return dataUtils.build(desc, template, data);
}]);
