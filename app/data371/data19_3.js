/*global angular */

angular.module('mathSkills').service('data19_3', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '19.3 Change a Percent to a Fraction (Directly)',
			path: '19.3-change-a-percent-to-a-fraction-directly',
            children: []
        },
        template = {
			main: {
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
							+'{\\grp{\\str{$decimalPercent}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{can be converted into a fraction by dividing by 100.}}'
							+'{\\grp{\\str{$helpNum}}{\\sign{&divide;}}{\\str{$helpDen}}'
							+'{\\str{is the same as: }}}'	
							+'{\\html{&nbsp;}}'
							+'{\\frac{\\str{$helpNum}}{\\str{$helpDen}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{Always reduce the fraction if possible:}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{\\css{\\frac{\\str{$answerNum}}{\\str{$answerDen}}}{help-answer-text-tight}}'

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
						+'{\\grp{\\str{Change the percent into a fraction (reduced to lowest terms)}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}}}',
						answer: '\\grp{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',			
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{can be converted into a fraction by dividing by 100.}}'
							+'{\\str{Solve:}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\mixed{\\html{$problemWhole}}{\\frac{\\fracstr{$problemNum}}{\\fracstr{$problemDen}}}}{\\sign{&divide;}}{\\frac{\\str{100}}{\\str{1}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{Always reduce the fraction if possible.}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}{help-answer-text-tight}}'
						}
						
					}]
                }]
            },
			third: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Write the percent as a percent in mixed number form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}}',
						answer: '\\grp'
						+'{\\mixed{\\input{$answerFractionWhole}}{\\frac{\\input{$answerFractionNum}}{\\input{$answerFractionDen}}}}'
						+'{\\str{%}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{$problemDecimal}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
						
					}, {						
						problem: '\\rowgrp'
						+'{\\grp{\\str{Write the percent as a percent in mixed number form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}{\\sign{=}}{\\mixed{\\str{$answerFractionWhole}}{\\frac{\\str{$answerFractionNum}}{\\str{$answerFractionDen}}}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Change the percent into its equivalent fraction (reduced to lowest terms):}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\input{$answerSecondNum}}{\\input{$answerSecondDen}}}}}{well}',						
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\grp{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{can be converted into a fraction by dividing by 100.}}'
							+'{\\str{Solve:}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\sign{&divide;}}{\\frac{\\str{100}}{\\str{1}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{Always reduce the fraction if possible.}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerSecondWhole}}{\\frac{\\fracstr{$answerSecondNum}}{\\fracstr{$answerSecondDen}}}}{help-answer-text-tight}}}'
						}
					}]
                }]
            },
			fourth: {
                title: 'Change a Percent to a Fraction (Directly)',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp'
						+'{\\grp{\\str{Write the percent as a percent in mixed number form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}}',
						answer: '\\grp'
						+'{\\mixed{\\input{$answerFractionWhole}}{\\frac{\\input{$answerFractionNum}}{\\input{$answerFractionDen}}}}'
						+'{\\str{%}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{$problemDecimal}}{\\str{%}}'
							+'{\\sign{ \xA0 = \xA0 }}'
							+'{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
						
					}, {
						problem: '\\rowgrp'
						+'{\\grp{\\str{Write the percent as a percent in mixed number form:}}}'
						+'{\\grp{\\html{&nbsp;}}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}}',
						answer: '\\css{\\rowgrp'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\str{$problemDecimal}}{\\str{%}}{\\sign{=}}{\\mixed{\\str{$answerFractionWhole}}{\\frac{\\str{$answerFractionNum}}{\\str{$answerFractionDen}}}}{\\str{%}}}'
						+'{\\html{&nbsp;}}'
						+'{\\html{&nbsp;}}'
						+'{css{\\str{Change the percent into its equivalent fraction (reduced to lowest terms):}}{alert alert-info}}'
						+'{\\html{&nbsp;}}'
						+'{\\grp{\\frac{\\input{$answerSecondNum}}{\\input{$answerSecondDen}}}}}{well}',							
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\grp{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\str{%}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{can be converted into a fraction by dividing by 100.}}'
							+'{\\str{Solve:}}'
							+'{\\html{&nbsp;}}'
							+'{\\grp{\\mixed{\\html{$answerFractionWhole}}{\\frac{\\fracstr{$answerFractionNum}}{\\fracstr{$answerFractionDen}}}}{\\sign{&divide;}}{\\frac{\\str{100}}{\\str{1}}}}'
							+'{\\html{&nbsp;}}'
							+'{\\str{Always reduce the fraction if possible.}}'
							+'{\\html{&nbsp;}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\html{$answerSecondWhole}}{\\frac{\\fracstr{$answerSecondNum}}{\\fracstr{$answerSecondDen}}}}{help-answer-text-tight}}}'
						}
					}]
                }]
            }
        },
        data = [
			// problem 1
            { decimalPercent: '38', answerNum: '19', answerDen: '50', helpNum: '38', helpDen: '100', template: 'main' },
			// problem 2
            { decimalPercent: '44', answerNum: '11', answerDen: '25', helpNum: '44', helpDen: '100', template: 'main' },	
			// problem 3
            { decimalPercent: '35', answerNum: '7', answerDen: '25', helpNum: '35', helpDen: '100', template: 'main' },
			// problem 4
            { problemWhole: '83', problemNum: '1', problemDen: '3', answerNum: '5', answerDen: '6', helpNum: '250', helpDen: '300', template: 'second' },
			// problem 5
			{ problemWhole: '1', problemNum: '5', problemDen: '6', answerNum: '11', answerDen: '600', template: 'second' },
			// problem 6
			{ problemWhole: '&nbsp;', problemNum: '4', problemDen: '5', answerNum: '1', answerDen: '125', template: 'second' },
			// problem 7
			{  problemDecimal: '37.5', fractionWhole: '37', fractionNum: '5', fractionDen: '10', answerFractionWhole: '37', answerFractionNum: '1', answerFractionDen: '2', answerSecondWhole: '&nbsp;', answerSecondNum: '3', answerSecondDen: '8', template: 'third' },
			// problem 8
			{  problemDecimal: '2.3', answerFractionWhole: '2', answerFractionNum: '3', answerFractionDen: '10', answerSecondWhole: '&nbsp;', answerSecondNum: '23', answerSecondDen: '1000', template: 'fourth' },
			// problem 9
			{  problemDecimal: '87.5', fractionWhole: '87', fractionNum: '5', fractionDen: '10', answerFractionWhole: '87', answerFractionNum: '1', answerFractionDen: '2', answerSecondWhole: '&nbsp;', answerSecondNum: '7', answerSecondDen: '8', template: 'third' },
			// problem 10
			{  problemDecimal: '3.7', answerFractionWhole: '3', answerFractionNum: '7', answerFractionDen: '10', answerSecondWhole: '&nbsp;', answerSecondNum: '37', answerSecondDen: '1000', template: 'fourth' }
        ];


    return dataUtils.build(desc, template, data);
}]);
