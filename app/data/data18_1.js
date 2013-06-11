/*global angular */

angular.module('mathSkills').service('data18_1', function () {
    var ret = {
			title: '18.1 Decimal & Fraction Form of Percents',
			path: '18.1-decimal-fraction-form-percents',
            children: []
        },
        template = {
			main: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Write the equivalent fractional value (reduced to lowest terms) of this decimal:}}}{\\row{\\str{$decimal}}}',
						answer: '\\mixed{\\input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\css{\\str{Write the decimal place value as the denominator of the fraction:}}{label_like}}{\\row{\\mixed{\\str{$helpWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}{help-answer-text-tight}}'
                		}
                    }]
                }]
            },
			second: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
                         problem: '\\rowgrp{\\row{\\str{Write the equivalent decimal value of this fraction:}}}{\\row{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}}',
						answer: '\\input{$answerDecimal}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\css{\\str{Divide the numerator of the fraction by the denominator.}}{help-answer-text-tight}}}{\\row{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}{\\str{\xA0 means \xA0 $fractionNum }}{\\css{\\str{\xF7}}{bigger}}{\\str{\xA0 $fractionDen}}{\\css{\\str{\xA0 Answer: \xA0 $answerDecimal}}{help-answer-text}}}'
						}
                    }]
                }]
            },
			third: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
                       	problem: '\\rowgrp{\\row{\\str{Express the decimal percent as a fractional percent:}}}{\\row{\\str{$decimalPercent %}}}',
						answer: '\\row{\\mixed{input{$answerWhole}}{\\frac{\\input{$answerNum}}{\\input{$answerDen}}}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\str{Write the decimal place value as the denominator of the fraction.}}}{\\row{\\str{$decimalPercent %}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$helpWhole}}{\\frac{\\fracstr{$helpNum}}{\\fracstr{$helpDen}}}}{\\sign{\xA0 \xA0 = \xA0 \xA0}}{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}}{\\row{css{\\str{Answer: \xA0 \xA0}}{help-answer-text}}{css{\\mixed{\\str{$answerWhole}}{\\frac{\\fracstr{$answerNum}}{\\fracstr{$answerDen}}}}{help-answer-text-tight}}{css{\\str{%}}{help-answer-text-tight}}}'
						}
                    }]
                }]
            },
			fourth: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
                       	problem: '\\rowgrp{\\row{\\str{Express the fractional precent as a decimal percent:}}}{\\row{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}{\\str{%}}}',
						answer: '\\row{\\input{$answerDecimal}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\css{\\str{Divide the numerator of the fraction by the denominator.}}{help-answer-text-tight}}}{\\row{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}{\\str{% \xA0 }}{\\str{\xA0 means \xA0 $fractionNum }}{\\css{\\str{\xF7}}{bigger}}{\\str{\xA0 $fractionDen}}{\\str{ \xA0 percent}}}{\\row{\\css{\\str{\xA0 Answer: \xA0 $answerDecimal %}}{help-answer-text}}}'
						}
                    }]
                }]
            }
        },
        data = [
            { decimal: '4.8', answerWhole: 4, answerNum: 4, answerDen: 5, helpWhole: 4, helpNum: 8, helpDen: 10, template: 'main' },
            { decimal: '1.125', answerWhole: 1, answerNum: 1, answerDen: 8, helpWhole: 1, helpNum: 125, helpDen: 1000, template: 'main' },
            { decimal: '3.2', answerWhole: 3, answerNum: 1, answerDen: 5, helpWhole: 3, helpNum: 2, helpDen: 10, template: 'main' },
            { decimal: '2.5', answerWhole: 2, answerNum: 1, answerDen: 2, helpWhole: 2, helpNum: 5, helpDen: 10, template: 'main' },
            { decimal: '1.75', answerWhole: 1, answerNum: 3, answerDen: 4, helpWhole: 1, helpNum: 75, helpDen: 100, template: 'main' },
           	{ fractionNum: '7', fractionDen: '8', answerDecimal: '0.875', template: 'second' },
           	{ fractionNum: '3', fractionDen: '5', answerDecimal: '0.6', template: 'second' },
            { fractionNum: '1', fractionDen: '10', answerDecimal: '0.1', template: 'second' },
            { fractionNum: '3', fractionDen: '8', answerDecimal: '0.375', template: 'second' },
            { fractionNum: '9', fractionDen: '10', answerDecimal: '0.9', template: 'second' },
			{ decimalPercent: '1.375', answerWhole: 1, answerNum: 3, answerDen: 8, helpWhole: 1, helpNum: 375, helpDen: 1000, template: 'third' },
			{ decimalPercent: '2.6', answerWhole: 2, answerNum: 3, answerDen: 5, helpWhole: 2, helpNum: 6, helpDen: 10, template: 'third' },
			{ decimalPercent: '3.875', answerWhole: 3, answerNum: 7, answerDen: 8, helpWhole: 3, helpNum: 875, helpDen: 1000, template: 'third' },
			{ fractionWhole: '0', fractionNum: '5', fractionDen: '8', answerDecimal: '0.625', template: 'fourth' },
			{ fractionWhole: '0', fractionNum: '1', fractionDen: '2', answerDecimal: '0.50', template: 'fourth' },
        ],
        interpolate = function (obj, data) {
            var string = JSON.stringify(obj);
            for (var symbol in data) {
                if (data.hasOwnProperty(symbol)) {
                    string = string.replace(new RegExp('\\$' + symbol, 'g'), data[symbol]);
                }
            }
            return JSON.parse(string);
        };

    ret.children = data.map(function (problem) {
        return interpolate(template[problem.template], problem);
    });

    return ret;
});

