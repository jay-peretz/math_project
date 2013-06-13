/*global angular */

angular.module('mathSkills').service('data19_2', function () {
    var ret = {
			title: '19.2 Decimal & Fraction Form of Percents',
			path: '19.2-decimal-fraction-form-percents',
            children: []
        },
        template = {
			main: {
                title: 'Decimal & Fraction Form of Percents',
                children: [{
                    title: 'Main Answer',
                    children: [{
						problem: '\\cut{\\rowgrp{\\grp{\\str{Change the fraction to decimal:}}}{\\grp{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}}{fractionDecimalProblem}',
						answer: '\\cut{\\input{$answerDecimal}}{fractionDecimalAnswer}',	
						//problem: '\\rowgrp{\\row{\\str{Change the fraction to decimal:}}}{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}',
						//answer: '\\input{$answerDecimal}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp'
							+'{\\row{\\css{\\str{Divide the numerator of the fraction by the denominator.}}{help-answer-text-tight}}}'
							+'{\\row{\\mixed{\\html{$fractionWhole}}{\\frac{\\fracstr{$fractionNum}}{\\fracstr{$fractionDen}}}}}'
							+'{\\row{\\str{the fraction \xA0}}{\\frac{\\str{$fractionNum}}{\\str{$fractionDen}}}'
							+'{\\str{\xA0 means \xA0 $fractionNum }}{\\css{\\str{\xF7}}{bigger}}{\\str{\xA0 $fractionDen}}}'
							+'{\\row{\\css{\\str{\xA0 Answer: \xA0 $answerDecimal}}{help-answer-text}}}'
						}
						
					}, {
						problem: '\\rowgrp'
						+'{$$fractionDecimalProblem}'
						+'{$$fractionDecimalAnswer}'
						+'{\\row{\\str{Change the decimal to a percentage:}}}' // dont need a row
						+'{\\row{\\str{\xA0}}}'
						+'{\\row{\\str{$answerDecimal}}}',
						answer: '\\grp{\\input{$answerPercent}}{\\str{%}}',
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp{\\row{\\percentarrows{$answerDecimal}{100}{decimal}{percent}}{\\row{\\html{&nbsp;}}}{\\row{\\css{\\str{Answer: $answerPercent %}}{help-answer-text help-text-margin-width}}}'
						}
					}]
                }]
            }
        },
        data = [
            { fractionWhole: '&nbsp;', fractionNum: '9', fractionDen: '10', answerDecimal: '0.9', answerPercent: '90', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '67', fractionDen: '100', answerDecimal: '0.67', answerPercent: '67', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '5', fractionDen: '10', answerDecimal: '0.5', answerPercent: '50', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '29', fractionDen: '50', answerDecimal: '0.58', answerPercent: '58', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '38', fractionDen: '20', answerDecimal: '1.9', answerPercent: '190', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '79', fractionDen: '160', answerDecimal: '0.49375', answerPercent: '49.375', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '71', fractionDen: '160', answerDecimal: '0.44375', answerPercent: '44.375', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '771', fractionDen: '800', answerDecimal: '0.96375', answerPercent: '96.375', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '2', fractionDen: '125', answerDecimal: '0.016', answerPercent: '1.6', template: 'main' },
			{ fractionWhole: '&nbsp;', fractionNum: '189', fractionDen: '200', answerDecimal: '0.945', answerPercent: '94.5', template: 'main' },
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