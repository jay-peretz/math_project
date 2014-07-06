/*global angular */

angular.module('mathSkills').service('data18_1', ['dataUtils', function (dataUtils) {
    var desc = {
			title: '18.1 An Introduction to Decimal, Fraction, and Percent Equivalencies',
			path: '18.1-decimal-fraction-percent-equivalencies',
            children: []
        },
        template = {
			equivFracValueReduce: {
                title: 'An Introduction to Decimal, Fraction, and Percent Equivalencies',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Write the equivalent fractional value (reduced to lowest terms) of this decimal:}}}{\\row{\\str{$decimal}}}',
						answer: '\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\css{\\str{Write the decimal place value as the denominator of the fraction:}}{label_like}}'
							+'{\\row{\\mixed{\\str{$helpWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}'
							+'{\\sign{\xA0 \xA0 = \xA0 \xA0}}'
							+'{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
							+'{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}'
							+'{css{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}{help-answer-text-tight}}'
                		}
                    }]
                }]
            },
			equivFracValueNoReduce: {
                title: 'An Introduction to Decimal, Fraction, and Percent Equivalencies',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Write the equivalent fractional value (reduced to lowest terms) of this decimal:}}}{\\row{\\str{$decimal}}}',
						answer: '\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\css{\\str{Write the decimal place value as the denominator of the fraction:}}{label_like}}'
							+'{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}'
							+'{\\html{&nbsp;}}'
							+'{css{\\grp{\\str{Answer: \xA0 \xA0}}{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}{help-answer-text}}'
                		}
                    }]
                }]
            },
			equivDecValueProper: {
                title: 'An Introduction to Decimal, Fraction, and Percent Equivalencies',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{\\row{\\str{Write the equivalent decimal value of this fraction:}}}{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}',
						answer: '\\input{$answerDecimal}',						
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\css{\\str{Divide the numerator of the fraction by the denominator.}}{help-answer-text-tight}}}'
							+'{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}'
							+'{\\row{\\str{the fraction \xA0}}{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}'
							+'{\\str{\xA0 means \xA0 $fractionNum }}{\\css{\\str{\xF7}}{bigger}}{\\str{\xA0 $fractionDen}}}'
							+'{\\row{\\css{\\str{\xA0 Answer: \xA0 $answerDecimal}}{help-answer-text}}}'
						}
                    }]
                }]
            },
			equivDecValueImproper: {
                title: 'An Introduction to Decimal, Fraction, and Percent Equivalencies',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\rowgrp{\\row{\\str{Write the equivalent decimal value of this fraction:}}}{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}',
						answer: '\\input{$answerDecimal}',						
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\css{\\str{Divide the numerator of the fraction by the denominator.}}{help-answer-text-tight}}}'
							+'{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}'
							+'{\\frac{\\fracstr{$helpNum}}{\\fracstr{$fractionDen}}}}'
							+'{\\grp{\\str{the fraction \xA0}}{\\frac{\\str{$helpNum}}{\\str{$fractionDen}}}'
							+'{\\str{\xA0 means \xA0 $helpNum }}{\\css{\\str{\xF7}}{bigger}}{\\str{\xA0 $fractionDen}}}'
							+'{\\row{\\css{\\str{\xA0 Answer: \xA0 $answerDecimal}}{help-answer-text}}}'
						}
                    }]
                }]
            },
			decPercentFracPercentReduce: {
                title: 'An Introduction to Decimal, Fraction, and Percent Equivalencies',
                children: [{
                    title: 'Main Answer',
                    children: [{
                       	problem: '\\rowgrp{\\row{\\str{Express the decimal percent as a fractional percent:}}}{\\row{\\str{$decimalPercent %}}}',
						answer: '\\grp{\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\str{Write the decimal place value as the denominator of the fraction.}}}'
							+'{\\row{\\str{$decimalPercent}}{\\str{%}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}'
							+'{\\mixed{\\str{$helpWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}{\\str{%}}'
							+'{\\sign{\xA0 \xA0 = \xA0 \xA0}}'
							+'{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}{\\str{%}}}'
							+'{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
                    }]
                }]
            },
			fracPercentDecPercentProper: {
                title: 'An Introduction to Decimal, Fraction, and Percent Equivalencies',
                children: [{
                    title: 'Main Answer',
                    children: [{
                       	problem: '\\rowgrp{\\row{\\str{Express the fractional precent as a decimal percent:}}}{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\str{%}}}',
						answer: '\\row{\\input{$answerDecimal}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\css{\\str{Divide the numerator of the fraction by the denominator.}}{help-answer-text-tight}}}'
							+'{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\str{%}}}'
							+'{\\row{\\str{the fraction \xA0}}{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}'
							+'{\\str{\xA0 means \xA0 $fractionNum }}{\\css{\\str{\xF7}}{bigger}}{\\str{\xA0 $fractionDen}}}'
							+'{\\row{\\css{\\str{\xA0 Answer: \xA0 $answerDecimal %}}{help-answer-text}}}'
						}
                    }]
                }]
            },
			fracPercentDecPercentImproper: {
                title: 'An Introduction to Decimal, Fraction, and Percent Equivalencies',
                children: [{
                    title: 'Main Answer',
                    children: [{
                       	problem: '\\rowgrp{\\row{\\str{Express the fractional precent as a decimal percent:}}}{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\str{%}}}',
						answer: '\\row{\\input{$answerDecimal}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\css{\\str{Divide the numerator of the fraction by the denominator.}}{help-answer-text-tight}}}'
							+'{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}{\\str{%}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}'
							+'{\\frac{\\fracstr{$helpNum}}{\\fracstr{$fractionDen}}}{\\str{%}}}'
							+'{\\row{\\str{the fraction \xA0}}{\\frac{\\str{$helpNum}}{\\str{$fractionDen}}}'
							+'{\\str{\xA0 means \xA0 $helpNum }}{\\css{\\str{\xF7}}{bigger}}{\\str{\xA0 $fractionDen}}}'
							+'{\\row{\\css{\\str{\xA0 Answer: \xA0 $answerDecimal %}}{help-answer-text}}}'
						}
                    }]
                }]
            }
        },
        data = [
			// problem 1
            { decimal: '4.8', answerWhole: 4, answerNum: 4, answerDen: 5, helpWhole: 4, helpNum: 8, helpDen: 10, template: 'equivFracValueReduce' },
			// problem 2
            { decimal: '0.09', answerWhole: "", answerNum: 9, answerDen: 100, helpWhole: "", helpNum: 9, helpDen: 100, template: 'equivFracValueNoReduce' },
			// problem 3
            { decimal: '3.2', answerWhole: 3, answerNum: 1, answerDen: 5, helpWhole: 3, helpNum: 2, helpDen: 10, template: 'equivFracValueReduce' },
			// problem 4
            { decimal: '2.5', answerWhole: 2, answerNum: 1, answerDen: 2, helpWhole: 2, helpNum: 5, helpDen: 10, template: 'equivFracValueReduce' },
			// problem 5
            { decimal: '0.015', answerWhole: "", answerNum: 3, answerDen: 200, helpWhole: "", helpNum: 15, helpDen: 1000, template: 'equivFracValueReduce' },
			// problem 6
           	{ fractionWhole: '&nbsp;', fractionNum: '3', fractionDen: '5', answerDecimal: '0.6', template: 'equivDecValueProper' },
			// problem 7
			{ fractionWhole: '&nbsp;', fractionNum: '9', fractionDen: '10', answerDecimal: '0.9', template: 'equivDecValueProper' },
			// problem 8
			{ fractionWhole: '1', fractionNum: '7', fractionDen: '8', helpNum: '15', answerDecimal: '1.875', template: 'equivDecValueImproper' },
			// problem 9
            { fractionWhole: '3', fractionNum: '1', fractionDen: '4', helpNum: '13', answerDecimal: '3.25', template: 'equivDecValueImproper' },
			// problem 10
            { fractionWhole: '', fractionNum: '11', fractionDen: '20', answerDecimal: '0.55', template: 'equivDecValueProper' },
			// problem 11
			{ decimalPercent: '1.375', answerWhole: 1, answerNum: 3, answerDen: 8, helpWhole: 1, helpNum: 375, helpDen: 1000, template: 'decPercentFracPercentReduce' },
			// problem 12
			{ decimalPercent: '2.6', answerWhole: 2, answerNum: 3, answerDen: 5, helpWhole: 2, helpNum: 6, helpDen: 10, template: 'decPercentFracPercentReduce' },
			// problem 13
			{ decimalPercent: '3.75', answerWhole: 3, answerNum: 3, answerDen: 4, helpWhole: 3, helpNum: 75, helpDen: 100, template: 'decPercentFracPercentReduce' },
			// problem 14
			{ fractionWhole: '&nbsp;', fractionNum: '5', fractionDen: '8', answerDecimal: '0.625', template: 'fracPercentDecPercentProper' },
			// problem 15
			{ fractionWhole: '2', fractionNum: '1', fractionDen: '2', helpNum: '5', answerDecimal: '2.5', template: 'fracPercentDecPercentImproper' },
        ];
		
    return dataUtils.build(desc, template, data);
	
}]);